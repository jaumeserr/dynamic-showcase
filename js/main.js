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
    document.getElementById('amountBasket').innerHTML = counter.toFixed(2);
}

const convertIdToName = name => {
    const str = name.replace(/_/g, " ").split(" ");
    for(let i = 0; i < str.length; i++) {
        str[i] = str[i].substring(0,1).toUpperCase()+str[i].substring(1);
    }
    return str.join(' ');
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
    document.getElementById('nameProduct').innerHTML = convertIdToName(ev.target.id);
}

const drop = ev => {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    switch(data) {
        case 'wine':  
            addPriceWhenAddToBasket(winePrice);    
        break;
        case 'apple_juice':
            addPriceWhenAddToBasket(appleJuicePrice);
        break;
        case 'cherry_jam':
            addPriceWhenAddToBasket(cherryJamPrice);
        break;
        case 'salt':
            addPriceWhenAddToBasket(saltPrice);
        break;
        case 'bread':
            addPriceWhenAddToBasket(breadPrice);
        break;
        case 'butter':
            addPriceWhenAddToBasket(butterPrice);
        break;
        case 'ketchup':
            addPriceWhenAddToBasket(ketchupPrice);
        break;
        case 'pear_juice':
            addPriceWhenAddToBasket(pearJuicePrice);
        break;
        case 'garlic':
            addPriceWhenAddToBasket(garlicPrice);
        break;
        case 'milk':
            addPriceWhenAddToBasket(milkPrice);
        break;
        case 'oil':
            addPriceWhenAddToBasket(oilPrice);
        break;
    }
}