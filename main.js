// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

const availableStocks = inventory.map((availableStock) => {
  return availableStock.originalStock - availableStock.sold;
});


function availableForSale(arr) {
  let total = 0;
  arr.map((item) => { total += item;})
  return total;
}

const container = document.getElementById('amountToSell');
container.textContent = availableForSale(availableStocks);

// Opdracht 2A

// const tvTypes = inventory.map((inventor) => {
//   return inventor.type;
// });
//
// console.log(tvTypes);
// console.log('\n');

// Opdracht 2B

// const soldOut = inventory.filter((inventor) => {
//   return (inventor.originalStock - inventor.sold) === 0;
// });

// console.log(soldOut);
// console.log('\n');

// Opdracht 2C

// const ambiLight = inventory.filter((inventor) => {
//   return inventor.options.ambiLight;
// });

// console.log('ALLE TV\'S MET AMBILIGHT: ');
// console.log(ambiLight);
// console.log('\n');

// Opdracht 2D
// console.log('Sorted by Price: ');
// inventory.sort((a,b) => {return a.price - b.price});
// // console.log(inventory);
//
// function sortByPrice(arr) {
//   arr.sort((a,b) => {return a.price - b.price});
//   return arr;
// }

// console.log(sortByPrice(inventory));

// Opdracht 3A

// console.log('PREDICTED REVENUE:');

const predictedRevenue = inventory.map((inventor) => {
  return (inventor.originalStock - inventor.sold) * inventor.price;
});

function totalPredictedRevenue(arr) {
  let total = 0;
  arr.map((item) => {total += item});
  return total;
}

// console.log('€ ' + totalPredictedRevenue(predictedRevenue));
// console.log('\n');

const container2 = document.getElementById('projectedRevenue');
container2.textContent = totalPredictedRevenue(predictedRevenue);

// Opdracht 3B

const revenueSoFar = inventory.map((inventor) => {
  return (inventor.originalStock * inventor.price) - ((inventor.originalStock - inventor.sold) * inventor.price );
});

// console.log('REVENUE SO FAR:');

function totalRevenueSoFar(arr) {
  let total = 0;
  arr.map((item) => {total += item});
  return total;
}

// console.log('€ ' + totalRevenueSoFar(revenueSoFar));

const container3 = document.getElementById('achievedRevenue');
container3.textContent = totalRevenueSoFar(revenueSoFar);

// Opdracht 4
// const tvOne = document.getElementById('tvOne');
// tvOne.textContent = inventory[0].type;
//
// const tvTwo = document.getElementById('tvTwo');
// tvTwo.textContent = inventory[1].type;

// console.log('\n')
// Opdracht 5A

function printTitle(arrItem) {
  return arrItem.brand + ' ' + arrItem.type + ' - ' + arrItem.name;
}



// console.log(printTitle(inventory[1]));

// Opdracht 5B

function printPrice(arrItem) {
  return '€' + arrItem.price + ',-';
}

// console.log(printPrice(inventory[1]));

// Opdracht 5 C

function calcAvailableSizes(arr) {
  const availableSizes = arr.availableSizes.map((size) => {
    return  size + ' inch (' + (size * 2.5) + ' cm)';
  })
  return availableSizes.join(' | ');
}

// console.log(calcAvailableSizes(inventory[4]));

// Opdracht 5D

// // Container met div's als child met de class 'block'
// const containerForTvs = document.getElementById('containerForTvs');
// const tvBlock = document.createElement('div');
// tvBlock.setAttribute('class', 'block');
// containerForTvs.appendChild(tvBlock);
//
// // Creëer een h2 met daarin de titel van de TV door gebruik te maken van de functie die de Titel genereerd.
// const tvBlockTitle = document.createElement('h2');
// tvBlockTitle.setAttribute('class', 'tvBlockTitle');
// tvBlockTitle.textContent = printTitle(tv);
// tvBlock.appendChild(tvBlockTitle);
//
// // Creëer een span die de prijs weergeeft door gebruik van de functie die de prijs print.
// const tvBlockPrice =document.createElement('span');
// tvBlockPrice.setAttribute('class', 'price');
// tvBlockPrice.textContent = printPrice(tv);
// tvBlock.appendChild(tvBlockPrice);
//
// // Creëer een p element waarin de beschikbare maten worden getoond
// const tvBlockSizes = document.createElement('p');
// tvBlockSizes.setAttribute('class', 'sizes');
// tvBlockSizes.textContent = calcAvailableSizes(tv);
// tvBlock.appendChild(tvBlockSizes);

// Opdracht 5E
// Schrijf een functie die bovenstaande nodes creëert voor alle tv's in de array

function createTvElement(tv) {
// Container met div's als child met de class 'block'
  const containerForTvs = document.getElementById('containerForTvs');
  const tvBlock = document.createElement('div');
  tvBlock.setAttribute('class', 'block');
  containerForTvs.appendChild(tvBlock);

// Creëer een h2 met daarin de titel van de TV door gebruik te maken van de functie die de Titel genereerd.
  const tvBlockTitle = document.createElement('h2');
  tvBlockTitle.setAttribute('class', 'tvBlockTitle');
  tvBlockTitle.textContent = printTitle(tv);
  tvBlock.appendChild(tvBlockTitle);

// Creëer een span die de prijs weergeeft door gebruik van de functie die de prijs print.
  const tvBlockPrice =document.createElement('span');
  tvBlockPrice.setAttribute('class', 'price');
  tvBlockPrice.textContent = printPrice(tv);
  tvBlock.appendChild(tvBlockPrice);

// Creëer een p element waarin de beschikbare maten worden getoond
  const tvBlockSizes = document.createElement('p');
  tvBlockSizes.setAttribute('class', 'sizes');
  tvBlockSizes.textContent = calcAvailableSizes(tv);
  tvBlock.appendChild(tvBlockSizes);
}

function createOverviewTvs(arr) {
  arr.map((tv) => {
    createTvElement(tv);
  })
}
// createTvElement(inventory[4])

createOverviewTvs(inventory);


// Bonus assignment

function sortByPrice(arr) {
  arr.sort((a,b) => {return a.price - b.price});
  return arr;
}

function tvsWithAmbilight(arr) {
  arr.filter((inventor) => {
    return inventor.options.ambiLight;
  });
  return arr;
}

function soldOutTvs(arr) {
  arr.filter((inventor) => {
    return (inventor.originalStock - inventor.sold) === 0;
  });
  return arr;
}