const priceList = {
    wine: 15,
    appleJuice: 5.9,
    cherryJam: 2.3,
    salt: 1.1,
    bread: 1.5,
    butter: 7.3,
    ketchup: 4,
    pearJuice: 5.2,
    oil: 5.5,
    milk: 2.6,
    garlic: 0.5,
}

let counter = 0;

const allowDrop = ev => ev.preventDefault();

const showNameProductWhenAddToBasket = product => {
    document.getElementById('nameProduct').innerHTML = product;
}

const convertIdToName = name => {
    const str = name.replace(/_/g, " ").split(" ");
    for(let i = 0; i < str.length; i++) {
        str[i] = str[i].substring(0,1).toUpperCase()+str[i].substring(1);
    }
    return str.join(' ');
}

const convertIdToObjParam = name => {
    const str = name.replace(/_/g, " ").split(" ");
    for(let i = 1; i < str.length; i++) {
        str[i] = str[i].substring(0,1).toUpperCase()+str[i].substring(1);
    }
    return str.join('');
}

const addPriceWhenAddToBasket = product => {
    counter += priceList[convertIdToObjParam(product)];
    document.getElementById('amountBasket').innerHTML = counter.toFixed(2);
}

const drag = ev => {
    ev.dataTransfer.setData("text", ev.target.id);
    document.getElementById('nameProduct').innerHTML = convertIdToName(ev.target.id);
}

const drop = ev => {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    addPriceWhenAddToBasket(data);
}