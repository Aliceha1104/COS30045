document.getElementById("button1").addEventListener("click", function() {
    var imgContainer = document.querySelector('.img-container img');
    var spanContainer = document.querySelector('.img-container span');
    spanContainer.style.display = "inline";
    imgContainer.src = "./img1.png"
});

document.getElementById("button2").addEventListener("click", function() {
    var imgContainer = document.querySelector('.img-container img');
    var spanContainer = document.querySelector('.img-container span');
    spanContainer.style.display = "inline";
    imgContainer.src = "./img2.png"
});

document.getElementById("button3").addEventListener("click", function() {
    var imgContainer = document.querySelector('.img-container img');
    var spanContainer = document.querySelector('.img-container span');
    spanContainer.style.display = "inline";
    imgContainer.src = "./both.png"
});

document.getElementById("closeBtn").addEventListener("click", function() {
    var imgContainer = document.querySelector('.img-container img');
    var spanContainer = document.querySelector('.img-container span');
    imgContainer.src = "";
    spanContainer.style.display = "none";
    
});
