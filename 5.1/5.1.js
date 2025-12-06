    /*import { promises as fs } from 'fs';

    let txtitems;
    let txtrange;
    let res = 0;
    async function gettext() {
    txtitems = await fs.readFile('input5item.txt', 'utf8');
    txtrange = await fs.readFile('input5range.txt', 'utf8');
    }
    async function main() {
        await gettext();
        if (!txtitems || !txtrange) return;
    var allinrange = [];
    var items = txtitems.split("\n");
    var ranges = txtrange.split("\n");
    for(let i=0; i<ranges.length; i++){
        var range = ranges[i].split("-");
        
            
                for (let j=Number(range[0]); j <= Number(range[1]); j++){

                    allinrange.push(Number(j));
                    
                }
    }
    for(let k=0; k<items.length; k++){
        if(allinrange.includes(Number(items[k]))){
            console.log(res);
            res++;
        }
    }
    console.log(res);
    }
    main();*/
    // my first unsuccessful attempt at bruteforcing

    import { promises as fs } from 'fs';

        let txtitems;
        let txtrange;
        let res = 0;
        async function gettext() {
        txtitems = await fs.readFile('input5item.txt', 'utf8');
        txtrange = await fs.readFile('input5range.txt', 'utf8');
        }
        async function main() {
            await gettext();
            if (!txtitems || !txtrange) return;
        var items = txtitems.split("\n");
        var ranges = txtrange.split("\n");
    

            
            for (let k=0; k<items.length; k++){
                for(let i=0; i<ranges.length; i++){
                var range = ranges[i].split("-");
                    if ( Number(items[k]) >= Number(range[0]) && Number(items[k]) <= Number(range[1])){
                        res++;
                        break;
                    }
                    
            }
        }
        console.log(res);
        }
        main();