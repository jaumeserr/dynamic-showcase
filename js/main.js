const foodList = {
    wine: {
        name: 'Wine',
        price: 15,
    },
    appleJuice: {
        name: 'Apple Juice',
        price: 3,
    },
}

let counter = 0;
let counterWine = 0;

function allowDrop(ev) {
    ev.preventDefault();
}

// const showNumProductWhenAddToBasket = () => {
    
// }

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    console.log('Ha entrado un ' + ev.target.id);

    switch(ev.target.id) {
        case 'vino':
            counter += foodList.wine.price;
            counterWine++;
            console.log(counter);
            console.log(`Entran ${foodList.wine.price} euros`);
            document.getElementById('result').innerHTML = counter
            document.getElementById('listWine').innerHTML = counterWine;
        break;
        case 'manzana':
            counter += appleJuice;
            console.log(counter);
            console.log(`Entran ${appleJuice} euros`);
        break;
    }
}

  
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    
}