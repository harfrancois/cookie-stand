'use strict';
const seattleSales = document.getElementById('seattleSales');

let hours = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m', '6 p.m.', '7 p.m'];

let Seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  dailyTotal: 0,
  CookiesSoldEachHourArray: [],

  randomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calcCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let numberOfCustomersThisHour = this.randomCustomers();
      let cookiesSoldThisHour = Math.ceil(numberOfCustomersThisHour * this.avg);
      this.CookiesSoldEachHourArray.push(cookiesSoldThisHour);
      this.dailyTotal = this.dailyTotal + cookiesSoldThisHour;
    }
  },
  render: function () {
    this.calcCookiesPerHour();
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.CookiesSoldEachHourArray[i]} cookies`;
      seattleSales.appendChild(li);
    }
    let liTotal = document.createElement('li');
    liTotal.textContent = `total: ${this.dailyTotal} cookies`;
    seattleSales.appendChild(liTotal);
  }
}
Seattle.render();

const tokyoSales = document.getElementById('tokyoSales');
let Tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  dailyTotal: 0,
  CookiesSoldEachHourArray: [],
  randomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calcCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let numberOfCustomersThisHour = this.randomCustomers();
      let cookiesSoldThisHour = Math.ceil(numberOfCustomersThisHour * this.avg);
      this.CookiesSoldEachHourArray.push(cookiesSoldThisHour);
      this.dailyTotal = this.dailyTotal + cookiesSoldThisHour;
    }
  },
  render: function () {
    this.calcCookiesPerHour();
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.CookiesSoldEachHourArray[i]} cookies`;
      tokyoSales.appendChild(li);
    }
    let liTotal = document.createElement('li');
    liTotal.textContent = `total: ${this.dailyTotal} cookies`;
    tokyoSales.appendChild(liTotal);
  }
}
Tokyo.render();

const dubaSales = document.getElementById('dubaiSales');
let Dubai = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  dailyTotal: 0,
  CookiesSoldEachHourArray: [],
  randomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calcCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let numberOfCustomersThisHour = this.randomCustomers();
      let cookiesSoldThisHour = Math.ceil(numberOfCustomersThisHour * this.avg);
      this.CookiesSoldEachHourArray.push(cookiesSoldThisHour);
      this.dailyTotal = this.dailyTotal + cookiesSoldThisHour;
    }
  },
  render: function () {
    this.calcCookiesPerHour();
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.CookiesSoldEachHourArray[i]} cookies`;
      dubaiSales.appendChild(li);
    }
    let liTotal = document.createElement('li');
    liTotal.textContent = `total: ${this.dailyTotal} cookies`;
    dubaiSales.appendChild(liTotal);
  }
}
Dubai.render();

const parisSales = document.getElementById('parisSales');
let Paris = {
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  dailyTotal: 0,
  CookiesSoldEachHourArray: [],
  randomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calcCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let numberOfCustomersThisHour = this.randomCustomers();
      let cookiesSoldThisHour = Math.ceil(numberOfCustomersThisHour * this.avg);
      this.CookiesSoldEachHourArray.push(cookiesSoldThisHour);
      this.dailyTotal = this.dailyTotal + cookiesSoldThisHour;
    }
  },
  render: function () {
    this.calcCookiesPerHour();
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.CookiesSoldEachHourArray[i]} cookies`;
      parisSales.appendChild(li);
    }
    let liTotal = document.createElement('li');
    liTotal.textContent = `total: ${this.dailyTotal} cookies`;
    parisSales.appendChild(liTotal);
  }
}
Paris.render();

const limaSales = document.getElementById('limaSales');
let Lima = {
  name: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
  dailyTotal: 0,
  CookiesSoldEachHourArray: [],
  randomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calcCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let numberOfCustomersThisHour = this.randomCustomers();
      let cookiesSoldThisHour = Math.ceil(numberOfCustomersThisHour * this.avg);
      this.CookiesSoldEachHourArray.push(cookiesSoldThisHour);
      this.dailyTotal = this.dailyTotal + cookiesSoldThisHour;
    }
  },
  render: function () {
    this.calcCookiesPerHour();
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.CookiesSoldEachHourArray[i]} cookies`;
      limaSales.appendChild(li);
    }
    let liTotal = document.createElement('li');
    liTotal.textContent = `total: ${this.dailyTotal} cookies`;
    limaSales.appendChild(liTotal);
  }
}
Lima.render();