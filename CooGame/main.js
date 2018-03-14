var mousePos;
var victory = 0;
(function() {

    document.onmousemove = handleMouseMove;
    setInterval(getMousePosition, 100); // setInterval repeats every X ms

    function handleMouseMove(event) {
        var dot, eventDoc, doc, body, pageX, pageY;

        event = event || window.event; // IE-ism

        // If pageX/Y aren't available and clientX/Y are,
        // calculate pageX/Y - logic taken from jQuery.
        // (This is to support old IE)
        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX +
              (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
              (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
              (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
              (doc && doc.clientTop  || body && body.clientTop  || 0 );
        }

        mousePos = {
            x: event.pageX,
            y: event.pageY
        };
    }
    function getMousePosition() {
        var pos = mousePos;
        if (!pos) {
            // We haven't seen any movement yet
        }
        else {
            document.getElementById("xcoo").value = pos.x;
            document.getElementById("ycoo").value = pos.y;
        }
    }
})();

var altezza = window.screen.height - 200;
var larghezza = window.screen.width - 100;

document.getElementById("xsize").value = larghezza;
document.getElementById("ysize").value = altezza;

var indexX = Math.floor(Math.random() * larghezza);
var indexY = Math.floor(Math.random() * altezza);

document.getElementById("xrand").value = indexX;
document.getElementById("yrand").value = indexY;

function getCoo(){
  document.getElementById("xclick").value = mousePos.x;
  document.getElementById("yclick").value = mousePos.y;

  if (document.getElementById("xclick").value >  document.getElementById("xrand").value - 50 &&
  document.getElementById("xclick").value <  document.getElementById("xrand").value + 50 &&
  document.getElementById("yclick").value >  document.getElementById("yrand").value - 50 &&
  document.getElementById("yclick").value <  document.getElementById("yrand").value + 50) {
    if(victory == 3){
      document.getElementById("result").textContent = "Fine!!!";
      victory = 0;
    }else{
      document.getElementById("result").textContent = "Let's Change!!!";
    }
    var indexX = Math.floor(Math.random() * larghezza);
    var indexY = Math.floor(Math.random() * altezza);

    document.getElementById("xrand").value = indexX;
    document.getElementById("yrand").value = indexY;

    victory++;
  }
}
