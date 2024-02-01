const a = isNaN('11');
/* false because this is string but inside a number 
if i put there '11taka' then true
*/
const b = isNaN(2-10);
/* false because this is number as subtraction  
if i put there '2-10' then true because '-' this is not a number.
*/
console.log(a);
console.log(b);