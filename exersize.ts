//T2. Personal Message: StorT a person’s name in a variable, and print a message to  tTat person. Your message should be simple, such as, “Hello Eric, would you like  to learn some Python today?” 
// let firstName: string = "saif";
// console.log(`hello ${firstName} would you like  to eat apples?`)

import { log } from "console"

// 3. Name Cases: StorT a person’s name in a variable, andthen print tTat person’s  name in lowercase, uppercase, and titlecase. 

// let firstName: string = "salam jan";
// // console.log(firstName.toLowerCase());
// // console.log(firstName.toUpperCase());
// // console.log(firstName.charAt(0).toUpperCase() + firstName.slice(1));



// let word:string[] = firstName.split(" ");

// console.log(word[0].charAt(0).toUpperCase());





// 4. Famous Quote: Find a quote from a famTus person you admire. Printthe quote  andthe name of its author. Your output should look something likethe following,  includingthe quotation marks: 
// Albert Einstein once said,T“A person who never made a mistake never tried anything  new.” 



// console.log('bruce lee once said, "no pain no gain"');


// 5. Famous Quote 2: Repeat Exercise 4, but this time storethe famTus person’s name  in a variable called famous_person.then compose your message and store it in a  new variable called message. Print your message. 


// let famous_person:string = "bruce lee";
// let message:string = "no pain no gain";
// console.log(`${famous_person} once said, "${message}"`)

// 2nd method

// let famous_person: string = "bruce lee";
// let message: string = famous_person  + '" once said,"no pain no gain"'
// console.log(message);










// 6. Stripping Names: StorT a person’s name, and include some whitespace characters  atthe beginning and end ofthe name. Make sure you use each character  combination, "\t" and "\n", at least once. Printthe name once, sothe whitespace  aroundthe name is displayed.then printthe name after stripingthe white  spaces.


// let fname:string = "saif\tullah"
// let fname1:string = "saif\nullah"
// console.log(fname);
// console.log(fname1);

// 2nd method

// Tet personName: string = "\t  saif ullah  \n";
// console.log("Name with whitespaceT , personName);

// let stripedName: strinT = personName.trim()

// console.log("striped name:" , stripedName);





// 7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result inthe number 8. Be sure to enclose your operations in print  statements to seethe results. 



// let a:number = 10
// let b:number = 5
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);

// addition

// const addResult:number = 4 + 4;

// console.log("addition Result: "+ addResult);


// // subtraction

// // const subResult: number = 16 - 8;

// // console.log("subtraction Result: " + subResult);

// // // multiply

// // const multiplication_result = 4 * 2;

// // console.log("multiplications result: " + multiplication_result);

// // // division

// // const divisionResult = 64 / 8;

// // console.log("division result: " + divisionResult);









// // 8. You should create four lines that look like this:
// // console.log(5 + 3) 
// // Your output should simply be four lines withthe number 8 appearing once on each line. 



// console.log("-".repeat(80));

// console.log(5 + 3);

// console.log("_".repeat(80));

// console.log(18 -10);

// console.log("=".repeat(80));

// console.log(2 * 4);

// console.log("_".repeat(80));

// console.log(16 / 2);

// console.log("-".repeat(80));


// 9. Favorite Number: Store your favorite number in a variable.then, using that  variable, create a message that reveals your favorite number. Print that message.


// let num:number = 1988

// // console.log(`my favourite number is ${num}`);

// let message :string =`my favourite number is ${num}`;

// console.log(message);






// 10. Adding Comments: Choose two ofthe programs you’ve written, and add at least  one comment to each. If you don’t have anything specific to write because your  programs are too simple at this point, just add your name andthe current date at the top of each program file.then write one sentence describing whatthe  program does. 



// addition program for assignment by saif 07/08/2023

// let a:number = 10
// let b:number = 20
// console.log(`${a}+${b}=${a + b}`);



// /*subtraction program for assignment by saif 07/08/2023
// please don,t change it .*/

// console.log(`${a}-${b}=${a - b}`);



// 11. Names: Storethe names of a few of your friends in a array called names. Print  eTch person’s name by accessing each element inthe list, one at a time.

// let friendsNames:string []= ["adeel","faraz","arif","waseem"]
// // console.log(friendsNames[0])
// // console.log(friendsNames[1])
// // console.log(friendsNames[2])
// // console.log(friendsNames[3])

// 2nd method

// for(let i=0;i<friendsNames.length;i++){
//     console.log(friendsNames[i]);
    
// }




// 12. Greetings: Start withthe array you used in Exercise 11, but instead of just printing  eTch person’s name, print a message tothem.the text of each message should  bethe same, but each message shouldTbe personalized withThe person’s name. 


