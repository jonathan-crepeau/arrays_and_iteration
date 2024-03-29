// console.log('Fear is the mindkiller.');

// ANCHOR SEI Arrays & Iteration Exercises

// SECTION Exercise #1: Create an array of your favorite foods. Write a for loop that console logs each of the foods in that array:

// const favFoods = ['Pasta', 'Brisket', 'Strawberry Sorbet', 'Pad Thai', 'Hawaiian Luau BBQ Chips'];

// for (let i=0; i < favFoods.length; i++) {
//   if (i % 2 == 0) {
//     console.log('Yum! ' + favFoods[i] + ' is one of my favorites!');
//   } else {
//     console.log('I love when I get to eat ' + favFoods[i] + '.');
//   }
// }


// SECTION Exercise #2: Create an array with each of the pre-Zuko members of Team Avatar. Log the first & third elements in the array. Lastly, log the length of the array:

// const teamAvatar = ["Aang", "Appa", "Katara", "Sokka", "Momo", "Toph"];

// for (let i = 0; i < teamAvatar.length; i++) {
//   if (i == 0) {
//     console.log("It's " + teamAvatar[i] + ' -- The actual Avatar!');
//   } else if (i == 2) {
//     console.log("It's " + teamAvatar[i] + ', the third member to joint the team.');
//   }
// }

// console.log(teamAvatar.length);


// SECTION Exercise #3: Write a first for loop that logs all elements in the array, and shows the index number for only the odd numbered items. Then write a second for loop that logs the index number and item of every odd numbered index item.

// const drSeuss = ["Cat in the Hat", "Sam I am", "Grinch", "Thing One", "Thing Two", "Cindy Loo Who", "JoJo McDodd"];

// for (let i=0; i < drSeuss.length; i++) {
//   if (i % 2 != 0) {
//     console.log(i + ': ' + drSeuss[i]);
//   } else {
//     console.log(drSeuss[i]);
//   }
// }

// console.log('---------------------------');

// for (let i=0; i < drSeuss.length; i++) {
//   if (i % 2 != 0) {
//     console.log(i + ': ' + drSeuss[i]);
//   }
// }


// SECTION Exercise #4: Log the items in the array, but only if the index number is even OR 5:

// const foodSelections = ["pizza", "apple", "seaweed", "artichoke", "tea", "ice cream"];

// for (let i = 0; i < foodSelections.length; i++) {
//   if ((i % 2 == 0) || (i === 5)) {
//     console.log(foodSelections[i]);
//   }
// }


// SECTION Exercise #5: Log the even numbered items in the array using a conditional statement. Then, log the even numbered items and the item with an index number of 3 using a conditional statement. Log the odd numbered index items in the array using a conditional statement.

// const looneyTunesChars = ["Bugs Bunny", "Daffy Duck", "Tweety", "Sylvester", "Elmer Fudd", "Porky Pig", "Taz"];

// for (let i = 0; i < looneyTunesChars.length; i++) {
//   if (i % 2 == 0) {
//     console.log(looneyTunesChars[i]);
//   }
// }
// console.log('-------------------')

// for (let i = 0; i < looneyTunesChars.length; i++) {
//   if ((i % 2 == 0) || (i === 3)) {
//     console.log(looneyTunesChars[i]);
//   }
// }
// console.log('-------------------')

// for (let i = 0; i < looneyTunesChars.length; i++) {
//   if (i % 2 != 0) {
//     console.log(looneyTunesChars[i]);
//   }
// }


// SECTION Exercise #6: Use a compound ASSIGNMENT operator to change each of the odd numbers of the array to equal itself times ten.

// NOTE - Remember assignment operators will throw an error if you declare and initialize a variable using 'const'. Only will re-assign a variable if declared with 'let' or 'var'.

// const nums = [2, 33, 88, 873, 37, 2, 49, 89, 585, 26];

// for (let i = 0; i < nums.length; i++) {
//   if (i % 2 != 0) {
//     nums[i] *= 10;
//     console.log(nums[i]);
//   }
// }



// ANCHOR - Array Method Exercises

// SECTION Exercise #1: Find an array method that will tell you the 'indexOf' the string cherries. Then write a for loop that logs the index of each array element with the use of the 'indexOf' method. Lastly, reverse the order of the array using a built-in array method:

// const fruit = ["apple", "oranges", "banana", "grapes", "cherries", "blueberries", "kiwi"];

// console.log(fruit.indexOf('cherries'));
// console.log('----------');

// for (let i = 0; i < fruit.length; i++) {
//   console.log(fruit[i] + ' has the index of ' + fruit.indexOf(fruit[i]));
// }
// console.log('----------');

// console.log(fruit);
// fruit.reverse();
// console.log(fruit);


// SECTION Exercise #2:
// Make an array that contains two of your favorite tv shows or movies
// .push() another TV show or movie into the array
// research the javascript array method .sort()
// save a .sort()ed version of the array to another variable, and console.log the new array
// .push() another TV show or movie into the sorted array
// research the javascript array method .reverse()
// save a .reverse()ed version of the array to another variable, and console log the reversed result
// research the array method .pop() and use it on your array. What does it do?
// research the array methods .shift() and .unshift(). How do they differ from .push() and .pop()?
// research the array methods .slice() and .splice(). What do they do? How do they differ? 

// const tvShows = ["Legend of Korra", "Avatar the Last Airbender"];
// tvShows.push('Big Little Lies');

// const sortedTvShows = tvShows.sort()
// console.log(sortedTvShows);
// sortedTvShows.push('Broad City');

// const reversedTvShows = sortedTvShows.reverse();
// console.log(reversedTvShows);

// reversedTvShows.pop();
// console.log(reversedTvShows);
// reversedTvShows.push('Avatar the Last Airbender');

// const shifted = reversedTvShows.shift();
// console.log(shifted)
// console.log(reversedTvShows);

// reversedTvShows.unshift('Broad City');
// console.log(reversedTvShows);


// SECTION Exercise #3:
// What would you write to access "Waldo"?
// What would you write to access "Jacc"?
// Change "Baked Goods" to "No One"
// Research the .splice() method and remove "Eggbert"

// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert", ["Lucinda", "Jacc", "Neff", "Snoop"], ["Petunia", "Baked Goods", "Waldo"]];

// console.log(whereIsWaldo[3][2]);
// console.log(whereIsWaldo[2][1]);
// whereIsWaldo[3][1] = "No One";
// console.log(whereIsWaldo);
// whereIsWaldo.splice(1, 1);
// console.log(whereIsWaldo);