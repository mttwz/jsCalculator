var pressedBtns = "";
function doMath(){
    if (document.getElementById("field").innerHTML != 0 && document.getElementById("field").innerHTML.length <=18){
        if(eval(pressedBtns).toString().length > 18){
            document.getElementById("field").innerHTML = (eval(pressedBtns)).toFixed(16);
            pressedBtns = eval(pressedBtns).toFixed(16);
        }else{
            document.getElementById("field").innerHTML = eval(pressedBtns);
            pressedBtns = eval(pressedBtns);
        }
        
        reEnableButtons();
    }
}

function update(obj){
    if(obj.id == "." && document.getElementById("field").innerHTML == 0){
        document.getElementById("field").innerHTML = "0.";
        pressedBtns = "0.";
    }else{
        pressedBtns+=obj.id;
        document.getElementById("field").innerHTML = pressedBtns;
    }
    if(document.getElementById("field").innerHTML.length >= 18){
        const buttons = document.getElementsByTagName("button");
        for (const button of buttons) {
            button.disabled = true;
        }
        document.getElementById("clear").disabled = false;
        document.getElementById("clearAll").disabled = false;
        document.getElementById("=").disabled = false;
    }
}

function clearDigit(){
    pressedBtns = pressedBtns.toString().substring(0, pressedBtns.toString().length - 1);
    document.getElementById("field").innerHTML = pressedBtns;
    if(document.getElementById("field").innerHTML == ""){
        document.getElementById("field").innerHTML = "0"
    }
    reEnableButtons();  
}

function clearAll(){
    pressedBtns = "";
    document.getElementById("field").innerHTML = "0";
    reEnableButtons();
    
}

function reEnableButtons(){
    if(document.getElementById("0").disabled == true){
        const buttons = document.getElementsByTagName("button");
        for (const button of buttons) {
            button.disabled = false;
        } 
    }
}

document.addEventListener('keyup', (e) => {
    console.log(e.key)
  });