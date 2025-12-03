//IMPORTANT TO FIX have to make the firstmax always be before secondmax in order or swap them around

import { promises as fs } from 'fs';
let txt;
async function gettext() {
  txt = await fs.readFile('input3.txt', 'utf8');

 
}
async function main() {
    
    await gettext();

    if (!txt) return;

const banks = txt.split("\n");
let totJoltage = 0;
for(let i=0; i<banks.length; i++){
    const memory = banks[i].split("");
    
    const firstmax = Math.max(...memory.map(Number));
    const firstmaxstr = String(firstmax);
    console.log(firstmax);
    const index = memory.indexOf(firstmaxstr);
    memory.splice(parseInt(index), 1);
    const secondmax = Math.max(...memory.map(Number));
    const secondmaxstr = String(secondmax);
    let joltage = firstmaxstr + secondmaxstr;
    console.log(joltage);
    totJoltage += parseInt(joltage);
}
console.log(totJoltage);
}

main();

