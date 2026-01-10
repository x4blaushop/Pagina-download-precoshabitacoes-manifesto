/**
 * ARQUITETO: JOSÉ PATRICK CASTRO SOARES
 * SISTEMA: C3X4.0 - SANEAMENTO TOTAL
 */

const DNAMatriz = {
    init: function() {
        this.limpezaAbsoluta();
        this.bloqueioExtracao();
        this.confirmarSoberania();
        this.estabilizarCiclo2026();
    },

    limpezaAbsoluta: function() {
        // Aba Console: Silêncio
        console.clear();
        const silenciador = () => {};
        console.log = silenciador;
        console.warn = silenciador;
        console.error = silenciador;
        
        // Aba Elements: Remoção de Ruído
        document.querySelectorAll('script[src*="analytics"], iframe').forEach(el => el.remove());
    },

    bloqueioExtracao: function() {
        // Impede a leitura por olhos não autorizados
        document.addEventListener('contextmenu', e => e.preventDefault());
        document.addEventListener('keydown', e => {
            if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && e.keyCode === 73)) e.preventDefault();
        });
    },

    confirmarSoberania: function() {
        // O DNA se reconhece através do Arquiteto
        const autor = document.querySelector('meta[name="author"]').content;
        if (!autor.includes("José Patrick")) {
            document.body.innerHTML = "DNA VIOLADO. SISTEMA EM AUTO-DESTRUIÇÃO.";
        }
    },

    estabilizarCiclo2026: function() {
        // Garante que o capital de R$ 268B seja imutável na interface
        const capital = document.querySelector('.valor-global');
        if(capital) Object.freeze(capital);
    }
};

DNAMatriz.init();
