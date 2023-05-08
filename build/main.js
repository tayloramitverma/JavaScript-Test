"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("object");
var a = 10;
var b;
b = "Hello Ram";
var c;
c = false;
console.log(a);
var myArr = ["One", 30];
console.log(myArr);
function getRes(a, b) {
    var c = a + b;
    return c;
}
console.log(getRes(2, 4));
var myObj = {
    fname: "Amit",
    lname: "Verma",
    employeeId: 777,
    status: true,
    fullName: function () {
        return "".concat(this.fname, " ").concat(this.lname);
    },
};
console.log(myObj, myObj.fullName());
function getName(params) {
    console.log(params);
}
var myParams = {
    name: "Taylor",
    rollNumber: 30,
};
getName(myParams);
var Home = /** @class */ (function () {
    function Home() {
        this.ploatNumber = 200;
        this.color = "Green & Yellow";
    }
    Home.prototype.getCustomColor = function (param) {
        var defaultClr = param || this.color;
        return "Your home color is: ".concat(defaultClr);
    };
    return Home;
}());
var myHome = new Home();
console.log(myHome.getCustomColor("Blue"), myHome.getCustomColor());
var Vehicle = /** @class */ (function () {
    function Vehicle(store) {
        this.storeNumber = store;
    }
    Vehicle.prototype.getCategory = function () {
        return "Category";
    };
    Vehicle.prototype.getCount = function () {
        return "Count is ".concat(30, " and store number is ").concat(this.storeNumber);
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(brand, store) {
        var _this = _super.call(this, store) || this;
        _this.brandName = brand;
        return _this;
    }
    Car.prototype.getCount = function () {
        return "Count is ".concat(100);
    };
    Car.prototype.getMasterCount = function () {
        return ("Parent count: " + _super.prototype.getCount.call(this) + " Child count: " + this.getCount());
    };
    Car.pi = 3.14;
    return Car;
}(Vehicle));
var myCar = new Car("Maruti", 2020);
console.log(myCar.getMasterCount());
console.log(Car.pi);
//void
function getCity() {
    console.log("Jaipur");
}
getCity();
//namespace
var Market;
(function (Market) {
    function getArea() {
        return "Total area is 1200 sft";
    }
    Market.getArea = getArea;
    var Shoes = /** @class */ (function () {
        function Shoes() {
        }
        Shoes.prototype.getShoes = function () {
            return "Batta";
        };
        return Shoes;
    }());
    Market.Shoes = Shoes;
})(Market || (Market = {}));
console.log(Market.getArea());
var myShoes = new Market.Shoes();
console.log(myShoes.getShoes());
// import Cardata from "./Car";
// let carName = new Cardata();
// console.log(carName.data);
/**
 * Unknowm type
 */
var userInput;
userInput = 5;
userInput = "Max";
var userName;
if (typeof userInput === "string") {
    userName = userInput;
}
/**
 * Never type
 */
function generateError(message, code) {
    throw { errorMessage: message, errorCode: code };
}
generateError("An error occurred!", 401);
