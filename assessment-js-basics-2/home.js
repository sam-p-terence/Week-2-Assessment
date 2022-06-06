///////////////////////////////////////////////
///////////////////HOME.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    helps with some functionality on the home 
    page of the restaurant's website.
*/


//////////////////PROBLEM 1////////////////////
/* 
    Write an *arrow* function called `greetUser`
    It should have one parameter, `username`
    The function should return a string that says: 
    'Welcome back, [USERNAME]'
    Where USERNAME is the `username` arguement sent in

    For example, if called with `Andrew` as the 
    argument, `greetUser` should return the string:
    'Welcome back, Andrew'
*/

//CODE HERE

const greetUser = username => {
    return 'Welcome back, ' + name
  }
  
// or // const greetUser = name => `Welcome back, ${name}`
  
//////////////////PROBLEM 2////////////////////
/* 
    Below is an array of zip codes that are in
    the restaurant's delivery zone. 

    Write a function called `canWeDeliver` that
    takes in one argument, `zipCode`.

    If the zip code passed in is in the array,
    return a string letting the user know they
    are eligible for delivery. If they are not, 
    return a string letting them know that. 

    For example:
    canWeDeliver(84606) 
        // `Sorry, we can't deliver to that address`
    canWeDeliver(85205) 
        // `You're in our delivery zone!`
*/

const deliveryAreaZipCodes = [85205, 85204, 85203, 85213, 85206]

//CODE HERE

function canWeDeliver(zipCode) {
    let answers = "" 
      for (let i = 0; i < deliveryAreaZipCodes.length; i++) {
      if (zipCode === deliveryAreaZipCodes[i]) {
        answers = "You're in our delivery zone!"
        break;
      } else {
        answers = "Sorry, we can't deliver to that address"
      }
    }
    return answers
    }

    console.log(canWeDeliverTwo(23423))
    console.log(canWeDeliverTwo(85205))


// function canWeDeliver(zipCode) {
//     if (deliveryAreaZipCodes.includes(zipCode)) {
//         return "You're in our delivery zone!"
//     } else {
//         return "Sorry, we can't deliver to that address"
//     }
// }

// console.log(canWeDeliver(85205))
// console.log(canWeDeliver(84043))

  

/* 
    Problem 2 Continued

    Now you're going to rewrite your function.

    If you wrote `canWeDeliver` using a loop of
    some kind, write a new function (`canWeDeliverTwo`)
    below, using the `includes` array method. 
    Look it up on MDN if you're not sure how to use 
    it. 

    If you already used the `includes` method, 
    write a new function using some sort of 
    loop (for loop, higher order array method).
    Name your new function `canWeDeliverTwo`.
*/

// CODE HERE

function canWeDeliverTwo(zipCode) {
    let answers = ""
    if (deliveryAreaZipCodes.includes(zipCode)) {
      return 'We can deliver to this zip code'
    } else {
      return 'We cannot deliver to this zip code'
    }
  }
                                                


//////////////////PROBLEM 3////////////////////
/* 
    Below is an array of objects that have some
    information about a couple of deals that are
    available at the restaurant currently. 

    You are going to access the object's properties 
    and change some values. Don't edit the array 
    directly, let's use the `replace` method.

    Read on for more instructions.
*/

const deals = [
    {
        title: '15% Off!', 
        desc: 'Applied to your entire order when you spend $30 or more'
    }, 
    {
        title: 'Free Kids Meal with 2 Regular Entrees', 
        desc: '   This deal lasts until the end of March! '
    }
]

/*
    The owner has decided to take the 15% off
    deal down to 10%.

    Reassign the value of the first deal's title
    to be itself, but use the `replace` method
    to replace the 15 with a 10.
*/

// deals[0].title
// dealts[1].title

//CODE HERE

const replaceWithTen = deals[0].title.replace('15', '10')

deals[0].title = replaceWithTen 

console.log(replaceWithTen)

/*
    The restaurant is going to continue its
    family deal for another month. 

    Reassign the value of the second deal's desc
    to be itself, but use the `replace` method
    to replace the word March with April.

    You should also make sure that there is no
    whitespace in this string, since it seems
    to be displaying wrong on the live site.
*/

//CODE HERE

const replaceWithApril = deals[1].desc.replace('March', 'April').trim()

deals[1].desc = replaceWithApril

console.log(replaceWithApril)
