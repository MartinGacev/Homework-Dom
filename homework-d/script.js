const homework = document.querySelectorAll("p")
for(let i = 0; i<homework.length; i++){
    homework[i].innerText = `Hello this is changed`
}
 const homeworkSame = document.querySelectorAll("h1",  "h3")
for(let k = 0; k <homeworkSame.length; k++ ){
    homeworkSame[k].innerText = `I whant to change this`
}


    

const fristDiv = document.querySelector ('.anotherDiv')
const lastHomework = document.querySelector ( 'text')
if (lastHomework){
    lastHomework.innerText=`heeey`
}
// ova ne mi raboti ne znam zaso ako moze da mi objasnite



const numbers = [2, 1, 55, 4, 6]
const numberList = document.getElementById('numberOfList')
const sumDisplay = document.getElementById('sumExercises')

numbers.forEach(num => {
  const listItem = document.createElement('li')
  listItem.innerText = num
  numberList.appendChild(listItem)
})
const sum = numbers.reduce((acc, num) => acc + num, 0)
sumExercises.innerText = `Sum: ${sum}`