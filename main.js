function begin(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier  = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/074vg8Rbg/model.json",modelLoaded)
}
function modelLoaded(){
    classifier.classify(gotresults)
}
function gotresults(error,results){
    if (error){
        console.log(error)
    }
    else {
        console.log(results)
      i1=  document.getElementById("a1").src;
      i2=  document.getElementById("a2").src;
      i3=  document.getElementById("a3").src;
      i4=  document.getElementById("a4").src;
      if (results[0].label=="Background Noise"){
            document.getElementById("a1").src="aliens-01.gif";
            document.getElementById("a2").src="aliens-02.png";
            document.getElementById("a3").src="aliens-03.png";
            document.getElementById("a4").src="aliens-04.png";
      }
    else if (results[0].label=="clapping"){
        document.getElementById("a1").src="aliens-01.png";
        document.getElementById("a2").src="aliens-02.gif";
        document.getElementById("a3").src="aliens-03.png";
        document.getElementById("a4").src="aliens-04.png";
  }
  else if (results[0].label=="snapping"){
    document.getElementById("a1").src="aliens-01.png";
    document.getElementById("a2").src="aliens-02.png";
    document.getElementById("a3").src="aliens-03.gif";
    document.getElementById("a4").src="aliens-04.png";
}
else if (results[0].label=="tapping"){
    document.getElementById("a1").src="aliens-01.png";
    document.getElementById("a2").src="aliens-02.png";
    document.getElementById("a3").src="aliens-03.png";
    document.getElementById("a4").src="aliens-04.gif";
}
    } 
     document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(2);
     document.getElementById("hear").innerHTML=results[0].label;
}

