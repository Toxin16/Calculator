let x = document.getElementById('result');
x.addEventListener("keyup", function(e) {
    if (e.code === "Enter")   
        solve();
})

function display(val){ //텍스트상자에 반환
    document.getElementById('result').value += val
    return val
}

function solve(){ // '='버튼 누르면 호출
    let x = document.getElementById('result').value
    let y = eval(x);
    document.getElementById('result').value = y
    if(y>999999999999) {
        alert("Math Error")
    }
    return y
}

function clearScreen(){ //C버튼:초기화
    document.getElementById('result').value = ''
}

function 