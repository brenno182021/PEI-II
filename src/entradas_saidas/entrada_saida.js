import { estoque, urlApi, fetchTransactions } from "../../index.js"

const tbodyEntradaSaida = document.getElementById("entradaSaida-tbody")

document.addEventListener("DOMContentLoaded", setup)

async function setup() {
  const results = await fetchTransactions()
  estoque.push(...results)
  console.log(estoque)

  populaEntradaSaida()
}

function populaEntradaSaida() {
  estoque.forEach((item) => {
    const tr = createElementTrEntradaSaida(item)
    tbodyEntradaSaida.appendChild(tr)
  })
}

function createElementTrEntradaSaida(produto) {
  const tr = document.createElement("tr")

  const tdNome = document.createElement("td")
  tdNome.textContent = produto.nomeProduto

  const tdQuantidade = document.createElement("td")
  tdQuantidade.textContent = produto.quantidade

  const tdEntrada = document.createElement("td")
  const btnEntrada = createButtonEntrada(produto, tdQuantidade)
  tdEntrada.appendChild(btnEntrada)

  const tdSaida = document.createElement("td")
  const btnSaida = createButtonSaida(produto, tdQuantidade)
  tdSaida.appendChild(btnSaida)

  tr.appendChild(tdNome)
  tr.appendChild(tdQuantidade)
  tr.appendChild(tdEntrada)
  tr.appendChild(tdSaida)

  return tr
}

function createButtonEntrada(item, tdQuantidade) {
  const btn = document.createElement("button")
  btn.textContent = "Entrada"
  btn.addEventListener("click", async () => {
    item.quantidade++
    const response = await fetch(`${urlApi}/${item.id}`, {
      method: "PUT",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (response.ok) {
      tdQuantidade.textContent = item.quantidade
    }
  })
  return btn
}

function createButtonSaida(item, tdQuantidade) {
  const btn = document.createElement("button")
  btn.textContent = "Saída"
  btn.addEventListener("click", async () => {
    item.quantidade--
    const response = await fetch(`${urlApi}/${item.id}`, {
      method: "PUT",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (response.ok) {
      tdQuantidade.textContent = item.quantidade
    }
  })
  return btn
}
