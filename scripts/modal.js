
(function(){
 
var catalogList = document.querySelector(".catalog__list")
var bgWrapper = document.querySelector(".bg-wrapper")
var buttonClose = document.querySelector(".button-close")
var productName = document.querySelector(".product-name")
var formFieldHidden = document.querySelector(".form-field__hidden")


var buttonCloseClickHandler = function(evt){
    bgWrapper.classList.add("hidden")
}

var bgWrapperClickHandler =  function(evt){
    if(evt.target.classList.contains("bg-wrapper")){
        bgWrapper.classList.add("hidden")
   }
}

var windowKeyDownHandler = function(evt){
    if(evt.keyCode == 27){
        bgWrapper.classList.add("hidden")
    }
}

var catalogListClickHandler = function(evt){
    if(evt.target.classList.contains("product-card__btn")){
        bgWrapper.classList.remove("hidden")

        buttonClose.addEventListener("click", buttonCloseClickHandler)
        bgWrapper.addEventListener("click", bgWrapperClickHandler)
        window.addEventListener("keydown", windowKeyDownHandler)
        productName.textContent = evt.target.parentNode.firstElementChild.textContent
        formFieldHidden.value = productName.textContent
    } 
}
catalogList.addEventListener("click", catalogListClickHandler)

})()