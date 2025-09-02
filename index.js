let heartCount = document.querySelector('#heart h1');


document.getElementById('heart1').addEventListener('click', function(){
    let currentCount = parseInt(heartCount.textContent); // read the number
    heartCount.textContent = currentCount + 1;           // update the text
});
document.getElementById('heart2').addEventListener('click', function(){
    let currentCount = parseInt(heartCount.textContent); // read the number
    heartCount.textContent = currentCount + 1;           // update the text
});
document.getElementById('heart3').addEventListener('click', function(){
    let currentCount = parseInt(heartCount.textContent); // read the number
    heartCount.textContent = currentCount + 1;           // update the text
});
document.getElementById('heart4').addEventListener('click', function(){
    let currentCount = parseInt(heartCount.textContent); // read the number
    heartCount.textContent = currentCount + 1;           // update the text
});
document.getElementById('heart5').addEventListener('click', function(){
    let currentCount = parseInt(heartCount.textContent); // read the number
    heartCount.textContent = currentCount + 1;           // update the text
});
document.getElementById('heart6').addEventListener('click', function(){
    let currentCount = parseInt(heartCount.textContent); // read the number
    heartCount.textContent = currentCount + 1;           // update the text
});
document.getElementById('heart7').addEventListener('click', function(){
    let currentCount = parseInt(heartCount.textContent); // read the number
    heartCount.textContent = currentCount + 1;           // update the text
});
document.getElementById('heart8').addEventListener('click', function(){
    let currentCount = parseInt(heartCount.textContent); // read the number
    heartCount.textContent = currentCount + 1;           // update the text
});
document.getElementById('heart9').addEventListener('click', function(){
    let currentCount = parseInt(heartCount.textContent); // read the number
    heartCount.textContent = currentCount + 1;           // update the text
});


let copy = document.getElementById('copy');
let copyCount = parseInt(copy.textContent);
document.getElementById('copy1').addEventListener('click', function(){
    copyCount = copyCount + 1;
    copy.textContent = copyCount;
})
document.getElementById('copy2').addEventListener('click', function(){
    copyCount = copyCount + 1;
    copy.textContent = copyCount;
})
document.getElementById('copy3').addEventListener('click', function(){
    copyCount = copyCount + 1;
    copy.textContent = copyCount;
})
document.getElementById('copy4').addEventListener('click', function(){
    copyCount = copyCount + 1;
    copy.textContent = copyCount;
})
document.getElementById('copy5').addEventListener('click', function(){
    copyCount = copyCount + 1;
    copy.textContent = copyCount;
})
document.getElementById('copy6').addEventListener('click', function(){
    copyCount = copyCount + 1;
    copy.textContent = copyCount;
})
document.getElementById('copy7').addEventListener('click', function(){
    copyCount = copyCount + 1;
    copy.textContent = copyCount;
})
document.getElementById('copy8').addEventListener('click', function(){
    copyCount = copyCount + 1;
    copy.textContent = copyCount;
})
document.getElementById('copy9').addEventListener('click', function(){
    copyCount = copyCount + 1;
    copy.textContent = copyCount;
})





let coinCount = document.getElementById('coin');
let availableCoin = parseInt(coinCount.textContent);
document.getElementById('call-btn1').addEventListener('click', function(){
    
    if(availableCoin >= 20){
        alert("calling National Emergency Number 999");
        availableCoin = availableCoin - 20;
        coinCount.textContent = availableCoin;
    }
    else{
        alert('not enough coins')
    }
})
document.getElementById('call-btn2').addEventListener('click', function(){
    
    if(availableCoin >= 20){
        alert("Calling Police 999");
        availableCoin = availableCoin - 20;
        coinCount.textContent = availableCoin;
    }
    else{
        alert('not enough coins')
    }
})
document.getElementById('call-btn3').addEventListener('click', function(){
    
    if(availableCoin >= 20){
        alert("Calling Fire Service 999");
        availableCoin = availableCoin - 20;
        coinCount.textContent = availableCoin;
    }
    else{
        alert('not enough coins')
    }
})
document.getElementById('call-btn4').addEventListener('click', function(){
    
    if(availableCoin >= 20){
        alert("Calling Ambulance 1994-999999");
        availableCoin = availableCoin - 20;
        coinCount.textContent = availableCoin;
    }
    else{
        alert('not enough coins')
    }
})
document.getElementById('call-btn5').addEventListener('click', function(){
    
    if(availableCoin >= 20){
        alert("calling Women & Child Help 109");
        availableCoin = availableCoin - 20;
        coinCount.textContent = availableCoin;
    }
    else{
        alert('not enough coins')
    }
})
document.getElementById('call-btn6').addEventListener('click', function(){
    
    if(availableCoin >= 20){
        alert("Calling Anti Corruption Commission 106");
        availableCoin = availableCoin - 20;
        coinCount.textContent = availableCoin;
    }
    else{
        alert('not enough coins')
    }
})
document.getElementById('call-btn7').addEventListener('click', function(){
    
    if(availableCoin >= 20){
        alert("Calling Electricity Outage 16216");
        availableCoin = availableCoin - 20;
        coinCount.textContent = availableCoin;
    }
    else{
        alert('not enough coins')
    }
})

document.getElementById('call-btn8').addEventListener('click', function(){
    
    if(availableCoin >= 20){
        alert("Calling BRAC 16445");
        availableCoin = availableCoin - 20;
        coinCount.textContent = availableCoin;
    }
    else{
        alert('not enough coins')
    }
})

document.getElementById('call-btn9').addEventListener('click', function(){
    
    if(availableCoin >= 20){
        alert("Calling Bangladesh Railway 163");
        availableCoin = availableCoin - 20;
        coinCount.textContent = availableCoin;
    }
    else{
        alert('not enough coins')
    }
})
