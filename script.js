/* ==========================================================
   C3X4.0 — BRASIL INDEPENDENTE
   JS ULTRA IMERSIVO · PARALLAX · HOVER 3D · INTERATIVO
   Versão Fiel à Raiz Funcional
   ========================================================== */

/* =========================
   PARTE 1 — ESTRELAS / ESPAÇO SIDERAL
========================= */
const estrelas = document.querySelectorAll('#espaco-sideral .estrela');

function animarEstrelas() {
    estrelas.forEach((estrela, index) => {
        const delay = Math.random() * 2;
        estrela.style.animationDelay = `${delay}s`;
        const scale = 0.6 + Math.random() * 0.6;
        estrela.style.transform = `scale(${scale})`;
        estrela.style.opacity = 0.5 + Math.random() * 0.5;
    });
}
animarEstrelas();

/* =========================
   PARTE 2 — SCROLL / PARALLAX
========================= */
const blocos = document.querySelectorAll('.bloco');
const eixoCentral = document.querySelector('.eixo-central');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    blocos.forEach((bloco, index) => {
        const velocidade = 0.01 * (index + 1);
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
        bloco.style.transform = `rotateY(${x*0.02}deg) rotateX(${-y*0.02}deg) translateZ(0)`;
    });
    bloco.addEventListener('mouseleave', () => {
        bloco.style.transform = `rotateY(0deg) rotateX(0deg) translateZ(0)`;
    });
});

/* =========================
   PARTE 4 — CLICK NOS VALORES COM PIX
========================= */
const valores = document.querySelectorAll('.valor');
valores.forEach(valor => {
    valor.addEventListener('click', () => {
        const pix = valor.dataset.pix;
        navigator.clipboard.writeText(pix).then(() => {
            alert(`PIX copiado: ${pix}`);
        });
    });
});

/* =========================
   PARTE 5 — BOTÕES WHATSAPP
========================= */
const whatsLinks = document.querySelectorAll('a.whatsapp');
whatsLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'scale(1.05)';
        link.style.boxShadow = `0 0 12px var(--verde-nacao), 0 0 24px var(--verde-nacao)`;
    });
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'scale(1)';
        link.style.boxShadow = 'none';
    });
});

/* =========================
   PARTE 6 — DOWNLOAD CÉLULAS
========================= */
const downloadCelula = document.querySelector('.download-celula');
if(downloadCelula) {
    downloadCelula.addEventListener('mouseenter', () => {
        downloadCelula.style.background = 'rgba(140,120,255,0.1)';
        downloadCelula.style.boxShadow = '0 0 12px #8c78ff, 0 0 24px #8c78ff';
    });
    downloadCelula.addEventListener('mouseleave', () => {
        downloadCelula.style.background = 'rgba(140,120,255,0)';
        downloadCelula.style.boxShadow = 'none';
    });
}

/* =========================
   PARTE 7 — INICIALIZAÇÃO
========================= */
function initC3X4() {
    animarEstrelas();
}
window.addEventListener('load', initC3X4);

/* =========================
   PARTE 8 — ANIMAÇÃO SUAVE DO SCROLL
========================= */
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const st = window.scrollY;
    const delta = (st - lastScrollTop) * 0.1;
    eixoCentral.style.transform = `translateY(${delta}px)`;
    lastScrollTop = st;
});
