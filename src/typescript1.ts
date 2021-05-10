console.log("object");
var a:number = 10;

var b:string;
b ='Hello Ram';

var c:boolean;
c=false;

console.log(a)


var myArr:any[] = ['One', 30]
console.log(myArr)

function getRes(a:number,b:number):number{
    var c:number = a+b;
    return c;
}

console.log(getRes(2,4))


interface myObjInfo{
    fname: string,
    lname: string,
    employeeId: number,
    status: boolean,
    fullName:()=>string
}

var myObj:myObjInfo = {
    fname: 'Amit',
    lname: 'Verma',
    employeeId: 777,
    status: true,
    fullName: function(){
        return `${this.fname} ${this.lname}`
    }
}

console.log(myObj, myObj.fullName())

// pass object as paramter

interface myParamsInfo {
    name:string,
    rollNumber:number
}

function getName(params:myParamsInfo){
    console.log(params)
}

let myParams = {
    name:'Taylor', rollNumber: 30
}

getName(myParams)


class Home{
    ploatNumber:number=200;
    color:string;
    constructor(){
        this.color='Green & Yellow'
    }

    getCustomColor(param?:any){
        let defaultClr = param || this.color;
        return `Your home color is: ${defaultClr}`
    }
}
let myHome = new Home;
console.log(myHome.getCustomColor('Blue'), myHome.getCustomColor())

class Vehicle{
    storeNumber:number
    constructor(store:number){
        this.storeNumber=store
    }
    
    getCategory(){
        return `Category`
    }

    getCount(){
        return `Count is ${30} and store number is ${this.storeNumber}`
    }
}


class Car extends Vehicle{

    readonly brandName:string;
    static pi:number = 3.14;
    constructor(brand:string, store:number){
        super(store)
        this.brandName=brand
    }

    getCount(){
        return `Count is ${100}`
    }

    getMasterCount(){
        return `Parent count: ` + super.getCount() +` Child count: `+ this.getCount()
    }
}

let myCar = new Car('Maruti', 2020);
console.log(myCar.getMasterCount())
console.log(Car.pi)

//void

function getCity():void{
    console.log('Jaipur')
}

getCity()

//namespace

namespace Market {
    export function getArea(){
        return 'Total area is 1200 sft'
    }

    export class Shoes{
        getShoes(){
            return 'Batta'
        }
    }
}

console.log(Market.getArea())

let myShoes = new Market.Shoes;

console.log(myShoes.getShoes())


import cardata from './Car'

let carName = new cardata();

console.log(carName.data)