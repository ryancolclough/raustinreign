
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

document.querySelectorAll('[data-audio-toggle]').forEach((audioBtn)=>{
  const audio=document.getElementById(audioBtn.getAttribute('aria-controls')||'preview-audio');
  if(!audio) return;
  audioBtn.addEventListener('click',async()=>{
    document.querySelectorAll('audio').forEach((other)=>{
      if(other!==audio) other.pause();
    });
    try{
      if(audio.paused) await audio.play();
      else audio.pause();
    }catch(e){}
  });
});
