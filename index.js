let v = []
let texto = window.document.querySelector('div#fim')
let n = window.document.getElementById('txtNum')
let lista = window.document.getElementById('slcList')

function notNumber(r){
    if(Number.parseInt(r) > 0 && Number.parseInt(r) <= 100){
        return false
    } else{
        return true
    }
}

function adicionar(){
    texto.innerHTML = ''
    let num = Number.parseInt(n.value)
    let verif = v.indexOf(num)

    if(notNumber(num) || n.length == 0 || num < 1 || num > 100 || verif != -1){
        window.alert('Valor invalido ou ja encontrado na lista')
    } else{
        v.push(num)
        let item = window.document.createElement('option')
        item.value = `lst${num}`
        item.text = `Numero - ${num}`
        lista.appendChild(item)
    }
    
    n.value = ''
    n.focus()   //Coloca o foco (cursor para digitação) na caixa de texto
}

function finalizar(){
    if(v.length == 0){
        window.alert('Insira algum valor para finalizar')
    } else{
        let total = v.length
        let maior = v[0]
        let menor = v[0]
        let soma = 0

        for(let c in v){
            if(v[c] > maior){
                maior = v[c]
            }

            if(v[c] < menor){
                menor = v[c]
            }

            soma += v[c]
        }

        let media = soma / total

        texto.innerHTML = `Foram cadastrados ${total} numeros<br>`
        texto.innerHTML += `O maior numero foi ${maior}<br>`
        texto.innerHTML += `O menor numero foi ${menor}<br>`
        texto.innerHTML += `A soma entre os numeros é ${soma}<br>`
        texto.innerHTML += `A media entre os numeros é ${media}<br>`
    }
}