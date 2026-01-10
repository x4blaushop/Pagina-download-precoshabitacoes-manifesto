document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     SEGURANÇA DE INTEGRIDADE
     ========================= */

  const elementosObrigatorios = [
    "main",
    "section",
    "footer"
  ];

  let integridadeOk = true;

  elementosObrigatorios.forEach(tag => {
    if (!document.querySelector(tag)) {
      integridadeOk = false;
    }
  });

  if (!integridadeOk) {
    console.warn("Integridade estrutural incompleta, mas execução mantida.");
  }

  /* =========================
     SCROLL SUAVE (CONTROLADO)
     ========================= */

  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const scrollAtual = window.scrollY;
    const deslocamento = (scrollAtual - lastScroll) * 0.15;
    lastScroll = scrollAtual;

    document.querySelectorAll(".bloco").forEach(bloco => {
      bloco.style.transform = `translateY(${deslocamento}px)`;
    });
  }, { passive: true });

  /* =========================
     ATIVAÇÃO VISUAL POR VIEWPORT
     ========================= */

  const observer = new IntersectionObserver(
    entradas => {
      entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("ativo");
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".bloco").forEach(el => observer.observe(el));

});
