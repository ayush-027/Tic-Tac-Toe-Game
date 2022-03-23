let turn = 0;  // 0 denotes X turn
let p = 1;  
let k = 0;
let res = 0;
function modifyplaybutton()
{
    if(p == 1 && res == 0)
    {
        document.getElementById("play").innerHTML = "Pause";
        console.log(p);
    }
    else if(p == 0 && res == 0)
    {
        document.getElementById("play").innerHTML = "Click this button to Play";
        console.log(p);
    }
    else if(res == 1)
    {
        document.getElementById("play").innerHTML = "Close";
    }
    if(k == 2)
    {
        document.getElementById("des-2").innerHTML = "✕  TURN";
    }
}
function play()
{
    if(p == 0)
    {
        p = 1;
    }
    else if(p == 1)
    {
        p = 0;
    }
    k++;
    if(res == 0)
        modifyplaybutton();
    else
        location.reload();
}
function xo(b)
{
    if(p == 1 && res == 0)
    {
        let element = document.getElementById(`block-${b}`);
        if(turn == 0)
        {
            if(element.innerHTML == "")
            {
                element.style = "color: rgb(0, 204, 255);";
                element.innerHTML = "✕";
                document.getElementById("des-2").innerHTML = "Ｏ  TURN";
                turn = 1;
            }
        }
        else{
            if(element.innerHTML == "")
            {
                element.style = "color: yellow;";
                element.innerHTML = "Ｏ";
                document.getElementById("des-2").innerHTML = "✕  TURN";
                turn = 0;
            }
        }
        winCheck();
    }
}

function reset()
{
    location.reload();
}

function winCheck()
{
let winComb = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];

for(var i = 0; i < 8; i++) {
    var z = document.getElementById(`block-${winComb[i][0]}`).innerText;
    var s = 0;
    for(var j = 0; j < 3; j++) {
        var y = document.getElementById(`block-${winComb[i][j]}`).innerText;
        if(z == y){
            s++;
        }
    }
    if(s == 3)
    {
        if(z == '✕')
        {
            console.log("Player 1 Wins");
            document.getElementById(`block-${winComb[i][0]}`).style = "border: 4px solid #ff0040; border-radius: 10px; color: #ff0040; background-color: #00ff00; transition: border 2s, background-color 2s, color 2s, border-radius 2s;";
            document.getElementById(`block-${winComb[i][1]}`).style = "border: 4px solid #ff0040; border-radius: 10px; color: #ff0040; background-color: #00ff00; transition: border 2s, background-color 2s, color 2s, border-radius 2s;";
            document.getElementById(`block-${winComb[i][2]}`).style = "border: 4px solid #ff0040; border-radius: 10px; color: #ff0040; background-color: #00ff00; transition: border 2s, background-color 2s, color 2s, border-radius 2s;";
            document.getElementById("small-1").innerHTML = "Congratulations!";
            document.getElementById("small-3").innerHTML = "Player 1 Wins";
            res = 1;
            modifyplaybutton();
        }
        else if(z == 'Ｏ')
        {
            console.log("Player 2 Wins");
            document.getElementById(`block-${winComb[i][0]}`).style = "border: 4px solid #ff0040; border-radius: 10px; color: #ff0040; background-color: #00ff00; transition: border 2s, background-color 2s, color 2s, border-radius 2s;";
            document.getElementById(`block-${winComb[i][1]}`).style = "border: 4px solid #ff0040; border-radius: 10px; color: #ff0040; background-color: #00ff00; transition: border 2s, background-color 2s, color 2s, border-radius 2s;";
            document.getElementById(`block-${winComb[i][2]}`).style = "border: 4px solid #ff0040; border-radius: 10px; color: #ff0040; background-color: #00ff00; transition: border 2s, background-color 2s, color 2s, border-radius 2s;";
            document.getElementById("small-1").innerHTML = "Congratulations!";
            document.getElementById("small-3").innerHTML = "Player 2 Wins";
            res = 1;
            modifyplaybutton();
        }
    }
}
}