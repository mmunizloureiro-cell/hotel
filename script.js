// Dados do cardápio para cada dia da semana
const cardapios = {
    segunda: {
        nome: "Segunda-feira",
        tema: "",
        secoes: [
            {
                titulo: "Saladas",
                itens: [
                    { nome: "Tomate" },
                    { nome: "Mix de repolho" },
                    { nome: "Alface" },
                    { nome: "Cenoura" }
                ],
                acompanhamento: "Vinagrete"
            },
            {
                titulo: "Sopa",
                itens: [
                    { nome: "Sopa de legumes com carne" }
                ],
                acompanhamento: "Cesta de pães ou torradas • Limão à francesa"
            },
            {
                titulo: "Guarnições",
                itens: [
                    { nome: "Arroz branco" },
                    { nome: "Feijão" },
                    { nome: "Espaguete à bolonhesa" },
                    { nome: "Farofa" },
                    { nome: "Legumes ao vapor" }
                ]
            },
            {
                titulo: "Pratos Principais",
                itens: [
                    { nome: "Alcatra ao molho de champignon" },
                    { nome: "Filé de peixe ao molho de coco" },
                    { nome: "Filé de frango grelhado" }
                ]
            },
            {
                titulo: "Sobremesas",
                itens: [
                    { nome: "Gelatina" },
                    { nome: "Mousse de limão" },
                    { nome: "Pudim" }
                ]
            }
        ]
    },
    terca: {
        nome: "Terça-feira",
        tema: "",
        secoes: [
            {
                titulo: "Saladas e Entradas Frias",
                itens: [
                    { nome: "Salada Caprese" },
                    { nome: "Repolho ao vinagrete" },
                    { nome: "Mix de folhas" },
                    { nome: "Chuchu refogado" }
                ],
                acompanhamento: "Vinagrete"
            },
            {
                titulo: "Sopa",
                itens: [
                    { nome: "Creme de legumes" }
                ],
                acompanhamento: "Cesta de pães ou torradas • Limão à francesa"
            },
            {
                titulo: "Guarnições",
                itens: [
                    { nome: "Arroz branco" },
                    { nome: "Feijão" },
                    { nome: "Purê de batata" },
                    { nome: "Talharim ao molho de ervas finas" },
                    { nome: "Farofa" }
                ]
            },
            {
                titulo: "Pratos Principais",
                itens: [
                    { nome: "Picadinho à brasileira" },
                    { nome: "Filé de frango grelhado ao molho de mostarda" },
                    { nome: "Filé de peixe ao molho de limão" }
                ]
            },
            {
                titulo: "Sobremesas",
                itens: [
                    { nome: "Gelatina" },
                    { nome: "Pudim" },
                    { nome: "Manjar de coco" }
                ]
            }
        ]
    },
    quarta: {
        nome: "Quarta-feira",
        tema: "🍝 NOITE DE MASSAS",
        secoes: [
            {
                titulo: "Saladas e Entradas Frias",
                itens: [
                    { nome: "Abobrinha grelhada" },
                    { nome: "Mix de folhas" },
                    { nome: "Salada italiana" },
                    { nome: "Ratatouille" }
                ],
                acompanhamento: "Vinagrete"
            },
            {
                titulo: "Sopa",
                itens: [
                    { nome: "Minestrone" }
                ],
                acompanhamento: "Cesta de pães ou torradas • Limão à francesa"
            },
            {
                titulo: "Massas e Pratos Quentes",
                itens: [
                    { nome: "Lasanha à bolonhesa" },
                    { nome: "Lasanha de berinjela" },
                    { nome: "Canelone de presunto e queijo" },
                    { nome: "Penne ao molho Aurora" },
                    { nome: "Nhoque salteado na manteiga e sálvia" }
                ]
            },
            {
                titulo: "Sobremesas",
                itens: [
                    { nome: "Gelatina" },
                    { nome: "Crostata de frutas" },
                    { nome: "Pudim" },
                    { nome: "Tiramisù" }
                ]
            },
            {
                titulo: "Estação de Massas",
                itens: [
                    { nome: "Talharim" },
                    { nome: "Espaguete" },
                    { nome: "Fusilli" }
                ]
            },
            {
                titulo: "Molhos Base",
                itens: [
                    { nome: "Molho branco" },
                    { nome: "Molho sugo" },
                    { nome: "Molho bolonhesa" },
                    { nome: "Molho de ervas" },
                    { nome: "Alho e óleo" }
                ]
            }
        ]
    },
    quinta: {
        nome: "Quinta-feira",
        tema: "",
        secoes: [
            {
                titulo: "Saladas",
                itens: [
                    { nome: "Tomate" },
                    { nome: "Mix de repolho" },
                    { nome: "Folhas (alface e rúcula)" },
                    { nome: "Abobrinha refogada" }
                ],
                acompanhamento: "Vinagrete"
            },
            {
                titulo: "Sopa",
                itens: [
                    { nome: "Canja" }
                ],
                acompanhamento: "Cesta de pães ou torradas • Limão à francesa"
            },
            {
                titulo: "Guarnições",
                itens: [
                    { nome: "Arroz branco" },
                    { nome: "Feijão" },
                    { nome: "Batata rústica" },
                    { nome: "Espaguete alho e óleo" },
                    { nome: "Farofa de ovo" }
                ]
            },
            {
                titulo: "Pratos Principais",
                itens: [
                    { nome: "Carne de sol" },
                    { nome: "Frango assado" },
                    { nome: "Bisteca suína ao alecrim" }
                ]
            },
            {
                titulo: "Sobremesas",
                itens: [
                    { nome: "Pudim" },
                    { nome: "Gelatina" },
                    { nome: "Manjar de chocolate" }
                ]
            }
        ]
    },
    sexta: {
        nome: "Sexta-feira",
        tema: "🇧🇷 NOITE BAIANA",
        secoes: [
            {
                titulo: "Saladas e Entradas Frias",
                itens: [
                    { nome: "Tomate em cubos" },
                    { nome: "Abóbora com quiabo" },
                    { nome: "Salada de feijão branco" },
                    { nome: "Mix de folhas" }
                ],
                acompanhamento: "Vinagrete"
            },
            {
                titulo: "Sopa",
                itens: [
                    { nome: "Caldo de frango" }
                ],
                acompanhamento: "Cesta de pães ou torradas • Limão à francesa"
            },
            {
                titulo: "Guarnições",
                itens: [
                    { nome: "Arroz branco" },
                    { nome: "Feijão" },
                    { nome: "Farofa" },
                    { nome: "Espaguete na manteiga" },
                    { nome: "Bobó de camarão" },
                    { nome: "Vatapá" },
                    { nome: "Caruru" }
                ]
            },
            {
                titulo: "Pratos Principais",
                itens: [
                    { nome: "Moqueca de peixe" },
                    { nome: "Xinxim de galinha" },
                    { nome: "Escalope de carne acebolado" }
                ]
            },
            {
                titulo: "Sobremesas",
                itens: [
                    { nome: "Pudim" },
                    { nome: "Gelatina" },
                    { nome: "Doce de leite" }
                ]
            }
        ]
    },
    sabado: {
        nome: "Sábado",
        tema: "",
        secoes: [
            {
                titulo: "Saladas",
                itens: [
                    { nome: "Tomate à francesa" },
                    { nome: "Salada de beterraba" },
                    { nome: "Mix de folhas" },
                    { nome: "Salpicão de frango" }
                ],
                acompanhamento: "Vinagrete"
            },
            {
                titulo: "Sopa",
                itens: [
                    { nome: "Caldo verde" }
                ],
                acompanhamento: "Cesta de pães ou torradas • Limão à francesa"
            },
            {
                titulo: "Guarnições",
                itens: [
                    { nome: "Arroz branco" },
                    { nome: "Feijão" },
                    { nome: "Jardineira de legumes" },
                    { nome: "Fusilli ao molho parmegiana" },
                    { nome: "Cuscuz de carne seca" }
                ]
            },
            {
                titulo: "Pratos Principais",
                itens: [
                    { nome: "Strogonoff de carne" },
                    { nome: "Peito de frango grelhado" },
                    { nome: "Moqueca de peixe" }
                ]
            },
            {
                titulo: "Sobremesas",
                itens: [
                    { nome: "Pudim de leite" },
                    { nome: "Gelatina" },
                    { nome: "Cocada mole" }
                ]
            }
        ]
    },
    domingo: {
        nome: "Domingo",
        tema: "",
        secoes: [
            {
                titulo: "Saladas e Entradas Frias",
                itens: [
                    { nome: "Salada mista" },
                    { nome: "Salada russa" },
                    { nome: "Mix de folhas" }
                ],
                acompanhamento: "Vinagrete"
            },
            {
                titulo: "Sopa",
                itens: [
                    { nome: "Sopa de legumes" }
                ],
                acompanhamento: "Cesta de pães ou torradas • Limão à francesa"
            },
            {
                titulo: "Guarnições",
                itens: [
                    { nome: "Arroz branco" },
                    { nome: "Feijão" },
                    { nome: "Talharim à bolonhesa" },
                    { nome: "Batata gratinada" },
                    { nome: "Farofa de calabresa" }
                ]
            },
            {
                titulo: "Pratos Principais",
                itens: [
                    { nome: "Toscana e alcatra assada" },
                    { nome: "Bisteca" },
                    { nome: "Filé de peixe ao molho de coco" }
                ]
            },
            {
                titulo: "Sobremesas",
                itens: [
                    { nome: "Gelatina" },
                    { nome: "Pudim de leite" },
                    { nome: "Pavê de chocolate" }
                ]
            }
        ]
    }
};


