// kyu 8:
// Title: Volume of a Cuboid

//code:
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height
  }
}

// kyu 8:
// Title: Sentence Smash

//code:
function smash (words) {
  return words.join(' ')   
};


// kyu 8:
// Title: L1: Set Alarm

//code:
function setAlarm(employed, vacation){
  return employed === true && vacation === false ? true : false
}

// kyu 8:
// Title: Sum Mixed Array

//code:
function sumMix(x){
  x = x.map(x => Number(x))
  return x.reduce((acc,curr) => acc + curr,0)
}


// kyu 8:
// Title: Function 3 - multiplying two numbers

//code:
function multiply(a,b) {   //let multiply = (a, b) => a * b;
  return  a*b
}


// kyu 8:
// Title: Find the first non-consecutive number

//code:
function firstNonConsecutive (arr) {
  let flag = false
  let num
  for (let i = 0; i < arr.length-1; i++){
    if(arr[i] != arr[i+1]-1){
      num = arr[i+1]
      flag = true
      break;
    }
  }
  if(flag === true){
    return num
  }
  else{
    return null
  }
}

// kyu 8:
// Title: Grasshopper - Grade book

//code:
function getGrade (s1, s2, s3) {
  let avg = (s1+s2+s3) / 3
  if(avg >= 90 && avg <= 100){
    return 'A'
  }
  else if(avg >= 80 && avg < 90){
    return 'B'
  }
  else if(avg >= 70 && avg < 80){
    return 'C'
  }
  else if(avg >= 60 && avg < 70){
    return 'D'
  }
  else if(avg >= 0 && avg < 60){
    return 'F'
  }
}

// kyu 8:
// Title: If you can't sleep, just count sheep!!

//code:
var countSheep = function (num){
  let arr = []
  for(let i = 1; i <= num; i++){
    arr.push(i + ' sheep...')
  }
  return arr.join('')
}

// kyu 8:
// Title: Convert a string to an array

//code:
function stringToArray(string){
	return string.split(' ')
}

// kyu 8:
// Title: Grasshopper - Personalized Message

//code:
function greet (name, owner) {
  return name === owner ? 'Hello boss' : 'Hello guest'
}

// kyu 8:
// Title: Total amount of points

//code:
function points(games) {
  let splitGames = []
  for(let i = 0; i < games.length; i++){
    splitGames[i] = games[i].split(':')
  }
  let gamePoints = 0;
  for(let i = 0; i < splitGames.length; i++){
    if(splitGames[i][0] > splitGames[i][1]){
      gamePoints += 3
    }
    else if(splitGames[i][0] === splitGames[i][1]){
      gamePoints += 1
    }
    else{
      gamePoints += 0
    }
  }
  return gamePoints
}


// kyu 8:
// Title: Beginner Series #4 Cockroach

//code:
function cockroachSpeed(s) {
  return Math.floor(s*27.7777778) 
}

// kyu 8:
// Title: Simple multiplication

//code:
function simpleMultiplication(number) {
  return number % 2 === 0 ? number*8 : number*9
}


// kyu 8:
// Title: Expressions Matter 

//code:
function expressionMatter(a, b, c) {
  return Math.max(
    a + b + c,
    a * b * c,
    a * (b + c),
    (a + b) * c,
    a + b * c,
    a * b + c,
  );
}


// kyu 8:
// Title: Third Angle of a Triangle

//code:
function otherAngle(a, b) {
  return 180-a-b
}

// kyu 8:
// Title: Grasshopper - Messi goals function

//code:
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals
}

// kyu 8:
// Title: Grasshopper - Messi Goals

//code:
var laLigaGoals = 43
var championsLeagueGoals = 10
var copaDelReyGoals = 5

var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals

// kyu 8:
// Title: Expressions Matter 

//code:
function expressionMatter(a, b, c) {
  return Math.max(
    a*b*c,(a*b)+c,a*(b+c),a+b+c,(a+b)*c)
}

// kyu 8:
// Title: altERnaTIng cAsE <=> ALTerNAtiNG CaSe

//code:
String.prototype.toAlternatingCase = function () {
  return this.split('').
              map(x => x === x.toUpperCase() ?  x.toLowerCase() : x.toUpperCase()).
              join('')
}

// kyu 8:
// Title: Rock Paper Scissors!

//code:
const rps = (p1, p2) => {
  if(p1 === 'rock' && p2 === 'scissors' || p1 === 'scissors' && p2 === 'paper' || p1 ==='paper' && p2 === 'rock'){
    return `Player 1 won!`
  }
  else if(p1 === p2){
    return 'Draw!'
  }
  else{
    return `Player 2 won!`
  }
};


// kyu 8:
// Title: Short Long Short

//code:
function solution(a, b){
  return a.length > b.length ? b+a+b : a+b+a
}

// kyu 8:
// Title: Welcome!

//code:
function greet(language) {
  let languages = {
        "english": 'Welcome',
        "czech": 'Vitejte',
        "danish": 'Velkomst',
        "dutch": 'Welkom',
        "estonian": 'Tere tulemast',
        "finnish": 'Tervetuloa',
        "flemish": 'Welgekomen',
        "french": 'Bienvenue',
        "german": 'Willkommen',
        "irish": 'Failte',
        "italian": 'Benvenuto',
        "latvian": 'Gaidits',
        "lithuanian": 'Laukiamas',
        "polish": 'Witamy',
        "spanish": 'Bienvenido',
        "swedish": 'Valkommen',
        "welsh": 'Croeso'
        };
        if( languages[language])
        {
             return languages[language];
        }
        else
        {
          return "Welcome"
        }
  }

  
// kyu 8:
// Title: Will there be enough space?

//code:
function enough(cap, on, wait) {
  return cap >= (on + wait) ? 0 : Math.abs(on-cap+wait)
}


// kyu 8:
// Title: Can we divide it?

//code:
function isDivideBy(number, a, b) {
  return (number % a === 0 && number % b === 0) ? true : false
}

// kyu 8:
// Title: My head is at the wrong end!

//code:
function fixTheMeerkat(arr) {
  return arr.reverse()
 }