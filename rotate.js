(() => {
  'use strict';
  const entries = new Map();
  const host = document.createElement('div');
  host.style.cssText = 'all:initial;position:fixed;inset:0;pointer-events:none;z-index:2147483647;';
  const root = host.attachShadow({mode:'closed'});
  root.innerHTML = `<style>
    button{all:unset;box-sizing:border-box;width:36px;height:36px;display:flex;align-items:center;justify-content:center;border-radius:9px;color:white;background:rgba(25,25,28,.42);opacity:.65;cursor:pointer;pointer-events:auto;backdrop-filter:blur(6px);transition:opacity .15s,background .15s;}
    button:hover,button:focus-visible{opacity:1;background:rgba(25,25,28,.75);outline:2px solid rgba(255,255,255,.8);outline-offset:2px}
    .tools{position:fixed;display:flex;align-items:center;gap:5px;background:#2228;border-radius:9px;padding:4px;pointer-events:auto;color:white;font:12px system-ui} input{width:90px} svg{width:25px;height:25px;pointer-events:none}
  </style>`;
  document.documentElement.append(host);
  function add(video) {
    if(entries.has(video)) return;
    const button=document.createElement('button');
    button.type='button'; button.title='顺时针旋转 90°'; button.setAttribute('aria-label',button.title);
    button.innerHTML='<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="11" width="13" height="13" rx="1.2"/><path d="M7 7a9 9 0 0 1 15 3M22 4v6h-6"/></svg>';
    const panel=document.createElement('div');panel.className='tools';
    const slider=document.createElement('input');slider.type='range';slider.min=10;slider.max=200;slider.value=100;slider.setAttribute('aria-label','视频缩放');
    const output=document.createElement('output');output.textContent='100%';
    slider.oninput=()=>{video.style.scale=slider.value/100;output.textContent=slider.value+'%';};
    const full=document.createElement('button');full.textContent='⛶';full.title='全屏播放';
    full.onclick=async()=>{
      if(document.fullscreenElement){await document.exitFullscreen();return;}
      const marker=document.createComment('video');video.before(marker);
      const stage=document.createElement('div');stage.style.cssText='position:fixed;inset:0;background:black;display:flex;align-items:center;justify-content:center;overflow:hidden';
      const old=video.getAttribute('style');document.documentElement.append(stage);stage.append(video);
      for(const [k,v] of Object.entries({width:'100%',height:'100%',position:'static',objectFit:'contain',maxWidth:'none',maxHeight:'none'}))video.style[k]=v;
      const restore=()=>{if(document.fullscreenElement===stage)return;document.removeEventListener('fullscreenchange',restore);const r=video.style.rotate,z=video.style.scale;marker.replaceWith(video);if(old===null)video.removeAttribute('style');else video.setAttribute('style',old);video.style.rotate=r;video.style.scale=z;stage.remove();};
      document.addEventListener('fullscreenchange',restore);
      try{await stage.requestFullscreen();}catch(e){restore();full.title='页面未允许全屏';}
    };
    panel.append(button,slider,output,full);
    const state={button,panel,angle:0,base:video.style.rotate};
    button.addEventListener('click',event=>{
      event.preventDefault(); event.stopPropagation();
      state.angle=(state.angle+90)%360;
      video.style.rotate=state.angle ? `${state.angle}deg` : state.base;
    });
    root.append(panel); entries.set(video,state);
  }
  function scan(scope) {
    scope.querySelectorAll('video').forEach(add);
    scope.querySelectorAll('*').forEach(el=>{if(el.shadowRoot) scan(el.shadowRoot);});
  }
  let lastScan=0;
  function layout(time) {
    if(time-lastScan>1000){scan(document);lastScan=time;}
    const fullscreen=document.fullscreenElement;
    const parent=fullscreen && fullscreen.tagName!=='VIDEO' ? fullscreen : document.documentElement;
    if(host.parentNode!==parent) parent.append(host);
    for(const [video,state] of entries){
      if(!video.isConnected){state.panel.remove();entries.delete(video);continue;}
      const rect=fullscreen && fullscreen.contains(video)?{width:innerWidth,height:innerHeight,top:0,left:0,right:innerWidth,bottom:innerHeight}:video.getBoundingClientRect();
      const visible=rect.width>=60 && rect.height>=50 && rect.bottom>0 && rect.right>0 && rect.top<innerHeight && rect.left<innerWidth && getComputedStyle(video).visibility!=='hidden';
      state.panel.style.display=visible?'flex':'none';
      state.panel.style.left=`${Math.max(0,Math.min(innerWidth-250,rect.right-254))}px`;
      state.panel.style.top=`${Math.max(0,rect.top+8)}px`;
    }
    requestAnimationFrame(layout);
  }
  scan(document); requestAnimationFrame(layout);
})();
