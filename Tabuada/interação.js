function tabuada() {
    let numero = document.getElementById('numero')
    let tabuada = document.getElementById('tabuada')

    if (numero.value.length == 0) {
        window.alert('[ERRO] Digite um número para prosseguir!')
    } else {

        let n = Number(numero.value)
        tabuada.innerHTML = ''
        let c = 1

        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            tabuada.appendChild(item)
            c++
        }
    }
}