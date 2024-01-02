
// VARIAVEIS NECESSÁRIAS
const main = document.getElementsByTagName("main")[0];
// "BANCO DE DADOS"
const conteudo={
    Imgs:{
        img1:"https://img.freepik.com/fotos-gratis/villa-com-piscina-de-luxo-espetacular-design-contemporaneo-arte-digital-imoveis-casa-casa-e-propriedade-ge_1258-150749.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698278400&semt=sph",

        img2:"https://img.freepik.com/fotos-gratis/villa-com-piscina-de-luxo-espetacular-design-contemporaneo-arte-digital-imoveis-casa-casa-e-propriedade-ge_1258-150749.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698278400&semt=sph",
        
        img3:"https://img.freepik.com/fotos-gratis/villa-com-piscina-de-luxo-espetacular-design-contemporaneo-arte-digital-imoveis-casa-casa-e-propriedade-ge_1258-150749.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698278400&semt=sph",
    },
    Titulos:{
        t1:"Titulo 1",
        t2:"Titulo 2",
        t3:"Titulo 3",

    },
    Paragrafos:{
        p1:"Parágrafo 1",
        p2:"Parágrafo 2",
        p3:"Parágrafo 3",
    }
}
// FUNAÇÃO PARA CRIAR CARDS PERSONALIZADOS DOS LOTES
function criarEl(qtd){
    for(c=1;c<=qtd;c++){


        // CRIANDO ELEMENTOS    	
        const div01 = document.createElement("div");
        const section01 = document.createElement("section");
        const section02 = document.createElement("section");
        const p01 = document.createElement("p");
        const h101 = document.createElement("h1");
        // CONFIGURANDO ELEMENTOS
        div01.setAttribute("class","card");
        section01.setAttribute("class","img");
        section02.setAttribute("class","des");
        //  SETANDO ITENS EM SUAS POSIÇÕES
        div01.appendChild(section01);
        div01.appendChild(section02);
        section02.appendChild(h101);
        section02.appendChild(p01);
        // ADICIONANDO ELEMENTOS A PÁGINA
        main.appendChild(div01)



    }
    
} 
// FUNÇÃO PARA EDITAR ELEMENTOS

function editarImg(obj,link){
    const s1 = [...document.getElementsByClassName("img")];
    s1.map((e,i,a)=>{
        if(obj == i){
        
            e.style.backgroundImage=`url(${link})`;
        }

    })

}
function editarTitle(obj,title){
    
    const s2 = [...document.getElementsByClassName("des")];

    s2.map((e,i,a)=>{
        
        if(i == obj){
            e.firstChild.textContent=title
            
        }
    })
}
function ediatrParagrafo(obj,texto){
    
    const s2 = [...document.getElementsByClassName("des")];
    
    s2.map((e,i,a)=>{
        if(i == obj){
           e.lastChild.textContent=texto
        }
    })
}

// CRIANDO ELEMENTOS
criarEl(3);
// EDITANDO CARD01
editarImg(0,conteudo.Imgs.img1)
editarTitle(0,conteudo.Titulos.t1)
ediatrParagrafo(0,conteudo.Paragrafos.p1)

// EDITANDO CARD02
editarImg(1,conteudo.Imgs.img2)
editarTitle(1,conteudo.Titulos.t2)
ediatrParagrafo(1,conteudo.Paragrafos.p2)

// EDITANDO CARD03
editarImg(2,conteudo.Imgs.img3)
editarTitle(2,conteudo.Titulos.t3)
ediatrParagrafo(2,conteudo.Paragrafos.p3)