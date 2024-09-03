let popupCharrado = document.querySelector(".divQuantidadesCharrado")
let popupBiroBiro = document.querySelector(".divQuantidadesBiroBiro")
let popupGrod = document.querySelector(".divQuantidadesGrod")
let popupRoxane = document.querySelector(".divQuantidadesRoxane")
let popupPiroPiro = document.querySelector(".divQuantidadesPiroPiro")
let popupAzulety = document.querySelector(".divQuantidadesAzulety")

let popupForca = document.querySelector(".divQuantidadesForca")
let popupVel = document.querySelector(".divQuantidadesVel")
let popupAmor = document.querySelector(".divQuantidadesAmor")
let popupVoo = document.querySelector(".divQuantidadesVoo")
let popupResist = document.querySelector(".divQuantidadesResist")
let popupInvi = document.querySelector(".divQuantidadesInvi")

let editarCarrinhoCharrado = document.querySelector(".editarIconCharrado")
let editarCarrinhoBiroBiro = document.querySelector(".editarIconBiroBiro")
let editarCarrinhoGrod = document.querySelector(".editarIconGrod")
let editarCarrinhoRoxane = document.querySelector(".editarIconRoxane")
let editarCarrinhoPiroPiro = document.querySelector(".editarIconPiroPiro")
let editarCarrinhoAzulety = document.querySelector(".editarIconAzulety")

let editarCarrinhoForca = document.querySelector(".editarIconForca")
let editarCarrinhoVel = document.querySelector(".editarIconVel")
let editarCarrinhoAmor = document.querySelector(".editarIconAmor")
let editarCarrinhoVoo = document.querySelector(".editarIconVoo")
let editarCarrinhoResist = document.querySelector(".editarIconResist")
let editarCarrinhoInvi = document.querySelector(".editarIconInvi")

