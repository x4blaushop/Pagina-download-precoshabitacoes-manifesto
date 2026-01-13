/* ===============================
   C3X4.0_JS — EXPANSÃO (APPEND)
   Não remove nada
   Não reduz nada
   Só cresce
================================ */

/* ATIVAÇÃO GERAL APÓS HTML PRONTO */
document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     EFEITO DE REALCE EM TÍTULOS
     =============================== */
  const titulos = document.querySelectorAll("h1, h2, h3");

  titulos.forEach(titulo => {
    titulo.addEventListener("mouseenter", () => {
      titulo.style.textShadow = "0 0 8px #00ff66, 0 0 16px #00ff66";
      titulo.style.transition = "text-shadow 0.3s ease";
    });

    titulo.addEventListener("mouseleave", () => {
      titulo.style.textShadow = "none";
    });
  });

  /* ===============================
     EXPANSÃO DE ESTADOS (CLICK)
     =============================== */
  const estados = document.querySelectorAll(".estado");

  estados.forEach(estado => {
    estado.dataset.aberto = "false";

    estado.addEventListener("click", () => {
      if (estado.dataset.aberto === "false") {
        estado.style.maxHeight = "1000px";
        estado.style.opacity = "1";
        estado.style.transition = "all 0.4s ease";
        estado.dataset.aberto = "true";
      } else {
        estado.style.maxHeight = "";
        estado.style.opacity = "";
        estado.dataset.aberto = "false";
      }
    });
  });

  /* ===============================
     MICRO PULSAÇÃO NAS ESTRELAS
     =============================== */
  const estrelas = document.querySelectorAll(".estrela");

  estrelas.forEach((estrela, i) => {
    estrela.animate(
      [
        { opacity: 0.2 },
        { opacity: 1 },
        { opacity: 0.2 }
      ],
      {
        duration: 3000 + (i * 120),
        iterations: Infinity
      }
    );
  });

  /* ===============================
     CTA — FEEDBACK DE AÇÃO
     =============================== */
  const botoes = document.querySelectorAll("button");

  botoes.forEach(btn => {
    btn.addEventListener("mousedown", () => {
      btn.style.transform = "scale(0.95)";
    });
    btn.addEventListener("mouseup", () => {
      btn.style.transform = "scale(1)";
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "scale(1)";
    });
  });

});
