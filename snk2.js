var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

 var cvsW = canvas.width;
 var cvsH = canvas.height;
 
  var snkH =10;
  var snkW=10;

  
	
	var px=4;
	var py=1;
	var sx=0;
	var sy =0;

var point=0;

	food = {
	x :Math.round(Math.random()*(cvsW/snkW)),
	y :Math.round(Math.random()*(cvsH/snkH))
}

function fram(){
	if(px*snkH==cvsW+10){		
 		px=0;
 	} if( px*snkH==-10){
 		px=(cvsW/snkW);
 	}if(py*snkW==cvsH+10){
 		py=0;
 	} if( py*snkW==-10){
 		py=(cvsW/snkW);
	}
 }

var SnakeArray=[];

function drowSnake(){
	for(var i=0;i<1;i++){
		ctx.fillRect((px-i)*snkH,(py)*snkW,snkH,snkW);
	}
}

 function animate(){
 	ctx.clearRect(0,0,cvsW,cvsH)
 	ctx.fillStyle="white";
 	drowSnake();
 	ctx.fillStyle="green";
 	ctx.fillRect(food.x*snkH,food.y*snkW,snkH,snkW);
 					px=px+sx;
 					py=py+sy;
 					fram();
 		if(px*snkH==food.x*snkH && py*snkW == food.y*snkW ){
 			point++;
 			food = {
			x :Math.round(Math.random()*((cvsW/snkW)-1)),
			y :Math.round(Math.random()*((cvsH/snkH)-1)),
				}
				document.getElementById("h").value=point;


 		}

 }
animate();


setInterval(animate,100);


window.addEventListener("keyup",function(event){
	
 	switch(event.keyCode){
 		case 37:
 		sx=-1;sy=0;
 		break;
 		case 38:
 		sy=-1;
 		sx=0;
 		break;
 		case 39:
 		sx=1;
 		sy=0;
 		break;
 		case 40:
 		sy=1;
 		sx=0;
 		break;
 		case 32:
 		sy=0;
 		sx=0;
 		break;
 	}});
 