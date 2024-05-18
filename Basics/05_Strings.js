const name = "dhairya "
const repoCount = 55

console.log(name + repoCount + " Value"); // ! not recom.

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Call of Duty')
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName);
console.log(gameName.charAt(5));
console.log(gameName.indexOf('o'));

const newString = gameName.substring(0,4) // cannot give negative values
console.log(newString)

const anotherString = gameName.slice(8,-1)
console.log(anotherString)

const newStringOne = "     Dhairya"
console.log(newStringOne)
console.log(newStringOne.trim());

const url = "https://dhairya.com/dhairya%20%gupta"
console.log(url)
console.log(url.replace('%20','_'));

console.log(url.includes('dha'));
console.log(url.includes('hjk'));


console.log(gameName.split(' '));
index = 5
console.log(gameName.at(5));
