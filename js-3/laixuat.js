function getnumber(p,d){
    let num=NaN;
    while(isNaN(num)){
        num=parseFloat(prompt(p,d));
    }
    return num;
}

function calculatorfv(ia,r,y){
    let fv=ia;
    for (let i=0;i<y;i++){
        fv=fv+fv*r/100;
    }
    return fv;
}

function displayrs(i,r,y,fv){
    alert("Investment amount: $" + i + "\n"+ "Interrest rate: " + r +"%\n"+"Years: "+y+"\n"+"Future Value: $"+fv.toFixed(2));
}

const investment=getnumber("Enter investment amount",10000);
const rate=getnumber("Enter rate",7.5);
const years=getnumber("Enter years",10);
const futurevalue=calculatorfv(investment,rate,years);
displayrs(investment,rate,years,futurevalue);

