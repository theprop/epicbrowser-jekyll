/* Epic site scripts: downloads config, OS detection, small interactions. No dependencies. */
(function(){
  // ---- Download links: the only place to update on a new release ----
  var EPIC_VERSION = '150.0.7871.24';
  var DOWNLOADS = {
    windows:  { label:'Windows', primary:{name:'Installer (.exe)', url:'https://cdn.epicbrowser.com/winsetup/EpicSetup.exe'},
                alternates:[{name:'Installer (.zip)', url:'https://cdn.epicbrowser.com/winsetup/EpicSetup.zip'},{name:"Direct (offline, won't update)", url:'https://cdn.epicbrowser.com/win138/mini_installer.exe'}] },
    macArm:   { label:'Mac, Apple silicon (M1, M2, M3…)', primary:{name:'Apple silicon (.dmg)', url:'https://cdn.epicbrowser.com/v150/Epic_150.0.7871.24_arm.dmg'}, alternates:[{name:'Apple silicon (.zip)', url:'https://cdn.epicbrowser.com/v150/Epic_arm.zip'}] },
    macIntel: { label:'Mac, Intel (older Macs)', primary:{name:'Intel (.dmg)', url:'https://cdn.epicbrowser.com/v150/Epic_150.0.7871.24_intel.dmg'}, alternates:[{name:'Intel (.zip)', url:'https://cdn.epicbrowser.com/v150/Epic_intel.zip'}] },
    ios:      { label:'iPhone and iPad', primary:{name:'App Store', url:'https://apps.apple.com/us/app/epic-privacy-browser-w-vpn/id1502032811?mt=8'}, alternates:[] },
    android:  { label:'Android', primary:{name:'Google Play', url:'https://play.google.com/store/apps/details?id=com.epic.browser'}, alternates:[] }
  };
  window.EPIC = { version: EPIC_VERSION, downloads: DOWNLOADS };

  function gpu(){ try{ var c=document.createElement('canvas'); var gl=c.getContext('webgl')||c.getContext('experimental-webgl'); if(!gl) return ''; var e=gl.getExtension('WEBGL_debug_renderer_info'); return String(e?gl.getParameter(e.UNMASKED_RENDERER_WEBGL):gl.getParameter(gl.RENDERER)); }catch(x){ return ''; } }
  function appleGpu(s){ return /Apple (M\d|GPU)/i.test(s); }
  // Resolves to: windows | macArm | macIntel | mac | ios | android | unknown
  function detect(){
    var ua=navigator.userAgent||'', plat=(navigator.userAgentData&&navigator.userAgentData.platform)||navigator.platform||'', touch=navigator.maxTouchPoints||0;
    if(/iPhone|iPod|iPad/.test(ua)) return Promise.resolve('ios');
    if(/Android/.test(ua)) return Promise.resolve('android');
    if(/Win/.test(plat)||/Windows/.test(ua)) return Promise.resolve('windows');
    if(!(/Mac/.test(plat)||/Macintosh/.test(ua))) return Promise.resolve('unknown');
    if(touch>1) return Promise.resolve('ios'); // iPadOS reports itself as a Mac
    var g=gpu();
    var byGpu = appleGpu(g) ? 'macArm' : (/Intel|AMD|Radeon|NVIDIA|GeForce/i.test(g) ? 'macIntel' : 'mac');
    if(navigator.userAgentData&&navigator.userAgentData.getHighEntropyValues){
      return navigator.userAgentData.getHighEntropyValues(['architecture']).then(function(h){
        if(h.architecture==='arm') return 'macArm';
        if(h.architecture==='x86' && !appleGpu(g)) return 'macIntel'; // x86 under Rosetta still means Apple silicon
        return byGpu;
      }).catch(function(){ return byGpu; });
    }
    return Promise.resolve(byGpu);
  }
  window.EPIC.detect = detect;

  // ---- Thank-you page ----
  var ty=document.querySelector('[data-thankyou]');
  if(ty){
    var labels={windows:'Windows',macArm:'Mac with Apple silicon',macIntel:'Mac with Intel processor',mac:'Mac',ios:'iPhone or iPad',android:'Android',unknown:'Your device'};
    detect().then(function(p){
      var d=DOWNLOADS, mobile=(p==='ios'||p==='android');
      document.getElementById('ty-detected').textContent=labels[p];
      var line = mobile ? 'Epic for mobile is in your app store. Tap below to install.'
        : p==='mac' ? 'We couldn\u2019t tell which Mac you have. Pick your processor below; check \u201cAbout This Mac\u201d if unsure.'
        : p==='unknown' ? 'Choose your system below to download Epic.'
        : 'Your download should begin momentarily. If it doesn\u2019t, use the button.';
      document.getElementById('ty-line').textContent=line;
      var links = p==='mac' ? [{name:'Apple silicon (.dmg)',url:d.macArm.primary.url},{name:'Intel (.dmg)',url:d.macIntel.primary.url}]
        : d[p] ? [{name:(mobile?'Open ':'Download ')+d[p].primary.name,url:d[p].primary.url}]
        : [{name:'Download for Windows',url:d.windows.primary.url},{name:'Download for Mac',url:d.macArm.primary.url}];
      var box=document.getElementById('ty-links'); box.innerHTML='';
      links.forEach(function(l){ var a=document.createElement('a'); a.className='btn'; a.href=l.url; a.textContent=l.name+' \u2192'; box.appendChild(a); });
      document.getElementById('ty-help').textContent = mobile ? '' : 'Download didn\u2019t start? Click the button, or pick another version below.';
      document.querySelectorAll('[data-platform]').forEach(function(el){ var k=el.getAttribute('data-platform'); var hit = k===p || (p==='mac'&&(k==='macArm'||k==='macIntel')); el.classList.toggle('hit',hit); });
      var url = d[p] && p!=='mac' ? d[p].primary.url : null;
      if(url && ty.getAttribute('data-autodownload')!=='false'){ setTimeout(function(){ window.location.assign(url); }, 800); }
    });
    document.querySelectorAll('[data-version]').forEach(function(el){ el.textContent=EPIC_VERSION; });
  }

  // ---- Press logo carousel (home) ----
  var car=document.querySelector('[data-carousel]');
  if(car){
    var pages=Array.prototype.slice.call(car.querySelectorAll('[data-page]')), dots=Array.prototype.slice.call(car.querySelectorAll('.dots button')), i=0, t;
    function show(n){ i=(n+pages.length)%pages.length; pages.forEach(function(p,k){ p.hidden=k!==i; }); dots.forEach(function(d,k){ d.classList.toggle('on',k===i); }); }
    function start(){ clearInterval(t); t=setInterval(function(){ show(i+1); },4000); }
    dots.forEach(function(d,k){ d.addEventListener('click',function(){ show(k); start(); }); });
    show(0); start();
  }

  // ---- Copy buttons ----
  document.querySelectorAll('[data-copy]').forEach(function(b){ b.addEventListener('click',function(){ var t=b.textContent; navigator.clipboard.writeText(b.getAttribute('data-copy')).then(function(){ b.textContent='Copied'; setTimeout(function(){ b.textContent=t; },1500); }); }); });

  // ---- Donate tiers ----
  var tiers=document.querySelector('[data-tiers]');
  if(tiers){
    var btns=Array.prototype.slice.call(tiers.querySelectorAll('button')), sub=document.getElementById('subscribe'), lbl=document.getElementById('sub-amount');
    var base='https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SE6RKZQGZJAH6&on0='+encodeURIComponent('Thank You - Monthly Support Options')+'&currency_code=USD&os0=';
    function pick(b){ btns.forEach(function(x){ x.classList.toggle('on',x===b); }); sub.href=base+encodeURIComponent(b.getAttribute('data-os0')); lbl.textContent=b.getAttribute('data-price'); }
    btns.forEach(function(b){ b.addEventListener('click',function(){ pick(b); }); });
    pick(btns[1]);
  }
})();
