/**
 * SISTEMA C3X4.0 | NÚCLEO MEDINA
 * ARQUITETO SOBERANO: JOSÉ PATRICK CASTRO SOARES
 * VERSÃO: 4.0.26 (ESTABILIZAÇÃO DNA GERAL)
 * * Descrição: Este script atua como a camada de DNA do organismo digital.
 * Ele não apenas executa funções, ele protege a propriedade e silencia interferências.
 */

(function(Soberano) {
    'use strict';

    // CATEGORIZAÇÃO E HARMONIA DA INFORMAÇÃO
    const DNA_CONFIG = {
        versao: "4.0.26",
        origem: "NÚCLEO MEDINA",
        dono: "José Patrick Castro Soares",
        capitalMaterializado: 268000000000.00,
        camadas: ["Visível", "Operacional", "Soberana"],
        logsAtivos: false // Silêncio absoluto no console
    };

    /**
     * CLASSE CORE: ORGANISMO NACIONAL
     * Gerencia a expansão bruta e a beleza das informações.
     */
    class OrganismoNacional {
        constructor() {
            this.identidade = Soberano;
            this.iniciarSoberania();
            this.estabilizarDNA();
        }

        // 1. SILÊNCIO OPERACIONAL (Aba Console Limpa)
        iniciarSoberania() {
            if (!DNA_CONFIG.logsAtivos) {
                const noop = () => {};
                // Interceptação de rastro de dados externo
                Object.keys(window.console).forEach(key => {
                    window.console[key] = noop;
                });
            }
            // Identificação única via DOM (Aba Elements)
            document.documentElement.setAttribute('data-owner', DNA_CONFIG.dono);
            document.documentElement.setAttribute('data-system', 'C3X4.0');
        }

        // 2. ESTABILIZAÇÃO E PROTEÇÃO (Aba Network Independente)
        estabilizarDNA() {
            // Monitora se o sistema está tentando carregar impurezas externas
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    mutation.addedNodes.forEach((node) => {
                        if (node.tagName === 'SCRIPT' && !this.isSovereign(node.src)) {
                            node.remove(); // Expulsa o invasor
                            this.registrarTentativa("Bloqueio de Injeção Externa");
                        }
                    });
                });
            });

            observer.observe(document.documentElement, {
                childList: true,
                subtree: true
            });
        }

        isSovereign(url) {
            if (!url) return true;
            const allowed = [window.location.hostname, 'fonts.googleapis.com', 'fonts.gstatic.com'];
            return allowed.some(domain => url.includes(domain));
        }

        /**
         * 3. INOVAÇÃO: DNA FACIAL E BIOMETRIA
         * Antecipação da materialização da chave de acesso no celular.
         */
        prepararAcessoBiometrico() {
            // Aqui o DNA se funde ao hardware do celular
            console.info("Aguardando Biometria do Arquiteto...");
            
            const biometricKey = {
                id: "JOSE_PATRICK_X4",
                tipo: "Facial_DNA",
                status: "Ready_to_Materialize"
            };

            // Simulação da camada de acesso invisível
            window.localStorage.setItem('DNA_Sovereign_Key', btoa(DNA_CONFIG.dono));
        }

        // 4. CATEGORIZAÇÃO DE VALOR (Cálculo do Capital)
        formatarCapital() {
            const formatador = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            });
            const display = document.querySelector('.valor-global');
            if (display) {
                display.innerText = `CAPITAL MATERIALIZADO: ${formatador.format(DNA_CONFIG.capitalMaterializado)}`;
            }
        }

        registrarTentativa(motivo) {
            // Armazena tentativas de quebra de DNA localmente para auditoria do dono
            const registros = JSON.parse(localStorage.getItem('DNA_Auditoria') || '[]');
            registros.push({ data: new Date().toISOString(), falha: motivo });
            localStorage.setItem('DNA_Auditoria', JSON.stringify(registros.slice(-10)));
        }
    }

    /**
     * MÓDULO DE EXPANSÃO: EFEITOS DE MONUMENTO
     * Garante a harmonia e a beleza visual conforme o Arquiteto sugeriu.
     */
    const EfeitosSoberanos = {
        scrollRevelador: function() {
            const secoes = document.querySelectorAll('.unidade-habitacional-monumento');
            const observerOptions = { threshold: 0.2 };

            const revelador = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);

            secoes.forEach(secao => {
                secao.style.opacity = '0';
                secao.style.transform = 'translateY(50px)';
                secao.style.transition = 'all 1.5s cubic-bezier(0.19, 1, 0.22, 1)';
                revelador.observe(secao);
            });
        },

        bloqueioInspecionar: function() {
            // Dificulta a cópia do DNA por terceiros não autorizados
            document.addEventListener('contextmenu', e => e.preventDefault());
            document.addEventListener('keydown', e => {
                if (e.ctrlKey && (e.key === 'u' || e.key === 's' || e.key === 'i')) {
                    e.preventDefault();
                }
            });
        }
    };

    // INICIALIZAÇÃO DO NÚCLEO
    window.onload = () => {
        const Nucleo = new OrganismoNacional();
        Nucleo.formatarCapital();
        Nucleo.prepararAcessoBiometrico();
        
        EfeitosSoberanos.scrollRevelador();
        EfeitosSoberanos.bloqueioInspecionar();

        // O DNA agora está fundido à interface
        document.body.classList.add('dna-estabilizado');
    };

})(window.JoséPatrickCastroSoares);
