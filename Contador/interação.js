function contar() {
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = '<br>Você deve preencher os campos para poder prosseguir!'
    } else {
        res.innerHTML = '<br>Contando:<br><br> '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p == 0) {
            window.alert('Valor de PASSO inválido. CONSIDERANDO PASSO 1')
            p = 1
        }

        if (i < f) {

            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` \u{1f449} ${c} `
            }

        }

        if (i > f) {

            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` \u{1f449} ${c} `
            }

        }

        res.innerHTML += '<br><br>Fim da contagem \u{1F3C1} '

    }
}