

(function(){

"use strict";


(function(){

    const t0 = performance.now();

    debugger;

    const t1 = performance.now();

    if(t1 - t0 > 100)
    {
        document.body.innerHTML = "";
        document.body.style.background = "black";
        throw new Error("Debugging blocked");
    }

})();



(function(){

    const trap = new Image();

    Object.defineProperty(trap, 'id', {
        get: function()
        {
            document.body.innerHTML = "";
            throw new Error("Console inspection blocked");
        }
    });

    console.log(trap);

})();


const _0xH = [

"3d","3d","51","66",
"32","49","44","4d",
"79","38","31","52",
"4f","6c","30","53",
"4f","56","46","53",
"44","74","33","52",
"42","78","6b","52"

];

function _0xREV(a)
{
    let r = [];

    for(let i = a.length - 1; i >= 0; i--)
        r.push(a[i]);

    return r;
}

function _0xHEX(arr)
{
    let out = "";

    for(let i = 0; i < arr.length; i++)
    {
        out += String.fromCharCode(
            parseInt(arr[i],16)
        );
    }

    return out;
}

function _0xGET()
{
    const step1 = _0xREV(_0xH);

    const step2 = _0xHEX(step1);

    return step2;
}

const _0xMEM = (function(){

    let cache = null;

    return {

        fetch: function(){

            if(cache === null)
                cache = _0xGET();

            return cache;
        }

    };

})();


window.triggerFlash = function()
{
    const el =
        document.getElementById(
            "stimulus-window"
        );

    const secret = _0xMEM.fetch();

    el.innerText = secret;

    el.style.color = "#2ecc71";


    setTimeout(function(){

        el.innerText =
            "XXXXXXXXXXXXXXX";

        el.style.color = "#e74c3c";

    },200);

};


window.checkFlag = function()
{
    const input =
        document.getElementById(
            "flagInput"
        ).value;

    const real =
        _0xMEM.fetch();

    if(input === real)
    {
        alert(
            "Correct! STM chunking successful."
        );

        const hint =
            document.getElementById("hint");

        if(hint)
        hint.innerText =
            "Decoded Flag: FLAG{CHUNKING_2026}";
    }
    else
    {
        alert(
            "Error: Information lost to decay."
        );
    }

};


(function(){

    let threshold = 160;

    setInterval(function(){

        const t0 = performance.now();

        debugger;

        const t1 = performance.now();

        if(t1 - t0 > threshold)
        {
            document.body.innerHTML = "";
        }

    },1000);

})();

(function(){

    const checksum =
        _0xMEM.fetch().length;

    if(checksum !== 28)
    {
        document.body.innerHTML = "";
    }

})();


})();
