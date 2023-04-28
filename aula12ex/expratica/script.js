function carregar() {
    var msg = document.getElementById ('msg')
    var img = document.getElementById ('imagem')
    var data = new Date()
    dayname = new Array ('Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado')
    var dia = dayname[data.getDay()]
    //var dia = 'Domingo'
    msg.innerHTML = `Hoje é ${dia}.`
        if (dia == 'Segunda') {
            img.src = 'png/mood1.png'
            document.body.style.background = 'rgb(182, 196, 182)'
        }
        if (dia == 'Terça') {
            img.src = 'png/mood2.png'
            document.body.style.background = '#2A3D6E'
        }
        if (dia == 'Quarta') {
            img.src = 'png/mood3.png'
        }
        if (dia == 'Quinta') {
            img.src = 'png/mood4.png'
            document.body.style.background = '#EDBBBC'
        }
        if (dia == 'Sexta') {
            img.src = 'png/mood5.png'
        }
        if (dia == 'Sábado') {
            img.src = 'png/mood6.png'
        }
        if (dia == 'Domingo') {
            img.src = 'png/mood7.png'
        }
}