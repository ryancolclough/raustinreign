
const header=document.querySelector('.site-header');
function updateHeader(){
  if(!header) return;
  if(window.scrollY>40){header.classList.add('scrolled')}
  else{header.classList.remove('scrolled')}
}
window.addEventListener('scroll',updateHeader);
updateHeader();

const toggle=document.querySelector('.nav-toggle');
if(toggle&&header){toggle.addEventListener('click',()=>header.classList.toggle('open'))}

const audioBtn=document.querySelector('[data-audio-toggle]');
const audio=document.querySelector('#preview-audio');
if(audioBtn&&audio){
  audioBtn.addEventListener('click',async()=>{
    try{
      if(audio.paused){await audio.play();audioBtn.textContent='Pause Preview'}
      else{audio.pause();audioBtn.textContent='Play Preview'}
    }catch(e){audioBtn.textContent='Add MP3 File'}
  })
}
