const beers = [];

function addBeer(name, category, rating) {
    const beerObject = {
        name: name,
        category: category,
        rating: rating
    };
    beers.push(beerObject);

}

$(".post-beer").click(function () {
    const inputBeerName = $(".beer-input").val();
    const inputCategory = $(".category-input").val();
    const selectedRating = $("select").val();
    addBeer(inputBeerName, inputCategory, selectedRating);
    renderBeers();
});

function renderBeers() {
    $(".beers-list").empty();
    for (let i = 0; i < beers.length; i++) {
        $(".beers-list").append("<li> Name: " + beers[i].name + ", Category: " + beers[i].category + ", Rating: " + beers[i].rating + "</li>");
    }
}

function sortBeers() {
    const len = beers.length;
    for (let k = len - 1; k >= 0; k--) {
        for (let j = 1; j <= k; j++) {
            if (beers[j - 1].rating > beers[j].rating) {
                const saved = beers[j - 1];
                beers[j - 1] = beers[j];
                beers[j] = saved;

            }
        }
    }
}

function isSorted() {
    const len = beers.length;
    for (let k = len - 1; k >= 0; k--) {
        for (let j = 1; j <= k; j++) {
            if (beers[j - 1].rating > beers[j].rating) {
                return false;
            }
        }
    }
    return true;
}

function sortDownBeers() {
    const len = beers.length;
    for (let k = len - 1; k >= 0; k--) {
        for (let j = 1; j <= k; j++) {
            if (beers[j - 1].rating < beers[j].rating) {
                const saved = beers[j - 1];
                beers[j - 1] = beers[j];
                beers[j] = saved;
            }
        }
    }
}


$(".sort").click(function () {
    if (isSorted()) {
        sortDownBeers();
    }
    else {
        sortBeers();
    }
    renderBeers();

});