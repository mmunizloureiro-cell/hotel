// Dados do cardápio para cada dia da semana
const cardapios = {
    segunda: {
        nome: "Segunda-feira",
        tema: "",
        pratos: [
            { nome: "Grelhados variados", descricao: "Carnes nobres na brasa" },
            { nome: "Frutos do mar", descricao: "Camarão e peixe fresco" },
            { nome: "Saladas frescas", descricao: "Salada verde, Caesar e caprese" },
            { nome: "Arroz integral e batata" },
            { nome: "Sobremesas sortidas", descricao: "Pudim, brownie e frutas" }
        ]
    },
    terca: {
        nome: "Terça-feira",
        tema: "",
        pratos: [
            { nome: "Costela assada", descricao: "Macia e suculenta" },
            { nome: "Frango com alho", descricao: "Frango grelhado com molho especial" },
            { nome: "Acompanhamentos", descricao: "Batata, mandioca e milho" },
            { nome: "Saladas frescas" },
            { nome: "Mousse de chocolate", descricao: "Leve e saboroso" }
        ]
    },
    quarta: {
        nome: "Quarta-feira",
        tema: "🍝 NOITE DE MASSAS",
        pratos: [
            { nome: "Lasanha à bolonhesa", descricao: "Clássica e deliciosa" },
            { nome: "Fettuccine Alfredo", descricao: "Molho branco cremoso" },
            { nome: "Penne à Arrabbiata", descricao: "Molho vermelho picante" },
            { nome: "Rigatoni com cogumelos", descricao: "Molho caseiro especial" },
            { nome: "Pão de alho fresco" },
            { nome: "Tiramisú", descricao: "Sobremesa italiana tradicional" },
            { nome: "Panna Cotta", descricao: "Cremoso e suave" }
        ]
    },
    quinta: {
        nome: "Quinta-feira",
        tema: "",
        pratos: [
            { nome: "Picanha na brasa", descricao: "Corte suculento e macio" },
            { nome: "Filé com molho madeira" },
            { nome: "Peixe grelhado", descricao: "Com limão e temperos aromáticos" },
            { nome: "Legumes na manteiga" },
            { nome: "Acompanhamentos variados" },
            { nome: "Pavê", descricao: "Clássico dessert gelado" }
        ]
    },
    sexta: {
        nome: "Sexta-feira",
        tema: "🇧🇷 NOITE BAIANA",
        secoes: [
            {
                titulo: "🥗 Saladas",
                itens: [
                    { nome: "Mix de folhas" },
                    { nome: "Feijão branco" },
                    { nome: "Abobrinha" },
                    { nome: "Repolho" }
                ],
                acompanhamento: "Vinagrete"
            },
            {
                titulo: "🍲 Sopa",
                itens: [
                    { nome: "Sopa de legumes" }
                ],
                acompanhamento: "Cesta de pães/torradas • Limão à francesa"
            },
            {
                titulo: "🍚 Acompanhamentos",
                itens: [
                    { nome: "Feijão" },
                    { nome: "Arroz" }
                ]
            },
            {
                titulo: "🍤 Pratos Principais",
                itens: [
                    { nome: "Vatapá", descricao: "Prato baiano tradicional" },
                    { nome: "Caruru", descricao: "Especialidade da culinária baiana" },
                    { nome: "Bobó de camarão", descricao: "Cremoso e temperado" }
                ]
            },
            {
                titulo: "🍗 Proteínas",
                itens: [
                    { nome: "Xixim de galinha", descricao: "Frango ao molho de dendê" },
                    { nome: "Bacalhau ao molho de coco", descricao: "Peixe nobre preparado especialmente" }
                ]
            },
            {
                titulo: "🍰 Sobremesas",
                itens: [
                    { nome: "Gelatina" },
                    { nome: "Pudim", descricao: "Com calda de caramelo" },
                    { nome: "Cocada baiana", descricao: "Doce tradicional de coco" }
                ]
            }
        ]
    },
    sabado: {
        nome: "Sábado",
        tema: "",
        pratos: [
            { nome: "Cordeiro assado", descricao: "Premium e macio" },
            { nome: "Frutos do mar", descricao: "Camarão, polvo e lula" },
            { nome: "Carnes variadas na brasa" },
            { nome: "Saladas da casa" },
            { nome: "Acompanhamentos especiais", descricao: "Batata suíça, legumes refogados" },
            { nome: "Suflê de chocolate", descricao: "Quente e saboroso" },
            { nome: "Sorvete artesanal" }
        ]
    },
    domingo: {
        nome: "Domingo",
        tema: "",
        pratos: [
            { nome: "Churrasco completo", descricao: "Seleção de carnes premium" },
            { nome: "Frango do sertão" },
            { nome: "Peixe inteiro grelhado" },
            { nome: "Tropeiro", descricao: "Feijão, carne seca e farinha" },
            { nome: "Saladas variadas" },
            { nome: "Acompanhamentos da casa" },
            { nome: "Pavê doce" },
            { nome: "Caldas variadas", descricao: "Chocolate, caramelo e morango" }
        ]
    }
};

const STORAGE_KEY = 'hotel-beach-hills-avaliacoes';
const avaliacoesPorDia = Object.fromEntries(
    Object.keys(cardapios).map(dia => [dia, []])
);

