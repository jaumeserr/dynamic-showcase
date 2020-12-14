const foodList = {
    wine: {
        name: 'Wine',
        price: 15,
    },
    appleJuice: {
        name: 'Apple Juice',
        price: 5,
    },
    cherryJam: {
        name: 'Cherry Jam',
        price: 2,
    },
    salt: {
        name: 'Salt',
        price: 1,
    },
}

let counter = 0;

function allowDrop(ev) {
    ev.preventDefault();
}

const showNameProductWhenAddToBasket = product => {
    document.getElementById('nameProduct').innerHTML = product;
}

const addPriceWhenAddToBasket = price => {
    counter += price;
    document.getElementById('amountBasket').innerHTML = counter;
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);

    const {
        wine: {name: wineName, price: winePrice},
        appleJuice: {name: appleJuiceName, price: appleJuicePrice},
        cherryJam: {name: cherryJamName, price: cherryJamPrice},
        salt: {name: saltName, price: saltPrice},
    } = foodList

    switch(ev.target.id) {
        case 'wine':  
            showNameProductWhenAddToBasket(wineName);
            addPriceWhenAddToBasket(winePrice);
        break;
        case 'applejuice':
            showNameProductWhenAddToBasket(appleJuiceName);
            addPriceWhenAddToBasket(appleJuicePrice);
        break;
        case 'cherryJam':
            showNameProductWhenAddToBasket(cherryJamName);
            addPriceWhenAddToBasket(cherryJamPrice);
        break;
        case 'salt':
            showNameProductWhenAddToBasket(saltName);
            addPriceWhenAddToBasket(saltPrice);
        break;
    }
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}