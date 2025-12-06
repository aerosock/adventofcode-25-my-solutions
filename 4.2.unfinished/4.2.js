import { promises as fs } from 'fs';

let txt;
let res = 0;
async function gettext() {
  txt = await fs.readFile('input4.txt', 'utf8');
}
async function main() {
    await gettext();
    if (!txt) return;

var y = txt.split("\n");
console.log(y);
for (let yi = 0; yi < y.length; yi++) {
  var x = y[yi].split("");
  var prevmem = null;
  var nextmem = null;
  
  if (i > 0){
    console.log(mem);
  prevmem = mem;
  }

  if (i < line.length - 1){
  nextmem = line[i+1].split("");
  }
  var mem = line[i].split("");
  for (var j=0; j<mem.length; j++) {
    let adjAmt = 0;
    if (mem[j] == "@") {
      if (!!prevmem){
          if(prevmem[j] == "@"){
            adjAmt++;
          }
          if (prevmem[j-1] == "@" && j-1 >= 0) {
            adjAmt++;
          }
          if (prevmem[j+1] == "@" && j+1 < prevmem.length) {
            adjAmt++;
          }
      }
      if (!!nextmem){
          if (nextmem[j] == "@") {
            adjAmt++;
          }
          if (nextmem[j-1] == "@" && j-1 >= 0) {
            adjAmt++;
          }
          if (nextmem[j+1] == "@" && j+1 < nextmem.length) {
            adjAmt++;
          }
        }
      if (mem[j-1] == "@" && j-1 >= 0) {
        adjAmt++; 
      }
      if (mem[j+1] == "@" && j+1 < mem.length) {
        adjAmt++; 
      }
      console.log(`adjamt is ${adjAmt}`);
      if (adjAmt < 4){
        mem[j] = ";";
        res++;
      }
    }
}
}
console.log(res);
}

main();