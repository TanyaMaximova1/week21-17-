//ЗАДАНИЕ 1
class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary() {
        return this.rate * this.days;
    }
}

var worker = new Worker('Иван', 'Иванов', 2600, 20);

console.log(worker.name);
console.log(worker.surname);
console.log(worker.rate);
console.log(worker.days);
console.log(worker.getSalary());

//ЗАДАНИЕ 2
class Transport {

    constructor(type, price, brand) {
        this.type = type;
        this.price = price;
        this.brand = brand;
    }

    getInfo() {
        return console.log(`Тип: ${this.type}, бренд: ${this.brand}`);
    }

    getPrice() {
        return console.log(`Цена: ${this.price} руб`);
    }
}

class Car extends Transport {

    constructor(type, price, brand, doors) {
        super(type, price, brand);
        this.doors = doors;
    }

    getDoorsCount() {
        return console.log(`У этой машины ${this.doors} двери`);
    }
}

class Bike extends Transport {

    constructor(type, price, brand, speed) {
        super(type, price, brand);
        this.speed = speed;
    }

    getMaxSpeed() {
        return console.log(`Максимальная скорость: ${this.speed} км/ч`);
    }
}

// теперь работает
let car = new Car("Машина", "12000", "lada", 4);
let bike = new Bike("Мотоцикл", "60000", "Reno", 200)

console.log(car.getInfo()); //инфо о машине
console.log(car.getPrice()); //цена машины
console.log(car.getDoorsCount()); //количество дверей машины

console.log(bike.getMaxSpeed()); //мак скорость мотоцикла