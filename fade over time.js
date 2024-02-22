
transition = 20;       
if (marker.numKeys<2){
tSecs = transition / ( 1 / thisComp.frameDuration); 
linear(time, inPoint, inPoint + tSecs, 0, 100)
 - linear(time, outPoint - tSecs, outPoint, 0, 100)
}else{
linear(time, inPoint, marker.key(1).time, 0, 100) 
- linear(time, marker.key(2).time, outPoint, 0, 100)
}