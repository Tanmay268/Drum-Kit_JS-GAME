// Notice that here handleClick is just the name of the function.....not writing handleClick()........
var num = document.querySelectorAll(".drum").length;
for(var i=0; i<num; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        
        var buttonInnerHtml = this.innerHTML;
        
        switch(buttonInnerHtml){
            case "w":
                var tom1 = new Audio("/sounds/tom-1.mp3");
                tom1.play();
                break;
            case "a":
                var tom2 = new Audio("/sounds/tom-2.mp3");
                tom2.play();
                break;
            case "s":
                var tom3 = new Audio("/sounds/tom-3.mp3");
                tom3.play();
                break;
            case "d":
                var tom4 = new Audio("/sounds/tom-4.mp3");
                tom4.play();
                break;
            case "j":
                var crash = new Audio("/sounds/crash.mp3");
                crash.play();
                break;
            case "k":
                var kick = new Audio("/sounds/kick-bass.mp3");
                kick.play();
                break;
            case "l":
                var snare = new Audio("/sounds/snare.mp3");
                snare.play();
                break;
        }
        buttonAnimation(buttonInnerHtml);
    });
}

document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
    });

function makeSound(key){
    switch(key){
        case "w":
            var tom1 = new Audio("/sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("/sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("/sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("/sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var crash = new Audio("/sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            var kick = new Audio("/sounds/kick-bass.mp3");
            kick.play();
            break;
        case "l":
            var snare = new Audio("/sounds/snare.mp3");
            snare.play();
            break;
    }
}

function buttonAnimation(currKey){
    var activeButton = document.querySelector("."+currKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}

// ####################################### JUST FUN ###############################

// $("h1").click(function(){
//     $("h1").css("color","yellow");
// });

// $(document).click(function(){
//     $("h1").css("color","purple");
// })

// $("button").on("click",function(){
//     $("h1").slideUp().slideDown().animate(
//         {opacity: 0.5}
//     );
// });

