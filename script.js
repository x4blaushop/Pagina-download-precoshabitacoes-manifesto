/* ==========================================================
   C3X4.0 — BRASIL INDEPENDENTE
   JS ULTRA IMERSIVO · PROFUNDIDADE · PARALLAX · HOVER 3D
   Versão completa e funcional
   ========================================================== */

/* =========================
   PARTE 1 — INICIALIZAÇÃO
========================= */
document.addEventListener("DOMContentLoaded", () => {

  const blocos = document.querySelectorAll(".bloco");
  const valores = document.querySelectorAll(".valor");
  const estrelas = document.querySelectorAll("#espaco-sideral .estrela");
  const hero = document.querySelector(".hero");

  /* =========================
     PARTE 2 — PARALLAX HERO
  ========================= */
  document.addEventListener("mousemove", e => {
    const x = (window.innerWidth / 2 - e.clientX) / 50;
    const y = (window.innerHeight / 2 - e.clientY) / 50;
    if(hero) hero.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  });

  /* =========================
     PARTE 3 — SCROLL ANIMADO
  ========================= */
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    blocos.forEach((bloco, index) => {
      const offset = bloco.offsetTop - window.innerHeight / 1.2;
      if(scrollY > offset) {
        bloco.style.transform = "translateY(0) scale(1)";
        bloco.style.opacity = "1";
      } else {
        bloco.style.transform = "translateY(30px) scale(0.98)";
        bloco.style.opacity = "0";
      }
    });

    /* Parallax leve nas estrelas */
    estrelas.forEach((estrela, i) => {
      const velocidade = (i + 1) / 30;
      estrela.style.transform = `translateY(${scrollY * velocidade}px)`;
    });
  });

  /* =========================
     PARTE 4 — HOVER 3D NOS BLOCOS
  ========================= */
  blocos.forEach(bloco => {
    bloco.addEventListener("mousemove", e => {
      const rect = bloco.getBoundingClientRect();
      const x = ((e.clientX - rect.left) - rect.width/2) / 20;
      const y = ((e.clientY - rect.top) - rect.height/2) / 20;
      bloco.style.transform = `rotateX(${ -y }deg) rotateY(${ x }deg) scale(1.02)`;
    });
    bloco.addEventListener("mouseleave", () => {
      bloco.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    });
  });

  /* =========================
     PARTE 5 — VALORES COPIÁVEIS
  ========================= */
  valores.forEach(valor => {
    valor.style.cursor = "pointer";
    valor.addEventListener("click", () => {
      const pix = valor.dataset.pix;
      navigator.clipboard.writeText(pix).then(() => {
        valor.textContent += " ✅ Copiado!";
        setTimeout(() => {
          valor.textContent = valor.textContent.replace(" ✅ Copiado!", "");
        }, 1500);
      });
    });
  });

  /* =========================
     PARTE 6 — ANIMAÇÃO DE FLUTUAÇÃO
  ========================= */
  const flutuar = () => {
    blocos.forEach(bloco => {
      const deslocamento = Math.sin(Date.now() / 1000) * 4;
      bloco.style.transform += ` translateY(${deslocamento}px)`;
    });
    requestAnimationFrame(flutuar);
  };
  flutuar();

  /* =========================
     PARTE 7 — DOWNLOAD DE CÉLULAS
  ========================= */
  const downloads = document.querySelectorAll(".download-celula");
  downloads.forEach(link => {
    link.addEventListener("mouseenter", () => {
      link.style.transform = "scale(1.05)";
      link.style.boxShadow = "0 10px 30px rgba(255, 215, 0, 0.7)";
    });
    link.addEventListener("mouseleave", () => {
      link.style.transform = "scale(1)";
      link.style.boxShadow = "0 5px 15px rgba(255, 215, 0, 0.4)";
    });
  });

  /* =========================
     PARTE 8 — OTIMIZAÇÃO
  ========================= */
  window.dispatchEvent(new Event('scroll')); // ativa animação inicial
});
