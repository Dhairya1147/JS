//? Dates

let myDate = new Date()
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(typeof myDate);

let myCreatedDate1 = new Date(2023, 0, 23) // 23/1/2023 12am
let myCreatedDate2 = new Date(2023, 0, 23, 15, 4, 6) // 23/1/2023 3:04:06pm
let myCreatedDate3 = new Date("2023/01/14") // month starts from 0 week start from 0; 0 - jan; 0 - mon
let myCreatedDate4 = new Date("14/01/2023") 
// console.log(myCreatedDate2.toLocaleString());

let timeStamp = Date.now()
// console.log(timeStamp)
// console.log(myCreatedDate2.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate.getDay())
// console.log(newDate.getMonth())
// console.log(newDate.getMinutes())
// console.log(newDate.getHours())

// console.log(`Month ${(newDate.getMonth())} and day is ${(newDate.getDay())}`);
// console.log(newDate.getDay())
// console.log(newDate.getMonth())
// console.log(newDate.getMinutes())
// console.log(newDate.getHours())

// console.log(`Month ${(newDate.getMonth())} and day is ${(newDate.getDay())}`);

newDate.toLocaleString('default', {
    weekday: "long",
})