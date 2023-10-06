let navbarBtn = document.querySelector(".navbarBtn")
let navbarTogglerIcon = document.querySelector(".navbarTogglerIcon")
navbarBtn.addEventListener("click", () => {
    if (navbarTogglerIcon.classList.contains("active")) {
        navbarTogglerIcon.innerHTML = `<img src="images/menu.png" alt="" width="17.5" height="17.5">`
        navbarTogglerIcon.classList.remove ("active")
    }else {
        navbarTogglerIcon.innerHTML = `<img src="images/X-mark.png" alt="" width="17.5" height="17.5"></i>`
        navbarTogglerIcon.classList.add ("active")
    }
})


let firstName = localStorage.getItem("firstName")
let lastName = localStorage.getItem("lastName")
let email = localStorage.getItem("email")
let username = localStorage.getItem("username")

let signInBtn = document.querySelector("#signInBtn")
let signupBtn = document.querySelector("#signupBtn")
let profileNameBox = document.querySelector("#profileNameBox")
let profileNameMenu = document.querySelector(".profileNameMenu")
let profileName = document.querySelector(".profileName")
let userImg = document.getElementById("userImg")

let errorMessageContainer = document.querySelector(".errorMessageContainer");
let errorMessageList = document.querySelector(".errorMessageList");
let closeErrorBtn = document.querySelector(".closeErrorBtn");

if(firstName) {
    console.log(localStorage.getItem("firstName"));
    signupBtn.style.display = "none"
    signInBtn.style.display = "none"
    profileNameBox.style.display = "block"
    profileName.innerHTML +=  firstName 
}
userImg.addEventListener("click",() => {
        if(profileNameMenu.style.display !== "flex") {
            cartMenu.style.display = 'none';
            profileNameMenu.style.display = "flex"
        }else {
            profileNameMenu.style.display = "none"
        }

})

const logoutBtn = document.getElementById("logoutBtn")
logoutBtn.addEventListener("click",() => {
    localStorage.clear()
    window.location=  "signin.html"

})

// ************  < Main >  ***********
let cartNavIcon = document.querySelector('.cartNavIcon');
let cartMenu = document.querySelector('.cartMenu');
cartNavIcon.addEventListener('click', () => {
    if(screen.width < 991){
        window.location ="cart.html"
    }else {
        if (cartMenu.style.display === 'block') {
            cartMenu.style.display = 'none';
        } else {
            profileNameMenu.style.display = "none"
            cartMenu.style.display = 'block';
        }
    }
});