// ========== CONSTANTES E ARMAZENAMENTO ==========
const STORAGE_KEY = 'hotel-beach-hills-avaliacoes';
const avaliacoesPorDia = Object.fromEntries(
    Object.keys(cardapios).map(dia => [dia, []])
);

// ========== CONFIGURAÇÃO FIREBASE ==========
const FIREBASE_CONFIG = {
    apiKey: "REPLACE_ME",
    authDomain: "REPLACE_ME",
    databaseURL: "REPLACE_ME",
    projectId: "REPLACE_ME",
    storageBucket: "REPLACE_ME",
    messagingSenderId: "REPLACE_ME",
    appId: "REPLACE_ME"
};

let firebaseApp = null;
let databaseRef = null;

function initFirebase() {
    try {
        firebaseApp = firebase.initializeApp(FIREBASE_CONFIG);
        const db = firebase.database();
        databaseRef = db.ref('avaliacoes');
        databaseRef.on('value', snapshot => {
            const val = snapshot.val() || {};
            Object.keys(avaliacoesPorDia).forEach(dia => {
                avaliacoesPorDia[dia] = Array.isArray(val[dia]) ? val[dia] : (val[dia] ? Object.values(val[dia]) : []);
            });
            mostrarAvaliacoes(diaSelecionado, abaAtual);
        });
    } catch (e) {
        console.warn('Firebase não inicializado — cole suas credenciais em FIREBASE_CONFIG');
    }
}

