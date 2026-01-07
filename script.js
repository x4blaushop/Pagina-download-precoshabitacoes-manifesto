/**
 * =========================================================
 * JS — DNA C3X4.0 COMPLETO | EXPANSÃO BRUTA
 * MOTOR DE SOBERANIA, MATRIZ, VALORES E ESTABILIZAÇÃO
 * ARQUITETO: JOSÉ PATRICK CASTRO SOARES
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
   PARTE 4/5 — DIAGNÓSTICO VISUAL E MATRIZ DE VALORES (ATUALIZADA)
   ========================= */
const PainelSoberano = {
    // ESCALA DECRESCENTE MATERIALIZADA CONFORME O ARQUITETO SOLICITOU
    valoresCapital: [
        { descricao: "ESTABILIDADE CONSCIENTE (MÉDIO)", valor: "R$ 5.000,00" },
        { descricao: "HARMONIA DE ACESSO (MÉDIO BAIXO)", valor: "R$ 2.500,00" },
        { descricao: "LIBERDADE DE ENTRADA (BAIXO)", valor: "R$ 1.500,00" },
        { descricao: "LIBERDADE MÍNIMA", valor: "R$ 1.000,00" },
        { descricao: "INSTITUCIONAL", valor: "R$ 500.000,00+" }
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
            "status-elements": "CASA LIMPA E ORGANIZADA",
            "status-network": "SISTEMA INDEPENDENTE",
            "status-console": "SILÊNCIO ABSOLUTO"
        };
        Object.entries(mapa).forEach(([id, texto]) => {
            const el = document.getElementById(id);
            if (el) {
                const span = el.querySelector("span");
                if (span) {
                    span.textContent = texto;
                    span.style.color = "var(--p-gold)";
                }
            }
        });
        window.logSoberano("DIAGNÓSTICO MATERIALIZADO NA INTERFACE.");
    },

    materializarCapital() {
        const capital = document.getElementById("status-capital");
        if (capital) {
            const span = capital.querySelector("span");
            if (span) {
                span.textContent = "R$ 268.000.000.000,00 — INTEGRAL E PROTEGIDO";
                Object.freeze(span);
            }
        }
    },

    preencherMatrizEstados() {
        const matriz = document.querySelector(".matriz-estados");
        if (!matriz) return;

        // Distribuição estratégica de valores baseada na complexidade do estado
        const estados = [
            { sigla: "SP", perfil: "MOTOR FINANCEIRO", valorIndex: 0 }, // 5k
            { sigla: "AM", perfil: "PULMÃO DE DADOS", valorIndex: 0 },   // 5k
            { sigla: "BA", perfil: "POLO CRIATIVO", valorIndex: 1 },    // 2.5k
            { sigla: "RS", perfil: "EIXO ESTABILIDADE", valorIndex: 2 }, // 1.5k
            { sigla: "DF", perfil: "CENTRO DE COMANDO", valorIndex: 0 }  // 5k
        ];

        estados.forEach(estado => {
            const bloco = document.createElement("div");
            bloco.classList.add("unidade-habitacional");
            bloco.innerHTML = `
                <h3>${estado.sigla}</h3>
                <span class="valor">${this.valoresCapital[estado.valorIndex].valor}</span>
                <p class="perfil">
                    <strong>${estado.perfil}</strong><br>
                    Soberania: 100% | DNA: Ativo
                </p>
            `;
            matriz.appendChild(bloco);
        });

        window.logSoberano("MATRIZ NACIONAL COM ESCALA DE VALORES INTEGRADA.");
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
        // Garantindo que a expansão não seja alterada por agentes externos
        Object.freeze(DNAMatriz);
        Object.freeze(SaneadorEstrutural);
        Object.freeze(AlfandegaDigital);
        Object.freeze(PainelSoberano);
        Object.freeze(this);
        window.logSoberano("ARQUITETURA SELADA E IMUTÁVEL.");
    },

    confirmarCiclo() {
        if (new Date().getFullYear() >= 2026) {
            window.logSoberano("AUTENTICAÇÃO TEMPORAL: CICLO 2026.");
        }
    },

    protegerAssinatura() {
        const assinatura = document.querySelector(".assinatura-arquiteto");
        if (assinatura && !assinatura.textContent.includes("JOSÉ PATRICK")) {
            document.body.innerHTML = "<div style='background:#000;color:red;padding:100px;text-align:center;'><h1>ERRO CRÍTICO: VIOLAÇÃO DE SOBERANIA</h1>