// ************* Draw cards ****************
let allMainProducts = localStorage.getItem("allProducts");
if (allMainProducts){
    allMainProducts = JSON.parse(allMainProducts)
} else {
    allMainProducts = [
        {
            id : 1,
            name : "AirBuds",
            category: "electronics",
            imgPath : "images/airbuds.png",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ad culpa provident deleniti, voluptatem consequuntur!",
            price : 2000,
            cartPrice : 0,
            favorite : false,
            bestSales : true,
            discount : true,
            discountAmount : 250,
            cartQuantity : 0 ,
        },
        {
            id : 2,
            name : "Glasses",
            category: "fashion",
            imgPath : "images/glasses.png",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ad culpa provident deleniti, voluptatem consequuntur!",
            price : 150,
            cartPrice : 0,
            favorite : false,
            bestSales : false,
            discount : true,
            discountAmount : 20,
            cartQuantity : 0 ,
        },
        {
            id : 3,
            name : "Labtop Stand",
            category: "electronics",
            imgPath : "images/labtopStand.png",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ad culpa provident deleniti, voluptatem consequuntur!",
            price : 300,
            cartPrice : 0,
            favorite : false,
            bestSales : true,
            discount : true,
            discountAmount:50,
            cartQuantity : 0 ,
        },
        {
            id : 4,
            name : "Men Cap",
            category: "fashion",
            imgPath : "images/menCap.png",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ad culpa provident deleniti, voluptatem consequuntur!",
            price : 75,
            cartPrice : 0,
            favorite : false,
            bestSales : false,
            discount : true,
            discountAmount : 5,
            cartQuantity : 0 ,
        },
        {
            id : 5,
            name : "Fogg Perfume",
            category: "bodyCare",
            imgPath : "images/perfume.png",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ad culpa provident deleniti, voluptatem consequuntur!",
            price : 250,
            cartPrice : 0,
            favorite : false,
            bestSales : false,
            discount : false,
            discountAmount : 0,
            cartQuantity : 0 ,
        },
        {
            id :6 ,
            name : "Men Shirt",
            category: "fashion",
            imgPath : "images/shirt.png",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ad culpa provident deleniti, voluptatem consequuntur!",
            price : 300,
            cartPrice : 0,
            favorite : false,
            bestSales : false,
            discount : false,
            discountAmount : 0,
            cartQuantity : 0 ,
        },
        {
            id : 7,
            name : "Smart Watch",
            category: "electronics",
            imgPath : "images/smartWatch.png",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ad culpa provident deleniti, voluptatem consequuntur!",
            price : 1750,
            cartPrice : 0,
            favorite : false,
            bestSales : false,
            discount : true,
            discountAmount : 250,
            cartQuantity : 0 ,
        },
        {
            id : 8,
            name : "Men T-Shirt",
            category: "fashion",
            imgPath : "images/tShirt.png",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ad culpa provident deleniti, voluptatem consequuntur!",
            price : 200,
            cartPrice : 0,
            favorite : false,
            bestSales : true,
            discount : false,
            discountAmount : 0,
            cartQuantity : 0 ,
        },
        {
            id : 9,
            name : "Water Bottle",
            category: "Grocery",
            imgPath : "images/waterBottle.png",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ad culpa provident deleniti, voluptatem consequuntur!",
            price : 150,
            cartPrice : 0,
            favorite : false,
            bestSales : false,
            discount : false,
            discountAmount : 0,
            cartQuantity : 0 ,
        },
        {
            id : 10,
            name : "Water Pallet",
            category: "Grocery",
            imgPath : "images/water.png",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ad culpa provident deleniti, voluptatem consequuntur!",
            price : 75,
            cartPrice : 0,
            favorite : false,
            bestSales : true,
            discount : true,
            discountAmount : 6,
            cartQuantity : 0 ,
        },
    ]
}
let mainPageContainer = document.querySelector(".mainPageContainer");
function drawMainProducts () {
    
    const mainProductsCards = allMainProducts.map( (product) => {
        let productPriceBoxClass = "productPriceBox";
        let productNewPriceBox = "productNewPriceBox notActive";
        let productFavoriteClass = "far fa-heart"
        let bestSaleClass = "productCard"

        if (product.discount === true) {
            productPriceBoxClass += " productOriginalPriceBox";
            productNewPriceBox -= "notActive"
        }
        if (product.favorite === true) {
            productFavoriteClass = "fas fa-heart active";
        }
        if (product.bestSales === true) {
            bestSaleClass += " bestSale"
        }
        return `<div class="${bestSaleClass}">
        <div class="productCardHeader">
            <img src="${product.imgPath}" alt="" class="productImg">
        </div> <!-- productCardHeader -->
        <div class="productCardFooter d-flex flex-column">
            <h2>${product.name}</h2>
            <p class="productDescription">${product.description}</p>
            <div class="productPriceInfo">
                        <div class="d-flex">
                            <div class="${productPriceBoxClass}">
                                <span class="productOriginalPrice">${product.price}</span>
                                <sub> EGP</sub>
                            </div>
                            <div class="${productNewPriceBox}">
                                <span class="productNewPrice">${product.price-product.discountAmount}</span>
                                <sub> EGP</sub>
                            </div>
                        </div>
                        <span class="favoriteBtn"><i class="${productFavoriteClass}" id="favoriteBtn_${product.id}" onclick="favoriteProduct (${product.id})"></i></span>
                    </div>
                    <button class=" btn btn-primary mt-2 addToCartBtn addToCartBtn_${product.id}" onclick=" addToCart (${product.id})">Add Cart</button>

                    <div class="cardProductQuantity" id="cardProductQuantityBox_${product.id}">
                        <span class="btn btn-success" id="cartProductIncrement" onclick="quantityIncrement (${product.id})">+</span>
                        <span id="cartProductQuantity" class="cardProductQuantityValue_${product.id}">${product.cartQuantity}</span>
                        <span class="btn btn-danger" id="cartProductDecrement" onclick="quantityDecrement(${product.id})">-</span>
                    </div>
                    </div> <!-- productCardFooter -->
            </div> <!-- productCard -->`
    })

    mainPageContainer.innerHTML = mainProductsCards.join('')
}
drawMainProducts()