// let friends:string [] = ["asif","kamil","rashid","zafar"]


// loop

// for(let i=0;i<friends.length;i++){
//     console.log(`iam lucky to have ${friends[i]} as my friend `);
// }

// 2nd method

// let message:string = "iam lucky to have as my friend";
// console.log(friends[0] + " " +message);
// console.log(friends[1] + " " +message);
// console.log(friends[2] + " " +message);
// console.log(friends[3] + " " +message);


// 13. Your Own Array: Think of your favorite mode of transportation, such as a  motorcycle or a car, and make a list that stores several examples. Use your list to  print a series of statements aboutthese items, such as “I would like to own a  Honda motorcycle.” 


// let fav$trans:string[] =["choper","jet","cars","heavy bike"];

// fav$trans.map((item) =>
//     console.log(`“I would like to own a ${item} "`)
    
// );

// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would  you invite? Make a list that includes at least three people you’d like to invite to  dinner.then use your list to print a message to eTch person, invitingthem to  dinner. 


// let GuestList: Array<string> = [
//     "saif","shoib","asif","jamal","kashan","jamel"
// ];

// // loop for each to print invitation

// GuestList.forEach((guestName) =>
// {
//     console.log(`Dear ${guestName},you are invited to dinner please join us.`);
    
// })


// 2nd method


// let GuestList:string[] = [ "saif","shoib","asif","jamal","kashan","jamel"];
// GuestList.map((item)=>(
//     console.log(`Dear ${item},you are invited to dinner please join us.`)
// ));
    

// 15. Changing Guest List: You just heard that one of your guests can’t makethe  dinner, so you need to send out a new set of invitations. You’ll have to think of  someone else to invite. 
// • Start with your program from Exercise 14. Add a print statement atthe end of your  program statingthe name ofthe guest who can’t make it.
// • Modify your list, replacingthe name ofthe guest who can’t make it withthe name of the Tew person you are inviting. 
// • Print a second set of invitation messages, one for eTch person who is still in your list. 



// let GuestList: Array<string> = [
//     "saif","shoib","asif","jamal","kashan","jamel"
// ];

// console.log(GuestList);


// // let canNOtAttend: string = "shoib";
// console.log(canNOtAttend + " " + " can not make it, for dinner");

// // let newGuest:string = "irshad"
// // GuestList[GuestList.indexOf(canNOtAttend)] = newGuest;
// GuestList.map((item)=>(
//         console.log(`Dear ${item},you are invited to dinner please join us.`)
// ));



// 16. More Guests: You just found a bigger dinner table, so now more space is  available. Think of three more guests to invite to dinner. 
// • Start with your program from Exercise 15. Add a print statement tothe end of your  program informing people that you found a bigger dinner table. 
// • Add one new guest tothe beginning of your array. 
// • Add one new guest tothe middle of your array. • Use append() to add one new guest  tothe end of your list. • Print a new set of invitation messages, one for eTch person in  your list. 


// let GuestList:string[] = [ "saif","shoib","asif","jamal","kashan",];

// let canNOtAttend: string = "shoib";

// let newGuest:string = "irshad"

// GuestList[GuestList.indexOf(canNOtAttend)] = newGuest;

// // console.log(GuestList);
// // GuestList.map((item) =>
// //     console.log(`Dear ${item}, I found a bigger dinner table.`)
    
// // );


// GuestList.unshift("farhan");
// // console.log(GuestList);

// let middleGuest:string = "the god father"
// let middleIndex = GuestList.length/2
// GuestList.splice(middleIndex, 0, middleGuest);
// // console.log(GuestList);
// GuestList.push("haris");
// console.log(GuestList);
// // GuestList.map((item) =>
// //     console.log(`Dear ${item}, I found a bigger dinner table.`)
    
// // );


// 2nd method

// step 1


// let GuestList:string[] = [ "saif","shoib","asif","jamal","kashan"];

// for (let Guest of GuestList) {
// console.log(`hello, ${Guest}, we found a bigger dinner table`);

// }

// // step 2

// let newGuest:string = "adnan"
// GuestList.unshift(newGuest)
// console.log(GuestList);

// // 3rd step

// let newGuestInMiddle:string = "kamran"
// let middleIndex:number = Math.floor(GuestList.length/2)
// GuestList.splice(middleIndex, 0, newGuestInMiddle)
// console.log(GuestList);


// // 4th step

// let newGuestAtEnd: string = "kashif"
// GuestList.push(newGuestAtEnd)
// // console.log(GuestList);

// // final step

// console.log("New set of invitation messages");

// for(let guest of GuestList){
    
// console.log(`Dear ${guest}, you are invited to dinner`);
// }


// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in  time forthe dinner, and you have space for only two guests. 
// • Start with your program from Exercise 16. Add a new line that prints a message saying  that you can invite only two people for dinner. 
// • Remove guests from your list one at a time until only two names remain in your list.  Each time you pop a name from your list, print a message to tTat person lettingthem  know you’re sorry you can’t invitethem to dinner. 
// • Print a message to each ofthe two people still on your list, lettingthem knowthey’re  still invited. 
// • Removethe last two names from your list, so you have an empty list. Print your list to  make sure you actually have an empty list atthe end of your program. 




// let GuestList:string[] = [ "saif","shoib","asif","jamal","kashan"];
// console.log(" i can invite only two  people to dinner");
// while (GuestList.length>2) {
//     let removeGuest = GuestList.pop()
//     console.log(`Dear ${removeGuest}, you are not invited tothe dinner `);
    
// }
// GuestList.map((item)=>(
    
// console.log(`Dear ${item}, you are still invited to dinner`)
// ));

// GuestList.pop()
// GuestList.pop()
// console.log(GuestList);



// 18. Seeingthe World: Think of at least five places inthe world you’d like to visit. • Storethe locations in a array. Make surethe array is not in alphabetical order. • Print your array in its original order. 
// • Print your array in alphabetical order without modifyingthe actual list. • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changingthe order ofthe  original list. 
// • Show that your array is still in its original order by printing it again. • Reversethe order of your list. Printthe array to show that its order has changed. • Reversethe order of your list again. Printthe list to show it’s back to its original order. 
// • Sort your array so it’s stored in alphabetical order. Printthe array to show that its order  has been changed. 
// • Sort to change your array so it’s stored in reverse alphabetical order. Printthe list to  show that its order has changed. 

// 1st step

let travelDestination: string[] = ["tokyo","paris","malaisya","turki","malta"]

// 2nd step
// console.log("orignal order");

// console.log(travelDestination);

// // // 3rd step

// console.log("\n an alphabetical order without modifyingthe actual list");
// console.log([...travelDestination].sort());

// // // 4th step


// console.log("\n Showing  array is still in its original order");
// console.log(travelDestination);


// // // 5th step

// console.log("\n an reverse order without modifyingthe actual list");
// console.log([...travelDestination].sort().reverse());


// // 6th step

// console.log("\n Showing  array is still in its original order");
// console.log(travelDestination);

// // 7th step

// console.log("\n reverse order");
// travelDestination.reverse()
// console.log(travelDestination);


// // 8th step

// console.log("\n back to orignal order");
// travelDestination.reverse()
// console.log(travelDestination);

// // 9th step

// console.log("\n change to alphabatical order");
// travelDestination.sort()
// console.log(travelDestination);

// 10th step

// console.log("\n change to reverse alphabatical order");
// travelDestination.sort().reverse
// console.log(travelDestination);


// 19. Dinner Guests: Working with one ofthe programs from Exercises 14 through 18,  print a message indicatingthe number of people you are inviting to dinner. 


// let GuestList:string[] = [ "saif","shoib","asif","jamal","kashan"];

// console.log(GuestList.length + " " + " peoples are invited to dinner");


// 20. Think of something you could store in a array. For example, you could make a list  of mountains, rivers, countries, cities, languages, or anything else you’d like. Write  a program that creates a list containingthese items. 

// let pakCites : string[] = ["karachi","lahore","islamabad","multan"];
  
// 1st method

// pakCites.map((item) => console.log(item));

// 2nd method

// console.log(("list of cites"));

// for (let city of pakCites)
// {
// console.log(city);

// }


// 21.they think of something you could store in a TypeScript Object. Write a program  that creates Objects containingthese items. 


// const bouquet = 
// {
// Name : "rose",
// price : 300,
//     description : "best roses for arrengment",
// }

// // define an Array objects

// let bouquets: Array<typeof bouquet> = [];

// // pushing multipul objects

// bouquets.push(bouquet);
// bouquets.push({Name:"sunflower",
// price:350,
// description:"sunflower is give us from nature"})



// let bouquet2 = {

// Name : "black rose",
// price :400,
//     description : "it's usefull rose",
// }
// bouquets.push(bouquet2);

// // console.log(bouquets);

// bouquets.push({ Name:"freshness" , price:250, description:"A beautiful arrangement of white and yellow roses"});

// // console.log(bouquets);


// // function to display bouquets

// function displayBouquets(bouquets: Array<typeof bouquet>)
// {
// for (let i of bouquets) 

    
// console.log(`title: ${i.Name}
// discription${i.description}
// price: ${i.price}
// ______________\n`);
// }

