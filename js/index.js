// Author: Stephen Aranda
// Date: 2/13/2021


// Pops the image, making it bigger.
function popUpImages(){
    const images = document.querySelectorAll("img");
    for(let i = 0; i<images.length;i++)
    {
        images[i].addEventListener('mouseenter',function() {           
            images[i].style.transform = 'scale(1.7)';
            images[i].style.transition = 'transform 1s';
        })
    }
}
popUpImages();

// returns the image to normal size.
function normalImage(){
    const images = document.querySelectorAll('img');
    for(let i = 0; i<images.length;i++)
    {
        images[i].addEventListener('mouseleave',function() {            
            images[i].style.transform = 'scale(1)';
            images[i].style.transition = 'transform 1s';
        })
    }
}

normalImage();


// changes color of text with mouse click.
function textColorChange(){
    const text = document.querySelectorAll('p');
    for(let i = 0;i<text.length;i++)
    {
        text[i].addEventListener('click',function(){
            text[i].style.color = 'yellow';
        })
    }
}

textColorChange();


// Text for headings pops up for mouse over
function titlePopsUp(){
    const titles = document.querySelectorAll('h2');
    for(let i = 0;i< titles.length;i++)
    {
        titles[i].addEventListener('mouseover',function(){
            titles[i].style.transform = "scale(1.1)";           
            setTimeout(function(){
                titles[i].style.transform = 'scale(1)';
                titles[i].style.transition = 'transform 1s';
            },500);
        },false);
    }
}

titlePopsUp();


// page changes background color when scroll event occurs.
function pageColorChange(){
    const page = document.querySelector('body');
    page.addEventListener('wheel',function(){
        page.style.backgroundColor = "blue";
    });    
}

pageColorChange();

// Rotate the title of the page 360 degrees.
function rotateTitle(){
    const title = document.querySelector('h1');
    title.addEventListener('dblclick',function(){    
        title.style.transform = 'rotate(360deg)';       
        title.style.transition = 'transform 1s';  
        
    })
        
}

rotateTitle();

// rotate h4 headings
function rotateTitles(){
    const titles = document.querySelectorAll('h4');
    for(let i = 0;i< titles.length;i++)
    {
        titles[i].addEventListener('mousedown',function(){
            titles[i].style.transform = 'rotate(360deg)';
            titles[i].style.transition = 'transform 1s';    
            setTimeout(function(){
                titles[i].style.transform = 'rotate(0deg)';
                titles[i].style.transition = 'transform 1s';              
            },1500)          
        },false);
       
    }
}

rotateTitles();

// rotate the entire page when right mouse button is pressed.
function rotatePage(){
    const page = document.querySelector('body');
    page.addEventListener("contextmenu",function(){
        page.style.transform = 'rotate(360deg)';
        page.style.transition = 'transform 1s';
        setTimeout(function(){
            page.style.transform = 'rotate(0deg)';            
        },1500)
    },false);    
}

rotatePage();

// change background color to black on cut.
function changeColorOnCut(){
    const page = document.querySelector('body');
    document.addEventListener('cut', function(){
        page.style.backgroundColor = "black";
    });
}

changeColorOnCut();


// rotate image on copy. put focus on element by clicking on it then press copy hot key.
function rotateImage(){
    const image = document.querySelector('img');
    image.addEventListener('copy', function(){
       image.parentElement.style.transform = 'rotate(360deg)';
       image.parentElement.style.transition = 'transform 1s';
       setTimeout(function(){
           image.parentElement.style.transform = 'rotate(0deg)';
           image.parentElement.style.transition = 'transition 1s';
       },1000)
    },false);
}

rotateImage();


// nested copy paste event causes background color to change pink
function copyPaste(){
    const page = document.querySelector('body');
    page.addEventListener('copy',function(){
        page.addEventListener('paste', function(){
            event.stopPropagation();
            page.style.backgroundColor = 'pink';
        })
    })
        
}

copyPaste();


// prevent navigation items from refreshing page.
function stopRefresh(){
    const nav = document.querySelector('nav');
    nav.addEventListener('click',function(event){
        event.preventDefault();
    });

}

stopRefresh();