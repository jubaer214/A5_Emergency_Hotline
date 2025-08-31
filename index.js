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



let coinCount = document.getElementById('coin');

document.getElementById('call-btn').addEventListener('click', function(){
    let currentCoin = parseInt(coinCount.textContent)
    if(coinCount.textContent >= 20){
        alert('call');
        coinCount.textContent = currentCoin - 20;
    }
    else{
        alert('you have less than 20 coin')
    }
})