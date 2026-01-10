/**
 * SISTEMA C3X4.0 — ARQUITETURA SOBERANA
 * ARQUITETO: JOSÉ PATRICK CASTRO SOARES
 * CICLO 2026 — MATERIALIZAÇÃO TOTAL
 */

const NucleoSoberano = (function() {
    "use strict";

    // CAMADA 1: CONFIGURAÇÃO DE DNA
    const CONFIG = {
        arquiteto: "José Patrick Castro Soares",
        versao: "4.0.2026",
        status: "Sovereign",
        estatisticas: { capital: 268000000000 }
    };

    // CAMADA 2: BANCO DE DADOS NACIONAL (CATEGORIZAÇÃO)
    const ESTADOS = [
        { id: "25", nome: "SÃO PAULO", status: "ATIVO", desc: "Maior polo tecnológico. Dependência de nuvens externas.", valor: "R$ 5.000,00" },
        { id: "19", nome: "RIO DE JANEIRO", status: "OBSERVAÇÃO", desc: "Forte produção cultural. Baixa autonomia estrutural.", valor: "R$ 5.000,00" },
        { id: "13", nome: "MINAS GERAIS", status: "EMERGENTE", desc: "Crescimento descentralizado. Alto potencial local.", valor: "R$ 5.000,00" },
        { id: "05", nome: "BAHIA", status: "LATENTE", desc: "Polo criativo estratégico. Infraestrutura externa.", valor: "R$ 5.000,00" },
        { id: "04", nome: "AMAZONAS", status: "PROTEGIDO", desc: "Pulmão de dados e reserva estratégica.", valor: "R$ 5.000,00" }
    ];

    // CAMADA 3: MOTOR DE MATERIALIZAÇÃO (INOVAÇÃO)
    const Materializar = {
        init() {
            this.authSequence();
            this.buildUnits();
            this.securityShield();
            this.tickerAnimation();
        },

        // Sequência Biométrica do Arquiteto
        authSequence() {
            const overlay = document.getElementById('camada-seguranca-maxima');
            setTimeout(() => {
                overlay.style.opacity = '0';
                setTimeout(() => overlay.remove(), 1500);
                console.log(`%c[AUTENTICAÇÃO] Bem-vindo, Arquiteto ${CONFIG.arquiteto}`, "color: #00ffcc; font-weight: bold; font-size: 14px;");
            }, 4000);
        },

        // Construção dos Blocos de Habitação Digital
        buildUnits() {
            const main = document.getElementById('organismo-vivo');
            main.innerHTML = ''; // Limpeza da casa

            ESTADOS.forEach((estado, index) => {
                const card = document.createElement('section');
                card.className = 'unidade-habitacional';
                card.id = `dna-node-${estado.id}`;
                card.style.animationDelay = `${index * 0.2}s`;
                
                card.innerHTML = `
                    <div class="card-header">
                        <h2 class="glow-text-cyan">${estado.id} · ${estado.nome}</h2>
                        <span class="badge-status">${estado.status}</span>
                    </div>
                    <div class="preco-soberano">${estado.valor}</div>
                    <div class="desc-content">
                        <p>${estado.desc}</p>
                    </div>
                    <div class="node-footer">DNA X4 IDENTIFIED</div>
                `;
                main.appendChild(card);
            });
        },

        // Camada de Escudo e Independência
        securityShield() {
            window.addEventListener('keydown', (e) => {
                if(e.ctrlKey && (e.key === 'u' || e.key === 's')) e.preventDefault();
            });
            document.addEventListener('contextmenu', e => e.preventDefault());
        },

        // Animação do Capital Materializado
        tickerAnimation() {
            const ticker = document.getElementById('capital-ticker');
            // Lógica de expansão de valores aqui
        }
    };

    return { iniciar: () => Materializar.init() };
})();

// DISPARO DO NÚCLEO
document.addEventListener('DOMContentLoaded', () => NucleoSoberano.iniciar());
