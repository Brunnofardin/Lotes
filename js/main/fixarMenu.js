const menuPc = document.getElementsByClassName("menu_pc")[0]
const menuMobile = document.getElementsByClassName("menu_mobile")[0]

const topoPc = menuPc.offsetTop
const topoMobile = menuMobile.offsetTop

function alterar(){

    if(window.innerWidth >= 490){
       
        if(scrollY > topoPc){

            menuPc.classList.add("fixar")

        }else{

            menuPc.classList.remove("fixar")
        }
            
    
    }else{
        
        if(scrollY > topoMobile){

            menuMobile.classList.add("fixar")

        }else{

            menuMobile.classList.remove("fixar")

        }
          
        
    
    }

}

window.onscroll = ()=>{

    alterar()

}
