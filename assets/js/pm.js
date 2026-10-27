(()=>{const d=document,h=d.documentElement,b=d.body;h.classList.add('js');
const hd=d.querySelector('.pm-header'),up=d.querySelector('.pm-top'),rm=matchMedia('(prefers-reduced-motion:reduce)').matches;let ly=0;
function onS(){const y=scrollY,o=b.classList.contains('menu-open');hd.classList.toggle('is-solid',y>40);hd.classList.toggle('is-hidden',y>420&&y>ly&&!o);ly=y;up&&up.classList.toggle('is-on',y>700)}
addEventListener('scroll',onS,{passive:true});onS();
const bg=d.querySelector('.pm-burger');
function menu(s){b.classList.toggle('menu-open',s);bg.setAttribute('aria-expanded',s)}
bg&&bg.addEventListener('click',()=>menu(!b.classList.contains('menu-open')));
d.addEventListener('keydown',e=>{if(e.key==='Escape')menu(false)});
d.querySelectorAll('.pm-nav a').forEach(a=>a.addEventListener('click',()=>menu(false)));
up&&up.addEventListener('click',()=>scrollTo({top:0,behavior:rm?'auto':'smooth'}));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-in');io.unobserve(e.target)}}),{threshold:.15});
d.querySelectorAll('.pm-r,.pm-rule').forEach(el=>io.observe(el));
const co=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;co.unobserve(e.target);const el=e.target,t=+el.dataset.n,f=v=>Math.round(v).toLocaleString('en-US');
 if(rm){el.textContent=f(t);return}const s=performance.now();(function k(n){const p=Math.min((n-s)/1600,1);el.textContent=f(t*(1-Math.pow(1-p,3)));p<1&&requestAnimationFrame(k)})(s)}),{threshold:.6});
d.querySelectorAll('[data-n]').forEach(el=>co.observe(el));
const cv=d.getElementById('pm-fx');
if(cv&&!rm){const c=cv.getContext('2d'),hero=cv.parentNode;let w,H,P=[],m={x:-999,y:-999},on=false;
 function size(){const r=hero.getBoundingClientRect(),dp=Math.min(devicePixelRatio||1,2);w=r.width;H=r.height;cv.width=w*dp;cv.height=H*dp;c.setTransform(dp,0,0,dp,0,0);
  const n=w<700?38:Math.min(95,Math.round(w/16));P=Array.from({length:n},()=>({x:Math.random()*w,y:Math.random()*H,vx:(Math.random()-.5)*.32,vy:(Math.random()-.5)*.32,r:Math.random()*1.6+.8,red:Math.random()<.07}))}
 function frame(){if(!on)return;c.clearRect(0,0,w,H);
  for(let i=0;i<P.length;i++){const p=P[i];p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>w)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;
   const dx=p.x-m.x,dy=p.y-m.y,dd=dx*dx+dy*dy;if(dd<14000){const f=.7/Math.sqrt(dd||1);p.x+=dx*f;p.y+=dy*f}
   for(let j=i+1;j<P.length;j++){const q=P[j],ax=p.x-q.x,ay=p.y-q.y,ad=ax*ax+ay*ay;if(ad<14400){c.strokeStyle='rgba(140,148,155,'+(.3*(1-ad/14400))+')';c.lineWidth=1;c.beginPath();c.moveTo(p.x,p.y);c.lineTo(q.x,q.y);c.stroke()}}
   c.fillStyle=p.red?'#C8102E':'rgba(217,221,224,.7)';c.beginPath();c.arc(p.x,p.y,p.r,0,6.283);c.fill()}
  requestAnimationFrame(frame)}
 size();addEventListener('resize',size);
 hero.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect();m.x=e.clientX-r.left;m.y=e.clientY-r.top});hero.addEventListener('pointerleave',()=>{m.x=m.y=-999});
 new IntersectionObserver(es=>{on=es[0].isIntersecting;on&&frame()}).observe(hero)}
})();
