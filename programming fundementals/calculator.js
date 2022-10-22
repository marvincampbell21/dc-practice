function addnumbers(a,b){
    let c = a + b;
    console.log(c)
}

function simplecalculator(a,b,o){
    if(o == '+'){
        let c =a+b;
        console.log(c)
    }else if (o == '-'){
        let c =a-b;
        console.log(c)
    }else if (o == '*'){
        let c = a*b;
        console.log(c);
    }else if (o == '/'){
        let c = a/b;
        console.log(c);
    }else{
        console.log ("dont know what you are talking about");
    }
}

// addnumbers(45,25);
// addnumbers(145,125);

simplecalculator(4,5,'+');
simplecalculator(4,5,'-');
simplecalculator(4,5,'*');
simplecalculator(15,5,'/');
simplecalculator(15,5,'$');