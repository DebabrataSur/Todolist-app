var numBox = 6;
var colour  = randomColors(numBox);
var colorPicker = random();
var box = document.querySelectorAll(".box");
var head = document.querySelector(".head");
var msg = document.querySelector("#msg");
var hd = document.querySelector("h2");
var reset = document.querySelector("#bot");
var btn = document.querySelector("#reset");
var easy = document.querySelector("#easy")
var hard = document.querySelector("#hard")


// easy button logic
easy.addEventListener("click",function(){
    hd.style.backgroundColor = "#1FB4DE";
    this.classList.add ("selected");
    hard.classList.remove("selected");
    numBox = 3;
    colour = randomColors(numBox);
    colorPicker = random();
        head.textContent = colorPicker;
    for ( var  i=0; i<box.length; i++){
       if(colour[i]){
           box[i].style.backgroundColor = colour[i];
       } else {
           box[i].style.display = "none";
       }
    }
});

// hard button logic(including reset function)
hard.addEventListener("click",function(){
    easy.classList.remove("selected");
    hd.style.backgroundColor = "#1FB4DE";
    this.classList.add ("selected");
    numBox = 6;
    colour = randomColors(numBox);
    colorPicker = random();
    head.textContent = colorPicker;
    for ( var  i=0; i<box.length; i++){
            box[i].style.backgroundColor = colour[i];
            box[i].style.display = "block";     
     }
});


// main logic(checking and other stuffs included)
head.textContent = colorPicker;
for( var i = 0; i<box.length; i++){
    box[i].style.background = colour[i];

    box[i].addEventListener("click", function() {
       var clicked = (this.style.backgroundColor);
       if( clicked === colorPicker){
           allcolor(clicked);
           msg.textContent = "right choice!";
           hd.style.backgroundColor= clicked;
           btn.textContent = "PLay again";
       }else {
            msg.textContent= "try again";
            this.style.backgroundColor = "#232323";
       }
    });
}


// inserting background color in every divs
function allcolor(col) {
    for ( var i=0; i<box.length; i++){
    box[i].style.backgroundColor = col;
    }
}


// picking random number
 function random() {
    var ran  = Math.floor(Math.random () * colour.length);
    return colour[ran];
}



// insereting random colors as per the required number
function randomColors(num) {
    var arr=[];

    for ( var i=0;i<num; i++){
       arr.push(rgbcolor());
    }
    return arr;
}


//  generating random rgb colors(value of r, g, b)
function rgbcolor(){
    var r  = Math.floor(Math.random() * 256);
    var g  = Math.floor(Math.random() * 256);
    var b  = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", "+ g + ", " + b + ")";
}



// reset button
btn.addEventListener("click",function() {
    numBox = 6;
    colour= randomColors(numBox);
    colorPicker = random();
    for( var i = 0; i<colour.length; i++){
        box[i].style.backgroundColor = colour[i];
        msg.textContent = "";
        hd.style.backgroundColor = "#1FB4DE";
        head.textContent = colorPicker;
    }
});