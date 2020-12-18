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

/**
 * Convert alt name to a valid string
 * @param {string}      value        The input value
 * @param {number}      position     The first position of the for loop
 * @param {string}      separator    The separation that you need to make
 * @returns {string}                 Return capitalized word with space or camelcased without space
 */
const convertAltToValidString = (value, position, separator) => {
    const str = value.replace(/_/g, " ").split(" ");
    for(let i = position; i < str.length; i++) {
        str[i] = str[i].substring(0,1).toUpperCase()+str[i].substring(1);
    }
    return str.join(separator);
}

/**
 * Increment the product price when you put a product on the basket, round with 2 decimals and shows on the screen
 * @param {string}      product     The input value
 */
const addPriceWhenAddToBasket = product => {
    counter += priceList[convertAltToValidString(product,1,'')];
    document.getElementById('amountBasket').innerHTML = counter.toFixed(2);
}

const drag = ev => {
    ev.dataTransfer.setData("text", ev.target.id);
}

const drop = ev => {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    console.log(data);
    ev.target.appendChild(document.getElementById(data));
}

const allowDrop = ev => {
    console.log('allowdrop', ev);
    ev.preventDefault();
}














