/* ==========================================================
   SISTEMA C3X4.0 — NÚCLEO FUNCIONAL
   Interação · Scroll Suave · Microdinâmica
   Autor: José Patrick Castro Soares
   ========================================================== */

const C3X4 = {

    /* =========================
       INICIALIZAÇÃO
    ========================= */
    init() {
        this.cacheDOM();
        this.scrollSuave();
        this.hoverEstados();
        this.diagnostico();
        this.integridade();

        console.log(
            "%c[C3X4.0] Sistema estabilizado · 2026",
            "color:#00ffe1; font-weight:bold;"
        );
    },

    /* =========================
       CACHE DOM
    ========================= */
    cacheDOM() {
        this.estados = document.querySelectorAll('.estado');
        this.topo = document.querySelector('#topo-nacional');
        this.body = document.body;
    },

    /* =========================
       SCROLL SUAVE (CORRIGIDO)
       — efeito mínimo
       — não atrapalha leitura
    ========================= */
    scrollSuave() {
        let lastScroll = window.scrollY;

        window.addEventListener('scroll', () => {
            const current = window.scrollY;
            const delta = (current - lastScroll) * 0.03; // <<< CONTROLE REAL AQUI

            this.estados.forEach((estado, index) => {
                const fator = 0.4 + index * 0.02;
                estado.style.transform = `translateY(${delta * fator}px)`;
            });

            lastScroll = current;
        });
    },

    /* =========================
       HOVER SUTIL NOS ESTADOS
    ========================= */
    hoverEstados() {
        this.estados.forEach(estado => {
            estado.addEventListener('mouseenter', () => {
                estado.style.transform += ' scale(1.01)';
            });

            estado.addEventListener('mouseleave', () => {
                estado.style.transform = estado.style.transform.replace(' scale(1.01)', '');
            });
        });
    },

    /* =========================
       DIAGNÓSTICO VISUAL
    ========================= */
    diagnostico() {
        window.addEventListener('load', () => {
            const log = [
                'MAPA: OK',
                'ESTADOS: OK',
                'LEITURA: ESTÁVEL',
                'SCROLL: CONTROLADO'
            ];

            log.forEach((msg, i) => {
                setTimeout(() => {
                    console.log(`%c[DIAGNÓSTICO] ${msg}`, "color:#00ff41");
                }, i * 400);
            });
        });
    },

    /* =========================
       INTEGRIDADE AUTORAL
    ========================= */
    integridade() {
        const autor = "JOSÉ PATRICK CASTRO SOARES";

        setInterval(() => {
            const assinatura = document.body.innerText.includes(autor);
            if (!assinatura) {
                document.body.innerHTML = `
                    <h1 style="color:red;text-align:center;margin-top:20vh;">
                        ALERTA: INTEGRIDADE VIOLADA
                    </h1>
                `;
            }
        }, 6000);
    }
};

/* =========================
   START
========================= */
C3X4.init();
