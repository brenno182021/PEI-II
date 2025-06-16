var estoque = {
  coca: 45,
  agua: 100,
  frito: 20,
  assado: 20,
  bolo: 5,
  mousse: 5,
}

function atualizarEstoqueTela() {
  for (const [chave, valor] of Object.entries(estoque)) {
    const el = document.getElementById("qtd-" + chave)
    if (el) el.innerText = valor
  }
}

function entrada(produto) {
  estoque[produto]++
  atualizarEstoqueTela()
  atualizarStatus && atualizarStatus()
}

function saida(produto) {
  if (estoque[produto] > 0) estoque[produto]--
  atualizarEstoqueTela()
  atualizarStatus && atualizarStatus()
}
