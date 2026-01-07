(function (Soberano) {
  'use strict';

  const DNA_CONFIG = {
    sistema: 'C3X4.0_BRASIL_INDEPENDENTE',
    versao: '4.0.27',
    arquiteto: 'José Patrick Castro Soares',
    camadas: ['Visível', 'Estrutural', 'Soberana'],
    logs: false,
    dominiosPermitidos: [
      window.location.hostname,
      'fonts.googleapis.com',
      'fonts.gstatic.com'
    ]
  };

  class NucleoC3X4 {
    constructor() {
      this.inicializarIdentidade();
      this.protegerEstrutura();
      this.organizarValores();
      this.iniciarObservadores();
    }

    inicializarIdentidade() {
      document.documentElement.setAttribute('data-sistema', DNA_CONFIG.sistema);
      document.documentElement.setAttribute('data-arquiteto', DNA_CONFIG.arquiteto);
      if(!DNA_CONFIG.logs) this.silenciarConsole();
    }

    silenciarConsole() {
      try { ['log','info','warn','error','debug'].forEach(m=>console[m]=()=>{}); } catch(_){}
    }

    protegerEstrutura() {
      const observer = new MutationObserver(mutations=>{
        mutations.forEach(mutation=>{
          mutation.addedNodes.forEach(node=>{
            if(node.tagName==='SCRIPT' && node.src && !this.scriptPermitido(node.src)){
              node.remove(); this.registrarEvento('SCRIPT EXTERNO BLOQUEADO');
            }
          });
        });
      });
      observer.observe(document.documentElement,{childList:true,subtree:true});
    }

    scriptPermitido(src){ return DNA_CONFIG.dominiosPermitidos.some(dom=>src.includes(dom)); }

    registrarEvento(evento){
      const historico=JSON.parse(localStorage.getItem('C3X4_AUDITORIA')||'[]');
      historico.push({evento,data:new Date().toISOString()});
      localStorage.setItem('C3X4_AUDITORIA',JSON.stringify(historico.slice(-12)));
    }

    organizarValores(){
      document.querySelectorAll('[data-valor]').forEach(el=>{
        const valor=el.getAttribute('data-valor');
        el.setAttribute('aria-label',`Escala de valor ${valor}`);
      });
    }

    iniciarObservadores(){
      this.revelarBlocos();
      this.protegerInteracaoBasica();
    }

    revelarBlocos(){
      const blocos=document.querySelectorAll('.bloco,.estado,.valor');
      const observer=new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
          if(entry.isIntersecting) entry.target.classList.add('ativo');
        });
      },{threshold:0.15});
      blocos.forEach(bloco=>observer.observe(bloco));
    }

    protegerInteracaoBasica(){
      document.addEventListener('contextmenu',e=>e.preventDefault());
      document.addEventListener('keydown',e=>{
        if(e.ctrlKey && ['u','s','i'].includes(e.key.toLowerCase())) e.preventDefault();
      });
    }
  }

  const InterfaceHumana = {
    destacarEstado(){
      document.querySelectorAll('.estado').forEach(estado=>{
        estado.addEventListener('mouseenter',()=>estado.classList.add('hover'));
        estado.addEventListener('mouseleave',()=>estado.classList.remove('hover'));
      });
    }
  };

  window.addEventListener('load',()=>{
    new NucleoC3X4();
    InterfaceHumana.destacarEstado();
    document.body.classList.add('c3x4-estabilizado');
  });

})(window.JosePatrickCastroSoares||{});
