const gameArray = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'
]

const imageList = document.querySelector('.image-list');

const rightImageList = document.querySelector('.right-image-list');


let imageSlideContent = "";

let imageSlideContentRight = "";

for(let i = 0; i < gameArray.length; i++){
    const newImageWrap =`<div class="image-wrapper">
                            <img class="image" src="${gameArray[i]}">
                        </div>`;

    imageSlideContent += newImageWrap;

    const newImageWrapRight =`<div class="right-image">
                                <img class="image" src="${gameArray[i]}">
                            </div>`;
                    
    imageSlideContentRight += newImageWrapRight;

}

imageList.innerHTML = imageSlideContent;

rightImageList.innerHTML = imageSlideContentRight;

const imageWrapDom = document.getElementsByClassName('image-wrapper');

const imageRightDom = document.getElementsByClassName('right-image');

let currentImage = 0;

imageWrapDom[currentImage].classList.add('block');

imageRightDom[currentImage].classList.add('brightness-border')



const nextDom = document.querySelector('#next');
const prevDom = document.querySelector('#prev');

nextDom.addEventListener('click',
    function(){ 
        
        imageWrapDom[currentImage].classList.remove('block');
        imageRightDom[currentImage].classList.remove('brightness-border');
   
        if(currentImage < imageWrapDom.length - 1 ){
        currentImage++;
        
        }else if(currentImage == imageWrapDom.length - 1 ){
            currentImage = 0;
        }
        
        imageWrapDom[currentImage].classList.add('block');
        imageRightDom[currentImage].classList.add('brightness-border');
    }
)

prevDom.addEventListener('click',
    function(){

        imageWrapDom[currentImage].classList.remove('block');
        imageRightDom[currentImage].classList.remove('brightness-border');


        if(currentImage > 0 ){
            currentImage--;

        }else if(currentImage == 0){
            currentImage = imageWrapDom.length - 1 ;
        }

        imageWrapDom[currentImage].classList.add('block');
        imageRightDom[currentImage].classList.add('brightness-border');
    }
)