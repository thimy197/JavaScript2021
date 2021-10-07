// Đối tượng `Validator`
function Validator(options){

    function validateInput(inputElement, rule){
        // get node của error message
        // từ node hiện tại -> node cha -> tìm node .error-message
        var errorElement = inputElement.parentElement.querySelector(options.error);
        // sử dụng hàm check trên chính rule hiện tại
        var errorMessage = rule.test(inputElement.value);
        // hiển thị errorMessage, border red trên MH
        if(errorMessage){
            errorElement.innerText = errorMessage;
            inputElement.classList.add('invalid');
        }else{
            errorElement.innerText = '';
            inputElement.classList.remove('invalid');
        }
    }

    // get form cần validate
    var formElement = document.querySelector(options.form);    
    if(formElement){
        options.rules.forEach(function(rule){
            // get node của selector cần check rule
            var inputElement = formElement.querySelector(rule.selector);
        
            if(inputElement){
                // Xử lý case blur khỏi input
                inputElement.onblur = function(){
                    validateInput(inputElement, rule);
                }

                // Xử lý case người dùng đang nhập -> ko hiển thị lỗi
                inputElement.oninput = function(){
                    var errorElement = inputElement.parentElement.querySelector(options.error);
                    errorElement.innerText = '';
                    inputElement.classList.remove('invalid');
                }
            }
        });
    }
}


// Định nghĩa rules
// Nguyên tắc rules:
// 1.Khi có lỗi ==> trả message
// 2.Khi hợp lệ ==> không trả ra cái gì
Validator.isRequired = function(selector, message){
    
    return {
        selector: selector,
        test: function(value){ // param là giá trị truyền vào cần check rule
            return value.trim() ? undefined : message || "Vui lòng nhập trường này";
        }
    }
}
Validator.isEmail = function(selector){
    // var selectorElement = this.querySelector(selector);
    return {
        selector: selector,
        test: function(value){
            // keyword search: "js email regex"
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : "Vui lòng nhập trường email";
        }
    }
}


Validator.minLength = function(selector, minLength){
    // var selectorElement = this.querySelector(selector);
    return {
        selector: selector,
        test: function(value){
            return value.length >= minLength ? undefined : `Vui lòng nhập tối thiểu ${minLength} ký tự`;
        }
    }
}

// giá trị param 2 đang nhận 1 function vào, nen bên dưới mới call hàm
Validator.isConfirmed = function(selector, getConfirmValue){
    // var selectorElement = this.querySelector(selector);
    return {
        selector: selector,
        test: function(value){
            return value === getConfirmValue() ? undefined : `Vui lòng nhập giá trị trùng với password`;
        }
    }
}