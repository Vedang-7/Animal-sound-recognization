function start_Classification(){
    navigator.mediaDevices.getUserMedia({audio:true, video:false});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResult);
}
var dog=0;
var cat=0;
var cow=0;
var lion=0;

function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    
    random_number_r=Math.floor(Math.random()*255)+1;
    random_number_g=Math.floor(Math.random()*255)+1;
    random_number_b=Math.floor(Math.random()*255)+1;

    document.getElementById("result_label").innerHTML='Detected voice is of :- '+results[0].label;
    document.getElementById("result_count").innerHTML='Detected dog- '+dog+'Detected cat- '+cat+'Detected cow- '+cow+'Detected lion- '+lion;
    document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_count").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

    img=document.getElementById('animal_image');
    
    if(results[0].label=="Meowing"){
        img.src='Image_2.gif';
        cat= cat+1;
    }
    else if(results[0].label=="Barking"){
        img.src='Image_1.jpg';
        dog= dog+1;
    }
    else if(results[0].label=="Roaring"){
        img.src='lion-roar.gif';
        lion= lion+1;
    }
    else if(results[0].label=="Mooing"){
        img.src='cute-cow.gif';
        cow= cow+1;
    }
    else{
        img.src='Images.jpg';
    }
}
}