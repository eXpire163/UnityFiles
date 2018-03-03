var width = 3;
var lengh = 5;
var height = 2;

function showPosition(current){

    var x; //width
    var z; //length
    var y; //layer

    var layersize = width*lengh;
    var layerrest = current % layersize;

    y = Math.floor(current / layersize)
    x = layerrest % width;
    z = Math.floor(layerrest / width);
    console.log(current +" on x: "+x + " z: "+z + " y: "+y);

}

function run(){



//var height = 2;


var max = width*lengh;//height



console.log("max = "+max);


for(var i = 0; i< 30 ;i++){
showPosition(i)

}

    
}


