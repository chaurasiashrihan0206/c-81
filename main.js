canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="red";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=10;
ctx.arc(200 , 200 , 40 , 0 , 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown" , my_mousedown);

function my_mousedown(e){
    m_x=e.clientX-canvas.offsetLeft;
    m_y=e.clientY-canvas.offsetTop;
    console.log("x = " + m_x + ",y = " + m_y);
    circle(m_x,m_y);
}

function circle(m_x,m_y){
    ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=10;
ctx.arc(m_x , m_y , 40 , 0 , 2*Math.PI);
ctx.stroke();
}