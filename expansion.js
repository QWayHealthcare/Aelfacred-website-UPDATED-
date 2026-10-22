// Enhancements for new content only; existing website interactions are untouched.
(() => {
  'use strict';
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const tabs=[...document.querySelectorAll('.exp-tabs [role="tab"]')];
  if(tabs.length){
    const controls=document.querySelector('.exp-tabs');controls.hidden=false;
    const activate=index=>tabs.forEach((tab,i)=>{
      const active=i===index;tab.setAttribute('aria-selected',String(active));tab.tabIndex=active?0:-1;
      const panel=document.getElementById(tab.getAttribute('aria-controls'));
      panel.setAttribute('role','tabpanel');panel.setAttribute('aria-labelledby',tab.id);panel.tabIndex=0;panel.hidden=!active;
      if(active&&!reduced.matches&&panel.animate)panel.animate([{opacity:.5,transform:'translateY(7px)'},{opacity:1,transform:'none'}],{duration:250,easing:'ease-out'});
    });
    activate(0);
    tabs.forEach((tab,index)=>{
      tab.addEventListener('click',()=>activate(index));
      tab.addEventListener('keydown',event=>{
        const next=event.key==='ArrowRight'?(index+1)%tabs.length:event.key==='ArrowLeft'?(index+tabs.length-1)%tabs.length:event.key==='Home'?0:event.key==='End'?tabs.length-1:null;
        if(next===null)return;event.preventDefault();activate(next);tabs[next].focus();
      });
    });
  }
  const choices=[...document.querySelectorAll('.exp-priority input')];
  if(choices.length){
    const status=document.querySelector('.exp-selection-status'),link=document.querySelector('.exp-priorities-link');
    const update=()=>{
      const selected=choices.filter(input=>input.checked).map(input=>input.closest('label').querySelector('strong').textContent);
      status.textContent=selected.length?`${selected.length} discussion ${selected.length===1?'priority':'priorities'} selected.`:'Select the topics that matter to your team.';
      link.href=selected.length?'/contact/?priorities='+encodeURIComponent(JSON.stringify(selected)):'/contact/';
    };
    choices.forEach(input=>input.addEventListener('change',update));update();
  }
  const message=document.querySelector('#demo-form textarea[name="message"]');
  if(message&&!message.value){
    const allowed=['Provider information','Application follow-up','Renewals and monitoring','Enrollment-to-billing handoff','Security and data exchange','Implementation and support'];
    const raw=new URLSearchParams(location.search).get('priorities');
    if(raw&&raw.length<1000){
      try{const parsed=JSON.parse(raw);if(Array.isArray(parsed)){const topics=[...new Set(parsed.filter(topic=>typeof topic==='string'&&allowed.includes(topic)))].slice(0,6);if(topics.length)message.value='I would like to discuss these credentialing priorities:\n\n'+topics.map(topic=>'• '+topic).join('\n');}}catch{/* Invalid query input leaves the original form untouched. */}
    }
  }
})();
