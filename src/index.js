const sum = (value) => {
if(!value || value === "" ) return 0;

const checkNegative = value.match(/[A-Za-z]/g);
if(checkNegative) return 'negatives not allowed';

const getValue= value.split().map((val)=> val.replace(/[^0-9]+/g, ' '));
const nums = getValue.join().split(" ");
const filternums = nums.filter((val)=> (+val) < 1000);
const result = filternums.reduce((acc, current)=> (+acc) + (+current))

return (+result);
}
  
  export default sum