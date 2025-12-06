import { promises as fs } from 'fs';

        let txt;
        var res = 0;
       
        async function gettext() {
        txt = await fs.readFile('input6.txt', 'utf8'); 
        }
        async function main() {
            await gettext();
            if (!txt) return;
            var strings = txt.split("\n");
            const firstLine = strings[0].trim().split(/\s+/).filter(Boolean);
            const numCols = firstLine.length;
            const numRows = strings.length;
            const arr = Array.from({ length: numCols }, () => []);

            for (let r = 0; r < numRows-1; r++) {
                var parts = (r === 0 ? firstLine : strings[r].trim().split(/\s+/).filter(Boolean));
                
            
            for (let c = 0; c < numCols; c++) {
                arr[c].push(parts[c]);
            }
        }

            for (let i = 0; i< numCols; i++){
            res+=eval(arr[i][0]+arr[i][4]+arr[i][1]+arr[i][4]+arr[i][2]+arr[i][4]+arr[i][3]);
        }
        console.log(res);
    }
  main();
        