editarCarrinhoCharrado.addEventListener("click", () => {
    let stylePopupCharrado = window.getComputedStyle(popupCharrado);
    let displayPopupCharrado = stylePopupCharrado.getPropertyValue('display');

    if(displayPopupCharrado == "none"){
        popupCharrado.style.display = "flex";

    }else{
        popupCharrado.style.display = "none";

    }
});
editarCarrinhoBiroBiro.addEventListener("click", () => {
    let stylePopupBiroBiro = window.getComputedStyle(popupBiroBiro);
    let displayPopupBiroBiro = stylePopupBiroBiro.getPropertyValue('display');

    if(displayPopupBiroBiro == "none"){
        popupBiroBiro.style.display = "flex";

    }else{
        popupBiroBiro.style.display = "none";

    }
});
editarCarrinhoGrod.addEventListener("click", () => {
    let stylePopupGrod = window.getComputedStyle(popupGrod);
    let displayPopupGrod = stylePopupGrod.getPropertyValue('display');

    if(displayPopupGrod == "none"){
        popupGrod.style.display = "flex";

    }else{
        popupGrod.style.display = "none";

    }
});
editarCarrinhoRoxane.addEventListener("click", () => {
    let stylePopupRoxane = window.getComputedStyle(popupRoxane);
    let displayPopupRoxane = stylePopupRoxane.getPropertyValue('display');

    if(displayPopupRoxane == "none"){
        popupRoxane.style.display = "flex";

    }else{
        popupRoxane.style.display = "none";

    }
});
editarCarrinhoPiroPiro.addEventListener("click", () => {
    let stylePopupPiroPiro = window.getComputedStyle(popupPiroPiro);
    let displayPopupPiroPiro = stylePopupPiroPiro.getPropertyValue('display');

    if(displayPopupPiroPiro == "none"){
        popupPiroPiro.style.display = "flex";

    }else{
        popupPiroPiro.style.display = "none";

    }
});
editarCarrinhoAzulety.addEventListener("click", () => {
    let stylePopupAzulety = window.getComputedStyle(popupAzulety);
    let displayPopupAzulety = stylePopupAzulety.getPropertyValue('display');

    if(displayPopupAzulety == "none"){
        popupAzulety.style.display = "flex";

    }else{
        popupAzulety.style.display = "none";

    }
});
editarCarrinhoForca.addEventListener("click", () => {
    let stylePopupForca = window.getComputedStyle(popupForca);
    let displayPopupForca = stylePopupForca.getPropertyValue('display');

    if(displayPopupForca == "none"){
        popupForca.style.display = "flex";

    }else{
        popupForca.style.display = "none";

    }
});
editarCarrinhoAmor.addEventListener("click", () => {
    let stylePopupAmor = window.getComputedStyle(popupAmor);
    let displayPopupAmor = stylePopupAmor.getPropertyValue('display');

    if(displayPopupAmor == "none"){
        popupAmor.style.display = "flex";

    }else{
        popupAmor.style.display = "none";

    }
});
editarCarrinhoResist.addEventListener("click", () => {
    let stylePopupResist = window.getComputedStyle(popupResist);
    let displayPopupResist = stylePopupResist.getPropertyValue('display');

    if(displayPopupResist == "none"){
        popupResist.style.display = "flex";

    }else{
        popupResist.style.display = "none";

    }
});
editarCarrinhoVel.addEventListener("click", () => {
    let stylePopupVel = window.getComputedStyle(popupVel);
    let displayPopupVel = stylePopupVel.getPropertyValue('display');

    if(displayPopupVel == "none"){
        popupVel.style.display = "flex";

    }else{
        popupVel.style.display = "none";

    }
});
editarCarrinhoVoo.addEventListener("click", () => {
    let stylePopupVoo = window.getComputedStyle(popupVoo);
    let displayPopupVoo = stylePopupVoo.getPropertyValue('display');

    if(displayPopupVoo == "none"){
        popupVoo.style.display = "flex";

    }else{
        popupVoo.style.display = "none";

    }
});
editarCarrinhoInvi.addEventListener("click", () => {
    let stylePopupInvi = window.getComputedStyle(popupInvi);
    let displayPopupInvi = stylePopupInvi.getPropertyValue('display');

    if(displayPopupInvi == "none"){
        popupInvi.style.display = "flex";

    }else{
        popupInvi.style.display = "none";
    }
});

