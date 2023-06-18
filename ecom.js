//items div to append item.
let items = $(".items");
// select all category button by class name
let categoryBtn = $(".categoryBtn");
//individual category buttons
let allBtn = $("#allBtn")
let smartPhonesbtn = $("#smartPhonesbtn")
let laptopsBtn = $("#laptopsBtn")
let fragrancesBtn = $("#fragrancesBtn")
let skinCaresBtn = $("#skinCaresBtn")
let groceriesBtn = $("#groceriesBtn")
let homeDecorBtn = $("#homeDecorBtn")
//sort by select tag
let sortBySelect = $("#sortBySelect")
//page loader
$(window).load(function() {
    $('#loading').hide();
  });
//ajax call to fetch data
$.ajax({
    url: "https://dummyjson.com/products", success: function ajaxData(result) {
        let data = result.products;
        //bydefault displaying all data and sortby selection event
        displayData(data);
        sortFunc(data);
        //all button onclick event and display all data
        allBtn.click(function () {
            //here data is bydefault data
            displayData(data);
            sortFunc(data);
            displayBrand(data);
        })
        //smartphone button onclick event and generating array from smartphones category data
        smartPhonesbtn.click(function () {
            //here data is smartPhonesArry
            let smartPhonesArry = [];
            //below function generates new smartPhonesArry
            for (i = 0; i < data.length; i++) {
                if (data[i].category == "smartphones") {
                    smartPhonesArry.push(data[i]);
                }
            }
            displayData(smartPhonesArry);
            sortFunc(smartPhonesArry);
            displayBrand(smartPhonesArry);
        })
        //laptop button onclick event and generating array from laptops category data
        laptopsBtn.click(function () {
            //here data is laptopsArry
            let laptopsArry = [];
            //below function generates new laptopsArry
            for (i = 0; i < data.length; i++) {
                if (data[i].category == "laptops") {
                    laptopsArry.push(data[i]);
                }
            }
            displayData(laptopsArry);
            sortFunc(laptopsArry)
        })
        //fragnances button onclick event and generating array from fragrances category data
        fragrancesBtn.click(function () {
            //here data is fragnancesArry
            let fragnancesArry = [];
            //below function generates new fragnancesArry
            for (i = 0; i < data.length; i++) {
                if (data[i].category == "fragrances") {
                    fragnancesArry.push(data[i]);
                }
            }
            displayData(fragnancesArry);
            sortFunc(fragnancesArry);
        })
        //skinCares button onclick event and generating array from skincares category data
        skinCaresBtn.click(function () {
            //here data is skinCaresArry
            let skinCaresArry = [];
            //below function generates new skinCaresArry
            for (i = 0; i < data.length; i++) {
                if (data[i].category == "skincare") {
                    skinCaresArry.push(data[i]);
                }
            }
            displayData(skinCaresArry);
            sortFunc(skinCaresArry);
        })
        //groceries button onclick event and generating array from groceries category data
        groceriesBtn.click(function () {
            //here data is groceriesArry
            let groceriesArry = [];
            //below function generates new groceriesArry
            for (i = 0; i < data.length; i++) {
                if (data[i].category == "groceries") {
                    groceriesArry.push(data[i]);
                }
            }
            displayData(groceriesArry);
            sortFunc(groceriesArry);
        })
        //homeDecor button onclick event and generating array from home-decor category data
        homeDecorBtn.click(function () {
            //here data is homeDecorArry
            let homeDecorArry = [];
            //below function generates new homeDecorArry
            for (i = 0; i < data.length; i++) {
                if (data[i].category == "home-decoration") {
                    homeDecorArry.push(data[i]);
                }
            }
            displayData(homeDecorArry);
            sortFunc(homeDecorArry);
        })
        //select change options function
        function sortFunc(data) {
            sortBySelect.val("default");
            sortBySelect.change(function () {
                getelementfromdropdown(data)
            });
            //below function select particular option value and run particular function to sorting data
            function getelementfromdropdown(data) {
                var value = sortBySelect.val();
                if (value == "default") {
                    defaultFunc(data)
                }
                else if (value == "l2h") {
                    priceLow2High(data)
                }
                else if (value == "h2l") {
                    priceHigh2Low(data)
                }
                else if (value == "rating") {
                    rating(data);
                }
                else if (value == "discount") {
                    discount(data);
                }
            }
            //below all functions sort data for individual options selection
            function defaultFunc(data) {
                displayData(data);
            }
            function priceLow2High(data) {
                let datal2h = Array.from(data);
                datal2h.sort(function (a, b) {
                    return (a.price) - (b.price);
                });
                displayData(datal2h);
            }
            function priceHigh2Low(data) {
                let datah2l = Array.from(data);
                datah2l.sort(function (a, b) {
                    return (b.price) - (a.price);
                });
                displayData(datah2l);
            }
            function rating(data) {
                let dataRating = Array.from(data);
                dataRating.sort(function (a, b) {
                    return (b.rating) - (a.rating);
                });
                displayData(dataRating);
            }
            function discount(data) {
                let dataDiscount = Array.from(data);
                dataDiscount.sort(function (a, b) {
                    return (b.discountPercentage) - (a.discountPercentage);
                });
                console.log(dataDiscount);
                displayData(dataDiscount);
            }
        }
    }
});
//main function to append div on base of api data
function displayData(data) {
    items.html("")
    for (i = 0; i < data.length; i++) {
        var div = $(`
        <div class="item">
            <div class="itemImage">
                <img
                src="${data[i].images[0]}">
                <span class="discountPercentage">${data[i].discountPercentage} % OFF</span>
            </div>
            <div class="itemInfo">
                <p><span class="title">${data[i].title}</span></p>
                <p class="descriptionP">Description:<span class="description">${data[i].description}</span></p>
                <p><span class="price">${data[i].price} $</span></p>
                <p>
                    <span class="rating">${data[i].rating}</span>
                    <i class="fa-solid fa-star gold"></i>
                </p>
                <p class="stockP">Stock:<span class="stock">${data[i].stock}</span></p>
                <p class="brandP">Brand:<span class="brand">${data[i].brand}</span></p>
                <p class="categoryP">Category:<span class="category">${data[i].category}</span></p>
            </div>
            <div class="itemButtonsDiv">
                <div class="addToCartDiv">
                    <button type="button" class="ATCBtn">Add To Cart</button>
                </div>
                <div class="infoDiv">
                    <button type ="button" class="infoBtn">Info</button> 
                </div>
            </div>
        </div>
        `);
        items.append(div);
        //below declarations are for info div and it's elements
        let infoDiv = $("#infoDiv");
        let closeInfoBtn = $("#closeInfoBtn");
        let infoBtn = $(".infoBtn");
        let imageInfo = $(".imageInfo")
        let titleInfo = $(".titleInfo");
        let descriptionInfo = $(".descriptionInfo");
        let priceInfo = $(".priceInfo");
        let discountInfo = $(".discountInfo");
        let ratingInfo = $(".ratingInfo");
        let stockInfo = $(".stockInfo");
        let brandInfo = $(".brandInfo");
        let categoryInfo = $(".categoryInfo");
        //event on clicking info button on item
        infoBtn.each(function (e) {
            $(this).click(function () {
                items.css({ "opacity": "0.5" });
                infoDiv.css({ "display": "block", "opacity": "1", "transition": "all 0.2s ease" });
                imageInfo.attr("src", data[e].images[0]);
                titleInfo.html(data[e].title);
                descriptionInfo.html(data[e].description);
                priceInfo.html(data[e].price);
                discountInfo.html(data[e].discountPercentage);
                ratingInfo.html(data[e].rating);
                stockInfo.html(data[e].stock);
                brandInfo.html(data[e].brand);
                categoryInfo.html(data[e].category);
            })
        })
        //event on close info button 
        closeInfoBtn.click(function () {
            infoDiv.css({ "display": "none", "opacity": "1", "transition": "all 10s ease" });
            items.css({ "opacity": "1" });
        })
    }
}
//add class on individual category button on click
categoryBtn.each(function () {
    $(this).click(function () {
        resetActiveBtn();
        $(this).addClass("active-btn")
    })
});
//remove class on category buttons when clicking another button
function resetActiveBtn() {
    categoryBtn.each(function () {
        categoryBtn.removeClass("active-btn")
    })
}
