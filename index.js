function mostrar(){
    var nome = window.document.getElementById('txtnome').value
    var n = window.document.getElementById('name')
    if(nome == 'ricardo'){
        n.innerHTML = 'Ricardo começa com a letra <strong>maiuscula!</strong>'
    } else if(nome == ''){
        n.innerText = 'Tem que digitar seu nome pra eu descobrir!'
    } else if(nome.toLowerCase() == 'ric'){
        n.innerHTML = 'Ric não é um <strong>nome</strong>'
    } else if(nome.toLowerCase() != 'ricardo'){
        n.innerHTML = `<strong>SEU NOME NÃO É ${nome.toUpperCase()}!</strong>`
    } else if(nome == 'Ricardo'){
        n.innerHTML = 'Você acertou seu nome <br><strong>PARABENS!</strong>'
    }
}