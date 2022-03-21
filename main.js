var mouseEvent="empty";

var last_postion_of_x, last_postion_of_y;

canvas= document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

color="black";
width_of_the_line=1;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    width_of_the_line=document.getElementById("width_line").value;
    mouseEvent="mousedown";
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x= e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y= e.clientY-canvas.offsetTop;
    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_the_line;

        console.log("Last position of x and y coordinates =");
        console.log("x="+last_postion_of_x+" and y ="+ last_postion_of_y);
        ctx.moveTo(last_postion_of_x, last_postion_of_y);

        console.log("current position of x and y coordinates =");
        console.log("x="+current_position_of_mouse_x+" and y ="+ current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y); 
        ctx.stroke();

    }
    last_postion_of_x=current_position_of_mouse_x;
    last_postion_of_y=current_position_of_mouse_y;

}
function cleararea() { ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); }