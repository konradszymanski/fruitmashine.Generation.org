'use strict'; // stricter version, less mistakes, 

const prompt = require('prompt-sync')({
    sigint: true
});

const a = 'Apple';
const b = 'Banana';
const c = 'Cherry';
const d = 'Diamond';
const w = "Watermelon";
const o = "Orange";

const reel1 = [a, b, c, d, a, b, c, d, a, b];
const reel2 = Array.from(reel1);
const reel3 = Array.from(reel1).sort();
//add new fruits
reel1.push(w, o);
reel2.push(w, o);
reel3.push(w, o);

console.log(`\nEach reel length: ${reel1.length} ${reel2.length} ${reel3.length}`);
//console.log(`${reel1}\n${reel2}\n${reel3}`);

let money = 100;
const drop = money;
//hold frequency
const holdPercent = 100; // write percent
const holdRatio = Math.floor(100 / holdPercent);
let holdCount = 0; // iscounting the spins
// the total number of fruits
// https://stackoverflow.com/questions/19395257/how-to-count-duplicate-value-in-an-array-in-javascript
const reelTotal = reel1.concat(reel2, reel3)
const counts = reelTotal.reduce((acc, value) => ({
    ...acc,
    [value]: (acc[value] || 0) + 1
}), {});
console.log(counts)

while (money) {

    let bet = prompt(`You have £${money}. Place your bet: `);
    let p1 = getRandomInt(reel1.length);
    let p2 = getRandomInt(reel1.length);
    let p3 = getRandomInt(reel1.length);

    // wins:
    let stnd = 3 * bet;
    let apple = 5 * bet;
    let diamond = 25 * bet;
    let banana = 5 * bet;

    if (bet > money) {
        console.log('\n***** NOT ENOUGH MONEY!!! *****\n');
    } else if (bet === '') {
        console.log('\n***** You need to bet to play *****\n');
    } else {

        money -= bet; // every spin it takes bet
        holdCount++; // if for counting spins

        console.log(`--------------------------------\n| ${reel1[p1]} | ${reel2[p2]} | ${reel3[p3]} |\n--------------------------------`);

        if (checkIfSame(p1, p2, p3)) {
            console.log('***** You win :o) *****')
            if (reel1[p1] == 'Apple') {
                money += apple;
                console.log('£' + apple)
            } else if (reel1[p1] == 'Diamond') {
                money += diamond
                console.log('£' + diamond)
            } else if (reel1[p1] == 'Banana') {
                money += banana
                console.log('£' + banana)
            } else {
                money += stnd;
                console.log('£' + stnd)
            }
        } else if (holdCount == holdRatio) {
            holdCount = 0;
            let hold = prompt('Press 1, 2, 3 to HOLD reel: ')

            //pause string 
            if (hold.includes('dsa')) {
                reel2[p2] = reel2[mixAgain()]
                // console.log(`--------------------------------\n| ${reel1[p1]} | ${reel2[p2]} | ${reel3[p3]} |\n--------------------------------`)
            } else if (hold.includes('13')) {
                console.log(`--------------------------------\n| ${reel1[p1]} | ${reel2[mixAgain()]} | ${reel3[p3]} |\n--------------------------------`)
            } else if (hold.includes('23')) {
                console.log(`--------------------------------\n| ${reel1[mixAgain()]} | ${reel2[p2]} | ${reel3[p3]} |\n--------------------------------`)
            } else if (hold.includes('12')) {
                console.log(`--------------------------------\n| ${reel1[p1]} | ${reel2[p2]} | ${reel3[mixAgain()]} |\n--------------------------------`)
            } else if (hold.includes('3')) {
                console.log(`--------------------------------\n| ${reel1[mixAgain()]} | ${reel2[mixAgain()]} | ${reel3[p3]} |\n--------------------------------`)
            } else if (hold.includes('2')) {
                console.log(`--------------------------------\n| ${reel1[mixAgain()]} | ${reel2[p2]} | ${reel3[mixAgain()]} |\n--------------------------------`)
            } else if (hold.includes('1')) {
                console.log(`--------------------------------\n| ${reel1[p1]} | ${reel2[mixAgain()]} | ${reel3[mixAgain()]} |\n--------------------------------`)
            }
        } else {
            console.log('----------- YOU LOOSE ----------')
        }

        let percent = bet * 100 / drop;
        //let total = money * 100 / drop;
        //console.log(money)
        //let total = bet * 100 / money;

        if (money == 0) {
            console.log((`The bet was ${percent}% of your initial drop. \n\n//////////  GAME OVER  ////////// `))
        } else {
            console.log(`The bet was ${percent}% of your initial drop. \n\n//////////  NEXT SPIN  ////////// `)
        }
    }
}

// Helper functions
function checkIfSame(p1, p2, p3) {
    if (reel1[p1] == reel2[p2] && reel2[p2] == reel3[p3]) {
        return true;
    }
}

function mixAgain() {
    return Math.floor(Math.random() * reel1.length);
}

function getRandomInt(max) {
    return (Math.floor(Math.random() * Math.floor(max)));
}


/* <script>
let test = '12345'// a word i w ant to know if there is 10 inside
let p1=1
let p2=2
let p3=3

  //CREATE a FUNCTION NAMED checkIfLetterIn  accepting 2 parameters named word and named letter. function should check if a letter is inside of the word and return true or false
  function checkIfLetterIn(word,letter){
  if (word.includes(letter)){
  return true
  }else{
  return false}
  }
  
  //USER ANSWERED PU ON HOLD 1 AND 3
  //SO WE KNOW THAT WE NEED TO SPIN AGAIN 2
  let hold='1'
  
  if(!(checkIfLetterIn(hold,'1'))){
  console.log('1 needs spin')
  p1 = 4 //=Math.floor ......
  }
  if(!(checkIfLetterIn(hold,'2'))){
  console.log('2 needs spin')
  p2=4
  }
  if(!(checkIfLetterIn(hold,'3'))){
  console.log('3 needs spin')
  p3=4
  }
  reel[p1]
  
  
  console.log(
    [p1,p2,p3])
</script> */