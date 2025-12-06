// import { promises as fs } from 'fs';

//     let txtrange;
//     let res = 0;
//     async function gettext() {
   
//     txtrange = await fs.readFile('input5range.txt', 'utf8');
//     }
//     async function main() {
//         await gettext();
//         if (!txtrange) return;
//     var allinrange = [];
   
//     var ranges = txtrange.split("\n");
//     for(let i=0; i<ranges.length; i++){
//         var range = ranges[i].split("-");
//                 for (let j=Number(range[0]); j <= Number(range[1]); j++){
//                     if(!allinrange.includes(Number(j))){
//                     allinrange.push(Number(j));
//                     res++;
//                     console.log(res);
//                     }
//                 }
//     }
//     console.log(res);
//     }
    

    
//     main();

import { promises as fs } from 'fs';

    let txtrange;
    let res = 0;
    async function gettext() {
   
    txtrange = await fs.readFile('input5range.txt', 'utf8');
    }
    async function main() {
        await gettext();
        if (!txtrange) return;
        var ranges = txtrange.split("\n")
        var intervals = [];
        for (let i = 0; i < ranges.length; i++) {
            var range = ranges[i].split("-");
            var start = Number(range[0]);
            var end = Number(range[1]);
            intervals.push([start, end]);
        }
        intervals.sort((a, b) => a[0] - b[0]);
    
    
    for (let i = 0; i < merged.length; i++) {
    var start = merged[i][0];
    var end = merged[i][1];
    res += (end - start + 1);
  }
console.log(res);
}