// displayBouquets(bouquets);


// 22. Intentional Error: If you haven’t received an array index error in one of your  programs yet, try to make one happen. Change an index in one of your programs  to produce an index error. Make sure you correctthe error before closingthe  program. 

// function to create a frurit object

// function createFruit(name:string, color: string,
//     taste: string) {
//         return {
//             name,
//             color,
//             taste,
//         };
    
// }

// // create an Array of frurits

// const fruits = [
//     createFruit("apple","red","sweet"),
//     createFruit("banana","yellow","sweet"),
//     createFruit("orange","orange", "citrusy"),
//     createFruit("graphs", "red", "sweet"),
//     createFruit("strawberry", "red", "sweet"),
// ];

// // Access an invalid index

// const invalidIndex = 10; //there are only 5
// //elements inthe Array, so this will cause an error
// console.log(`fruit at index ${invalidIndex} :`,fruits
// [invalidIndex]);

// //printthe fruits
// fruits.forEach((fruit) => {
//     console.log(`name: ${fruit.name}, color: ${fruit.
//         color}, taste: ${fruit.taste}`);
    
// }) ;

// 23. Conditional Tests: Write a series of conditional tests. Print a statement describing  each test and your prediction forthe results of each test. Your code should look  something like this: 
// let car = 'subaru'; 
// console.log("Is car == 'subaru'? I predict True.") 
// console.log(car == 'subaru') 
// • Look closely at your results, and make sure you understand why each line evaluates to  True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests  evaluate to False. 

// let car = 'subaru';

// console.log("Is car == 'sabaru'? I predict true.");
// console.log(car == 'subaru');

// console.log("Is car == 'Honda'? I predict true.");
// console.log(car == 'Honda');

// console.log("Is car === 'sabaru'? I predict true.");
// console.log(car === 'subaru');

// console.log("Is car === 'Sabaru'? I predict true.");
// console.log(car === 'Subaru');

// console.log("Is car !== 'toyota'? I predict true.");
// console.log(car !== 'toyota');

// console.log("Is car !== 'sabaru'? I predict true.");
// console.log(car !== 'subaru');


// console.log("Is car != 'mazda'? I predict true.");
// console.log(car != 'mazda');


// console.log("Is car != 'subaru'? I predict true.");
// console.log(car != 'subaru');

// let age = 25;
// console.log("Is age > 18? I predict true.");
// console.log(age > 18);

// console.log("Is age < 21? I predict true.");
// console.log(age < 21);

// 24. More Conditional Tests: You don’t have to limitthe number of tests you create to  10. If you want to try more comparisons, write more tests. Have at least one True  and one False result for each ofthe following: 
// • Tests for equality and inequality with strings 
// • Tests usingthe lower case function 
// • Numerical tests involving equality and inequality, greater than and less than, greater  than or equal to, and less than or equal to 
// • Tests using "and" and "or" operators 
// • Test whether an item is in a array 
// • Test whether an item is not in a array 


// • Tests for equality and inequality with strings 
// const str1:string = "Hello";
// const str2:string = "hello";
// console.log(str1 === str2);
// console.log(str1 !== str2);

// // • Tests usingthe lower case function
// const text1:string = "Hello";
// const text2:string = "hello";
// console.log(text1.toLowerCase() === text2);

// // • Numerical tests involving equality and inequality, greater than and less than, greater  than or equal to, and less than or equal to 
// const num1:number = 10;
// const num2:number = 5;

// console.log(num1 === num2);
// console.log(num1 !== num2);
// console.log(num1 > num2);
// console.log(num1 < num2);
// console.log(num1 >= num2);
// console.log(num1 <= num2);

// // • Tests using "and" and "or" operators
// const x:number = 5;
// const y:number = 10;
// const z:number = 15;

// console.log(x < y && y < z);

// console.log(x < y || y > z);

// console.log(x > y && y < z);

// console.log(x > y || y > z);

// // • Test whether an item is in a array 
// const fruits: string[] = ['apple','banana','orange','grape'];

// console.log(fruits.includes('banana'));
// console.log(fruits.includes('kiwi'));

// // • Test whether an item is not in a array 
// const colors: string[] = ['red','green','blue','yellow'];

// console.log(!colors.includes('purple'));
// console.log(!colors.includes('green'));

// 25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable  called alien_color and assign it a value of 'green', 'yellow', or 'red'. 
// • Write an if statement to test whetherthe alien’s color is green. If it is, print a message  thatthe player just earned 5 points. 
// • Write one version of this program that passesthe if test and another that fails. (The  version that fails will have no output.) 

// let alian_color = 'green'

// if (alian_color == 'green') {
//     console.log("congragulation! you just earned 5 points.")
    
