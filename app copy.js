'use strict'; // stricter version, less mistakes, 

const prompt = require('prompt-sync')({sigint: true});

//HOMEWORK
//NUDGE FEATURE
//Automatic reel creation
//adjustable payout %
//add own ideas - choose between user input bet or same value bet
//

const a = 'Apple';
const b = 'Banana';
const c = 'Cherry';
const d = 'Diamond';

const reel1 = [a,b,c,d,a,b,c,d,a,b] 
const reel2 = ['Apple','Diamond','Cherry','Banana','Banana','Cherry','Apple','Banana','Apple','Cherry']
const reel3 = ['Cherry','Banana','Cherry','Apple','Apple','Banana','Diamond','Apple','Cherry','Banana']

//add new fruits
const w = "Watermelon";
const o = "Orange";

reel1.push(w, o);
reel2.push(w, o);
reel3.push(w, o);
// 

//double the array // spread operator
reel1.push(...reel1);
reel2.push(...reel2);
reel3.push(...reel3);

console.log(`${reel1.length} ${reel2.length} ${reel3.length} ${reel4.length}`)
console.log(reel1)

let money = 100;
const drop = money;
//let bet = 1;
// wins multiple by
//let mtpl = bet;

// major wins:
const stnd = 3;
let apple = 5;
let diamond = 25;
let banana = 15;

//chances
const reelTotal = reel1.concat(reel2, reel3)
const counts = reelTotal.reduce((acc, value) => ({
    ...acc,
    [value]: (acc[value] || 0) + 1
 }), {});
 console.log(counts)

while (money){
    let bet = prompt(`You have £${money}. Place your bet: `);
    // wins multiple by
    let mtpl = bet;
    //console.log('You have £' + money );
    //    prompt('Press enter to spin the wheels ');   
    if (bet >= money){
        console.log('NOT ENOUGH MONEY')
       break;} else if (bet === '') {
            console.log('You need to bet to play');
            break;
       }
    
    money-= bet;

    let p1 = Math.floor(Math.random() * reel1.length);
    let p2 = Math.floor(Math.random() * reel2.length);
    let p3 = Math.floor(Math.random() * reel3.length);
    let p4 = Math.floor(Math.random() * reel4.length);   

    console.log(`\n${reel1[p1]} ${reel2[p2]} ${reel3[p3]}\n`)  
   
    if (reel1[p1]==reel2[p2] && reel2[p2]==reel3[p3] 
        ){  
        console.log ('You win :o)')
        if (reel1[p1]=='Apple'){ 
            money += apple * mtpl;
            console.log  ('£'+ apple * mtpl)
        } 
        else if (reel1[p1]== 'Diamond' ){
            money += diamond * mtpl;
            console.log('£'+ diamond * mtpl)
        }
        else if (reel1[p1]== 'Banana' ){
            money += banana * mtpl;
            console.log('£'+ banana * mtpl)
        }
        else {
            money += stnd * mtpl;
            console.log('£'+ stnd * mtpl)
        }
    }  
    else {
        
        let hold = prompt('Press 1, 2, 3 or 4 to HOLD reel ')
        
        //pause string 
        if (hold.includes("1")){
           // reel1[index]  
           console.log ('works');
            }
        console.log('YOU LOOSE')
       // 
    }
    let percent = bet * 100 / drop;
    let total = money*100 / drop
    console.log(`The bet was ${percent}% of your initial drop. \n${total}% left to finish the game\n//////////////////////////// `)
}
