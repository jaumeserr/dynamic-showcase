const foodList = {
    wine: {
        name: 'Wine',
        price: 15,
    },
    appleJuice: {
        name: 'Apple Juice',
        price: 5.9,
    },
    cherryJam: {
        name: 'Cherry Jam',
        price: 2.3,
    },
    salt: {
        name: 'Salt',
        price: 1.1,
    },
    bread: {
        name: 'Bread',
        price: 1.5,
    },
    butter: {
        name: 'Butter',
        price: 7.3,
    },
    ketchup: {
        name: 'Ketchup',
        price: 4,
    },
    pearJuice: {
        name: 'Pear Juice',
        price: 5.2,
    },
    oil: {
        name: 'Oil',
        price: 5.5,
    },
    milk: {
        name: 'Milk',
        price: 2.6,
    },
    garlic: {
        name: 'Garlic',
        price: 0.5,
    }
}

let counter = 0;

const allowDrop = ev => ev.preventDefault();

const showNameProductWhenAddToBasket = product => {
    document.getElementById('nameProduct').innerHTML = product;
}

const addPriceWhenAddToBasket = price => {
    counter += price;
    document.getElementById('amountBasket').innerHTML = counter;
}

const hideProductWhenEnterOnTheBasket = product => {

}

const {
    wine: {name: wineName, price: winePrice},
    appleJuice: {name: appleJuiceName, price: appleJuicePrice},
    cherryJam: {name: cherryJamName, price: cherryJamPrice},
    salt: {name: saltName, price: saltPrice},
    bread: {name: breadName, price: breadPrice},
    butter: {name: butterName, price: butterPrice},
    ketchup: {name: ketchupName, price: ketchupPrice},
    pearJuice: {name: pearJuiceName, price: pearJuicePrice},
    garlic: {name: garlicName, price: garlicPrice},
    milk: {name: milkName, price: milkPrice},
    oil: {name: oilName, price: oilPrice},
} = foodList

const drag = ev => {
    ev.dataTransfer.setData("text", ev.target.id);
    showNameProductWhenAddToBasket(ev.target.id);
    }

const drop = ev => {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    switch(data) {
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
        case 'bread':
            showNameProductWhenAddToBasket(breadName);
            addPriceWhenAddToBasket(breadPrice);
        break;
        case 'butter':
            showNameProductWhenAddToBasket(butterName);
            addPriceWhenAddToBasket(butterPrice);
        break;
        case 'ketchup':
            showNameProductWhenAddToBasket(ketchupName);
            addPriceWhenAddToBasket(ketchupPrice);
        break;
        case 'pear':
            showNameProductWhenAddToBasket(pearJuiceName);
            addPriceWhenAddToBasket(pearJuicePrice);
        break;
        case 'garlic':
            showNameProductWhenAddToBasket(garlicName);
            addPriceWhenAddToBasket(garlicPrice);
        break;
        case 'milk':
            showNameProductWhenAddToBasket(milkName);
            addPriceWhenAddToBasket(milkPrice);
        break;
        case 'oil':
            showNameProductWhenAddToBasket(oilName);
            addPriceWhenAddToBasket(oilPrice);
        break;
    }
    hideProductWhenEnterOnTheBasket('wine');

}