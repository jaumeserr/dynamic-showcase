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

/** Convert Id to a Valid String
 * 
 * @param {string} value The input value
 * @param {string} position The first position of the for loop
 * @param {string} partToJoin The separation that you need to make the join method
 * 
 */
const convertIdToValidString = (value, position, separator) => {
    const str = value.replace(/_/g, " ").split(" ");
    for(let i = position; i < str.length; i++) {
        str[i] = str[i].substring(0,1).toUpperCase()+str[i].substring(1);
    }
    return str.join(separator);
}

const addPriceWhenAddToBasket = product => {
    counter += priceList[convertIdToValidString(product,1,'')];
    document.getElementById('amountBasket').innerHTML = counter.toFixed(2);
}

const drag = ev => {
    ev.dataTransfer.setData("text", ev.target.id);
    document.getElementById('nameProduct').innerHTML = convertIdToValidString(ev.target.id,0,' ');
}

const drop = ev => {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    addPriceWhenAddToBasket(data);
}