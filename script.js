let n = 0;
var usuarioCadastrado = "khdjfgvjdsgbvsdf"
var senhaCadastrada = "67357357356"

function login(){
     modal.style.display = "block";
    
}

function logar(){
    const senha = document.getElementById("senha");
    const usuario = document.getElementById("usuario")
    
        if(senha.value == senhaCadastrada.value && usuario.value == usuarioCadastrado.value){
            modal.style.display = "none";
            let nomeUsuario = document.getElementById("nomeUsuario");
            nomeUsuario.innerHTML = `Olá ${ usuarioCadastrado.value}` 
        }
        else{
            let validacao = document.getElementById("validacao");
            validacao.innerHTML = "Usuario ou senha invalidos";     
        }
    
}



function fecharModal(){
    modal.style.display = "none";
}

function registrar(){
    modal.style.display = "none";
    modalRegistrar.style.display = "block"
}

function voltar(){
    modal.style.display = "block";
    modalRegistrar.style.display = "none"
}

function salvar(){
    usuarioCadastrado = document.getElementById("usuarioCadastrado");
    senhaCadastrada = document.getElementById("senhaCadastrada");
    let validacaoOk = document.getElementById("validacaoOk");
        validacaoOk.innerHTML = "Usuario cadastrado com sucesso";
}

function fecharModalRegistrar(){
    modalRegistrar.style.display = "none";
}

function clickMenu(){
    if(menuExpandido.style.display == "block"){
        menuExpandido.style.display = "none";
    }
    else{
        menuExpandido.style.display = "block";
        iBurguer.style.display = "none";
    }

    
}

function clickFechar(){
    if(menuExpandido.style.display = "block"){
        menuExpandido.style.display = "none"
        iBurguer.style.display = "block";
    }
    
}

function clickCafe(){
    if(cafeEspecial.style.display == "block"){
        cafeEspecial.style.display = "none";
    }
    else{
        cafeEspecial.style.display = "block";

    }
    
}

addEventListener("scroll", function(){
    let abc = document.getElementById("header");
    if(window.scrollY > 40){
        header.style.background = "white";
    }
    else{
        header.style.background = "none";
    }
})

function adicionarCarrinho(){
    n++;
    document.getElementById('carrinho').innerHTML = n;
}

function adicionarFavorito(){
    const favorito = document.getElementById("trocarFavorito")
    const favAntigo = document.getElementById("iconFavorito")
    if(favAntigo != null){
        favorito.innerHTML = '<i class="bi bi-star-fill"></i>'
    }
    else{
        favorito.innerHTML ='<img class="iconFavorito" id="iconFavorito" src="imagens/Favorito.svg" alt="" >'
    }

}
function adicionarFavo(){
    const favo = document.getElementById("trocarFavo")
    const favAntigo = document.getElementById("iconFavo")
    if(favAntigo != null){
        favo.innerHTML = '<i class="bi bi-star-fill"></i>'
    }
    else{
        favo.innerHTML ='<img class="iconFavo" id="iconFavo" src="imagens/Favorito.svg" alt="" >'
    }

}