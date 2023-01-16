"use strict";

const path = require('path');
const fs = require('fs');


let readFiles = fs.readFileSync('value.json','utf-8');
const obj=JSON.parse(readFiles);

console.log()


//const obj = { "distance": { "unit": "m", "value": 2 }, "convert_to": "ft" };
const convertTo=(obj)=>{
  const ft ="ft";
  const tn ="in";
  const m ="m";
  const cm ="cm";
  let value=obj.distance.value;
  let inputIn=obj.distance.unit;
  let unit=obj.convert_to;
  let newValue;
  let k;
  let v;
  for(const x of inputIn){
    if(m.includes(x)){
      value*=100
    }
    if(tn.includes(x)){
      value*=2.54
    }
    if(ft.includes(x)){
      value*=30.48
    }
    if(cm.includes(x)){
      value*=1
    }
     k=value
  }
  for(let i of unit){
    if(m.includes(i)){
      v=k/100
    }
    if(tn.includes(i)){
      v=k/2.54
    }
    if(ft.includes(i)){
      v=k/30.48
    }
    if(cm.includes(i)){
      v=k/1
    }
    newValue=v.toFixed(2)
  }
  const result={unit,newValue}
  return result
}
console.log(convertTo(obj))