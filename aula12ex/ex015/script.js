function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!') 
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade Calculada: ${idade}`
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'png/menino.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'png/homem-jovem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'png/homem-adulto.png')
            } else {
                //Idoso
                img.setAttribute('src', 'png/homem-idoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'png/menina.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'png/mulher-jovem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'png/mulher-adulta.png')
            } else {
                //Idoso
                img.setAttribute('src', 'png/mulher-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}