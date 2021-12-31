'use strict';

let hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];

const tableHeadData = document.getElementById('theadData');
function createHead() {
  let hoursOfOperation = document.createElement('th');
  hoursOfOperation.textContent = 'Stores & Hours Of Operation';
  tableHeadData.appendChild(hoursOfOperation);

  for (let i = 0; i < hours.length; i++) {
    let times = document.createElement('th');
    times.textContent = `${hours[i]}`;
    tableHeadData.appendChild(times);
  }
  let tbTotal = document.createElement('th');
  tbTotal.textContent = 'Daily Location Totals';
  tableHeadData.appendChild(tbTotal);
}
createHead();

const storeSales = document.getElementById('sales');
const tbody = document.querySelector('tbody');

let storearray =[];

function Store(name, min, max, avg) {
  this.name = name,
  this.min = min,
  this.max = max,
  this.avg = avg,
  this.dailyTotal = 0,
  this.CookiesSoldEachHourArray = [];
  this.randomCustomers = function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  };
  this.calcCookiesPerHour = function () {
    for (let i = 0; i < hours.length; i++) {
      let numberOfCustomersThisHour = this.randomCustomers();
      let cookiesSoldThisHour = Math.ceil(numberOfCustomersThisHour * this.avg);
      this.CookiesSoldEachHourArray.push(cookiesSoldThisHour);
      this.dailyTotal = this.dailyTotal + cookiesSoldThisHour;
    }
  };
  this.render = function () {
    let tr = document.createElement('tr');
    tbody.appendChild(tr);
    let tdName = document.createElement('td');
    tdName.textContent = this.name;
    tr.appendChild(tdName);
    this.calcCookiesPerHour();
    for (let i = 0; i < hours.length; i++) {
      let td = document.createElement('td');
      td.textContent = `${this.CookiesSoldEachHourArray[i]} cookies`;
      tr.appendChild(td);
    }
    let tdTotal = document.createElement('td');
    tdTotal.textContent = `total: ${this.dailyTotal} cookies`;
    tr.appendChild(tdTotal);
  };
  storearray.push(this);
}
let seattleStore = new Store('Seattle', '23', '65', '6.3');
seattleStore.render();

let tokyoStore = new Store ('Tokyo', '3', '24', '1.2');
tokyoStore.render();

let dubaiStore = new Store('Dubai', '11', '38', '3.7');
dubaiStore.render();

let parisStore = new Store('Paris', '20', '38', '2.3');
parisStore.render();

let limaStore = new Store('Lima', '2', '16', '4.6');
limaStore.render();

let tfoot = document.createElement('tfoot');
storeSales.appendChild(tfoot);
let tr = document.createElement('tr');
tfoot.appendChild(tr);
let sum = document.createElement('td');
sum.textContent = 'TOTAL';
tr.appendChild(sum);
function totalsum() {
  for (let i = 0; i < rows.length; i++) {
  }

}
totalsum();
// const seattleSales = document.getElementById('seattleSales');

// let Seattle = {
//   name: 'Seattle',
//   min: 23,
//   max: 65,
//   avg: 6.3,
//   dailyTotal: 0,
//   CookiesSoldEachHourArray: [],

//   randomCustomers: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   calcCookiesPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let numberOfCustomersThisHour = this.randomCustomers();
//       let cookiesSoldThisHour = Math.ceil(numberOfCustomersThisHour * this.avg);
//       this.CookiesSoldEachHourArray.push(cookiesSoldThisHour);
//       this.dailyTotal = this.dailyTotal + cookiesSoldThisHour;
//     }
//   },
//   render: function () {
//     this.calcCookiesPerHour();
//     for (let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.CookiesSoldEachHourArray[i]} cookies`;
//       seattleSales.appendChild(li);
//     }
//     let liTotal = document.createElement('li');
//     liTotal.textContent = `total: ${this.dailyTotal} cookies`;
//     seattleSales.appendChild(liTotal);
//   }
// }
// Seattle.render();

