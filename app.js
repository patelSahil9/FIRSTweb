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


document.getElementById("card-vi-1").play();

document.getElementById("video-card-1").addEventListener("click",()=>{
    {
        console.log("tay 6 bhai 1")
        let temp=document.getElementsByClassName("card-vi");
        for(let i=0;i<temp.length;i++)
        {
            temp[i].style.display="none";
        }
        document.getElementById("card-vi-1").style.display="inline";
        document.getElementById("card-vi-1").play();
    }
})

document.getElementById("video-card-2").addEventListener("click",()=>{
    console.log("tay 6 bhai 2")
    let temp=document.getElementsByClassName("card-vi");
    for(let i=0;i<temp.length;i++)
    {
        temp[i].style.display="none";
    }
    document.getElementById("card-vi-2").style.display="inline";
    document.getElementById("card-vi-2").play();
})

document.getElementById("video-card-3").addEventListener("click",()=>{
    console.log("tay 6 bhai 3")
    let temp=document.getElementsByClassName("card-vi");
    for(let i=0;i<temp.length;i++)
    {
        temp[i].style.display="none";
    }
    document.getElementById("card-vi-3").style.display="inline";
    document.getElementById("card-vi-3").play();
})

document.getElementById("video-card-4").addEventListener("click",()=>{
    console.log("tay 6 bhai 4")
    let temp=document.getElementsByClassName("card-vi");
    for(let i=0;i<temp.length;i++)
    {
        temp[i].style.display="none";
    }
    document.getElementById("card-vi-4").style.display="inline";
    document.getElementById("card-vi-4").play();
})

document.getElementById("video-card-5").addEventListener("click",()=>{
    console.log("tay 6 bhai 5")
    let temp=document.getElementsByClassName("card-vi");
    for(let i=0;i<temp.length;i++)
    {
        temp[i].style.display="none";
    }
    document.getElementById("card-vi-5").style.display="inline";
    document.getElementById("card-vi-5").play();
})

