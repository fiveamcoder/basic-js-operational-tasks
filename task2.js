/* 
--------------------------------------------------------
Task-2
Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

Input:
The first line of the input is the marks of the five subjects mentioned above, respectively.

Output:
Print the result in 2 decimal places.

Sample Input:
75.25, 65, 80, 35.45, 99.50

Sample Output:
71.04
-------------------------------------------------------- 
*/

var mathematics = 75.25;
var biology = 73;
var chemistry = 80;
var physics = 65.23;
var bangla = 69.50;

var totalMarks = mathematics + biology + chemistry + physics + bangla;
var averageMarks = totalMarks/5;
console.log(averageMarks);
console.log(typeof averageMarks);
averageMarks = averageMarks.toFixed(2);
var add = Number(averageMarks) + 2;
console.log(add);
console.log(typeof add);
console.log(typeof averageMarks);