var resultNode = document.querySelector('.result');
var inputTextNode = document.getElementById("input-text");
console.log(resultNode.firstElementChild);

inputTextNode.oninput = function(){
    var inputResult = inputTextNode.value;
    resultNode.firstElementChild.innerHTML = `Giá trị input: ${inputResult}`;
};
// Nếu sử dung onchange() thì khi blur ra ngoài input mới nhận giá trị, 
// và giá trị phải khác với giá trị trc đó

var inputCheckNode = document.getElementById("input-check");
console.log(inputCheckNode.checked);

inputCheckNode.onchange = function(event){
    console.log(event);
    var checkResult = this.checked;
    event.target.style.backgroundColor = 'red';
    resultNode.firstElementChild.nextElementSibling.innerHTML = `Giá trị checkbox: ${checkResult}`;
};

var selectNode = document.getElementById("select");
console.log(selectNode.value);

selectNode.onchange = function(event){
    
    var checkResult = event.target.value;
    resultNode.lastElementChild.innerHTML = `Giá trị select: ${checkResult}`;
};

/**
 * Có thể bắt phím được nhấn bằng sự kiện onkeyup()
 * với event.which ta sẽ biết được số phím đã nhấn
 * vd: nhấn phím ESC thì event.which=27
 */

 selectNode.onkeyup = function(event){
    var keyResult = event.which;
    if(keyResult === 27){
        alert("EXIT Select!!!");
    }
};

document.onkeydown = function(event){
    var keyResult = event.which;
    if(keyResult === 27){
        alert("EXIT page!!!");
    } else{
        alert("key: "+ keyResult);
    }
};

// onkeypress() ko bắt đc phím chức năng