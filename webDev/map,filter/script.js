let a1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];
let aRes = a1.map(item => item*4);

let f = a1.filter(function(item) {
    if(item > 50) {
        return true;
    }
});
console.log(f);

