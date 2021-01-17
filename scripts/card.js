
(function(){

var url = "scripts/data.js?callback=sharing";

var templateElement = document.querySelector(".template").content.querySelector(".catalog__item");
var fragmentElement = document.createDocumentFragment();

var catalogList = document.querySelector(".catalog__list");

var productCardImg = templateElement.querySelector(".product-card__img");
var productCardTitle = templateElement.querySelector(".product-card__title");
var productCardPrice = templateElement.querySelector(".product-card__price");

var renderItem = function(item){
    productCardImg.querySelector("img").src = item.img
    productCardImg.querySelector("img").alt = item.name
    productCardTitle.textContent = item.name
    productCardPrice.textContent = item.price

    fragmentElement.appendChild(templateElement.cloneNode(true))
}

window.sharing = function(data){
    for(var i = 0; i < data.product.length; i++){
        renderItem(data.product[i])
    }
    catalogList.appendChild(fragmentElement)
}

var loader = document.createElement("script");
loader.src = url;
loader.addEventListener("error", function(evt){
    document.body.textContent = "Произошла ошибка при загрузки данных";
})
document.body.appendChild(loader)

})()