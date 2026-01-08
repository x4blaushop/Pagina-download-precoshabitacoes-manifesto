/* ==========================================================
   C3X4.0 — BRASIL INDEPENDENTE
   JS ULTRA IMERSIVO · PROFUNDIDADE · PARALLAX · HOVER 3D
   Versão modernizada, categorizada e animada
   ========================================================== */

/* =========================
   PARTE 1 — CONFIGURAÇÃO GLOBAL
========================= */
const starsCount = 28;
const espacoSideral = document.getElementById('espaco-sideral');
const blocos = document.querySelectorAll('.bloco');
const valores = document.querySelectorAll('.valor');

/* =========================
   PARTE 2 — CRIAÇÃO DINÂMICA DE ESTRELAS
========================= */
function criarEstrelas() {
  for(let i = 0; i < starsCount; i++) {
    const star = document.createElement('div');
    star.classList.add('estrela');
    star.style.top = `${Math.random()*100}%`;
    star.style.left = `${Math.random()*100}%`;
    star.style.width = `${2 + Math.random()*4}px`;
    star.style.height = star.style.width;
    espacoSideral.appendChild(star);
  }
}
criarEstrelas();

/* =========================
   PARTE 3 — PARALLAX HOVER 3D
========================= */
blocos.forEach(bloco => {
  bloco.addEventListener('mousemove', e => {
    const rect = bloco.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width/2;
    const cy = rect.height/2;
    const dx = (x - cx) / cx;
    const dy = (y - cy) / cy;
    bloco.style.transform = `rotateY(${dx*6}deg) rotateX(${-dy*6}deg) translateZ(0)`;
  });
  bloco.addEventListener('mouseleave', () => {
    bloco.style.transform = `rotateY(0deg) rotateX(0deg) translateZ(0)`;
  });
});

/* =========================
   PARTE 4 — SCROLL ANIMATION
========================= */
function checkScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  blocos.forEach(bloco => {
    const blocoTop = bloco.getBoundingClientRect().top;
    if(blocoTop < triggerBottom){
      bloco.style.opacity = '1';
      bloco.style.transform += ' translateY(0px)';
    } else {
      bloco.style.opacity = '0';
      bloco.style.transform += ' translateY(20px)';
    }
  });
}
window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);

/* =========================
   PARTE 5 — VALORES CLICK (COPIAR PIX)
========================= */
valores.forEach(v => {
  v.addEventListener('click', () => {
    const pix = v.dataset.pix;
    navigator.clipboard.writeText(pix)
      .then(() => alert(`PIX copiado: ${pix}`))
      .catch(() => alert('Erro ao copiar o PIX'));
  });
});

/* =========================
   PARTE 6 — BOTÕES WHATSAPP
========================= */
const btnsWhatsapp = document.querySelectorAll('.btn-whatsapp');
btnsWhatsapp.forEach(btn => {
  btn.addEventListener('mouseenter', () => btn.style.transform = 'scale(1.08)');
  btn.addEventListener('mouseleave', () => btn.style.transform = 'scale(1)');
});

/* =========================
   PARTE 7 — DOWNLOAD CÉLULAS
========================= */
const downloadCelula = document.querySelector('.download-celula');
if(downloadCelula){
  downloadCelula.addEventListener('mouseenter', () => downloadCelula.style.transform = 'scale(1.05)');
  downloadCelula.addEventListener('mouseleave', () => downloadCelula.style.transform = 'scale(1)');
}

/* =========================
   PARTE 8 — LOOP DE ANIMAÇÃO LEVE (PARALLAX ESTRELAS)
========================= */
function animateStars(){
  const estrelas = document.querySelectorAll('.estrela');
  estrelas.forEach((s, i) => {
    const offset = Math.sin(Date.now()/2000 + i)*2;
    s.style.transform = `translateY(${offset}px)`;
  });
  requestAnimationFrame(animateStars);
}
animateStars();
