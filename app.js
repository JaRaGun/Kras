
const b = document.querySelector('button.No-Button');
const c = document.querySelector('button.Yes-Button');
b.addEventListener('mouseover',moveHover);
c.addEventListener('click',handleClick);

function moveHover() {
    const i=Math.floor(Math.random()*500)+1;
    const j=Math.floor(Math.random()*500)+1;

    b.style.left=i+'px';j
    b.style.top=j+'px';
}

function handleClick() {
    document.querySelector('h1').innerHTML="La ko Pake";
    c.style.display = 'none';
}

