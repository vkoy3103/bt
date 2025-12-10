let n = parseInt(prompt("Nhập số lượng tên:"));
let names = [];
for(let i = 0; i < n; i++){
    let name = prompt(`Nhập tên thứ ${i+1}:`);
    names.push(name);
}
console.log("Mảng tên ban đầu:");
console.log(names);
names.sort(); 
console.log("Mảng tên sau khi sắp xếp:");
console.log(names);