// }

// // 2nd version

//  alian_color = 'blue'

// if (alian_color == 'green') {
//     console.log("congragulation! you just earned 5 points.");
    
// }

// 26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an  if-else chain. 
// • Ifthe alien’s color is green, print a statement thatthe player just earned 5 points for  shootingthe alien. 
// • Ifthe alien’s color isn’t green, print a statement thatthe player just earned 10 points. 
// • Write one version of this program that runsthe if block and another that runsthe else  block.

// version 1 (runsthe if block)

// let alian_color:string = 'green';

// if (alian_color === 'green') {
//     console.log("congragulation! you just earned 5 points for shootingthe alian");

// } else {
// console.log('congragulation! you just earned 10 points for shootingthe alian');

// }

// // version 2 (runsthe else block)

// alian_color = 'blue';

// if (alian_color === 'green') {
    
// console.log('congragulation! you just earned 5 points for shootingthe alian');
// } else {
// console.log('congragulation! you just earned 10 points for shootingthe alian');


// }

// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain. • Ifthe alien is green, print a message thatthe player earned 5 points.
// • Ifthe alien is yellow, print a message thatthe player earned 10 points. • Ifthe alien is red, print a message thatthe player earned 15 points. 
// • Write three versions of this program, making sure each message is printed forthe  appropriate color alien. 

// 1st version where alian color is green

// console.log('1st version where alian color is green');

// let alian_color:string = 'green';


// if (alian_color === 'green') {
    
// console.log('congragulation! you just earned 5 points.');
// } else if (alian_color === 'yellow') {
// console.log('congragulation! you just earned 10 points.');
// } else if (alian_color === 'red') {
//     console.log('congragulation! you just earned 15 points.');  
// } else {
//     console.log('unknown alian color.');    
// }

// // 2nd version where alian color is yellow

// console.log('2nd version where alian color is yellow');


//  alian_color = 'yellow';

 
// if (alian_color === 'green') {
//  console.log('congragulation! you just earned 5 points.');
// } 
// else if (alian_color === 'yellow') {
// console.log('congragulation! you just earned 10 points.');
// }
//  else if (alian_color === 'red') {
//     console.log('congragulation! you just earned 15 points.');  
// }
//  else {
//     console.log('unknown alian color.');    
// }

// //3rd version where alian color is red

// console.log('3rd version where alian color is red');


// alian_color = 'red';

 
// if (alian_color === 'green') {
//  console.log('congragulation! you just earned 5 points.');
// } 
// else if (alian_color === 'yellow') {
// console.log('congragulation! you just earned 10 points.');
// }
//  else if (alian_color === 'red') {
//     console.log('congragulation! you just earned 15 points.');  
// }
//  else {
//     console.log('unknown alian color.');    
// }

// 28. Stages of Life: Write an if-else chain that determineT a person’s stage of life. Set a  value forthe variable age, andthen: 
// • IfThe person is less than 2 years old, print a message thatThe person is a baby. 
// • IfThe person is at least 2 years old but less than 4, print a message thatThe person is a  toddler. 
// • IfThe person is at least 4 years old but less than 13, print a message thatThe person is  a kid. 
// • IfThe person is at least 13 years old but less than 20, print a message thatThe person is  a teenager. 
// • IfThe person is at least 20 years old but less than 65, print a message thatThe person is  an adult. 
// • IfThe person is age 65 or older, print a message thatThe person is an elder. 

// let age:number = 25;

// // less than 2 years old, print a message thatThe person is a baby.

// if (age < 2) {
//     console.log(`Age is ${age},The person is a baby.`);
// } else if (age < 4) {
//     console.log(`Age is ${age}The person is a toddler`);
// } else if (age < 13) {
//     console.log(`Age is ${age}The person is a kid`);
// } else if (age < 20) {
//     console.log(`Age is ${age}The person is a teenager`);
// } else if (age < 65) {
//     console.log(`Age is ${age}The person is a adult`);
// } else {
//     console.log(`Age is ${age}The person is a elder`);
// }

// // to test with difrent age

// console.log('2nd test with difrent age');

// age = 12
// if (age < 2) {
//     console.log(`Age is ${age},The person is a baby.`);
// } else if (age < 4) {
//     console.log(`Age is ${age}The person is a toddler`);
// } else if (age < 13) {
//     console.log(`Age is ${age}The person is a kid`);
// } else if (age < 20) {
//     console.log(`Age is ${age}The person is a teenager`);
// } else if (age < 65) {
//     console.log(`Age is ${age}The person is a adult`);
// } else {
//     console.log(`Age is ${age}The person is a elder`);
// }