// **************   Adding To Cart  *****************

let cartProductsContainer = document.getElementById("cartProductsContainer")
let allCartProducts = localStorage.getItem('cart')
let cartProducts = []
if (allCartProducts){
  allCartProducts = JSON.parse(allCartProducts)
  console.log(allCartProducts)
  cartProducts = allCartProducts
}
// console.log(cartProducts)
// ********  Cart Badge  ********
let cartBadgeValue = 0
let cartBadge = document.querySelector(".cartBadge")

function cartBadgeNum(productQuantity) {
    cartTempValue = productQuantity -1
    cartBadgeValue -= cartTempValue ;
    cartBadgeValue += productQuantity;
    cartBadge.innerHTML = cartBadgeValue;
}
// ***********  Cart Title  *********
function cartTitle () {
    if(cartProductsContainer.innerHTML.trim() === "") {
        cartProductsContainer.innerHTML = '<h4 id="emptyCartText">Cart Is Empty</h4>'
        cartBadge.style.display = "none"
    }
}
cartTitle ()



function addToCart (id) {
    if (username) {

        let index = allMainProducts.findIndex((item) => item.id === id)
        let product = allMainProducts[index]

        let cartProductCheck = cartProducts.findIndex((item) => item.id === id)
        if (cartProductCheck === -1) {
            cartProducts.push(product)
            product.cartQuantity = 1   
            let cardProductQuantityBox = document.querySelector(`#cardProductQuantityBox_${product.id}`);
            let cardProductQuantityValue = document.querySelector(`.cardProductQuantityValue_${product.id}`)
            let addToCartBtn = document.querySelector(`.addToCartBtn_${product.id}`);

            addToCartBtn.style.display = 'none';
            cardProductQuantityValue.innerHTML =  1
            cardProductQuantityBox.style.display = "flex";
            allMainProducts[index].cartQuantity = 1
            
        }else {
            product.cartQuantity ++
        }
        cartBadgeNum(product.cartQuantity);
        drawCartItems()  
    }else {
        setTimeout(() => {
            errorMessageContainer.style.display = 'flex';
            errorMessageList.innerHTML = `<li>You Should Sign In</li>
            <li><a class="btn btn-primary mt-3" href="signin.html"> SignIn Now</a></li>`;
            
            closeErrorBtn.addEventListener('click', () => {      
                errorMessageContainer.style.display = 'none';
            })

        } , 0)

        setTimeout(() => {
            errorMessageContainer.style.display = 'none';
        } , 5000)
    }

    localStorage.setItem("allProducts" , JSON.stringify(allMainProducts))
}
//  ********************************
function cartOnload () { 
    if (cartProducts.length !== 0) {
        drawCartItems ()
        function Badge (){
            cartProducts.map((product) => {
                // console.log( product.cartQuantity) 
                cartBadgeValue += product.cartQuantity
                cartBadge.innerHTML = cartBadgeValue
                // console.log( cartBadgeValue )

                let cardProductQuantityBox = document.querySelector(`#cardProductQuantityBox_${product.id}`);
                let cardProductQuantityValue = document.querySelector(`.cardProductQuantityValue_${product.id}`)
                let addToCartBtn = document.querySelector(`.addToCartBtn_${product.id}`);

                addToCartBtn.style.display = 'none';
                cardProductQuantityValue.innerHTML =  product.cartQuantity
                cardProductQuantityBox.style.display = "flex";
            })
        }
        Badge ()
    }
}
cartOnload ()

