/* Split into 3 chunks */
const a = "RkxBR3tD";
const b = "SFVOS0lO";
const c = "R18yMDI2fQ==";

/* Sum function */
function sum(x, y, z)
{
return x + y + z;
}

/* Final secret variable */
const secret = sum(a, b, c);

/* Decode the flag */
const flag = atob(secret);

let attempts = 0;

function triggerFlash()
{
const stimulus =
document.getElementById("stimulus-window");


stimulus.innerText = secret;

setTimeout(function()
{
    stimulus.innerText = "XXXXXXXXXXXX";
}, 200);

}

function checkFlag()
{
const input =
document.getElementById("flagInput").value;


const result =
    document.getElementById("hint");

attempts++;

if (input === secret)
{
    result.innerText =
    "Correct! Flag: " + flag;
}
else
{
    result.innerText =
    "Wrong. Try again.";

    if (attempts >= 3)
    {
        result.innerText +=
        " Hint: reverse";
    }
}

}