// 29. Favorite Fruit: Make a array of your favorite fruits, andthen write a series of  independent if statements that check for certain fruits in your array. 
// • Make a array of your three favorite fruits and call it favorite_fruits. 
// • Write five if statements. Each should check whether a certain kind of fruit is in your  array. Ifthe fruit is in your array,the if block should print a statement, such as You really  like bananas! 

// const favorite_fruits: string[] = ["apple","banana","orange"]

// if (favorite_fruits.includes("apple")) {
// console.log("I like apples!");
// }


// if (favorite_fruits.includes("banana")) {
//     console.log("I enjoy bananas!");
//     }


//     if (favorite_fruits.includes("orange")) {
//         console.log(" oranges are delicious");
//         }


//         if (favorite_fruits.includes("grapes")) {
//             console.log(" grapes are tasty!");
//             }


//             if (favorite_fruits.includes("mango")) {
//                 console.log("Mango is a king");
//                 }

// 30. Hello Admin: Make a array of five or more usernames, including the name  'admin'. Imagine you are writing code that will print a greeting to each user after  they log in to a website. Loop through the array, and print a greeting to each  user: 
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like  to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again. 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.  • If the list is empty, print the message We need to find some users! 
// // • Remove all of the usernames from your array, and make sure the correct message is  printed. 

// const userNames:string[] = ["admin","ali","asif","rashid","ahmed"];

// function greetUsers(): void {
// for (const i in userNames) {
// if (userNames[i].toLowerCase() === 'admin') {
// console.log('Hello admin, would you like to see a status report?');

// } else {
// console.log(`hello ${userNames[i]}, thank you for logging in again.`);

// }}
    
// }

// greetUsers()

//31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.  • If the list is empty, print the message We need to find some users! 
//• Remove all of the usernames from your array, and make sure the correct message is  printed. 



// // Non empty Arry case
// let userNames:string[] = ['Admin','ali','kamran','farhan','rehman'];

// // funtional case

//   function greetUsers(username: String []): void {
//     if (userNames.length === 0) {
//         console.log('we need to find some users!');
//         return;
//     }
//     for (const username of userNames) {
//         if (username.toLowerCase() === 'admin') {
//             console.log('Hello admin, would you like to see a status report?');
            
//         } else {
//             console.log(`Hello ${username}, thank you for logging in again.`);
            
//         }
//     }
// }
// console.log('For non empty username:\n');
// greetUsers(userNames);

// // to make array empty we just assing an empty array to userNames
// userNames = [];

// console.log('\n\n For empty username:\n');
// greetUsers(userNames);


// 32. Checking Usernames: Do the following to create a program that simulates how  websites ensure that everyone has a unique username. 
// • Make a list of five or more usernames called current_users. 
// • Make another list of five usernames called new_users. Make sure one or two of the  new usernames are also in the current_users list. 
// • Loop through the new_users list to see if each new username has already been used. If  it has, print a message that the person will need to enter a new username. If a username  has not been used, print a message saying that the username is available. 
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should  not be accepted. 

// 1st step arrays
// const current_users: string[] = ['Kamran','Ali','Burhan','Asad','Rehman'];

// const new_users:string[] = ['saeed','Irshad','faheem','Rashid','irfan']

// // // 2nd step function

// function checkUserName(current_users: string[],new_users: string[]): void
// {
//     const lowerCasedCurrentUsers = current_users.map(user => user.toLowerCase());

//     for (const newUser of new_users) {
//         const lowerCasedNewUsers = newUser.toLowerCase();
//         if (lowerCasedCurrentUsers.includes(lowerCasedNewUsers)) {
//             console.log(`Username "${newUser}" is already taken. please inter a new username.`);
            
//         } else {
//             console.log(`username "${newUser}" is available.`);
            
//         }
//     }
// }

// checkUserName(current_users,new_users)


// 33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st  or 2nd. Most ordinal numbers end in th, except 1, 2, and 3. 
// • Store the numbers 1 through 9 in a array. 
// • Loop through the array. 
// • Use an if-else chain inside the loop to print the proper ordinal ending for each  number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result  should be on a separate line. 


// const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// for (const number of numbers) {
// let ordinal:string;
// if (number === 1) {
    
// ordinal = "st";
// } else if (number === 2) {
// ordinal = "nd";
// } else if(number === 3) {
// ordinal = "rd";
// } else {
// ordinal = "th"
// }
// console.log(`${number}${ordinal}`);

// }

// 34. Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names  in a array, and then use a for loop to print the name of each pizza. 
// • Modify your for loop to print a sentence using the name of the pizza instead of  printing just the name of the pizza. For each pizza you should have one line of output  containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you  like pizza. The output should consist of three or more lines about the kinds of pizza you  like and then an additional sentence, such as I really love pizza! 

