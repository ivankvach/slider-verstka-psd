    function myFunction() {
        var x, y, z, sr;
        x = document.getElementById("imag1").src;
        sr = "";
        y = "";
        z = "";
        if (x == "file:///C:/Users/%D0%86%D0%B2%D0%B0%D0%BD/Desktop/hello_vscode/PizzaSiteTest/images/banner4.png") {
        sr = "images/banner5.png";
        y = "images/banner6.png";
        z = "images/banner4.png";
        }else if(x == "file:///C:/Users/%D0%86%D0%B2%D0%B0%D0%BD/Desktop/hello_vscode/PizzaSiteTest/images/banner5.png") {
        sr = "images/banner6.png";
        y = "images/banner4.png";
        z = "images/banner5.png";
        }else {
        sr = "images/banner4.png";
        y = "images/banner5.png";
        z = "images/banner6.png";
        }
        document.getElementById("imag1").src = sr;
        document.getElementById("imag2").src = y;
        document.getElementById("imag3").src = z;
        console.log(sr);
    }
    function myFunction1() {
        var x, y, z, sr;
        x = document.getElementById("imag3").src;
        sr = "";
        y = "";
        z = "";
        if (x == "file:///C:/Users/%D0%86%D0%B2%D0%B0%D0%BD/Desktop/hello_vscode/PizzaSiteTest/images/banner6.png") {
        sr = "images/banner5.png";
        y = "images/banner4.png";
        z = "images/banner6.png";
        }else if(x == "file:///C:/Users/%D0%86%D0%B2%D0%B0%D0%BD/Desktop/hello_vscode/PizzaSiteTest/images/banner5.png") {
        sr = "images/banner4.png";
        y = "images/banner6.png";
        z = "images/banner5.png";
        }else {
        sr = "images/banner6.png";
        y = "images/banner5.png";
        z = "images/banner4.png";
        }
        document.getElementById("imag3").src = sr;
        document.getElementById("imag2").src = y;
        document.getElementById("imag1").src = z;
        console.log(sr);
    }