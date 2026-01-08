/* ==========================================================
   C3X4.0 — BRASIL INDEPENDENTE
   JS ULTRA IMERSIVO · PARALLAX · HOVER 3D · INTERATIVO
   Versão fiel à raiz funcional
   ========================================================== */

/* =========================
   PARTE 1 — ESTRELAS / ESPAÇO SIDERAL
========================= */
const estrelas = document.querySelectorAll('#espaco-sideral .estrela');
function animarEstrelas() {
    estrelas.forEach(estrela => {
        const delay = Math.random()*2;
        estrela.style.animationDelay = `${delay}s`;
        const scale = 0.6 + Math.random()*0.6;
        estrela.style.transform = `scale(${scale})`;
        estrela.style.opacity = 0.5 + Math.random()*0.5;
    });
}
animarEstrelas();

/* =========================
   PARTE 2 — SCROLL / PARALLAX LEVE
========================= */
const blocos = document.querySelectorAll('.bloco');
const eixoCentral = document.querySelector('.eixo-central');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    blocos.forEach((bloco, index) => {
        const velocidade = 0.005 * (index + 1); // reduzido para scroll suave
        bloco.style.transform = `translateY(${scrollY * velocidade}px)`;
    });
});

/* =========================
   PARTE 3 — HOVER 3D NOS BLOCOS
========================= */
blocos.forEach(bloco => {
    bloco.addEventListener('mousemove', e => {
        const rect = bloco.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width/2;
        const y = e.clientY - rect.top - rect.height/2;
        bloco.style.transform = `rotateY(${x*0.01}deg) rotateX(${-y*0.01}deg)`; // leve
    });
    bloco.addEventListener('mouseleave', () => {
        bloco.style.transform = `rotateY(0deg) rotateX(0deg)`;
    });
});

/* =========================
   PARTE 4 — CLICK NOS VALORES COM PIX
========================= */
const valores = document.querySelectorAll
