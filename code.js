const line0 = [0, 0, 0, 0, 0, 0, 0, 0, 0]
const line1 = [0, 0, 0, 0, 0, 0, 0, 0, 0]
const line2 = [0, 0, 0, 0, 0, 0, 0, 0, 0]
const line3 = [0, 0, 0, 0, 0, 0, 0, 0, 0]
const line4 = [0, 0, 0, 0, 0, 0, 0, 0, 0]
const line5 = [0, 0, 0, 0, 0, 0, 0, 0, 0]

const allLines = [line0, line1, line2, line3, line4, line5]

function appear(id){
    debugValue = document.getElementById('debug').innerHTML;
    let outPos = Math.floor(id / 9);
    let inPos = id % 9;
    if(outPos == 5 || allLines[outPos+1][inPos] != 0){
        if(debugValue == 1){
            document.getElementById(id).style.background = 'orange';
            document.getElementById('debug').innerHTML = '2';
            allLines[outPos][inPos] = debugValue;
        }else if(debugValue == 2){
            document.getElementById(id).style.background = 'cyan';
            document.getElementById('debug').innerHTML = '1';
            allLines[outPos][inPos] = debugValue;
        }
    }else{
        alert('нельзя');
    }
}