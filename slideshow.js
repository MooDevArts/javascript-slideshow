var current = 0;
var total = 4;

// getting the buttons
var next = document.getElementById('next');
var prev = document.getElementById('prev');

var images = document.getElementsByClassName('slide');

next.addEventListener('click', function(){
    console.log('next');

    if(current < total-1){
    current++;
    }else{
        current = 0;
    }
    console.log(current);

    for(var i = 0; i < images.length; i++){
        images[i].style.display = "none";
    }

    images[current].style.display = "block";

});

prev.addEventListener('click', function(){
    console.log('prev');

    if(current > 0){
    current--;
    }else{
        current = 3;
    }
    console.log(current);

    for(var i = 0; i < images.length; i++){
        images[i].style.display = "none";
    }

    images[current].style.display = "block";

})