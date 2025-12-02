import { promises as fs } from 'fs';

let pos = 50;
let txt;
const range = 100;
let zeros = 0;

async function gettext() {
  txt = await fs.readFile('input.txt', 'utf8');

 
}
async function main() {
    
    await gettext();

    if (!txt) return;

const words = txt.split(/\r?\n/);

for (let i = 0; i < (words.length-1); i++) {
    const line = words[i];         
    const direction = line[0];     
    const value = Number(line.slice(1));
    const realvalue = value%100;
    const zerotimes = Math.floor(value/100);
    // console.log(zerotimes);
    zeros += zerotimes;
    console.log(direction, value, pos);
    if (direction == "L"){
        if (pos - realvalue < 0){
            pos = pos - realvalue + range;
            zeros++;
            console.log("zero here");   
        }
        else if(pos != realvalue){
            pos -= realvalue;
        }
        else{
            pos -= realvalue;
            zeros++;
            console.log("zero here");
        }
    }
    else if(direction == "R"){
        if (pos + realvalue >= range){
            pos = pos + realvalue - range;
            zeros++;
            console.log("zero here");
        }
        
        else{
        pos += realvalue;
    }

}
    //     if (pos == 0){
    //         zeros++;
    // }
}
console.log(zeros);
}

main();