function enviarCarrinho() {
    let inputQuantidadeNumeroCharrado = document.querySelector("#charrado").value
    
    localStorage.setItem(
        'beijoCharrado', inputQuantidadeNumeroCharrado
    )
    let stylePopupCharrado = window.getComputedStyle(popupCharrado);
    let displayPopupCharrado = stylePopupCharrado.getPropertyValue('display');

    if(displayPopupCharrado == "flex"){
        popupCharrado.style.display = "none";

    }else{
        popupCharrado.style.display = "flex";

    }

    

}
function enviarCarrinhoBiroBiro() {
    let inputQuantidadeNumeroBiroBiro = document.querySelector("#BiroBiro").value
    
    localStorage.setItem(
        'beijoBiroBiro', inputQuantidadeNumeroBiroBiro
    )
    let stylePopupBiroBiro = window.getComputedStyle(popupBiroBiro);
    let displayPopupBiroBiro = stylePopupBiroBiro.getPropertyValue('display');

    if(displayPopupBiroBiro == "flex"){
        popupBiroBiro.style.display = "none";

    }else{
        popupBiroBiro.style.display = "flex";

    }

    

}
function enviarCarrinhoGrod() {
    let inputQuantidadeNumeroGrod = document.querySelector("#Grod").value
     localStorage.setItem(
        'beijoGrod', inputQuantidadeNumeroGrod
    )
    let stylePopupGrod = window.getComputedStyle(popupGrod);
    let displayPopupGrod = stylePopupGrod.getPropertyValue('display');

    if(displayPopupGrod == "flex"){
        popupGrod.style.display = "none";

    }else{
        popupGrod.style.display = "flex";

    }

    

}
function enviarCarrinhoRoxane() {
    let inputQuantidadeNumeroRoxane = document.querySelector("#Roxane").value
       localStorage.setItem(
        'beijoRoxane', inputQuantidadeNumeroRoxane
    )
    let stylePopupRoxane = window.getComputedStyle(popupRoxane);
    let displayPopupRoxane = stylePopupRoxane.getPropertyValue('display');

    if(displayPopupRoxane == "flex"){
        popupRoxane.style.display = "none";

    }else{
        popupRoxane.style.display = "flex";

    }

    

}
function enviarCarrinhoAzulety() {
    let inputQuantidadeNumeroAzulety = document.querySelector("#Azulety").value
        localStorage.setItem(
        'beijoAzulety', inputQuantidadeNumeroAzulety
    )
    let stylePopupAzulety = window.getComputedStyle(popupAzulety);
    let displayPopupAzulety = stylePopupAzulety.getPropertyValue('display');

    if(displayPopupAzulety == "flex"){
        popupAzulety.style.display = "none";

    }else{
        popupAzulety.style.display = "flex";

    }

}
function enviarCarrinhoForca() {
    let inputQuantidadeNumeroForca = document.querySelector("#Forca").value
      localStorage.setItem(
        'PocaoForca', inputQuantidadeNumeroForca
    )
    let stylePopupForca = window.getComputedStyle(popupForca);
    let displayPopupForca = stylePopupForca.getPropertyValue('display');

    if(displayPopupForca == "flex"){
        popupForca.style.display = "none";

    }else{
        popupForca.style.display = "flex";

    }

}
function enviarCarrinhoAmor() {
    let inputQuantidadeNumeroAmor = document.querySelector("#Amor").value
     localStorage.setItem(
        'PocaoAmor', inputQuantidadeNumeroAmor
    )
    let stylePopupAmor = window.getComputedStyle(popupAmor);
    let displayPopupAmor = stylePopupAmor.getPropertyValue('display');

    if(displayPopupAmor == "flex"){
        popupAmor.style.display = "none";

    }else{
        popupAmor.style.display = "flex";

    }

}
function enviarCarrinhoInvi() {
    let inputQuantidadeNumeroInvi = document.querySelector("#Invi").value
     localStorage.setItem(
        'PocaoInvi', inputQuantidadeNumeroInvi
    )
    let stylePopupInvi = window.getComputedStyle(popupInvi);
    let displayPopupInvi = stylePopupInvi.getPropertyValue('display');

    if(displayPopupInvi == "flex"){
        popupInvi.style.display = "none";

    }else{
        popupInvi.style.display = "flex";

    }

}
function enviarCarrinhoResist() {
    let inputQuantidadeNumeroResist = document.querySelector("#Resist").value
       localStorage.setItem(
        'PocaoResist', inputQuantidadeNumeroResist
    )
    let stylePopupResist = window.getComputedStyle(popupResist);
    let displayPopupResist = stylePopupResist.getPropertyValue('display');

    if(displayPopupResist == "flex"){
        popupResist.style.display = "none";

    }else{
        popupResist.style.display = "flex";

    }

}
function enviarCarrinhoVoo() {
    let inputQuantidadeNumeroVoo = document.querySelector("#Voo").value
    localStorage.setItem(
        'PocaoVoo', inputQuantidadeNumeroVoo
    )
    let stylePopupVo = window.getComputedStyle(popupVo);
    let displayPopupVo = stylePopupVo.getPropertyValue('display');

    if(displayPopupVo == "flex"){
        popupVoo.style.display = "none";

    }else{
        popupVo.style.display = "flex";

    }

}
function enviarCarrinhoVel() {
    let inputQuantidadeNumeroVel = document.querySelector("#Vel").value
    localStorage.setItem(
        'PocaoVel', inputQuantidadeNumeroVel
    )
    let stylePopupVel = window.getComputedStyle(popupVel);
    let displayPopupVel = stylePopupVel.getPropertyValue('display');

    if(displayPopupVel == "flex"){
        popupVel.style.display = "none";

    }else{
        popupVel.style.display = "flex";

    }

}