// const tokyoSales = document.getElementById('tokyoSales');
// let Tokyo = {
//   name: 'Tokyo',
//   min: 3,
//   max: 24,
//   avg: 1.2,
//   dailyTotal: 0,
//   CookiesSoldEachHourArray: [],
//   randomCustomers: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   calcCookiesPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let numberOfCustomersThisHour = this.randomCustomers();
//       let cookiesSoldThisHour = Math.ceil(numberOfCustomersThisHour * this.avg);
//       this.CookiesSoldEachHourArray.push(cookiesSoldThisHour);
//       this.dailyTotal = this.dailyTotal + cookiesSoldThisHour;
//     }
//   },
//   render: function () {
//     this.calcCookiesPerHour();
//     for (let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.CookiesSoldEachHourArray[i]} cookies`;
//       tokyoSales.appendChild(li);
//     }
//     let liTotal = document.createElement('li');
//     liTotal.textContent = `total: ${this.dailyTotal} cookies`;
//     tokyoSales.appendChild(liTotal);
//   }
// }
// Tokyo.render();

// const dubaSales = document.getElementById('dubaiSales');
// let Dubai = {
//   name: 'Dubai',
//   min: 11,
//   max: 38,
//   avg: 3.7,
//   dailyTotal: 0,
//   CookiesSoldEachHourArray: [],
//   randomCustomers: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   calcCookiesPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let numberOfCustomersThisHour = this.randomCustomers();
//       let cookiesSoldThisHour = Math.ceil(numberOfCustomersThisHour * this.avg);
//       this.CookiesSoldEachHourArray.push(cookiesSoldThisHour);
//       this.dailyTotal = this.dailyTotal + cookiesSoldThisHour;
//     }
//   },
//   render: function () {
//     this.calcCookiesPerHour();
//     for (let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.CookiesSoldEachHourArray[i]} cookies`;
//       dubaiSales.appendChild(li);
//     }
//     let liTotal = document.createElement('li');
//     liTotal.textContent = `total: ${this.dailyTotal} cookies`;
//     dubaiSales.appendChild(liTotal);
//   }
// }
// Dubai.render();

// const parisSales = document.getElementById('parisSales');
// let Paris = {
//   name: 'Paris',
//   min: 20,
//   max: 38,
//   avg: 2.3,
//   dailyTotal: 0,
//   CookiesSoldEachHourArray: [],
//   randomCustomers: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   calcCookiesPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let numberOfCustomersThisHour = this.randomCustomers();
//       let cookiesSoldThisHour = Math.ceil(numberOfCustomersThisHour * this.avg);
//       this.CookiesSoldEachHourArray.push(cookiesSoldThisHour);
//       this.dailyTotal = this.dailyTotal + cookiesSoldThisHour;
//     }
//   },
//   render: function () {
//     this.calcCookiesPerHour();
//     for (let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.CookiesSoldEachHourArray[i]} cookies`;
//       parisSales.appendChild(li);
//     }
//     let liTotal = document.createElement('li');
//     liTotal.textContent = `total: ${this.dailyTotal} cookies`;
//     parisSales.appendChild(liTotal);
//   }
// }
// Paris.render();

// const limaSales = document.getElementById('limaSales');
// let Lima = {
//   name: 'Lima',
//   min: 2,
//   max: 16,
//   avg: 4.6,
//   dailyTotal: 0,
//   CookiesSoldEachHourArray: [],
//   randomCustomers: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   calcCookiesPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let numberOfCustomersThisHour = this.randomCustomers();
//       let cookiesSoldThisHour = Math.ceil(numberOfCustomersThisHour * this.avg);
//       this.CookiesSoldEachHourArray.push(cookiesSoldThisHour);
//       this.dailyTotal = this.dailyTotal + cookiesSoldThisHour;
//     }
//   },
//   render: function () {
//     this.calcCookiesPerHour();
//     for (let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.CookiesSoldEachHourArray[i]} cookies`;
//       limaSales.appendChild(li);
//     }
//     let liTotal = document.createElement('li');
//     liTotal.textContent = `total: ${this.dailyTotal} cookies`;
//     limaSales.appendChild(liTotal);
//   }
// }
// Lima.render();