//  ********************************

function drawCartItems() {
    cartProductsContainer.innerHTML = ""
    let cartItems = cartProducts.map((product) => {
        product.cartPrice = product.cartQuantity * product.price
        // console.log(product)
        return `<div class="cartProduct">
        <img src="${product.imgPath}" alt="">
        <div class="cartProductInfo">
            <h3>${product.name}</h3>
            <div class="cartProductQuantity">
                <span class="btn btn-success" id="cartProductIncrement" onclick="quantityIncrement (${product.id})">+</span>
                <span id="cartProductQuantity">${product.cartQuantity}</span>
                <span class="btn btn-danger" id="cartProductDecrement" onclick="quantityDecrement(${product.id})">-</span>
            </div>
        </div>
    </div> <!-- cartProduct -->`
    })
    cartBadge.style.display = "block"
    cartBadge.innerHTML = cartBadgeValue
    cartProductsContainer.innerHTML += cartItems.join('')
    cartTitle ()
    localStorage.setItem('cart' , JSON.stringify(cartProducts) )
    // localStorage.setItem('allMainProducts' , JSON.stringify(allMainProducts) )
}


function quantityIncrement(id) {
    let originIndex = allMainProducts.findIndex((item) => item.id === id)
    allMainProducts[originIndex].quantity ++
    
    // console.log("originIndex: " + originIndex)
    let index = cartProducts.findIndex((item) => item.id === id);
    let cardProductQuantityValue = document.querySelector(`.cardProductQuantityValue_${id}`)
    if (index !== -1) {
      cartProducts[index].cartQuantity++ ;
      cartBadgeNum(cartProducts[index].cartQuantity);
      cardProductQuantityValue.innerHTML = cartProducts[index].cartQuantity
      drawCartItems(); 
    }

}

function quantityDecrement(id) {
    let originIndex = allMainProducts.findIndex((item) => item.id === id)
    allMainProducts[originIndex].quantity --

    let index = cartProducts.findIndex((item) => item.id === id);
    let cardProductQuantityBox = document.querySelector(`#cardProductQuantityBox_${id}`);
    let cardProductQuantityValue = document.querySelector(`.cardProductQuantityValue_${id}`)
    let addToCartBtn = document.querySelector(`.addToCartBtn_${id}`);

    if (index !== -1) {
        cartBadgeValue --
        if ( cartProducts[index].cartQuantity > 1) {
            cartProducts[index].cartQuantity-- ;
            cardProductQuantityValue.innerHTML = cartProducts[index].cartQuantity
            drawCartItems() 
        }else {
            cartProducts.splice(index, 1) ;
            addToCartBtn.style.display = 'flex';
            cardProductQuantityBox.style.display = "none";
        }
        drawCartItems() 
    }
    // console.log(cartProducts)
}
// ***************  Delete All Cart   ****************
let deleteAllCart = document.getElementById('deleteAllCart')
deleteAllCart.addEventListener('click', () => {
    let cardProductQuantitys = document.querySelectorAll(".cardProductQuantity")
    cardProductQuantitys.forEach((btn) => btn.style.display = "none")
    let addToCartBtns = document.querySelectorAll(`.addToCartBtn`);
    addToCartBtns.forEach((btn) => btn.style.display = "flex")

    cartProducts = [] 
    drawCartItems() 
    cartBadgeValue = 0
    cartMenu.style.display = "none"

})



