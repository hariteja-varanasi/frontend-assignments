jQuery(function(){
    var calcTextBox = $("#calcTextBox");
    var calcTextValue = calcTextBox[0].value;
    $("#buttonOne").click(function(){
        if(calcTextBox[0].placeholder != ""){
            clearPlaceHolder();                         
        }
        if(calcTextBox[0].value == "" || calcTextBox[0].value == "0"){
            calcTextBox[0].value = "1";
        }
        else{
            calcTextBox[0].value = calcTextBox[0].value + "1";
        }                                                
    });
    $("#buttonTwo").click(function(){
        if(calcTextBox[0].placeholder != ""){
            clearPlaceHolder();                         
        }
        if(calcTextBox[0].value == "" || calcTextBox[0].value == "0"){
            calcTextBox[0].value = "2";
        }
        else{
            calcTextBox[0].value = calcTextBox[0].value + "2";
        }                                                
    });
    $("#buttonThree").click(function(){
        if(calcTextBox[0].placeholder != ""){
            clearPlaceHolder();                         
        }
        if(calcTextBox[0].value == "" || calcTextBox[0].value == "0"){
            calcTextBox[0].value = "3";
        }
        else{
            calcTextBox[0].value = calcTextBox[0].value + "3";
        }                                                
    });
    $("#buttonFour").click(function(){
        if(calcTextBox[0].placeholder != ""){
            clearPlaceHolder();                         
        }
        if(calcTextBox[0].value == "" || calcTextBox[0].value == "0"){
            calcTextBox[0].value = "4";
        }
        else{
            calcTextBox[0].value = calcTextBox[0].value + "4";
        }                                                
    });
    $("#buttonFive").click(function(){
        if(calcTextBox[0].placeholder != ""){
            clearPlaceHolder();                         
        }
        if(calcTextBox[0].value == "" || calcTextBox[0].value == "0"){
            calcTextBox[0].value = "5";
        }
        else{
            calcTextBox[0].value = calcTextBox[0].value + "5";
        }                                                
    });
    $("#buttonSix").click(function(){
        if(calcTextBox[0].placeholder != ""){
            clearPlaceHolder();                         
        }
        if(calcTextBox[0].value == "" || calcTextBox[0].value == "0"){
            calcTextBox[0].value = "6";
        }
        else{
            calcTextBox[0].value = calcTextBox[0].value + "6";
        }                                                
    });
    $("#buttonSeven").click(function(){
        if(calcTextBox[0].placeholder != ""){
            clearPlaceHolder();                         
        }
        if(calcTextBox[0].value == "" || calcTextBox[0].value == "0"){
            calcTextBox[0].value = "7";
        }
        else{
            calcTextBox[0].value = calcTextBox[0].value + "7";
        }                                                
    });
    $("#buttonEight").click(function(){
        if(calcTextBox[0].placeholder != ""){
            clearPlaceHolder();                         
        }
        if(calcTextBox[0].value == "" || calcTextBox[0].value == "0"){
            calcTextBox[0].value = "8";
        }
        else{
            calcTextBox[0].value = calcTextBox[0].value + "8";
        }                                                
    });
    $("#buttonNine").click(function(){
        if(calcTextBox[0].placeholder != ""){
            clearPlaceHolder();                         
        }
        if(calcTextBox[0].value == "" || calcTextBox[0].value == "0"){
            calcTextBox[0].value = "9";
        }
        else{
            calcTextBox[0].value = calcTextBox[0].value + "9";
        }                                                
    });
    $("#buttonZero").click(function(){
        if(calcTextBox[0].placeholder != ""){
            clearPlaceHolder();                         
        }
        if(calcTextBox[0].value == "" || calcTextBox[0].value == "0"){
            calcTextBox[0].value = "0";
        }
        else{
            calcTextBox[0].value = calcTextBox[0].value + "0";
        }                                                
    });
    $("#buttonAdd").click(function(){
        if(calcTextBox[0].placeholder != ""){
            clearPlaceHolder();                         
        }        
        if(calcTextBox[0].value == "" || calcTextBox[0].value == "0"){
            calcTextBox[0].value = "";
        }
        else{
            calcTextBox[0].value = calcTextBox[0].value + "+";
        }                                                
    });
    $("#buttonMinus").click(function(){
        if(calcTextBox[0].placeholder != ""){
            clearPlaceHolder();                         
        }
        if(calcTextBox[0].value == "" || calcTextBox[0].value == "0"){
            calcTextBox[0].value = "";
        }
        else{
            calcTextBox[0].value = calcTextBox[0].value + "-";
        }                                                
    });
    $("#buttonMultiply").click(function(){
        if(calcTextBox[0].placeholder != ""){
            clearPlaceHolder();                         
        }
        if(calcTextBox[0].value == "" || calcTextBox[0].value == "0"){
            calcTextBox[0].value = "";
        }
        else{
            calcTextBox[0].value = calcTextBox[0].value + "*";
        }                                                
    });
    $("#buttonDivide").click(function(){
        if(calcTextBox[0].placeholder != ""){
            clearPlaceHolder();                         
        }
        if(calcTextBox[0].value == "" || calcTextBox[0].value == "0"){
            calcTextBox[0].value = "";
        }
        else{
            calcTextBox[0].value = calcTextBox[0].value + "/";
        }                                                
    });    
    $("#buttonDot").click(function(){
        if(calcTextBox[0].placeholder != ""){
            clearPlaceHolder();                         
        }
        if(calcTextBox[0].value == "" || calcTextBox[0].value == "0"){
            calcTextBox[0].value = "";
        }
        else{
            calcTextBox[0].value = calcTextBox[0].value + "/";
        }                                                
    });
    $("#buttonPercent").click(function(){
        if(calcTextBox[0].placeholder != ""){
            clearPlaceHolder();                         
        }
        if(calcTextBox[0].value == "" || calcTextBox[0].value == "0"){
            calcTextBox[0].value = "";
        }
        else{
            calcTextBox[0].value = calcTextBox[0].value + "%";
        }                                                
    });
    $("#buttonEquals").click(function(){
        if(calcTextBox[0].value == "" || calcTextBox[0].value == "0"){
            calcTextBox[0].value = "";
        }
        else{
            calcTextBox[0].value = eval(calcTextBox[0].value);
        }        
    });    
    $("#buttonClear").click(function(){
        clearPlaceHolder();
    });
    function clearPlaceHolder(){        
        if(calcTextBox[0].placeholder == ""){
            calcTextBox[0].value = "";
        }                    
        else{            
            calcTextBox[0].placeholder = "";
        }
    }    
    function checkIfPlaceHolderIsEmpty(){
        if(calcTextBox[0].placeholder == ""){
            return true;
        }
        return false;
    }      
    $("#calcTextBox").keydown(function(event){              
        var calcTextBox = $("#calcTextBox");
        event.preventDefault();                    
        var keyValue = event.originalEvent.key;
        switch (keyValue) {
            case "1":                
                if(calcTextBox[0].placeholder != ""){
                    clearPlaceHolder();                         
                }
                if(calcTextBox[0].value == "" || calcTextBox[0].value == "0"){
                    calcTextBox[0].value = "1";
                }
                else{
                    calcTextBox[0].value = calcTextBox[0].value + "1";
                }
                break;
            case "2":                
                if(calcTextBox[0].placeholder != ""){
                    clearPlaceHolder();                         
                }
                if(calcTextBox[0].value == "" || calcTextBox[0].value == "0"){
                    calcTextBox[0].value = "2";
                }
                else{
                    calcTextBox[0].value = calcTextBox[0].value + "2";
                }                                                                
                break;
            case "3":                
                if(calcTextBox[0].placeholder != ""){
                    clearPlaceHolder();                         
                }
                if(calcTextBox[0].value == "" || calcTextBox[0].value == "0"){
                    calcTextBox[0].value = "3";
                }
                else{
                    calcTextBox[0].value = calcTextBox[0].value + "3";
                }                                                                
                break;
            case "4":                
                if(calcTextBox[0].placeholder != ""){
                    clearPlaceHolder();                         
                }
                if(calcTextBox[0].value == "" || calcTextBox[0].value == "0"){
                    calcTextBox[0].value = "4";
                }
                else{
                    calcTextBox[0].value = calcTextBox[0].value + "4";
                }                                                                
                break;
            case "5":                
                if(calcTextBox[0].placeholder != ""){
                    clearPlaceHolder();                         
                }
                if(calcTextBox[0].value == "" || calcTextBox[0].value == "0"){
                    calcTextBox[0].value = "5";
                }
                else{
                    calcTextBox[0].value = calcTextBox[0].value + "5";
                }                                                                
                break;
            case "6":                
                if(calcTextBox[0].placeholder != ""){
                    clearPlaceHolder();                         
                }
                if(calcTextBox[0].value == "" || calcTextBox[0].value == "0"){
                    calcTextBox[0].value = "6";
                }
                else{
                    calcTextBox[0].value = calcTextBox[0].value + "6";
                }                                                                
                break;
            case "7":                
                if(calcTextBox[0].placeholder != ""){
                    clearPlaceHolder();                         
                }
                if(calcTextBox[0].value == "" || calcTextBox[0].value == "0"){
                    calcTextBox[0].value = "7";
                }
                else{
                    calcTextBox[0].value = calcTextBox[0].value + "7";
                }
                break;
            case "8":                
                if(calcTextBox[0].placeholder != ""){
                    clearPlaceHolder();                         
                }
                if(calcTextBox[0].value == "" || calcTextBox[0].value == "0"){
                    calcTextBox[0].value = "8";
                }
                else{
                    calcTextBox[0].value = calcTextBox[0].value + "8";
                }                                                                
                break;
            case "9":                
                if(calcTextBox[0].placeholder != ""){
                    clearPlaceHolder();                         
                }
                if(calcTextBox[0].value == "" || calcTextBox[0].value == "0"){
                    calcTextBox[0].value = "9";
                }
                else{
                    calcTextBox[0].value = calcTextBox[0].value + "9";
                }                                                                
                break;
            case "0":                
                if(calcTextBox[0].placeholder != ""){
                    clearPlaceHolder();                         
                }
                if(calcTextBox[0].value == "" || calcTextBox[0].value == "0"){
                    calcTextBox[0].value = "0";
                }
                else{
                    calcTextBox[0].value = calcTextBox[0].value + "0";
                }                
                break;            
            case "c":            
            case "Delete":                
            case "Escape":
                clearPlaceHolder();
                break;
            case "+":
                if(calcTextBox[0].placeholder != ""){
                    clearPlaceHolder();                         
                }        
                if(calcTextBox[0].value == "" || calcTextBox[0].value == "0"){
                    calcTextBox[0].value = "";
                }
                else{
                    calcTextBox[0].value = calcTextBox[0].value + "+";
                }
                break;
            case "-":
                if(calcTextBox[0].placeholder != ""){
                    clearPlaceHolder();                         
                }
                if(calcTextBox[0].value == "" || calcTextBox[0].value == "0"){
                    calcTextBox[0].value = "";
                }
                else{
                    calcTextBox[0].value = calcTextBox[0].value + "-";
                }                
                break;
            case "*":
                if(calcTextBox[0].placeholder != ""){
                    clearPlaceHolder();                         
                }
                if(calcTextBox[0].value == "" || calcTextBox[0].value == "0"){
                    calcTextBox[0].value = "";
                }
                else{
                    calcTextBox[0].value = calcTextBox[0].value + "*";
                }
                break;
            case "/":
                if(calcTextBox[0].placeholder != ""){
                    clearPlaceHolder();                         
                }
                if(calcTextBox[0].value == "" || calcTextBox[0].value == "0"){
                    calcTextBox[0].value = "";
                }
                else{
                    calcTextBox[0].value = calcTextBox[0].value + "/";
                }
                break;
            case "p":
                if(calcTextBox[0].placeholder != ""){
                    clearPlaceHolder();                         
                }
                if(calcTextBox[0].value == "" || calcTextBox[0].value == "0"){
                    calcTextBox[0].value = "";
                }
                else{
                    calcTextBox[0].value = calcTextBox[0].value + "%";
                }
                break;
            case ".":
                if(calcTextBox[0].placeholder != ""){
                    clearPlaceHolder();                         
                }
                if(calcTextBox[0].value == "" || calcTextBox[0].value == "0"){
                    calcTextBox[0].value = "";
                }
                else{
                    calcTextBox[0].value = calcTextBox[0].value + ".";
                }
                break;
            case "Enter":
                if(calcTextBox[0].value == "" || calcTextBox[0].value == "0"){
                    calcTextBox[0].value = "";
                }
                else{            
                    calcTextBox[0].value = eval(calcTextBox[0].value);
                }
                break;            
            default:
                break;
        }
    });          
});