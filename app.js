const carousel= document.querySelector('.carousel');
let slider=[];

let slideIndex=0;

const createSlide=()=>{
    if(slideIndex>=movies.length){
        slideIndex=0;
    }

    //creating 5 DOM elements
    let slide=document.createElement('div')
    let imgElement=document.createElement('img')
    let content=document.createElement('div')
    let h1=document.createElement('h1')
    let p=document.createElement('p')


//connecting them

imgElement.appendChild(document.createTextNode(''));
h1.appendChild(document.createTextNode(movies[slideIndex].name));
p.appendChild(document.createTextNode(movies[slideIndex].des));
content.appendChild(h1);
content.appendChild(p);
slide.appendChild(content);
slide.appendChild(imgElement);
carousel.appendChild(slide);



//setting immage

imgElement.src=movies[slideIndex].name;
slideIndex++;

//setting class name
slide.className='slide';
content.className='slide-content';
h1.className='movie-title';
p.className='movie-des';

slider.push(slide);

//for sliding efect

if(slider.length){
    slider[0].style.marginLeft='calc(-${100 * (sliders.length-2)}%-${30 * (sliders.length-2)}px)';
}
for(let i=0;i<3;i++){
    createSlide();
}
setInterval(()=>{
    createSlide();
}
,3000);
}