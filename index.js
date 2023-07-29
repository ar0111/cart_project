// console.log("connected");

function undateProductInput(id, isAdded, price){
    let unitsInput = document.getElementById(id + "_units");
    let units = unitsInput.value;
    let unitInputValue = parseInt(units);

    if(isAdded){
        unitsInput.value = unitInputValue + 1;
    }else if(isAdded == false && unitsInput.value > 0){
        unitsInput.value = unitInputValue - 1;
    }

    let newInputValue = parseInt(unitsInput.value);
    document.getElementById(id+"-total").innerText = newInputValue * price;

    calculate();
    
}

function undateProductQty(id){
    let productInput = document.getElementById(id + "_units");
    let productNumber = parseInt(productInput.value);

    return productNumber;
}

function calculate(){
    let iphone_13_Amount = undateProductQty("iphone_13") * 1200;
    let iphone_14_Amount = undateProductQty("iphone_14") * 1400;

    let total = iphone_13_Amount + iphone_14_Amount;
    let tax = total/10;
    let newTotal = total + tax;

    // console.log(newTotal);
    document.getElementById('subtotal').innerText = total;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = newTotal;
}

// calculate();

document.getElementById("iphone_13_plus").addEventListener('click', function(){
    undateProductInput("iphone_13", true, 1200);
})

document.getElementById("iphone_14_plus").addEventListener('click', function(){
    undateProductInput("iphone_14", true, 1200);
})

document.getElementById("iphone_13_minus").addEventListener('click', function(){
    undateProductInput("iphone_13", false, 1400);
})

document.getElementById("iphone_14_minus").addEventListener('click', function(){
    undateProductInput("iphone_14", false, 1400);
})