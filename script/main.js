let API_URL = "https://api.unsplash.com/search/photos?query=осень&per_page=30&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo";
const API_URL_SEARCH = `https://api.unsplash.com/search/photos?query=`;
const headerSearchForm = document.querySelector(".header__search-formItem");
const headerSearchInput = document.querySelector(".header__search-form");
 
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
        div.classList.add("main__images-item");
        div.style.backgroundImage = `url(${newData.results[i].urls.regular})`;
        fotos.append(div)
    }
}



























// mainImagesItem.innerHTML = `
// <div class="main__images-item">
// <img src="https://www.kraftwerk.at/app/uploads/fly-images/962/reference-img-worlds-of-adventure-park-4-1920x9999.jpg" //
//     alt="image" class="main__images-img">
// <div class="color-img"></div>
// </div>`;