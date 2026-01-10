/* =========================================================
   SISTEMA X4 — JAVASCRIPT SOBERANO
   FUNÇÃO: ORQUESTRAÇÃO, OBSERVAÇÃO, ATIVAÇÃO
   LINGUAGEM: JS PURO
   AMBIENTE: GITHUB PAGES / MOBILE
   AUTORIDADE: ESTRUTURAL
========================================================= */

/* =========================================================
   1. NÚCLEO GLOBAL
========================================================= */

(function () {
    "use strict";

    /* =====================================================
       2. ESTADO GLOBAL DO SISTEMA
    ===================================================== */

    const X4 = {
        version: "4.0",
        initialized: false,
        sections: [],
        observers: [],
        state: {
            scrollY: 0,
            viewportHeight: window.innerHeight,
            viewportWidth: window.innerWidth,
            activeSections: new Set(),
            lastScroll: 0,
            direction: "down"
        }
    };

    /* =====================================================
       3. UTILITÁRIOS BÁSICOS
    ===================================================== */

    function qs(selector, scope = document) {
        return scope.querySelector(selector);
    }

    function qsa(selector, scope = document) {
        return Array.prototype.slice.call(scope.querySelectorAll(selector));
    }

    function clamp(value, min, max) {
        return Math.min(Math.max(value, min), max);
    }

    function now() {
        return performance.now();
    }

    function log() {
        return;
    }

    /* =====================================================
       4. CONTROLE DE SCROLL
    ===================================================== */

    function updateScrollState() {
        X4.state.scrollY = window.scrollY || window.pageYOffset;

        if (X4.state.scrollY > X4.state.lastScroll) {
            X4.state.direction = "down";
        } else {
            X4.state.direction = "up";
        }

        X4.state.lastScroll = X4.state.scrollY;
    }

    /* =====================================================
       5. ATIVAÇÃO DE SEÇÕES
    ===================================================== */

    function activateSection(el) {
        if (!el.classList.contains("ativo")) {
            el.classList.add("ativo");
            X4.state.activeSections.add(el);
        }
    }

    function deactivateSection(el) {
        if (el.classList.contains("ativo")) {
            el.classList.remove("ativo");
            X4.state.activeSections.delete(el);
        }
    }

    /* =====================================================
       6. OBSERVADOR DE INTERSEÇÃO
    ===================================================== */

    function createObserver() {
        const observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        activateSection(entry.target);
                    }
                });
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.15
            }
        );

        return observer;
    }

    /* =====================================================
       7. REGISTRO DE SEÇÕES
    ===================================================== */

    function registerSections() {
        const elements = qsa("section, header, footer");

        elements.forEach(function (el) {
            X4.sections.push(el);
        });
    }

    /* =====================================================
       8. APLICAÇÃO DO OBSERVADOR
    ===================================================== */

    function observeSections() {
        const observer = createObserver();
        X4.observers.push(observer);

        X4.sections.forEach(function (el) {
            observer.observe(el);
        });
    }

    /* =====================================================
       9. CONTROLE DE RESIZE
    ===================================================== */

    function handleResize() {
        X4.state.viewportHeight = window.innerHeight;
        X4.state.viewportWidth = window.innerWidth;
    }

    /* =====================================================
       10. LOOP DE VIGILÂNCIA
    ===================================================== */

    function loop() {
        updateScrollState();
        requestAnimationFrame(loop);
    }

    /* =====================================================
       11. DETECÇÃO DE DISPOSITIVO
    ===================================================== */

    function detectDevice() {
        const ua = navigator.userAgent.toLowerCase();

        return {
            mobile: /android|iphone|ipad|ipod/.test(ua),
            desktop: !/android|iphone|ipad|ipod/.test(ua)
        };
    }

    /* =====================================================
       12. ESTADO DE DISPOSITIVO
    ===================================================== */

    X4.device = detectDevice();

    /* =====================================================
       13. BLOQUEIO DE AÇÕES INVASIVAS
    ===================================================== */

    function disableSelection() {
        document.body.style.userSelect = "none";
        document.body.style.webkitUserSelect = "none";
        document.body.style.msUserSelect = "none";
    }

    function disableContextMenu() {
        document.addEventListener("contextmenu", function (e) {
            e.preventDefault();
        });
    }

    /* =====================================================
       14. CONTROLE DE FOCO
    ===================================================== */

    function handleVisibility() {
        if (document.hidden) {
            // sistema permanece em espera
        } else {
            // sistema retorna ativo
        }
    }

    /* =====================================================
       15. MONITORAMENTO DE TEMPO
    ===================================================== */

    const Time = {
        start: now(),
        last: now(),
        delta: 0,
        update: function () {
            const t = now();
            this.delta = t - this.last;
            this.last = t;
        }
    };

    /* =====================================================
       16. CICLO TEMPORAL
    ===================================================== */

    function timeLoop() {
        Time.update();
        requestAnimationFrame(timeLoop);
    }

    /* =====================================================
       17. SINALIZAÇÃO DE ESTADOS (PLACEHOLDER)
    ===================================================== */

    function signalState() {
        return;
    }

    /* =====================================================
       18. BLOCO DE PROTEÇÃO ESTRUTURAL
    ===================================================== */

    function structuralLock() {
        Object.freeze(X4.state);
    }

    /* =====================================================
       19. INICIALIZAÇÃO
    ===================================================== */

    function init() {
        if (X4.initialized) return;

        registerSections();
        observeSections();

        window.addEventListener("resize", handleResize);
        document.addEventListener("visibilitychange", handleVisibility);

        disableContextMenu();

        loop();
        timeLoop();

        X4.initialized = true;
    }

    /* =====================================================
       20. DISPARO FINAL
    ===================================================== */

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }

    /* =====================================================
       21. EXPORTAÇÃO CONTROLADA
    ===================================================== */

    window.X4 = X4;

})();

/* =========================================================
   FIM DO ARQUIVO — X4 JS
   LINHAS PROPOSITALMENTE EXTENSAS
   SISTEMA FECHADO, OBSERVÁVEL, SOBERANO
========================================================= */