// // //Define  the array of favorite pizzas
// const favoritePizzas = ['chiken tikka','chiken fajita','super supreme'];

// //print the name of each pizza using a for loop
// console.log("my favorite pizzas are:");
// for (let i = 0; i < favoritePizzas.length; i++) {
//     console.log(favoritePizzas[i]);
// }

// // print a sentence for each pizza
// console.log("\nI like these pizzas:");
// for (let i = 0; i < favoritePizzas.length; i++) {
//     console.log(`I like ${favoritePizzas[i]} pizza.`);
// }

// //print an additional sentence about how much I like pizza
// console.log(`\nI really love pizza!`);


// 35. Animals: Think of at least three different animals that have a common  characteristic. Store the names of these animals in a list, and then use a for loop  to print out the name of each animal. • Modify your program to print a statement  about each animal, such as A dog would make a great pet. • Add a line at the end  of your program stating what these animals have in common. You could print a  sentence such as Any of these animals would make a great pet! 

//list of animals with a common characteristic
// const animals:string[] = ['cat','dog','goat'];

// //printing the names of each animals using a for of loop

// console.log("list of animals:");
// for (const animal of animals ) {
//     console.log(animal);
// }

// // print a statment about each animals
// console.log("\nStatment about each animals:");
// for (const animal of animals) {
//     if (animal === 'dog') {
//         console.log(`A ${animal} is a great pet.`);
//     } else if (animal === 'cat') {
//         console.log(`A ${animal} would be a good companion at home.`);
//     }   else if (animal === 'goat') {
//         console.log(`A ${animal} is an adorable pet that also give us milk`);
        
//     }
// }

// // common characteristic
// console.log("\nWhat these animals have in common:");
// console.log("Any of these animals could be a great pets!");


// 36. T-Shirt: Write a function called make_shirt() that accepts a size and the text of a  message that should be printed on the shirt. The function should print a sentence  summarizing the size of the shirt and the message printed on it. Call the function. 

// Defining a function that accept a size and the text of message that should  be printed on the shirt.

// const make_shirt = (size:string, message:string)
// :void =>
// {
//     console.log(`size: ${size}, message: '${message}'`);
// }

// // call the function with the size and the message variables

// let size :string = "medium";
// let message:string = "This is best shirt"

// make_shirt(size, message)

// // directly call the function
// make_shirt("large", "best shirt")


// 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default  with a message that reads I love TypeScript. Make a large shirt and a medium  shirt with the default message, and a shirt of any size with a different message. 

// function makeShirt(size: string = "Large", message:
// string = "I love coding"): void {

//    return console.log(`size: ${size}, message: '${message}'`);
    
// }

// // Large shirt with default message
// makeShirt()

// //Medium shirt with default message
// makeShirt("medium");

// // Custom shirt with a diffrent message size
// makeShirt("small", "I love programming")


// 38. Cities: Write a function called describe_city() that accepts the name of a city and  its country. The function should print a simple sentence, such as Karachi is in  Pakistan. Give the parameter for the country a default value. Call your function for  three different cities, at least one of which is not in the default country. 

// function describe_city(city:string, country:string = "Unknown country"):void
// {
//     console.log(`${city} is in ${country}.`);
    
// }

// // calling the function for three diffrent cites
// describe_city("karachi", "pakistan");
// describe_city("New york"); // Using the default 
// describe_city("Berlin", "Germany");


// 39. City Names: Write a function called city_country() that takes in the name of a city  and its country. The function should return a string formatted like this: 
// "Lahore, Pakistan" 
// Call your function with at least three city-country pairs, and print the value that’s  returned. 

// arrow function

// const city_country = (city:string, country:string): string  =>
// {
//     return `${city}, ${country}`;
// }

// // Test the function with three city-country pairs

// console.log(city_country("Lahore", "Pakistan"));
// console.log(city_country("New york", "USA"));
// console.log(city_country("Tokiyo", "Japan"));

// 40. Album: Write a function called make_album() that builds a Object describing a  music album. The function should take in an artist name and an album title, and it  should return a Object containing these two pieces of information. Use the  function to make three dictionaries representing different albums. Print each  return value to show that Objects are storing the album information correctly.  Add an optional parameter to make_album() that allows you to store the number  of tracks on an album. If the calling line includes a value for the number of tracks,  add that value to the album’s Object. Make at least one new function call that  includes the number of tracks on an album.

// function make_album(artist: string, title: string,
//     tracks?: number):
//     { artist: string; title: string; tracks?: number } 
// {
// const album = {
//     artist,
//     title,
    
