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
    const firstmax = Math.max(...memory.map(Number));
    if (memory.indexOf(String(firstmax)) == memory.length-1 && memory.length != 0){
      
      var secondDigit = firstmax;
      const index = memory.indexOf(String(secondDigit));
      memory.splice(parseInt(index), 1);
      var firstDigit = Math.max(...memory.map(Number));
    }
    else{
      var firstDigit = firstmax;
      const index = memory.indexOf(String(firstDigit));
      memory = memory.slice(index + 1);
      var secondDigit = Math.max(...memory.map(Number));
    }
    joltage = String(firstDigit) + String(secondDigit);
    totJoltage += parseInt(joltage);
}
console.log(totJoltage);
}

main();

