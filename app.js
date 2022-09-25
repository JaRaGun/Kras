
const b = document.querySelector('button.No-Button');
const c = document.querySelector('button.Yes-Button');
var clicks = 0;
b.addEventListener('click',clickedNo);
c.addEventListener('click',handleClick);
function clickedNo() {

    clicks += 1;
    const i=Math.floor(Math.random()*200)+1;
    const j=Math.floor(Math.random()*200)+1;
   
    b.style.left=i+'px';
    b.style.top=j+'px';   

    switch(clicks){
        case 3:
            document.getElementById("img1").style.display="block";
            break;
        case 5:
            document.getElementById("img2").style.display="block";
            break;
        case 7:
            document.getElementById("img3").style.display="block";
            c.classList.add('animate-ping','transition','delay-100');
            break;
        case 10:
            document.getElementById("img4").style.display="block";
            c.classList.add('animate-spin','transition','delay-100');
            break;
        case 12:
            document.getElementById("scary").classList.add('scary');
            break;  
        default:
            break;
}
}


function handleClick() {
    document.querySelector('h1').innerHTML="La ko Pake";
    c.style.display = 'none';
    b.style.display = 'none';
    for(var i=1;i<=4;i++){
        document.getElementById("img"+i).style.display="none";
    }
}