function pushToFirebase() {
    if (!databaseRef) return;
    databaseRef.set(avaliacoesPorDia).catch(err => console.error('Erro ao gravar no Firebase', err));
}

// ========== ELEMENTOS DO DOM ==========
const botoesDias = document.querySelectorAll('.dia-btn');
const botoesAvaliacoesDias = document.querySelectorAll('.avaliacao-dia');
const botoesTabs = document.querySelectorAll('.tab-comentario');
const cardapioContainer = document.getElementById('cardapio');
const tituloCardapio = document.getElementById('titulo-cardapio');
const jantarSearch = document.getElementById('jantar-search');
const jantarSearchClear = document.getElementById('jantar-search-clear');
const painelAvaliacoes = document.getElementById('avaliacoes-panel');
const fecharAvaliacoes = document.getElementById('fechar-avaliacoes');
const listaAvaliacoes = document.getElementById('lista-avaliacoes');
const listaAvaliacoesUteis = document.getElementById('lista-avaliacoes-uteis');
const formComentario = document.getElementById('form-comentario');
const nomeComentario = document.getElementById('nome-comentario');
const notaComentario = document.getElementById('nota-comentario');
const textoComentario = document.getElementById('texto-comentario');
const btnConfirmarComentario = document.getElementById('btn-confirmar-comentario');
const btnPublicarComentario = document.getElementById('btn-publicar-comentario');
const tabComentar = document.getElementById('comentar-tab');
const tabRecentes = document.getElementById('recentes-tab');
const tabUteis = document.getElementById('uteis-tab');

let diaSelecionado = 'domingo';
let abaAtual = 'comentar';

// ========== VARIÁVEIS DE ESTADO ==========


// ========== FUNÇÕES AUXILIARES ==========
function resetarConfirmacao() {
    btnPublicarComentario.hidden = true;
    btnConfirmarComentario.textContent = 'Confirmar comentário';
    btnConfirmarComentario.disabled = false;
    btnConfirmarComentario.style.opacity = '1';
    btnConfirmarComentario.style.cursor = 'pointer';
}

