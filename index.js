export const estoque = []

export const urlApi = "http://localhost:3000/estoque"

export async function fetchTransactions() {
  return await fetch(urlApi).then((res) => res.json())
}
