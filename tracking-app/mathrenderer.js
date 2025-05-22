



// function factoriel(n) {
//   if (n > 0) {
//     let result = 1;
//     for (let i = parseInt(n); i > 1; i--) {
//       result = result * i;
//     }
//     return result;
//   }
//   return -1;
// }


// console.log(factoriel(5))



// let n = parseInt(prompt("entrer un nombre entier positif non nul:"))

// if (n < 1) {
//   alert("erreur recomencer avec un nombre entier positif")
// } else {
//   let r = 1
//   for (let i = n; i > 1; i--) {
//     r = r * i
//   }
//   alert("la factoriel de " + n + " est " + r)
// }

let n;
do {
  n = parseInt(prompt("entrer un nombre"))  
} 
while(isNaN(n) || n === 0);


document.write("<table border='1'>")
for(let i = 1; i <= 1000; i++){
  document.write("<tr> <td>"+n+"</td> <td> x </td> <td>" + i+"</td><td>"+(n * i)+"</td></tr>")
}

document.write("</table>")