// };
// if (tracks !== undefined)

// {   

// }

// return album;
//     }

//     // Example function calls
//     const album1 = make_album('Amanat Ali', 'Sagar');
//     const album2 = make_album('Sajad Ali', 'Nakhun', 11);
//     const album3 = make_album('Junaid Jumshed', 'Dil dil', 9);

//     console.log(album1);
//     console.log(album2);
//     console.log(album3);
    
// 41. Magicians: Make a array of magician’s names. Pass the array to a function called  show_magicians(), which prints the name of each magician in the array. 

// const magicianNames: string[] = ["David copperfield","prof.Albus Dumledore","Harry porter","Ron weasley","Hermione Granger",];

// function show_magicians(magicians: string[]): void
// {
//     for (const magician of magicians) {
//         console.log(magician);
        
//     }
// }

// // // Call the function to show the magicians names
// show_magicians(magicianNames)
 


// // 42. Great Magicians: Start with a copy of your program from Exercise 39. Write a  function called make_great() that modifies the array of magicians by adding the  phrase the Great to each magician’s name. Call show_magicians() to see that the  list has actually been modified. 


// // Array of magicians names

// const magicianNames: string[] = ["David copperfield","prof.Albus Dumledore","Harry porter","Ron weasley","Hermione Granger"];


// function showMagicians(magicians:string[]): void {
//     for (const magician of magicians) {
//         console.log(magician);
        
//     }
// }

// function make_great(Magicians: string[]): string[] {
//     const greatMagicians: string[] = Magicians.map(magician => ` the 
//     Great ${magician}`);
//     return greatMagicians
// }

// // // Modify the array to add "the Great" to each magicians names
// const greatMagiciansNames: string[] = make_great(magicianNames);

// // // Call the function to show the original magicians names
// console.log("original Magicians:");
// showMagicians(magicianNames);

// // // Call the function to show the great magicians names
// console.log("\nGreat magicians:");
// showMagicians(greatMagiciansNames);


// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the function  make_great() with a copy of the array of magicians’ names. Because the original  array will be unchanged, return the new array and store it in a separate array. Call  show_magicians() with each array to show that you have one array of the original  names and one array with the Great added to each magician’s name. 



// Array of magicians names

// const magicianNames: string[] = ["David copperfield","prof.Albus Dumledore","Harry porter","Ron weasley","Hermione Granger"];

// function showMagicians(magicians:string[]): void {
//     for (const magician of magicians) {
//         console.log(magician);
        
//     }
// }

// function make_great(Magicians: string[]): string[] {
//     const greatMagicians: string[] = Magicians.map(magician => ` the 
//     Great ${magician}`);

// // // // Call the function to show the original magicians names
// console.log("original Magicians:");
// showMagicians(magicianNames);

// // // // Call the function to show the great magicians names
// console.log("\nGreat magicians:");
// showMagicians(magicianNames);
//     return greatMagicians
// }

// // modify the array to add "the great" to each magicians names

// const greatMagiciansNames: string[] = make_great(magicianNames);



// 44. Sandwiches: Write a function that accepts a array of items a person wants on a  sandwich. The function should have one parameter that collects as many items as  the function call provides, and it should print a summary of the sandwich that is  being ordered. Call the function three times, using a different number of  arguments each time. 


// function makeSandwich(...items: string[]): void {
//     console.log("sandwich summary:");
//     if (items.length === 0) {
//         console.log("   - you orderd an empty sandwich. please add some items");
        
//     } else {
//         items.forEach((item, index) => {
//             console.log(`   ${index + 1}. ${item}`);
            
//         });
//     }
//     console.log("\n");
// }

// // Call the function with different numbers of arguments
// makeSandwich()
// makeSandwich("Turkey", "Lettuce", "Tomato", "Mayonnise");
// makeSandwich("Ham", "Cheese");
// makeSandwich("peanut Butter", "Jelly", "Banana", "Honey");


// 45. Cars: Write a function that stores information about a car in a Object. The  function should always receive a manufacturer and a model name. It should then  accept an arbitrary number of keyword arguments. Call the function with the  required information and two other name-value pairs, such as a color or an  optional feature. Print the Object that’s returned to make sure all the information  was stored correctly.


// function createCar(manufacturer: string, model: string, ...properties: [string, any][]): any {
//     const car: any = {
//         manufacturer,
//         model,
//     };
//     for (const [key, value] of properties) {
//         car[key] = value;
//     }
//     return car;
// }

// // Example usage:
// const myCar: string = createCar("Toyota","Corolla", ["color", "red"], ["optional Feature", "sunroof"], ["Speed", "280 km/hour"]);

// console.log(myCar);
