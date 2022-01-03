window.onload = function(){
    var img = document.getElementById("ไอ้ต้าว1");
    var count = document.getElementById("score");
    var score = 0;
    var audio = new Audio("ง่าว.mp3");

    img.addEventListener('mousedown',function(){
        increaseScore();
        img.src = 'ไอ้ต้าว2.png';
        audio.play();
    });

    img.addEventListener('mouseup',function(){
        img.src = 'ไอ้ต้าว1.png';
});

    function increaseScore(){
        score++;
        count.innerHTML = score;
    }
}