const priceList = {
    wine: 15,
    applejuice: 5.9,
    cherryjam: 2.3,
    salt: 1.1,
    bread: 1.5,
    butter: 7.3,
    ketchup: 4,
    pearjuice: 5.2,
    oil: 5.5,
    milk: 2.6,
    garlic: 0.5,
}

let counter = 0;

/**
 * Convert id to a valid string
 * @param {string}      value        The input value
 * @returns {string}                 Return a valid value without numbers
 */
const convertIdToValidString = value => {
    let str = value;
    let position = str.indexOf('0');
    return str.substring(0, position);
}

/**
 * Increment the product price when you put a product on the basket, round with 2 decimals and shows on the screen
 * @param {string}      product     The input value
 */
const addPriceWhenAddToBasket = product => {
    counter += priceList[product];
    document.getElementById('amountBasket').innerHTML = counter.toFixed(2);
}

const drag = ev => {
    ev.dataTransfer.setData("text", ev.target.id);
    document.getElementById('nameProduct').innerHTML= document.getElementById(ev.target.id).getAttribute('alt');
}

const drop = ev => {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    let item = document.getElementById(data);
    addPriceWhenAddToBasket(convertIdToValidString(data));
    item.style.display = 'none';
    document.getElementById('nameProduct').innerHTML= "";
    ev.target.appendChild(document.getElementById(data));
}

const allowDrop = ev => {
    ev.preventDefault();
}