// Elementos do DOM
const botoesDias = document.querySelectorAll('.dia-btn');
const botoesAvaliacoesDias = document.querySelectorAll('.avaliacao-dia');
const botoesTabs = document.querySelectorAll('.tab-comentario');
const cardapioContainer = document.getElementById('cardapio');
const tituloCardapio = document.getElementById('titulo-cardapio');
const toggleAvaliacoes = document.getElementById('toggle-avaliacoes');
const painelAvaliacoes = document.getElementById('avaliacoes-panel');
const fecharAvaliacoes = document.getElementById('fechar-avaliacoes');
const listaAvaliacoes = document.getElementById('lista-avaliacoes');
const formComentario = document.getElementById('form-comentario');
const nomeComentario = document.getElementById('nome-comentario');
const notaComentario = document.getElementById('nota-comentario');
const textoComentario = document.getElementById('texto-comentario');
const tabComentar = document.getElementById('comentar-tab');
const tabVer = document.getElementById('ver-tab');

let diaSelecionado = 'domingo';

function gerarEstrelas(nota) {
    return '★'.repeat(nota) + '☆'.repeat(5 - nota);
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

function mostrarAvaliacoes(dia) {
    diaSelecionado = dia;
    const avaliacoes = avaliacoesPorDia[dia] || [];

    botoesAvaliacoesDias.forEach(botao => {
        botao.classList.toggle('ativo', botao.dataset.dia === dia);
    });

    if (!avaliacoes.length) {
        listaAvaliacoes.innerHTML = '<div class="avaliacao-card vazio">Ainda não há comentários para este dia. Seja o primeiro a avaliar.</div>';
        return;
    }

    listaAvaliacoes.innerHTML = avaliacoes
        .slice()
        .reverse()
        .map(avaliacao => `
            <article class="avaliacao-card">
                <div class="avaliacao-topo">
                    <strong>${avaliacao.nome}</strong>
                    <button class="btn-delete" data-id="${avaliacao.id}" aria-label="Excluir comentário de ${avaliacao.nome}">Excluir</button>
                </div>
                <div class="avaliacao-nota">${gerarEstrelas(avaliacao.nota)}</div>
                <p>“${avaliacao.comentario}”</p>
            </article>
        `)
        .join('');
}

function alternarPainelAvaliacoes() {
    const aberto = painelAvaliacoes.classList.toggle('aberto');
    toggleAvaliacoes.setAttribute('aria-expanded', String(aberto));
}

function mudarAbaComentario(tab) {
    botoesTabs.forEach(botao => {
        botao.classList.toggle('ativo', botao.dataset.tab === tab);
    });

    tabComentar.classList.toggle('ativo', tab === 'comentar');
    tabVer.classList.toggle('ativo', tab === 'ver');
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

toggleAvaliacoes.addEventListener('click', alternarPainelAvaliacoes);
fecharAvaliacoes.addEventListener('click', () => {
    painelAvaliacoes.classList.remove('aberto');
    toggleAvaliacoes.setAttribute('aria-expanded', 'false');
});

formComentario.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = nomeComentario.value.trim();
    const texto = textoComentario.value.trim();
    const nota = Number(notaComentario.value);

    if (!nome || !texto || !nota) {
        return;
    }

    const confirmarEnvio = window.confirm(`Confirmar comentário de ${nome} com ${nota} estrela(s)?`);
    if (!confirmarEnvio) {
        return;
    }

    const novoComentario = {
        id: Date.now().toString(36) + Math.random().toString(36).slice(2, 8),
        nome,
        nota,
        comentario: texto
    };

    avaliacoesPorDia[diaSelecionado].push(novoComentario);
    salvarAvaliacoes();
    formComentario.reset();
    notaComentario.value = '5';
    mudarAbaComentario('ver');
    mostrarAvaliacoes(diaSelecionado);
});

document.addEventListener('click', (event) => {
    const botaoExcluir = event.target.closest('.btn-delete');
    if (!botaoExcluir) return;

    const id = botaoExcluir.dataset.id;

    Object.keys(avaliacoesPorDia).forEach(dia => {
        avaliacoesPorDia[dia] = (avaliacoesPorDia[dia] || []).filter(item => item.id !== id);
    });

    salvarAvaliacoes();
    mostrarAvaliacoes(diaSelecionado);
});

// Função para exibir o cardápio do dia
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
    } else {
        dados.pratos.forEach(prato => {
            html += '<div class="prato">';
            html += `<div class="prato-nome">${prato.nome}</div>`;
            if (prato.descricao) {
                html += `<div class="prato-descricao">${prato.descricao}</div>`;
            }
            html += '</div>';
        });
    }
    
    cardapioContainer.innerHTML = html;
}

window.addEventListener('DOMContentLoaded', () => {
    carregarAvaliacoes();
    const botaoDomingo = document.querySelector('[data-dia="domingo"]');
    if (botaoDomingo) {
        botaoDomingo.click();
    }
    mostrarAvaliacoes('domingo');
    mudarAbaComentario('comentar');
    painelAvaliacoes.classList.remove('aberto');
    notaComentario.value = '5';
});