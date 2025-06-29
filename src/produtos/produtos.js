import { estoque, urlApi, fetchTransactions } from "../../index.js"

const tbodyProdutos = document.getElementById("produtos-tbody")

document.addEventListener("DOMContentLoaded", setup)

async function setup() {
  const results = await fetchTransactions()
  estoque.push(...results)
  console.log(estoque)

  populaProduto()
}

function populaProduto() {
  estoque.forEach((item) => {
    const tr = createElementTrProduto(item)
    tbodyProdutos.appendChild(tr)
  })
}

function createElementTrProduto(produto) {
  const tr = document.createElement("tr")
  tr.innerHTML = `
    <td>${produto.nomeProduto}</td>
    <td>${produto.quantidade}</td>
    `
  return tr
}
