// const hubby = 'Elias Kanchon';
// console.log(hubby);

// const numbers = [12, 48];
// numbers[1] = 88;
// numbers.push(11);
// console.log(numbers);

// let patientName = 'Rahim Chasa';
// patientName = 'Fatema Khala'
// console.log(patientName);

// function add(num1, num2= 20) {
//     return num1 + num2;
// }
// const total = add(15);
// console.log(total);

// const add = (x, y) => x + y;
// const result = add(5, 7);
// console.log(result);
// const doMath = (x, y) => {
//     const sum = x + y;
//     const diff = x - y;
//     const result = sum / diff;
//     return result;
// }
// const result2 = doMath(7, 5);
// console.log(result2);
// const ages = [12, 13, 14, 16];
// const ages2 = [17, 18, 19];
// const ages3 = [22, 23, 33];
// const allAges = [...ages, ...ages2, 5, ...ages3];
// console.log(allAges);

// const takaPoisa = [500, 600, 800];
// const maximum = Math.max(...takaPoisa);
// console.log(maximum);

// class student{
//     constructor(sId, sName){
//         this.id = sId;
//         this.name = sName;
//         this.school = 'kolimunnesa school'
//     }
// }
// const student1 = new student(12, 'shuvo');
// const student2 = new student(22, 'mahia');
// const student3 = new student(22, 'Bappy');
// console.log(student1.name);
// class Parent{
//     constructor(){
//         this.fatherName = 'Schwerznegger';
//     }
// }
// class Child extends Parent{
//     constructor(name){
//         super()
//         this.name = name;
//     }
//     getFullName(){
//         return this.name + ' ' + this.fatherName;
//     }
// }
// const baby = new Child('Arnold');
// const baby2 = new Child('Tom');
// console.log(baby.getFullName(), baby2.getFullName());

// class Parent{
//     constructor(){
//         this.fatherName = 'Schwerznegger';
//     }
// }
// class Child extends Parent{
//     constructor(name){
//         super()
//         this.name = name;
//     }
    
// }
// const baby = new Child('Arnold');
// const baby2 = new Child('Tom');
// console.log(baby);
// console.log(baby2);

const person = {name: 'Jack William', age: 21, job: 'facebooker', gfName: 'Ema Watson', address: 'kochu khet', phone: '0171766777', friend: ['Tom yearn', 'Tom hanks', 'Tom cruise'] }
// const gfName = person.gfName;
const { phone, gfName } = person;
// console.log(gfName, phone);

const friends = ['sakib khan', 'amir khan', 'salman khan', 'shahrukh khan'];
const [chotoFriend, ...olderF] = friends;
console.log(olderF);
