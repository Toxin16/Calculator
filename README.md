# https://toxin16.github.io/Calculator/Calculator01.html
# Calculator
![2022-08-07 (2)](https://user-images.githubusercontent.com/109052012/183281479-860b6f14-1762-4185-8e1b-29bc0c8a287e.png)
###### Reference : https://www.simplilearn.com/tutorials/javascript-tutorial/calculator-in-javascript

## Add Element:
- math error massage (Range)
- del button

## HTML source code
```html
<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./calc01.js" type="text/javascript"></script>
    <link rel="stylesheet" href="calc01.css">
    <title>Document</title>

</head>

<body>
    <h1 style="text-align:center">Calculator</h1>
    <div class="container">
    <br>
    <table>
        <tr>
            <td colspan="3"><input type='text' id='result' class ='screen' 
                style="text-align: right;"></td>
            <td>
                <input type='button' value = 'C' onclick="clearScreen()" class="clear"/>
                <input type='button' value = 'del' onclick="del()" class="clear"/>
            </td>
        </tr>
    </table>
    <div class="keys">
    <input type="button" value="7" class="button" onClick="display('7')"></input>
    <input type="button" value="8" class="button " onClick="display('8')"></input>
    <input type="button" value="9" class="button" onClick="display('9')"></input>
    <input type="button" value="/" class="operator" onClick="display('/')"></input>
    <input type="button" value="4" class="button" onClick="display('4')"></input>
    <input type="button" value="5" class="button" onClick="display('5')"></input>
    <input type="button" value="6" class="button" onClick="display('6')"></input>
    <input type="button" value="*" class="operator" onClick="display('*')"></input>
    <input type="button" value="1" class="button" onClick="display('1')"></input>
    <input type="button" value="2" class="button" onClick="display('2')"></input>
    <input type="button" value="3" class="button" onClick="display('3')"></input>
    <input type="button" value="-" class="operator" onClick="display('-')"></input>
    <input type="button" value="0" class="button" onClick="display('0')"></input>
    <input type="button" value="." class="button" onClick="display('.')"></input>
    <input type="button" value= "=" class="button equal-sign" onClick="solve()"></input>
    <input type="button" value="+" class="operator" onClick="display('+')"></input>
</div> 
</div>
<div id = "calc-history"></div>

</body>
```
## CSS source code
```css
.container {
    border: 1px solid #cccccc;
    box-shadow: 10px 10px 30px 0 rgba(0, 0, 0, 0.75);
    border-radius: 20px;
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 450px;
    height: 400px;
}

.keys {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    padding: 10px;
    margin: auto;
}

.button {
    height: 60px;
    padding: 5px;
    background-color: #fff;
    border-radius: 3px;
    border: 1px solid #c4c4c4;
    background-color: transparent;
    font-size: 2rem;
    color: #333;
    background-image: linear-gradient(to bottom, transparent, transparent 50%, rgba(0, 0, 0, .04));
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, .05), inset 0 1px 0 0 rgba(255, 255, 255, .45), inset 0 -1px 0 0 rgba(255, 255, 255, .15), 0 1px 0 0 rgba(255, 255, 255, .15);
    text-shadow: 0 1px rgba(255, 255, 255, .4);
}

.button:hover {
    background-color: #eaeaea;
}

.operator {
    color: #fff;
    background-color: #eebb24;
}

.clear {
    background-color: #f0595f;
    border-color: #b0353a;
    color: #fff;
    width: 80px;
    height: 30px;
}

.clear:hover {
    background-color: #f17377;
}

.equal-sign {
    background-color: #25a8e0;
    border-color: #25a8e0;
    color: #fff;
}

.equal-sign:hover {
    background-color: #4e9ed4;
}

.screen {
    background-color: rgb(171, 219, 231);
    justify-content: left;
    color: black;
    font-size: medium;
    width: 50%;
    height: 30%;
    cursor: default;
    padding: 10px 10px 10px 40%;
    margin: auto auto 10px;
}
```
## JS source code
```js
function display(val){ //?????????????????? ??????
    document.getElementById('result').value += val  //id??? result??? ??????(text???)??? ?????? val??? ??????
    return val
}

function solve(){ // ????????????, '='?????? ????????? ??????
    let x = document.getElementById('result').value //text?????? ?????? ????????? ??????x??? ??????
    let y = eval(x);    //???????????? ??????x??? ???????????? ????????? ?????? y??? ??????
    document.getElementById('result').value = y //y??? ?????? ?????? text?????? ???????????????
    if(y>999999999999) {    //999999999999??????????????? (text?????? ????????? ????????????)
        alert("Math Error") //??????????????? ??????
        document.getElementById('result').value = '' //???????????? ?????????
    }
    return y
}

function clearScreen(){ //C?????? ????????? ??????, ?????? ?????????
    document.getElementById('result').value = ''
}

function del() {
    let result = document.getElementById('result');
    result.value = result.value.substring(0, result.value.length - 1);
}
```

### Failed - Operator continuous input error message
###### Reference : https://blog.cordelia273.space/32
```js
let numberClicked = false;
function display(val){ //?????????????????? ??????
    if(numberClicked == false){ //????????? ?????????(?????????)??? ???????????????
        if(isNaN(val) == true) {    //???????????? ?????? ??? ???????????????(????????? ?????????)
            alert("SyntaxError")    //??????????????? ??????
        } else {    //???????????? ????????????
            document.getElementById('result').value += val; //??? ?????? ?????? ??????
        }
    } else {    //???????????? ?????? ????????? ???????????????
        document.getElementById('result').value += val; //??? ?????? ?????? ??????
    }

    if(isNan(val) == true) {
        numberClicked = false;
    } else {
    numberClicked = true;
    }
}
```
