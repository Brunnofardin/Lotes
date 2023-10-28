const conteudo  = {
    titulos:{
        t1:'Aréas a venda em local rural em vilage do Sol Guarapari Es',
        t2:'Lotes bem localizados em ruas principais',
    },
    imagens:{
        img1:'https://casacor.abril.com.br/wp-content/uploads/sites/7/2022/01/Casa-Liu-Raiz-Arquitetura-Foto-Leonardo-Giantomasi-2.jpg?quality=90&strip=info',

        img2:'https://casacor.abril.com.br/wp-content/uploads/sites/7/2022/01/Casa-Liu-Raiz-Arquitetura-Foto-Leonardo-Giantomasi-2.jpg?quality=90&strip=info'
    },
    paragrafos:{
        p1:'Area com 20.000m², campo society, poço de peixes, plantação e muito +',
        p2:'Não possui descrição'
    },
}

//  CONSTANTES NECESSÃRIAS

const textos = [...document.getElementsByClassName("texto")];
const imagens = [...document.getElementsByClassName("imagem")];

const desc = [...document.getElementsByClassName("des")]


function modificarTexto(obj,texto){

    textos.map((e,i,a)=>{
        if(i == obj){

            e.firstElementChild.innerHTML=texto
          

        }
    })
}
function modificarImagem(obj,link){

    imagens.map((e,i,a)=>{
        if(i == obj){

            e.style.backgroundImage=`url(${link})`
        }
    })
}
function modificarDesc(obj,texto){

    desc.map((e,i,a)=>{
        if(i == obj){

           e.firstElementChild.innerHTML=texto

        }
    })
}


//MODIFICANDO TEXTO 1 E 2

modificarTexto(0,conteudo.titulos.t1)
modificarTexto(1,conteudo.titulos.t2)

// MODIFICANDO IMAGEM 1 E 2

modificarImagem(0,conteudo.imagens.img1)
modificarImagem(1,conteudo.imagens.img2)

// MODIFICAR DESCRIÇÃO 1 E 2
modificarDesc(0,conteudo.paragrafos.p1)
modificarDesc(1,conteudo.paragrafos.p2)



