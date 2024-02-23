
let numeroGenerato;

const numero = document.getElementById('numero')
numero.addEventListener('click', function (e) {
    numeroGenerato = Math.floor(Math.random() * 76)
    console.log(numeroGenerato)
    const tabella = document.getElementById('tabella')
    const celle = tabella.getElementsByTagName('td')
    celle[numeroGenerato - 1].style.backgroundColor = 'gray'
    const p = document.getElementById('estrazione')
    p.innerText = 'Numero: ' + numeroGenerato
})

const creaCartelline = document.getElementById('crea')
creaCartelline.addEventListener('click', function (e) {
    generaTabella()
})

function generaTabella() {
    const table = document.createElement('table')
    table.setAttribute('id', 'tabellina')
    const tr = []
    tr.push(document.createElement('tr'))
    tr.push(document.createElement('tr'))
    const td = []
    let numeroRandom = []
    for (let i = 0; i < 12; i++) {
        const temp = document.createElement('td')
        const numTemp = Math.floor(Math.random() * 76)
        if (numeroRandom.length === 0 || !numeroRandom.includes(numTemp)) {
            numeroRandom.push(numTemp)
            td.innerText = numTemp
            td.push(temp)

        }
    }
}
