$(document).on("click", "#cadastrar", function () {
    var nome = $("#nome").val()
    var sobrenome = $("#sobrenome").val()
    var telefone = $("#telefone").val()
    var nascimento = $("#nascimento").val()
    var _nascimento = nascimento.split('-').reverse().join('/')
    var membro = $("#membro").val()
    var _membro = membro.split('-').reverse().join('/')
    var endereco = $("#endereco").val()

    if (nome.length > 50) {
        alert("Nome Inválido!")
    } else if (sobrenome.length > 50) {
        alert("Sobrenome Inválido!")
    } else if (telefone.length > 11) {
        alert("Telefone Inválido")
    } else {
        var dados = {
            nome: nome,
            sobrenome: sobrenome,
            telefone: telefone,
            nascimento: _nascimento,
            membro: _membro,
            endereco: endereco
        }
        $.post("http://omahteu.pythonanywhere.com/ficha/", dados, () => {
            alert("Membro Cadastrado!")
            document.getElementById("contactForm").reset()
        })
    }
})
