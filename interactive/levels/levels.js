
//general code for all the level pages


//whan mouse lets go of match it checks if it's on the end of the wick
$("#match").mouseup(function () {

    //get the flame and fuse top and left
var flameP = $("#flame").offset();
var fuseP = $("#fuseSpot").offset();

//get values for each top, left, bottom, and right
var flameL = flameP.left;
var flameR = flameP.left + $("#flame").width();
var flameT = flameP.top;
var flameB = flameP.top + $("#flame").height();

var fuseL = fuseP.left;
var fuseR = fuseP.left + $("#fuseSpot").width();
var fuseT = fuseP.top;
var fuseB = fuseP.top + $("#fuseSpot").height();

//checking width's to make sure the fuse is slightly larger
console.log("Flames width:" + $("#flame").width()+ " Fuse width:" + $("#fuseSpot").width() );

//check if any part of the flame is within the box.
    if (
        (((flameR > fuseL) && (flameR < fuseR )) && ((flameB > fuseT))) ||
        (((flameL < fuseR) && (flameL > fuseL )) && ((flameB > fuseT)))
    ) {
        //is so lights the fuse!!!
        $("#fuse").css("display", 'unset');
        lit =true;
    }
});


// Moving the match
dragElement(document.getElementById("matchStick"));

//Drag Function
function dragElement(elmnt) {
    //adding position values
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;

    //if match exist's it will be able to be dragged by match
    if (document.getElementById("match")) {
        document.getElementById("match").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position: using absolute to work on entire page
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}