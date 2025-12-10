let n = parseInt(prompt("nhập n:"));
let m = parseInt(prompt("nhập m:"));

let a = [];
for(let i = 0; i < n; i++){
    a[i] = [];
    for(let j = 0; j < m; j++){
        a[i][j] = 0;
    }
}
nhapmang(a);
let cau=parseFloat(prompt("Nhập số câu:"));
if (cau==3) xuatmang(a);
else if(cau==4) alert("Sum: " +sum(a));
else if(cau==5) {
let sokt = parseFloat(prompt("Nhập số cần kiểm tra:"));
find(sokt, a);
}
else if(cau==6) {
sapxep(a);
console.log("Ma trận sau khi sắp xếp tăng dần:");
xuatmang(a);
}

console.log(a);

function nhapmang(a){
    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            a[i][j] = parseFloat(prompt(`a[${i}][${j}] = `));
        }
    }
}

function xuatmang(a){
    let s = "";
    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            s += a[i][j] + " ";
        }
        s += "\n";
    }
    console.log(s);
}

function sum(a){
    let s = 0;
    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            s += a[i][j];
        }
    }
    console.log(s);
}

function find(sokt, a){
    let found = false;

    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            if(a[i][j] == sokt){
                found = true;
                break;
            }
        }
        if(found) break;
    }

    if(found) console.log("có xuất hiện");
    else console.log("không xuất hiện");
}
function sapxep(a){
    let temp = [];
    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            temp.push(a[i][j]);
        }
    }

    temp.sort(function(x, y){ return x - y; });

    let k = 0;
    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            a[i][j] = temp[k++];
        }
    }
}
