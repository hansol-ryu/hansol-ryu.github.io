// Get the button
myBtn = document.getElementById("topBtn");
window.onscroll = function(){scrollFunction()};
console.log(myBtn);
function scrollFunction(){
  if(document.body.scrollTop > 100 || document.documentElement.scrollTop> 100){
    myBtn.style.display="block";
  }else {
    myBtn.style.display = "none";
  }
  }

function topFunction(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop=0;
}

// Get the modal
let modal=document.getElementById("myModal");
// Get the image and insert it inside the Modal
// let img= document.getElementsByClassName("md-img"); //array
let img= document.getElementsByClassName("md-img"); //array
let cover= document.getElementsByClassName("cover");
let modalImg= document.getElementById("img01");
let captionText=document.getElementById("caption");

for(let i=0; i<cover.length;i++){
  cover[i].onclick=function(){
    modal.style.display="block";
    console.log(this);
    modalImg.src=img[i].src;
    // captionText.innerHTML= this.alt;
  }
}

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
span.onclick=function(){
  modal.style.display="none";
};