function gerarEstrelas(nota) {
    return '★'.repeat(nota) + '☆'.repeat(5 - nota);
}

function normalizarTexto(valor) {
    return (valor || '')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim();
}

function aplicarPesquisaJantar() {
    const termo = normalizarTexto(jantarSearch ? jantarSearch.value : '');
    const pratos = cardapioContainer.querySelectorAll('.prato');
    let primeiro = null;
    let encontrou = false;

    pratos.forEach(prato => {
        const texto = normalizarTexto(prato.textContent);
        const mostrar = !termo || texto.includes(termo);
        prato.style.display = mostrar ? '' : 'none';
        prato.classList.remove('jantar-search-hit');
        if (mostrar) {
            encontrou = true;
            if (!primeiro) primeiro = prato;
        }
    });

    const secoes = cardapioContainer.querySelectorAll('.secao-cardapio');
    secoes.forEach(secao => {
        const visiveis = secao.querySelectorAll('.prato:not([style*="display: none"])').length;
        secao.style.display = visiveis > 0 || !termo ? '' : 'none';
    });

    const avisoAtual = cardapioContainer.querySelector('.jantar-empty-search');
    if (termo && !encontrou) {
        if (!avisoAtual) {
            const aviso = document.createElement('div');
            aviso.className = 'cardapio-vazio jantar-empty-search';
            aviso.textContent = 'Nenhum prato encontrado para esta busca neste dia.';
            cardapioContainer.appendChild(aviso);
        }
    } else if (avisoAtual) {
        avisoAtual.remove();
    }

    if (termo && primeiro) {
        primeiro.classList.add('jantar-search-hit');
    }
}

function carregarAvaliacoes() {
    const salvo = localStorage.getItem(STORAGE_KEY);

    if (!salvo) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(avaliacoesPorDia));
        return;
    }

    try {
        const dados = JSON.parse(salvo);
        Object.keys(avaliacoesPorDia).forEach(dia => {
            avaliacoesPorDia[dia] = Array.isArray(dados[dia]) ? dados[dia] : [];
        });
    } catch (error) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(avaliacoesPorDia));
    }
}

function salvarAvaliacoes() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(avaliacoesPorDia));
}


function ordenarPorUtilidade(avaliacoes) {
    return [...avaliacoes].sort((a, b) => {
        const totalA = (a.util || 0) - (a.naoUtil || 0);
        const totalB = (b.util || 0) - (b.naoUtil || 0);
        if (totalB !== totalA) return totalB - totalA;
        return new Date(b.criadoEm || 0) - new Date(a.criadoEm || 0);
    });
}

function renderizarLista(container, avaliacoes, tipo) {
    if (!avaliacoes.length) {
        container.innerHTML = `<div class="avaliacao-card vazio">Ainda não há comentários para este dia. Seja o primeiro a avaliar.</div>`;
        return;
    }

    const lista = tipo === 'uteis'
        ? ordenarPorUtilidade(avaliacoes)
        : [...avaliacoes].reverse();

    container.innerHTML = lista.map(avaliacao => `
        <article class="avaliacao-card">
            <div class="avaliacao-topo">
                <strong>${avaliacao.nome}</strong>
                <button class="btn-delete" data-id="${avaliacao.id}" aria-label="Excluir ${avaliacao.nome}">Excluir</button>
            </div>
            <div class="avaliacao-nota">${gerarEstrelas(avaliacao.nota)}</div>
            <p>“${avaliacao.comentario}”</p>
            <div class="avaliacao-acoes">
                <button class="btn-uteis" data-id="${avaliacao.id}" data-voto="util">Útil (${avaliacao.util || 0})</button>
                <button class="btn-nao-uteis" data-id="${avaliacao.id}" data-voto="naoUtil">Não útil (${avaliacao.naoUtil || 0})</button>
            </div>
        </article>
    `).join('');
}

function mostrarAvaliacoes(dia, tipo = abaAtual) {
    diaSelecionado = dia;
    const avaliacoes = avaliacoesPorDia[dia] || [];

    botoesAvaliacoesDias.forEach(botao => {
        botao.classList.toggle('ativo', botao.dataset.dia === dia);
    });

    renderizarLista(listaAvaliacoes, avaliacoes, 'recentes');
    renderizarLista(listaAvaliacoesUteis, avaliacoes, 'uteis');

    if (tipo === 'uteis') {
        listaAvaliacoesUteis.parentElement.style.display = 'block';
        listaAvaliacoes.parentElement.style.display = 'none';
    } else {
        listaAvaliacoes.parentElement.style.display = 'block';
        listaAvaliacoesUteis.parentElement.style.display = 'none';
    }
}

