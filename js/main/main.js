const btn_menu = document.getElementsByClassName('btn_menu')[0];
const menuF = document.getElementsByClassName('menu_mobile')[0];

btn_menu.addEventListener('click',()=>{
    if(menuF.style.display=='flex'){
        menuF.style.display = 'none'
    }else{
        menuF.style.display='flex'
    }
});

window.onresize = ()=>{
    if(window.innerWidth >= 490){
        menuF.style.display='none'
    }else{

    }
};