import {isEmail} from '../node_modules/freq-used-validators/index.js';
// hash function for strings only
class HashTable{
    constructor(size = 17){
        this.keyMap = new Array(size);
    }
    _hash(key){
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++){
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }
    set(key, value){
        let index = this._hash(key);
        if(!this.keyMap[index]){
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key,value]);
        return this;
    }
    get(key){
        let index = this._hash(key);
        if(this.keyMap[index]){
            return this.keyMap[index].find(element => element[0]==key)[1];
        }
        return undefined;
    }  
    values(){
        let valuesArr = [];
        for(let i=0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j=0; j < this.keyMap[i].length; j++){
                    if(!valuesArr.includes(this.keyMap[i][j][1])){
                        valuesArr.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        return valuesArr;
    }
    keys(){
        let keysArr = [];
        for(let i=0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j=0; j < this.keyMap[i].length; j++){
                    keysArr.push(this.keyMap[i][j][0]);
                }
            }
        }
        return keysArr;
    }
}
// console.log(globalThis);
// let nv = new HashTable(4);
// nv.set("ping","Google");
// nv.set("bing","Microsoft");
// nv.set("ring","Robin");
// nv.set("color","yellow");
// nv.get("ring");
// nv.values();
// let result = nv.keys();
// console.log(result);

// let result = hash("pink",10);
// console.log(result);

let result = isEmail("rajatchauhan407@gmail.com");
console.log(result);