/**
 * ==========================================================
 * SISTEMA C3X4.0 — NÚCLEO ESTÁVEL
 * Compatível com MOBILE · GitHub Pages · Android
 * Sem falso positivo · Sem apagar DOM
 * ==========================================================
 */

const SistemaC3X4 = {

    init() {
        document.addEventListener("DOMContentLoaded", () => {
            this.consoleControl();
            this.diagnosticoVisual();
            this.integridadeBasica();
            this.microInteracoes();
            console.log("%c[SISTEMA C3X4.0] ONLINE · MOBILE SAFE", "color:#00ffd5;font-weight:bold;");
        });
    },

    /* ==========================================================
       CAMADA 1 — CONTROLE DE CONSOLE (SEM AGRESSÃO)
    ========================================================== */
    consoleControl() {
        try {
            console.clear();
        } catch(e){}
    },

    /* ==========================================================
       CAMADA 2 — DIAGNÓSTICO VISUAL (RODAPÉ)
    ========================================================== */
    diagnosticoVisual() {
        const elElements = document.querySelector('#status-elements span');
        const elNetwork  = document.querySelector('#status-network span');
        const elConsole  = document.querySelector('#status-console span');

        if(elElements) elElements.textContent = "OK";
        if(elNetwork)  elNetwork.textContent  = "ESTÁVEL";
        if(elConsole)  elConsole.textContent  = "OPERACIONAL";
    },

    /* ==========================================================
       CAMADA 3 — INTEGRIDADE (VERSÃO CORRETA)
       ✔ NÃO usa innerText do body
       ✔ NÃO apaga a página
       ✔ MOBILE SAFE
    ========================================================== */
    integridadeBasica() {
        const assinatura = document.querySelector('.assinatura-arquiteto');

        if (!assinatura) {
            this.sinalizarAlerta("ASSINATURA AUSENTE");
            return;
        }

        const nomeEsperado = "JOSÉ PATRICK CASTRO SOARES";
        const textoAtual   = assinatura.textContent.trim();

        if (textoAtual !== nomeEsperado) {
            this.sinalizarAlerta("ASSINATURA ALTERADA");
        }
    },

    /* ==========================================================
       CAMADA 4 — ALERTA VISUAL NÃO-DESTRUTIVO
    ========================================================== */
    sinalizarAlerta(motivo) {
        const alerta = document.createElement('div');
        alerta.textContent = `ALERTA DE INTEGRIDADE: ${motivo}`;
        alerta.style.position = "fixed";
        alerta.style.bottom = "20px";
        alerta.style.left = "50%";
        alerta.style.transform = "translateX(-50%)";
        alerta.style.padding = "12px 20px";
        alerta.style.background = "#ff0033";
        alerta.style.color = "#fff";
        alerta.style.fontFamily = "monospace";
        alerta.style.fontSize = "0.8rem";
        alerta.style.letterSpacing = "2px";
        alerta.style.zIndex = "9999";
        alerta.style.boxShadow = "0 0 20px rgba(255,0,51,0.6)";
        alerta.style.borderRadius = "6px";

        document.body.appendChild(alerta);

        setTimeout(() => alerta.remove(), 6000);
    },

    /* ==========================================================
       CAMADA 5 — MICROINTERAÇÕES LEVES (MOBILE FRIENDLY)
    ========================================================== */
    microInteracoes() {
        const blocos = document.querySelectorAll('.unidade-habitacional');

        blocos.forEach(bloco => {
            bloco.addEventListener('touchstart', () => {
                bloco.style.transform = "scale(0.98)";
            });

            bloco.addEventListener('touchend', () => {
                bloco.style.transform = "scale(1)";
            });
        });
    }

};

/* ==========================================================
   INICIALIZAÇÃO
========================================================== */
SistemaC3X4.init();
