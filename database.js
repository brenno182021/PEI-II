
var estoque = {
    coca: 0,
    agua: 0,
    frito: 0,
    assado: 0,
    bolo: 0,
    mousse: 0
};

function atualizarEstoqueTela() {
    for (const [chave, valor] of Object.entries(estoque)) {
        const el = document.getElementById('qtd-' + chave);
        if (el) el.innerText = valor;
    }
}

function entrada(produto) {
    estoque[produto]++;
    atualizarEstoqueTela();
    atualizarStatus && atualizarStatus();
}

function saida(produto) {
    if (estoque[produto] > 0) estoque[produto]--;
    atualizarEstoqueTela();
    atualizarStatus && atualizarStatus();
}