function alternarPainelAvaliacoes() {
    const aberto = !painelAvaliacoes.classList.contains('aberto');
    painelAvaliacoes.classList.toggle('aberto', aberto);
    painelAvaliacoes.style.display = aberto ? 'block' : 'none';
    painelAvaliacoes.style.pointerEvents = aberto ? 'auto' : 'none';
    document.body.style.overflow = aberto ? 'hidden' : '';
}

function mudarAbaComentario(tab) {
    abaAtual = tab;
    botoesTabs.forEach(botao => {
        botao.classList.toggle('ativo', botao.dataset.tab === tab);
    });

    tabComentar.classList.toggle('ativo', tab === 'comentar');
    tabRecentes.classList.toggle('ativo', tab === 'recentes');
    tabUteis.classList.toggle('ativo', tab === 'uteis');

    if (tab === 'comentar') {
        tabComentar.style.display = 'block';
        tabRecentes.style.display = 'none';
        tabUteis.style.display = 'none';
    } else if (tab === 'recentes') {
        tabComentar.style.display = 'none';
        tabRecentes.style.display = 'block';
        tabUteis.style.display = 'none';
        mostrarAvaliacoes(diaSelecionado, 'recentes');
    } else {
        tabComentar.style.display = 'none';
        tabRecentes.style.display = 'none';
        tabUteis.style.display = 'block';
        mostrarAvaliacoes(diaSelecionado, 'uteis');
    }
}

botoesDias.forEach(botao => {
    botao.addEventListener('click', () => {
        const dia = botao.getAttribute('data-dia');
        mostrarCardapio(dia);
        mostrarAvaliacoes(dia);

        botoesDias.forEach(btn => btn.classList.remove('ativo'));
        botao.classList.add('ativo');
    });
});

botoesAvaliacoesDias.forEach(botao => {
    botao.addEventListener('click', () => {
        const dia = botao.getAttribute('data-dia');
        mostrarAvaliacoes(dia);

        botoesDias.forEach(btn => {
            btn.classList.toggle('ativo', btn.dataset.dia === dia);
        });

        const botaoMenu = document.querySelector(`.dia-btn[data-dia="${dia}"]`);
        if (botaoMenu) {
            botaoMenu.click();
        }
    });
});

botoesTabs.forEach(botao => {
    botao.addEventListener('click', () => {
        mudarAbaComentario(botao.dataset.tab);
    });
});

document.addEventListener('click', (event) => {
    const botaoUtil = event.target.closest('.btn-uteis');
    const botaoNaoUtil = event.target.closest('.btn-nao-uteis');
    const botaoExcluir = event.target.closest('.btn-delete');

    if (botaoUtil) {
        const id = botaoUtil.dataset.id;
        Object.keys(avaliacoesPorDia).forEach(dia => {
            avaliacoesPorDia[dia] = (avaliacoesPorDia[dia] || []).map(item => {
                if (item.id === id) {
                    return { ...item, util: (item.util || 0) + 1 };
                }
                return item;
            });
        });
        salvarAvaliacoes();
        pushToFirebase();
        mostrarAvaliacoes(diaSelecionado, abaAtual);
        return;
    }

    if (botaoNaoUtil) {
        const id = botaoNaoUtil.dataset.id;
        Object.keys(avaliacoesPorDia).forEach(dia => {
            avaliacoesPorDia[dia] = (avaliacoesPorDia[dia] || []).map(item => {
                if (item.id === id) {
                    return { ...item, naoUtil: (item.naoUtil || 0) + 1 };
                }
                return item;
            });
        });
        salvarAvaliacoes();
        pushToFirebase();
        mostrarAvaliacoes(diaSelecionado, abaAtual);
        return;
    }

    if (botaoExcluir) {
        const id = botaoExcluir.dataset.id;

        Object.keys(avaliacoesPorDia).forEach(dia => {
            avaliacoesPorDia[dia] = (avaliacoesPorDia[dia] || []).filter(item => item.id !== id);
        });

        salvarAvaliacoes();
        pushToFirebase();
        mostrarAvaliacoes(diaSelecionado, abaAtual);
    }
});

