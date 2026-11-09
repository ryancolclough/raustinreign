
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
  const audio=document.getElementById(audioBtn.getAttribute('aria-controls'));
  const label=audioBtn.getAttribute('data-audio-label')||audioBtn.textContent.trim();
  if(!audio) return;
  const setIdle=()=>{
    audioBtn.textContent=label;
    audioBtn.setAttribute('aria-pressed','false');
  };
  audioBtn.addEventListener('click',async()=>{
    document.querySelectorAll('audio').forEach((other)=>{
      if(other===audio||other.paused) return;
      other.pause();
      const otherBtn=document.querySelector('[aria-controls="'+other.id+'"]');
      if(otherBtn){
        otherBtn.textContent=otherBtn.getAttribute('data-audio-label');
        otherBtn.setAttribute('aria-pressed','false');
      }
    });
    try{
      if(audio.paused){
        await audio.play();
        audioBtn.textContent='Pause';
        audioBtn.setAttribute('aria-pressed','true');
      }else{
        audio.pause();
        setIdle();
      }
    }catch(e){
      setIdle();
    }
  });
  audio.addEventListener('ended',setIdle);
});