// ==============================================
let favoriteProducts = localStorage.getItem('favorites')
if (favoriteProducts){
    favoriteProducts = JSON.parse(favoriteProducts)
}else {
    favoriteProducts =[]
}
function favoriteProduct (id) {

    let index = allMainProducts.findIndex((item) => item.id === id)
    let favoriteBtn = document.getElementById(`favoriteBtn_${id}`)

    let favoriteProduct = allMainProducts[index]

    if(favoriteProduct.favorite === false){
        favoriteProduct.favorite = true
        favoriteBtn.setAttribute("data-prefix" , 'fas')
        favoriteBtn.style.color = 'red'

        favoriteProducts.push(favoriteProduct)
    } else {

        let reIndex = favoriteProducts.findIndex((item) => item.id === id)

        allMainProducts[index].favorite = false

        favoriteBtn.setAttribute("data-prefix" , 'far')
        favoriteBtn.style.color = 'black'

        favoriteProducts.splice(reIndex, 1)
    }
    
    localStorage.setItem("favorites" , JSON.stringify(favoriteProducts))
    localStorage.setItem("allProducts" , JSON.stringify(allMainProducts))
}



/////////////////////////////////////////////////
// *******************  Search  *****************


// const allSearchProductsCards = [];


// searchNameInput.addEventListener("input", function() {

//     allSearchProductsCards.length = 0;

//     allMainProducts.forEach((product) => {
//         let productName = product.name;
//         let name = productName.toLowerCase();
//         let nameInput = searchNameInput.value;
//         let key = nameInput.toLowerCase();

//         if (name.indexOf(key) !== -1) {

//             let productPriceBoxClass = "productPriceBox";
//             let productNewPriceBox = "productNewPriceBox notActive";
//             let productFavoriteClass = "far fa-heart"
//             let bestSaleClass = "productCard"
    
//             if (product.discount === true) {
//                 productPriceBoxClass += " productOriginalPriceBox";
//                 productNewPriceBox -= "notActive"
//             }
//             if (product.favorite === true) {
//                 productFavoriteClass = "fas fa-heart active";
//             }
//             if (product.bestSales === true) {
//                 bestSaleClass += " bestSale"
//             }

//             allSearchProductsCards.push(`<div class="${bestSaleClass}">
//              <div class="productCardHeader">
//                  <img src="${product.imgPath}" alt="" class="productImg">
//              </div> <!-- productCardHeader -->
//              <div class="productCardFooter d-flex flex-column">
//                  <h2>${product.name}</h2>
//                  <p class="productDescription">${product.description}</p>
//                  <div class="productPriceInfo">
//                              <div class="d-flex">
//                                  <div class="${productPriceBoxClass}">
//                                      <span class="productOriginalPrice">${product.price}</span>
//                                      <sub> EGP</sub>
//                                  </div>
//                                  <div class="${productNewPriceBox}">
//                                      <span class="productNewPrice">${product.price-product.discountAmount}</span>
//                                      <sub> EGP</sub>
//                                  </div>
//                              </div>
//                              <span class="favoriteBtn"><i class="${productFavoriteClass}" id="favoriteBtn_${product.id}" onclick="favoriteProduct (${product.id})"></i></span>
//                          </div>
//                          <button class=" btn btn-primary mt-2 addToCartBtn addToCartBtn_${product.id}" onclick=" addToCart (${product.id})">Add Cart</button>  
//                          <div class="cardProductQuantity" id="cardProductQuantityBox_${product.id}">
//                              <span class="btn btn-success" id="cartProductIncrement" onclick="quantityIncrement (${product.id})">+</span>
//                              <span id="cartProductQuantity" class="cardProductQuantityValue_${product.id}">${product.cartQuantity}</span>
//                              <span class="btn btn-danger" id="cartProductDecrement" onclick="quantityDecrement(${product.id})">-</span>
//                          </div>
//                          </div> <!-- productCardFooter -->
//                  </div> <!-- productCard -->`)
//         }
//     });
    
//     mainPageContainer.innerHTML = allSearchProductsCards.join('');
// });






// searchCategoryInput.addEventListener("change", function() {

//     allSearchProductsCards.length = 0;

