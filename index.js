// //  let users=[
// //     {
// //         name: 'Test1',
// //         age: 20,
// //         email: 'test1@test.com',
// //         phoneNumber: '090078601'
// //     },
// //     {
// //         name: 'Test2',
// //         age: 11,
// //         email: 'test2@test.com',
// //         phoneNumber: '090078601'
// //     }, {
// //         name: 'Test3',
// //         age: 92,
// //         email: 'test3@test.com',
// //         phoneNumber: '090078601'
// //     }, {
// //         name: 'Test4',
// //         age: 63,
// //         email: 'test4@test.com',
// //         phoneNumber: '090078601'
// //     }, {
// //         name: 'Test5',
// //         age: 14,
// //         email: 'test5@test.com',
// //         phoneNumber: '090078601'
// //     }, {
// //         name: 'Test6',
// //         age: 45,
// //         email: 'test6@test.com',
// //         phoneNumber: '090078601'
// //     }
// // ]
// // // let usersArrayLength=users.length
// // //  for (let j = 0; j < usersArrayLength ; j++) {
// // //      let age = users[j].age
// // //     if (age > 20 && age < 50){
// // //     console.log(users[j].email)
// // //}
// // //  }
// //  users.forEach((element)=>{
// // if (element.age>20 && element.age<60){
// //     console.log(element.email)
// // } })
// //  let number = [1,2,3,4,5,6]
// //  let newNum = [7,8,9,0]
// //  let newn= newNum.reduce((x,y)=>{
// //      return x+y
// //  })
// //  console.log(newn)
// //  let newArray= number.concat(newNum)
// //  console.log(newArray)
//     let attempt = 10
//     let number = Math.floor(Math.random() * 11);
//     console.log(number)
//     let i = 1
//
//     while (i < attempt) {
//
//         console.log(attempt)
//         let guess = prompt("Guess the number")
//
//         if (guess == 1) {
//             alert("wow u win")
//             break;
//         } else {
//             alert(attempt - i + " Attempt Remaining")
//         }
//         i++
//     }
//     if (i == attempt) {
//         alert("sorry your limit is over")
//     }
//
//
// let Again=true;
// while (Again) {
//     let age = prompt("Enter your age please:")
//     if (age > 18) {
//         alert("you can drive")
//     } else {
//         alert("You can not drive")
//     }
//     Again=confirm("You want to apply again")
// }

//stone paper scissor game


let stone= 0;
let paper = 1;
let scissor = 2;

let guessOfGame= Math.floor(Math.random()*3)
let userGuess = prompt("play")
userGuess=userGuess.toLowerCase()
if (userGuess==="stone"){
    userGuess= stone
}
if (userGuess==="paper"){
    userGuess=paper
}else if (userGuess==="scissor"){
    userGuess=scissor
}
if (guessOfGame===userGuess){
    alert("Try again")
} if (userGuess===stone) {
    if (guessOfGame === scissor) {
        alert("wow u win")
    } else {
        alert("u lose")
    }
}
 if (userGuess===paper){
     if (guessOfGame===stone){
         alert("wow u win")
     }else {
         alert("u Lose")
     }
 }

 if (userGuess===scissor) {
     if (guessOfGame === paper) {
         alert("wow u win")
     } else {
         alert('u lose')
     }
 }
console.log(userGuess)
console.log(guessOfGame)
