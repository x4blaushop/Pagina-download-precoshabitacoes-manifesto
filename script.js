/* =========================================================
   EXTENSÃO SOBERANA — BRASIL_INDEPENDENTE
   Função: Completar estados · Mobile-first
   DNA: c3x4.0_mae
   OBS: BLOCO ADITIVO — NÃO REMOVE NADA EXISTENTE
========================================================= */

(function () {
    "use strict";

    /* =====================================================
       MAPA OFICIAL DOS 27 ESTADOS + DF
    ===================================================== */

    const ESTADOS_BRASIL = [
        "ac","al","ap","am","ba","ce","df","es","go",
        "ma","mt","ms","mg","pa","pb","pr","pe","pi",
        "rj","rn","rs","ro","rr","sc","sp","se","to"
    ];

    /* =====================================================
       REGISTRO GARANTIDO DE TODOS OS ESTADOS
       (Mesmo que o HTML esteja incompleto)
    ===================================================== */

    function garantirEstados() {
        ESTADOS_BRASIL.forEach(sigla => {
            const el = document.getElementById(sigla);

            if (!el) return;

            el.dataset.estado = sigla;
            el.dataset.celula = "ativa";
            el.dataset.dna = "c3x4.0_mae";
        });
    }

    /* =====================================================
       MOBILE: CORREÇÃO DE VIEWPORT E ATIVAÇÃO
    ===================================================== */

    function ajusteMobileEstados() {
        if (window.innerWidth > 768) return;

        document.querySelectorAll(".estado").forEach(el => {
            el.style.minHeight = "auto";
            el.style.scrollMarginTop = "15vh";
        });
    }

    /* =====================================================
       INTEGRAÇÃO COM O SISTEMA EXISTENTE
       (SEM TOCAR NO QUE JÁ FUNCIONA)
    ===================================================== */

    function integrarBrasilIndependente() {
        garantirEstados();
        ajusteMobileEstados();
    }

    /* =====================================================
       DISPARO SILENCIOSO
    ===================================================== */

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", integrarBrasilIndependente);
    } else {
        integrarBrasilIndependente();
    }

})();
