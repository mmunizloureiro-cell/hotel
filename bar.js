const tabs = document.querySelectorAll('.bar-tab');
const panels = document.querySelectorAll('.bar-panel');
const tituloBar = document.getElementById('titulo-bar');
const campoPesquisa = document.getElementById('bar-search');
const limparPesquisa = document.getElementById('bar-search-clear');

function abrirSecao(sectionId) {
    tabs.forEach(tab => {
        tab.classList.toggle('ativo', tab.dataset.target === sectionId);
    });

    panels.forEach(panel => {
        panel.classList.toggle('ativo', panel.id === sectionId);
    });

    const tabAtiva = document.querySelector(`.bar-tab[data-target="${sectionId}"]`);
    if (tabAtiva && tituloBar) {
        tituloBar.textContent = tabAtiva.textContent;
    }

    aplicarFiltroPesquisa();
}

function normalizarTexto(valor) {
    return (valor || '')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim();
}

function itemCorresponde(item, termo) {
    const texto = normalizarTexto(item.textContent);
    return texto.includes(termo);
}

function filtrarItensDoPainel(panel, termo) {
    const itens = panel.querySelectorAll('.menu-item');
    let algumVisivel = false;
    let primeiroVisivel = null;

    itens.forEach(item => {
        const mostrar = !termo || itemCorresponde(item, termo);
        item.style.display = mostrar ? '' : 'none';
        item.classList.remove('bar-search-hit');
        if (mostrar) {
            algumVisivel = true;
            if (!primeiroVisivel) primeiroVisivel = item;
        }
    });

    const aviso = panel.querySelector('.bar-empty-search');
    if (!algumVisivel && termo) {
        if (!aviso) {
            const msg = document.createElement('p');
            msg.className = 'bar-empty-search';
            msg.textContent = 'Nenhum item encontrado nesta seção.';
            panel.appendChild(msg);
        }
    } else if (aviso) {
        aviso.remove();
    }

    if (termo && primeiroVisivel) {
        primeiroVisivel.classList.add('bar-search-hit');
    }

    return algumVisivel;
}

function aplicarFiltroPesquisa() {
    const termo = normalizarTexto(campoPesquisa ? campoPesquisa.value : '');
    const painelAtivo = document.querySelector('.bar-panel.ativo');
    if (!painelAtivo) return;
    filtrarItensDoPainel(painelAtivo, termo);
}

function encontrarSecaoComTermo(termo) {
    if (!termo) return null;
    for (const panel of panels) {
        const itens = panel.querySelectorAll('.menu-item');
        for (const item of itens) {
            if (itemCorresponde(item, termo)) {
                return panel.id;
            }
        }
    }
    return null;
}

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        abrirSecao(tab.dataset.target);
    });
});

if (campoPesquisa) {
    campoPesquisa.addEventListener('input', () => {
        const termo = normalizarTexto(campoPesquisa.value);
        const destino = encontrarSecaoComTermo(termo);

        if (termo && destino) {
            abrirSecao(destino);
        } else {
            aplicarFiltroPesquisa();
        }
    });

    campoPesquisa.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter') return;
        event.preventDefault();

        const destaque = document.querySelector('.bar-panel.ativo .menu-item.bar-search-hit');
        if (destaque) {
            destaque.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });

    campoPesquisa.addEventListener('keydown', (event) => {
        if (event.key !== 'Escape') return;
        campoPesquisa.value = '';
        aplicarFiltroPesquisa();
    });
}

if (limparPesquisa && campoPesquisa) {
    limparPesquisa.addEventListener('click', () => {
        campoPesquisa.value = '';
        aplicarFiltroPesquisa();
        campoPesquisa.focus();
    });
}

window.addEventListener('DOMContentLoaded', () => {
    abrirSecao('drinks');
});
