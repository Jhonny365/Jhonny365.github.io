
function ar() {
  setInterval(img, 50)
}

function img(){  

  let imagen= document.createElement("img")
  imagen.src= "css/li.png";
  imagen.id= "imagen"
  let y = Math.floor()*100;
  let x = Math.floor()*100;
  imagen.style.rotate= Math.floor (Math.random()*360) + "deg";

  imagen.width= Math.floor(Math.random()*100);
  imagen.height= imagen.width;
  
  if ( (y >= 45 && y <= 50) && (x >= 51 && x <= 55) ) {

    let time = 0
    console.log(time)
    time = time + 1

    imagen.width= 10;
    imagen.height= imagen.width;
    imagen.style.border='solid blue 2px'
    body.appendChild(imagen)
    
  }
  else{
    y= y + "%"
    x= x + "%"
  }
}