fecharAvaliacoes.addEventListener('click', () => {
    painelAvaliacoes.classList.remove('aberto');
    painelAvaliacoes.style.display = 'none';
    painelAvaliacoes.style.pointerEvents = 'none';
    document.body.style.overflow = '';
});

btnConfirmarComentario.addEventListener('click', () => {
    const nome = nomeComentario.value.trim();
    const texto = textoComentario.value.trim();
    const nota = Number(notaComentario.value);

    if (!nome || !texto || !nota) {
        return;
    }

    btnPublicarComentario.hidden = false;
    btnConfirmarComentario.textContent = 'Comentário confirmado';
    btnConfirmarComentario.disabled = true;
    btnConfirmarComentario.style.opacity = '0.85';
    btnPublicarComentario.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

formComentario.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = nomeComentario.value.trim();
    const texto = textoComentario.value.trim();
    const nota = Number(notaComentario.value);

    if (!nome || !texto || !nota) {
        return;
    }

    const novoComentario = {
        id: Date.now().toString(36) + Math.random().toString(36).slice(2, 8),
        nome,
        nota,
        comentario: texto,
        util: 0,
        naoUtil: 0,
        criadoEm: new Date().toISOString()
    };

    avaliacoesPorDia[diaSelecionado].push(novoComentario);
    salvarAvaliacoes();
    pushToFirebase();
    formComentario.reset();
    notaComentario.value = '5';
    resetarConfirmacao();
    mudarAbaComentario('recentes');
    mostrarAvaliacoes(diaSelecionado, 'recentes');
    // Comentário publicado e salvo; ficará visível para outros hóspedes (sem mensagem adicional)
});

function mostrarCardapio(dia) {
    const dados = cardapios[dia];
    if (!dados) {
        cardapioContainer.innerHTML = '<div class="cardapio-vazio">Cardápio não encontrado</div>';
        return;
    }

    const tema = dados.tema ? ` - ${dados.tema}` : '';
    tituloCardapio.textContent = `Cardápio de ${dados.nome}${tema}`;

    let html = '';
    if (dados.secoes) {
        dados.secoes.forEach(secao => {
            html += '<div class="secao-cardapio">';
            html += `<h3 class="titulo-secao">${secao.titulo}</h3>`;
            secao.itens.forEach(prato => {
                html += '<div class="prato">';
                html += `<span class="prato-nome">${prato.nome}</span>`;
                if (prato.descricao) {
                    html += `<span class="prato-descricao">${prato.descricao}</span>`;
                }
                html += '</div>';
            });
            if (secao.acompanhamento) {
                html += `<div class="acompanhamento-info"><strong>Acompanhamento:</strong> ${secao.acompanhamento}</div>`;
            }
            html += '</div>';
        });
    }

    cardapioContainer.innerHTML = html;
    aplicarPesquisaJantar();
}

// ========== INICIALIZAÇÃO ==========
window.addEventListener('DOMContentLoaded', () => {
    carregarAvaliacoes();
    const botaoDomingo = document.querySelector('[data-dia="domingo"]');
    if (botaoDomingo) botaoDomingo.click();
    mostrarAvaliacoes('domingo', 'recentes');
    mudarAbaComentario('comentar');
    painelAvaliacoes.classList.remove('aberto');
    notaComentario.value = '5';
    resetarConfirmacao();

    // Preencher opções de nota
    const notasTexto = ['5 estrelas', '4 estrelas', '3 estrelas', '2 estrelas', '1 estrela'];
    notaComentario.innerHTML = '';
    notasTexto.forEach((txt, idx) => {
        const opt = document.createElement('option');
        opt.value = String(5 - idx);
        opt.textContent = txt;
        notaComentario.appendChild(opt);
    });
    notaComentario.value = '5';

    // Inicializar Firebase
    initFirebase();

    if (jantarSearch) {
        jantarSearch.addEventListener('input', aplicarPesquisaJantar);
        jantarSearch.addEventListener('keydown', (event) => {
            if (event.key !== 'Enter') return;
            event.preventDefault();
            const destaque = document.querySelector('.prato.jantar-search-hit');
            if (destaque) {
                destaque.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });

        jantarSearch.addEventListener('keydown', (event) => {
            if (event.key !== 'Escape') return;
            jantarSearch.value = '';
            aplicarPesquisaJantar();
        });
    }

    if (jantarSearchClear && jantarSearch) {
        jantarSearchClear.addEventListener('click', () => {
            jantarSearch.value = '';
            aplicarPesquisaJantar();
            jantarSearch.focus();
        });
    }
});