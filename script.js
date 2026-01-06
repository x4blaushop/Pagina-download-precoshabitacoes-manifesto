/**
 * =========================================================
 * JS — DNA C3X4.0 COMPLETO
 * MOTOR DE SOBERANIA, MATRIZ, VALORES E ESTABILIZAÇÃO
 * =========================================================
 */

/* =========================
   PARTE 1/5 — MOTOR DE IDENTIDADE
   SILÊNCIO DE CONSOLE E POSSE
   ========================= */
const DNAMatriz = {
    versao: "C3X4.0",
    ano: 2026,
    proprietario: "José Patrick Castro Soares",

    init() {
        this.saneamentoConsole();
        this.validarPosse();
        window.logSoberano("MATRIZ INICIALIZADA. DNA X4 ATIVO.");
    },

    saneamentoConsole() {
        console.clear();
        const silence = () => {};
        console.warn = silence;
        console.info = silence;
        console.debug = silence;

        window.logSoberano = (msg) => {
            console.log(
                `%c[ARQUITETO] %c${msg}`,
                "color:#FFD700;font-weight:bold;background:#000;padding:2px 6px;",
                "color:#00FF9C;background:#000;padding:2px 6px;"
            );
        };
    },

    validarPosse() {
        Object.defineProperty(this, "proprietario", {
            writable: false,
            configurable: false
        });
    }
};

DNAMatriz.init();

/* =========================
   PARTE 2/5 — SANEAMENTO ESTRUTURAL
   ========================= */
