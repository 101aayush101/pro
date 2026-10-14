(function(){
'use strict';
// Local device profiles. This is not server-side authentication or a paywall.
const KEY='cgl-arena-users-v1',SESSION='cgl-arena-session';
const read=()=>{try{return JSON.parse(localStorage.getItem(KEY))||{}}catch{return {}}};
let users=read(),name=sessionStorage.getItem(SESSION);
if(!name||!users[name]){name=null;sessionStorage.removeItem(SESSION)}
window.CGL_AUTH={isLoggedIn:()=>!!name,getUsername:()=>name,logout:()=>{sessionStorage.removeItem(SESSION);location.reload()}};
if(name){document.body.classList.add('cgl-signed-in');return;}
const el=document.createElement('section');el.id='auth-gate';el.setAttribute('aria-label','Sign in to CGL Arena');
el.innerHTML=`<div class="auth-card"><div class="auth-symbol">✦</div><div class="auth-kicker">YOUR PRACTICE SPACE</div><h1>Welcome to CGL Arena</h1><p class="auth-intro">Create a profile or sign in to save attempts separately for each username on this device.</p><div class="auth-tabs"><button id="auth-login" class="selected" type="button">Sign in</button><button id="auth-create" type="button">Create profile</button></div><form id="auth-form"><label for="auth-user">Username</label><input id="auth-user" required minlength="3" maxlength="24" autocomplete="username" placeholder="e.g. aspirant2026"><label for="auth-pass">Password (minimum 8 characters)</label><div class="auth-pass-row"><input id="auth-pass" required minlength="8" type="password" autocomplete="current-password" placeholder="Enter password"><button id="auth-show" type="button">Show</button></div><p id="auth-error" role="alert"></p><button id="auth-submit" class="auth-primary" type="submit">Sign in →</button></form><p class="auth-privacy">🔒 Passwords are salted and hashed with PBKDF2 inside your browser; they are never uploaded. This is a local convenience lock, not secure server authentication. Clearing browser storage removes profiles and saved progress. There is no password recovery.</p></div>`;
document.body.appendChild(el);
const $=id=>document.getElementById(id);let mode=Object.keys(users).length?'login':'create';
function switchMode(m){mode=m;$('auth-login').classList.toggle('selected',m==='login');$('auth-create').classList.toggle('selected',m==='create');$('auth-submit').textContent=m==='login'?'Sign in →':'Create profile →';$('auth-pass').autocomplete=m==='login'?'current-password':'new-password';$('auth-error').textContent=''}
$('auth-login').onclick=()=>switchMode('login');$('auth-create').onclick=()=>switchMode('create');$('auth-show').onclick=()=>{const e=$('auth-pass');e.type=e.type==='password'?'text':'password';$('auth-show').textContent=e.type==='password'?'Show':'Hide'};
const hex=buffer=>Array.from(new Uint8Array(buffer),b=>b.toString(16).padStart(2,'0')).join('');
const fromHex=s=>new Uint8Array(s.match(/.{2}/g).map(x=>parseInt(x,16)));
async function digest(password,salt){const key=await crypto.subtle.importKey('raw',new TextEncoder().encode(password),'PBKDF2',false,['deriveBits']);return hex(await crypto.subtle.deriveBits({name:'PBKDF2',salt:fromHex(salt),iterations:180000,hash:'SHA-256'},key,256))}
$('auth-form').onsubmit=async ev=>{ev.preventDefault();const button=$('auth-submit');button.disabled=true;$('auth-error').textContent='';try{
 if(!crypto?.subtle)throw Error('Please open this site over HTTPS to create a profile.');
 const user=$('auth-user').value.trim().toLowerCase().replace(/\s+/g,'_'),password=$('auth-pass').value;
 if(!/^[a-z0-9 _-]{3,40}$/.test(user))throw Error('Username: use letters, numbers, spaces, underscores or hyphens.');
 if(password.length<8)throw Error('Use a password of at least 8 characters.');users=read();
 if(mode==='create'){
  if(users[user])throw Error('Username exists on this device. Sign in instead.');
  const salt=hex(crypto.getRandomValues(new Uint8Array(16))),hash=await digest(password,salt);
  users[user]={salt,hash};localStorage.setItem(KEY,JSON.stringify(users));
 }else{const record=users[user];if(!record)throw Error('No profile found for this username on this device. Select Create profile first.');if(await digest(password,record.salt)!==record.hash)throw Error('Incorrect password for this profile.');}
 name=user;sessionStorage.setItem(SESSION,user);document.body.classList.add('cgl-signed-in');el.remove();window.dispatchEvent(new Event('cgl:login'));
 }catch(e){$('auth-error').textContent=e.message||'Unable to sign in';}finally{button.disabled=false;}
};
if(mode==='create')switchMode('create');
})();