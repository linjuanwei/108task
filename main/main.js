window.onload =function () {
    document.getElementById("submit").onclick=function () {
        main();
    };

};

function main() {
    var sum=sum1()+sum2()+sum3()+sum4()+sum5();
    var a=document.getElementById("name").value+"本次测验总分："+sum.toString();
    alert(a);
}

function sum1() {
    var sum=0;

    if (document.getElementById("1.0").value==="统一建模语言")
        sum+=5;
    if (document.getElementById("2.1").value==="封装性")
        sum+=5;
    if (document.getElementById("2.2").value==="继承性")
        sum+=5;
    if (document.getElementById("2.3").value==="多态性")
        sum+=5;

    return sum;


}

function sum2() {
    var sum=0;
    if (document.getElementById("d2.1")[1].checked===true){
        sum+=10;

    }
    if (document.getElementById("d2.2")[0].checked===true){
        sum+=10;

    }
    return sum;

}

function sum3() {
    var sum=0;
    var x=document.getElementById("disanti").getElementsByTagName("input");
    if ((x[0].checked===true)&&(x[1].checked===true)&&(x[3].checked===true)&&(x[2].checked===false)){
        sum+=10;
    }
    if ((x[4].checked===true)&&(x[5].checked===true)&&(x[6].checked===true)&&(x[7].checked===false)){
        sum+=10;
    }
    return sum;
}

function sum4() {
    var sum=0;
    if (document.getElementById("4.1").checked===false){
        sum+=10;
    }
    if (document.getElementById("4.2").checked===true){
        sum+=10;
    }
    return sum;
}

function sum5() {
    var sum=0;
    const str='模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以使物理实体;可以使某种图形;或者是一种数学表达式。';
    if (document.getElementById("ti5").value=str){
        sum+=20;
    }
    return sum;

}