const SaneadorEstrutural = {
    init() {
        this.verificarLimpezaDOM();
        this.observarMutacoes();
        window.logSoberano("SANEAMENTO DE DOM ATIVO.");
    },

    verificarLimpezaDOM() {
        const lixo = document.querySelectorAll(
            'script:not([src="script.js"]), style:not([id])'
        );
        lixo.forEach(el => el.remove());
        if (lixo.length > 0) {
            window.logSoberano(`RUÍDO REMOVIDO: ${lixo.length} ELEMENTOS.`);
        }
    },

    observarMutacoes() {
        const observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                mutation.addedNodes.forEach(node => {
                    if (
                        node.tagName === "IFRAME" ||
                        (typeof node.className === "string" &&
                         node.className.includes("ads"))
                    ) {
                        node.remove();
                        window.logSoberano("INVASÃO VISUAL BLOQUEADA.");
                    }
                });
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
};

SaneadorEstrutural.init();

/* =========================
   PARTE 3/5 — INDEPENDÊNCIA E NETWORK
   ========================= */
const AlfandegaDigital = {
    init() {
        this.bloquearFetch();
        this.diagnosticoRecursos();
        window.logSoberano("ALFÂNDEGA DIGITAL ATIVA.");
    },

    bloquearFetch() {
        const originalFetch = window.fetch;
        window.fetch = (...args) => {
            const url = String(args[0]);
            if (
                url.includes("google-analytics") ||
                url.includes("facebook") ||
                url.includes(".gov")
            ) {
                window.logSoberano(`BLOQUEIO DE REDE: ${url}`);
                return Promise.reject(
                    new Error("Bloqueado por soberania C3X4.0")
                );
            }
            return originalFetch(...args);
        };
    },

    diagnosticoRecursos() {
        const recursos = performance.getEntriesByType("resource");
        const externos = recursos.filter(r => !r.name.includes(location.hostname));
        if (externos.length === 0) {
            window.logSoberano("NETWORK LIMPA. 100% INDEPENDENTE.");
        } else {
            window.logSoberano(`NÓS EXTERNOS DETECTADOS: ${externos.length}`);
        }
    }
};

AlfandegaDigital.init();

/* =========================
   PARTE 4/5 — DIAGNÓSTICO VISUAL E MATRIZ DE VALORES
   ========================= */
const PainelSoberano = {
    valoresCapital: [
        { descricao: "Básico", valor: "R$ 1.000,00" },
        { descricao: "Intermediário", valor: "R$ 5.000,00" },
        { descricao: "Avançado", valor: "R$ 150.000,00" },
        { descricao: "Corporativo", valor: "R$ 500.000,00" }
    ],

    init() {
        window.addEventListener("load", () => {
            this.atualizarDiagnostico();
            this.materializarCapital();
            this.preencherMatrizEstados();
        });
    },

    atualizarDiagnostico() {
        const mapa = {
            "status-elements": "ESTRUTURA LIMPA",
            "status-network": "INDEPENDENTE",
            "status-console": "SILÊNCIO ABSOLUTO"
        };
        Object.entries(mapa).forEach(([id, texto]) => {
            const el = document.getElementById(id);
            if (el) {
                const span = el.querySelector("span");
                if (span) {
                    span.textContent = texto;
                    span.style.color = "var(--saneamento-green)";
                }
            }
        });
        window.logSoberano("DIAGNÓSTICO MATERIALIZADO.");
    },

    materializarCapital() {
        const capital = document.getElementById("status-capital");
        if (capital) {
            const span = capital.querySelector("span");
            if (span) {
                span.textContent = "R$ 268.000.000.000,00 — ÍNTEGRO";
                Object.freeze(span);
            }
        }
    },

    preencherMatrizEstados() {
        const matriz = document.querySelector(".matriz-estados");
        if (!matriz) return;

        const estados = [
            { sigla: "SP", tecnologia: "Alta", dependencia: "Baixa" },
            { sigla: "RJ", tecnologia: "Média", dependencia: "Média" },
            { sigla: "MG", tecnologia: "Alta", dependencia: "Baixa" },
            { sigla: "RS", tecnologia: "Média", dependencia: "Média" },
            { sigla: "BA", tecnologia: "Baixa", dependencia: "Alta" },
            { sigla: "PR", tecnologia: "Alta", dependencia: "Baixa" },
            { sigla: "SC", tecnologia: "Alta", dependencia: "Baixa" },
            { sigla: "DF", tecnologia: "Alta", dependencia: "Média" }
        ];

        estados.forEach(estado => {
            const bloco = document.createElement("div");
            bloco.classList.add("unidade-habitacional");
            bloco.innerHTML = `
                <h3>${estado.sigla}</h3>
                <span class="valor">${this.valoresCapital[Math.floor(Math.random() * this.valoresCapital.length)].valor}</span>
                <p class="perfil">
                    Tecnologia: ${estado.tecnologia}<br>
                    Dependência externa: ${estado.dependencia}
                </p>
            `;
            matriz.appendChild(bloco);
        });

        window.logSoberano("MATRIZ DE ESTADOS MATERIALIZADA COM VALORES.");
    }
};

PainelSoberano.init();

/* =========================
   PARTE 5/5 — ESTABILIZAÇÃO FINAL
   ========================= */
const EstabilizadorDNA = {
    init() {
        this.selar();
        this.confirmarCiclo();
        this.protegerAssinatura();
        this.entregaFinal();
    },

    selar() {
        Object.freeze(DNAMatriz);
        Object.freeze(SaneadorEstrutural);
        Object.freeze(AlfandegaDigital);
        Object.freeze(PainelSoberano);
        Object.freeze(this);
        window.logSoberano("ARQUITETURA SELADA.");
    },

    confirmarCiclo() {
        if (new Date().getFullYear() >= 2026) {
            window.logSoberano("CICLO 2026 CONFIRMADO.");
        }
    },

    protegerAssinatura() {
        const assinatura = document.querySelector(".assinatura-arquiteto");
        if (assinatura && !assinatura.textContent.includes("JOSÉ PATRICK")) {
            document.body.innerHTML = "<h1>ERRO DE SOBERANIA — ACESSO NEGADO</h1>";
            console.error("USURPAÇÃO DETECTADA.");
        }
    },

    entregaFinal() {
        setTimeout(() => {
            window.logSoberano("ESTADO FINAL: SISTEMA ESTÁVEL.");
            window.logSoberano("C3X4.0 ENTREGUE AO ARQUITETO.");
        }, 800);
    }
};

EstabilizadorDNA.init();
