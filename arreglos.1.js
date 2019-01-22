const a = [4, 3, 5, 7, 1, 8, 2];
const b = [];

const n = a.length;

for (let i = 0; i < n; i++) {
    // obtener el menor elemento de a
    let m = a.reduce((p, c) => p < c ? p : c, a[0]);
    // copiar dicho elemento en b
    b.push(m);
    // quitar dicho elemento de a
    let im = a.indexOf(m);
    a.splice(im, 1);
}

console.log(a);
console.log(b);