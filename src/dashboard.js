import { estoque, urlApi, fetchTransactions } from "../../index.js"

const tbodyDashBoard = document.getElementById("dashboard-tbody")

document.addEventListener("DOMContentLoaded", setup)

async function setup() {
  const results = await fetchTransactions()
  estoque.push(...results)
  console.log(estoque)

  populaDashBoard()
}

function populaDashBoard() {
  estoque.forEach((item) => {
    const tr = createElementTrDashBoard(item)
    tbodyDashBoard.appendChild(tr)
  })
}

function createElementTrDashBoard(produto) {
  const tr = document.createElement("tr")
  tr.innerHTML = `
  <td>${produto.nomeProduto}</td>
  <td>${produto.categoria}</td>
  <td>${produto.quantidade}</td>
  <td>${produto.validade}</td>
  `
  return tr
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
