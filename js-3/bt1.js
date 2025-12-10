function printar(arr){
    alert(arr);
}

function find(sokt, arr){
    let found = false;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == sokt){
            found = true;
            break;
        }
    }
    if(found) alert("có xuất hiện");
    else alert("không xuất hiện");
}

function max(arr){
    let m = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > m) m = arr[i];
    }
    return m;
}

function sum(arr){
    let s=0;
    for(let i=0;i<arr.length;i++){
        s+=arr[i];
    }
    return s;
}

function sort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            if (arr[i]<arr[j]){
                let t=arr[i];
                arr[i]=arr[j];
                arr[j]=t;
            }
        }
    }
    return arr;
}

let arr = [1,2,3,4,5,6,7,8,9,10];
let cau=parseFloat(prompt("Nhập số câu:"));
if (cau==2) printar(arr);
else if(cau==3) {
    let sokt = parseFloat(prompt("Nhập số cần kiểm tra:"));
    find(sokt, arr);
}
else if(cau==4) alert("Max: " + max(arr));
else if(cau==5) alert("Sum: " + sum(arr));
else if(cau==6) alert("Sort:" + sort(arr));











