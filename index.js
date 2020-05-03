var numbers=[]
var array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
var del=[]
var testArray=[]
var value=0;
var scoreArray=[]

var scoreArrayParsed=JSON.parse(localStorage['scores']);
for(var i=0;i<scoreArrayParsed.length;i++){
    scoreArray[i]=scoreArrayParsed[i];
}


for(var i=0;i<scoreArray.length;i++){
    for(var j=0;j<scoreArray.length;j++){
        if(scoreArray[i]<scoreArray[j]){
            var dummy=scoreArray[i];
            scoreArray[i]=scoreArray[j];
            scoreArray[j]=scoreArray[i];
        }
    }

}
for (var i=0;i<5;i++){
    document.getElementsByTagName('p')[i].innerHTML=scoreArray[i];
}





noOfBoxes=20;
setValue=0;
var seconds=0;

// create random numbrs and round
function createRandomNumbers(){
    while(del.length<noOfBoxes){
        var random=Math.round(Math.random()*(noOfBoxes-1));
        if(del.indexOf(random)==-1){
            del.push(random);
            console.log('del',del);
        }
    }


    for(var i=0;i<20;i++){
        numbers[i]=array[del[i]];
    }
}




createRandomNumbers();

//adding timer

function stopwatch(){

    seconds++;
   console.log(seconds);
    document.getElementsByClassName('scoreBox')[0].innerHTML=seconds;
}

function start(){
    myTime=setInterval(stopwatch,1000);
}

//addind sound
var sound= new Audio;
sound.src="jump.wav";

//function to assign values to boxes
function valueAssign(){
    for (var i=0;i<noOfBoxes;i++){
        var boxValue=document.getElementsByClassName('btn')[i];
        boxValue.innerHTML=numbers[i];
        
    }

}
valueAssign();


for (var i=0;i<20;i++){
    var boxValue_2=document.getElementsByClassName('btn')[i];

boxValue_2.addEventListener('click',function(){
    var value=this.innerHTML;
    sound.play();


    if(value-setValue==1){
        if(value==1){
            start();
        }

    for (var j=0;j<20;j++){
                       
        if(value==numbers[j])

        { 
            if(numbers[j]+20<41){
                numbers[j]=numbers[j]+20;

            }else{
                numbers[j]='';
            }
            if(value==40){
                clearInterval(myTime);
                scoreArray.push(seconds);
                var stringScoreArray=JSON.stringify(scoreArray);
            localStorage.setItem("scores", stringScoreArray);
            }

            
        }
       
    }
    for (var z=0;z<20;z++){
        this.style.opacity=1;

        document.getElementsByClassName('btn')[z].innerHTML=numbers[z];



    }
    setValue=setValue+1;
}else{
    alert('wrong');
}
 
});

}