//     allMainProducts.forEach((product) => {
//         let productName = product.category;
//         let name = productName.toLowerCase();
//         let nameInput = searchCategoryInput.value;
//         let key = nameInput.toLowerCase();

//         if (name.indexOf(key) !== -1) {

//             let productPriceBoxClass = "productPriceBox";
//             let productNewPriceBox = "productNewPriceBox notActive";
//             let productFavoriteClass = "far fa-heart"
//             let bestSaleClass = "productCard"
    
//             if (product.discount === true) {
//                 productPriceBoxClass += " productOriginalPriceBox";
//                 productNewPriceBox -= "notActive"
//             }
//             if (product.favorite === true) {
//                 productFavoriteClass = "fas fa-heart active";
//             }
//             if (product.bestSales === true) {
//                 bestSaleClass += " bestSale"
//             }
//             // Push the generated product card HTML to the array
//             allSearchProductsCards.push(`<div class="${bestSaleClass}">
//              <div class="productCardHeader">
//                  <img src="${product.imgPath}" alt="" class="productImg">
//              </div> <!-- productCardHeader -->
//              <div class="productCardFooter d-flex flex-column">
//                  <h2>${product.name}</h2>
//                  <p class="productDescription">${product.description}</p>
//                  <div class="productPriceInfo">
//                              <div class="d-flex">
//                                  <div class="${productPriceBoxClass}">
//                                      <span class="productOriginalPrice">${product.price}</span>
//                                      <sub> EGP</sub>
//                                  </div>
//                                  <div class="${productNewPriceBox}">
//                                      <span class="productNewPrice">${product.price-product.discountAmount}</span>
//                                      <sub> EGP</sub>
//                                  </div>
//                              </div>
//                              <span class="favoriteBtn"><i class="${productFavoriteClass}" id="favoriteBtn_${product.id}" onclick="favoriteProduct (${product.id})"></i></span>
//                          </div>
//                          <button class=" btn btn-primary mt-2 addToCartBtn addToCartBtn_${product.id}" onclick=" addToCart (${product.id})">Add Cart</button>  
//                          <div class="cardProductQuantity" id="cardProductQuantityBox_${product.id}">
//                              <span class="btn btn-success" id="cartProductIncrement" onclick="quantityIncrement (${product.id})">+</span>
//                              <span id="cartProductQuantity" class="cardProductQuantityValue_${product.id}">${product.cartQuantity}</span>
//                              <span class="btn btn-danger" id="cartProductDecrement" onclick="quantityDecrement(${product.id})">-</span>
//                          </div>
//                          </div> <!-- productCardFooter -->
//                  </div> <!-- productCard -->`)
//         }
//     });
    
//     mainPageContainer.innerHTML = allSearchProductsCards.join('');
// });


// // searchMinPrice.addEventListener('change', () => {
// //     let minValue = searchMinPrice.value
// //     if (minValue >= productMaxPrice.value) {
// //         searchMaxPrice.value = parseInt(minValue) +1
// //         console.log(searchMaxPrice.value)
// //         console.log(searchMinPrice.value)
// //     }

// // })



// ********************************************

// ************* Search ****************
let searchType = document.getElementById('searchType');
let searchTypeIcon = document.querySelector('.searchTypeBox span');
let searchNameInput = document.getElementById('productNameInput');
let searchCategoryInput = document.getElementById('productCategoryInput');
let productPriceInputBox = document.getElementById('productPriceInput');
let searchMinPrice = document.getElementById('productMinPrice');
let searchMaxPrice = document.getElementById('productMaxPrice');
console.log(searchMinPrice.value)

function searchTypeIconDisplay () {
    if (searchType.classList.contains("active")) {
        searchTypeIcon.innerHTML = `<i class="fa-solid fa-bars"></i>`
        searchType.classList.remove("active")
    } else {
        searchTypeIcon.innerHTML = `<i class="fa-solid fa-xmark"></i>`
        searchType.classList.add("active")
    }
}

