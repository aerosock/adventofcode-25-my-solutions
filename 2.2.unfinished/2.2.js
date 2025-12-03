import { promises as fs } from 'fs';
let sum = 0;
let txt;

async function gettext() {
  txt = await fs.readFile('input2.1.txt', 'utf8');

 
}
async function main() {
    
    await gettext();

    if (!txt) return;

const ranges = txt.split(",");
for (let i=0; i < ranges.length; i++){
    const range = ranges[i].split("-");
    for (var j=Number(range[0]); j<=Number(range[1]); j++){
        
        if (String(j).slice(0, String(j).length/2)==String(j).slice(String(j).length/2)){
            
            
            sum+=j;
        }
};
}
console.log(sum);
}
main();
