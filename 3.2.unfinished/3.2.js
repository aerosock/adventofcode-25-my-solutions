//completely wrong
import { promises as fs } from 'fs';

let txt;
let joltage;
async function gettext() {
  txt = await fs.readFile('input3.txt', 'utf8');
}
async function main() {
    await gettext();

    if (!txt) return;

const banks = txt.split("\n");
let totJoltage = 0;
for(let i=0; i<banks.length; i++){
    let memory = banks[i].split("");
    let firstDigit = 0;
    let secondDigit = 0;
    let thirdDigit = 0;
    let fourthDigit = 0;
    let fifthDigit = 0;
    let sixthDigit = 0;
    let seventhDigit = 0;
    let eighthDigit = 0;
    let ninthDigit = 0;
    let tenthDigit = 0;
    let eleventhDigit = 0;
    let twelfthDigit = 0;
    for(let j=memory.length-12; j>0; j--){
        let currentDigit = Number(memory[j]);
        if (currentDigit >= twelfthDigit){
            twelfthDigit = currentDigit;
            if(eleventhDigit<9){eleventhDigit = twelfthDigit;}
            if(tenthDigit<9){tenthDigit = eleventhDigit;}
            if(ninthDigit<9){ninthDigit = tenthDigit;}
            if(eighthDigit<9){eighthDigit = ninthDigit;}
            if(seventhDigit<9){seventhDigit = eighthDigit;}
            if(sixthDigit<9){sixthDigit = seventhDigit;}
            if(fifthDigit<9){fifthDigit = sixthDigit;}
            if(fourthDigit<9){fourthDigit = fifthDigit;}
            if(thirdDigit<9){thirdDigit = fourthDigit;}
            if(secondDigit<9){secondDigit = thirdDigit;}
            if(firstDigit<9){firstDigit = secondDigit;}
            joltage = `${firstDigit}${secondDigit}${thirdDigit}${fourthDigit}${fifthDigit}${sixthDigit}${seventhDigit}${eighthDigit}${ninthDigit}${tenthDigit}${eleventhDigit}${twelfthDigit}`;
        }
    }
    totJoltage += parseInt(joltage);
}
console.log(totJoltage);
}
main(); 