searchType.addEventListener('change', () => {
    if (searchType.value === "name" ){
        searchNameInput.style.display = "block" 
        searchCategoryInput.style.display = "none"
        productPriceInputBox.style.display ="none"
    }else if (searchType.value === "category" ){
        searchNameInput.style.display = "none";   
        searchCategoryInput.style.display = "block"
        productPriceInputBox.style.display ="none"
    }else if (searchType.value === "price" ){
        searchNameInput.style.display = "none"
        searchCategoryInput.style.display = "none"
        productPriceInputBox.style.display ="flex"
    }
    searchType.blur()
})

const allSearchProductsCards = [];

function generateProductCard(product) {
    let productPriceBoxClass = "productPriceBox"
    let productNewPriceBox = "productNewPriceBox notActive"
    let productFavoriteClass = "far fa-heart"
    let bestSaleClass = "productCard"

    if (product.discount === true) {
        productPriceBoxClass += " productOriginalPriceBox"
        productNewPriceBox -= "notActive"
    }
    if (product.favorite === true) {
        productFavoriteClass = "fas fa-heart active"
    }
    if (product.bestSales === true) {
        bestSaleClass += " bestSale"
    }

    return `<div class="${bestSaleClass}">
        <div class="productCardHeader">
            <img src="${product.imgPath}" alt="" class="productImg">
        </div>
        <div class="productCardFooter d-flex flex-column">
            <h2>${product.name}</h2>
            <p class="productDescription">${product.description}</p>
            <div class="productPriceInfo">
                <div class="d-flex">
                    <div class="${productPriceBoxClass}">
                        <span class="productOriginalPrice">${product.price}</span>
                        <sub> EGP</sub>
                    </div>
                    <div class="${productNewPriceBox}">
                        <span class="productNewPrice">${product.price - product.discountAmount}</span>
                        <sub> EGP</sub>
                    </div>
                </div>
                <span class="favoriteBtn"><i class="${productFavoriteClass}" id="favoriteBtn_${product.id}" onclick="favoriteProduct(${product.id})"></i></span>
            </div>
            <button class="btn btn-primary mt-2 addToCartBtn addToCartBtn_${product.id}" onclick="addToCart(${product.id})">Add Cart</button>
            <div class="cardProductQuantity" id="cardProductQuantityBox_${product.id}">
                <span class="btn btn-success" id="cartProductIncrement" onclick="quantityIncrement(${product.id})">+</span>
                <span id="cartProductQuantity" class="cardProductQuantityValue_${product.id}">${product.cartQuantity}</span>
                <span class="btn btn-danger" id="cartProductDecrement" onclick="quantityDecrement(${product.id})">-</span>
            </div>
        </div>
    </div>`;
}


function updateSearchResults() {
    allSearchProductsCards.length = 0;
    const searchNameValue = searchNameInput.value.toLowerCase()
    const searchCategoryValue = searchCategoryInput.value.toLowerCase()
    const minPrice = parseFloat(searchMinPrice.value)
    const maxPrice = parseFloat(searchMaxPrice.value)

    allMainProducts.forEach((product) => {
        const productName = product.name.toLowerCase()
        const productCategory = product.category.toLowerCase()
        const productPrice = parseFloat(product.price)

        if (
            (searchType.value === "name" && productName.includes(searchNameValue)) ||
            (searchType.value === "category" && productCategory.includes(searchCategoryValue)) ||
            (searchType.value === "price" && productPrice >= minPrice && productPrice <= maxPrice)
        ) {
            allSearchProductsCards.push(generateProductCard(product))
        }
    });

    mainPageContainer.innerHTML = allSearchProductsCards.join('')
    cartProductsContainer
}

searchType.addEventListener('change', () => {
    updateSearchResults();
});

searchNameInput.addEventListener("input", updateSearchResults)
searchCategoryInput.addEventListener("change", updateSearchResults)
searchMinPrice.addEventListener("input", updateSearchResults)
searchMaxPrice.addEventListener("input", updateSearchResults)
