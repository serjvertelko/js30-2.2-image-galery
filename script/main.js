let API_URL = "https://api.unsplash.com/search/photos?query=осень&per_page=30&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo";
const API_URL_SEARCH = `https://api.unsplash.com/search/photos?query=`;
const headerSearchForm = document.querySelector(".header__search-formItem");
const headerSearchInput = document.querySelector(".header__search-form");
const mainImagesItemImg = document.querySelectorAll(".main__images-itemImg");
const formClose = document.querySelector(".header__close-img");
const formSearch = document.querySelector(".header__search-img");

changeSerachImg();
function changeSerachImg() {
    let styleInput;
    headerSearchInput.addEventListener("input", (e) => {
        if (e.target.value) {
            formClose.classList.remove("block")
            formSearch.classList.add("block")
        } else if (!e.target.value) {
            formClose.classList.add("block")
            formSearch.classList.remove("block")
        }
    })
}


function deleteInputText() {
    formClose.addEventListener("click", () => {
        headerSearchInput.value = "";
        formClose.classList.add("block")
        formSearch.classList.remove("block")
        console.log(headerSearchInput.value)
    })
}
deleteInputText();

searchFoto()
function searchFoto() {
    headerSearchForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const apiSearchUrl = `${API_URL_SEARCH}${headerSearchInput.value.toLowerCase()}&per_page=30&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo`;
        if (headerSearchInput.value) {
            console.log(apiSearchUrl);
            console.log(API_URL);
            console.log(headerSearchInput.value);
            getData(apiSearchUrl);
        }
    })
}

getData(API_URL);
async function getData(url) {
    const response = await fetch(url)
    const resData = await response.json();
    showFotos(resData);
}

function showFotos(data) {
    const fotos = document.querySelector(".main__images");
    const newData = data;
    fotos.innerHTML = "";
    for (let i = 0; i < newData.results.length; i++) {
        let div = document.createElement('div');
        div.classList.add("main__images-img");
        div.innerHTML = `
        <div class="main__images-item" style="background: url(${newData.results[i].urls.regular}); background-position: center; background-size: cover;  background-repeat: no-repeat;" ></div>
        <div class="color-img"></div>
        `;
        fotos.append(div);
       
    }
}

console.log(`
Оценка - 70 балла(ов)
Отзыв по пунктам ТЗ:
Все пункты выполнены полностью!
`)




















 