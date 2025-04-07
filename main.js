var canvas =document.getElementById('mars_canvas');
var ctx1=canvas.getContext('2d')
var car_1='https://i.postimg.cc/9rqYz9HM/car1.png'
var rover_height=90
var rover_width=100
 var backgroundArray =['nasa_image_1.jpg','nasa_image_2.jpeg','nasa_image_3.jpg','nasa_image_4.webp']
 var numstore=Math.floor(Math.random()*4)
 
 console.log(numstore)
var background=backgroundArray[numstore]
var rover='rover.png'
var rover_x=10
var rover_y=10
var background_img,rover_img,keystore;
function image(){
    background_img=new Image()
    background_img.onload=uploadbackground;
    background_img.src=background
    rover_img=new Image()
    rover_img.onload=uploadrover
    rover_img.src=rover
}
function uploadbackground(){
    ctx1.drawImage(background_img,0,0,canvas.width,canvas.height)
}
function uploadrover(){
    ctx1.drawImage(rover_img,rover_x,rover_y,rover_width,rover_height)
}
window.addEventListener('keydown',keydown);
    function keydown(e){
        keystore=e.keyCode;
        console.log(keystore)
        if(keystore=="37"){
            console.log('left')
            left()
        }
        if(keystore=="38"){
            console.log('up')
            up()
        }
        if(keystore=="39"){
            console.log('right')
            right()
        }
        if(keystore=="40"){
            console.log('down')
            down()
        }
    }
function left(){
    if (rover_x>=0){
        rover_x-=5
        uploadbackground()
        uploadrover()
        console.log('when left arrow pressed,x='+rover_x+' y='+rover_y)
    }
}
function right(){
    if (rover_x<=700){
        rover_x+=5
        uploadbackground()
        uploadrover()
        console.log('when right arrow pressed,x='+rover_x+' y='+rover_y)
    }
}
function up(){
    if (rover_y>=0){
        rover_y-=5
        uploadbackground()
        uploadrover()
        console.log('when up arrow pressed,x='+rover_x+' y='+rover_y)
    }
}
function down(){
    if (rover_y<=510){
        rover_y+=5
        uploadbackground()
        uploadrover()
        console.log('when down arrow pressed,x='+rover_x+' y='+rover_y)
    }
}