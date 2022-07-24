const CalculatorNumbers = (e) => {
    let inpVal = document.getElementById("txt")
    let remove = document.getElementById("remove")
    if(e.target.id == "equal"){
        inpVal.value = eval(inpVal.value)
    } else if(e.target.id == "plus"){
        inpVal.value = eval(`Math.sqrt(${inpVal.value})`)
    }
    else{
        inpVal.value = inpVal.value + e.target.innerHTML
    }


    
    if(e.target.id == "remove"){
        inpVal.value = ''
    }
 
}










