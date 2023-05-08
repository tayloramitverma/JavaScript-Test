declare var a: number;
declare var b: string;
declare var c: boolean;
declare var myArr: any[];
declare function getRes(a: number, b: number): number;
interface myObjInfo {
    fname: string;
    lname: string;
    employeeId: number;
    status: boolean;
    fullName: () => string;
}
declare var myObj: myObjInfo;
interface myParamsInfo {
    name: string;
    rollNumber: number;
}
declare function getName(params: myParamsInfo): void;
declare let myParams: {
    name: string;
    rollNumber: number;
};
declare class Home {
    ploatNumber: number;
    color: string;
    constructor();
    getCustomColor(param?: any): string;
}
declare let myHome: Home;
declare class Vehicle {
    storeNumber: number;
    constructor(store: number);
    getCategory(): string;
    getCount(): string;
}
declare class Car extends Vehicle {
    readonly brandName: string;
    static pi: number;
    constructor(brand: string, store: number);
    getCount(): string;
    getMasterCount(): string;
}
declare let myCar: Car;
declare function getCity(): void;
declare namespace Market {
    function getArea(): string;
    class Shoes {
        getShoes(): string;
    }
}
declare let myShoes: Market.Shoes;
/**
 * Unknowm type
 */
declare let userInput: unknown;
declare let userName: string;
/**
 * Never type
 */
declare function generateError(message: string, code: number): void;
