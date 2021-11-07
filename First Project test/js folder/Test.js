//Check If There Is Local Storage Color Option

let mainColors = localStorage.getItem("color-option");


if(mainColors !== null){
    document.documentElement.style.setProperty('--main--color',localStorage.getItem("color-option"));
}
//Random Background Option



// Variable To Control The Background Interval
let backgroundInterval;

//Check If There's Local Storage Random Background Item
let backgroundLocalItem = localStorage.getItem("background-option")

//Check If Random Background Local Storage Is Not Empty

if(backgroundLocalItem !== null){

        if(backgroundLocalItem === 'true'){
            
            backgroundOption=true;

        }else {

            backgroundOption=false;
        };

    //Remove Active Class From All Spans
   document.querySelectorAll(".random-backgrounds span").forEach(element => {
       element.classList.remove("active");

   });
   if(backgroundLocalItem === 'true'){
        document.querySelector(".random-backgrounds .yes").classList.add("active");

   }else{
        document.querySelector(".random-backgrounds .no").classList.add("active");

   }



};


// Toggle Spin Class On Icon
document.querySelector(".toggle-settings .fa-cog").onclick =function(){
    this.classList.toggle("fa-spin");
    document.querySelector(".settings-box").classList.toggle("open");
};

// Switch Colors
const colorsLi = document.querySelectorAll(".colors-list li")
colorsLi.forEach(li => {
    li.addEventListener("click",(e) => {
        document.documentElement.style.setProperty('--main--color',e.target.dataset.color);
        localStorage.setItem("color-option",e.target.dataset.color);

       handleActive(e);
    
    });


});
//Random Backgorunds Options
const randomBackEl = document.querySelectorAll(".random-backgrounds span")
randomBackEl.forEach(span => {
    span.addEventListener("click",(e) => {
  
        handleActive(e);
    
        
        if (e.target.dataset.background === 'yes'){
            
            backgroundOption=true;
            randomizeImgs();
            localStorage.setItem("background-option", true);

        }else {
            backgroundOption=false;
            clearInterval(backgroundInterval);
            localStorage.setItem("background-option", false);


        }
    
            
    });


});



// Select Landing Page Element
let landingPage = document.querySelector(".landing-page");

// Get Array of Imgs
let imgsArray = ["img1.PNG","img2.PNG","img3.jpg","img4.jpg","img5.jpeg"];



//Function To Randomize Imgs

function randomizeImgs() {
    if (backgroundOption === true) {

        backgroundInterval = setInterval(() => {

            // Get Random Number
            let randomNumber = Math.floor(Math.random() * imgsArray.length);
            
            // Change Background Image URl
            landingPage.style.backgroundImage = 'url("imgs/'+ imgsArray[randomNumber]+'")';
        
        }, 1000);
    };

};
randomizeImgs();

//Select Skills Selector 
let ourSkills = document.querySelector(".skills");
window.onscroll = function(){
    //Skills Offset Top
    let skillsOffsetTop = ourSkills.offsetTop;

    //Skills Outer Height
    let skillsOuterHeight = ourSkills.offsetHeight;

    //Window Height
    let windowHeight = this.innerHeight;

    //Window ScrollTop

    let windowScrollTop = this.pageYOffset;

    if(windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)){
        let allSkills = document.querySelectorAll(".skill-box .skill-progress span");
        allSkills.forEach(skill => {
            skill.style.width = skill.dataset.progress;
        });
    }
    
};

//Create Popup With The Image

let ourGallery = document.querySelectorAll(".gallery img");
ourGallery.forEach(img =>{
    img.addEventListener('click',(e) =>{
        //Create Overlay Element
        let overlay = document.createElement("div");
        //Add Class To Overlay
        overlay.className = 'popup-overlay';
        //Append Overylay To The Body
        document.body.appendChild(overlay);

        //Create The Popup

        let popupBox = document.createElement("div");
        //Add Class To The Popup Box

        popupBox.className= 'popup-box';

        if(img.alt !== null){
            //Create Heading
                let imgHeading = document.createElement("h3");
            // Create Text For Heading    
                let imgText = document.createTextNode(img.alt);
            //Append The Text To The Heading    
                imgHeading.appendChild(imgText);
            //Append The Heading To The Popup Box
                popupBox.appendChild(imgHeading);
            };

        //Create The Image
        let popupImage = document.createElement("img");

        //Set Image Source

        popupImage.src=img.src;

        //Add Image To Popup Box

        popupBox.appendChild(popupImage);

        //Append The Popup Box To body

        document.body.appendChild(popupBox);

        //Create The Close Spans
        let closeButton = document.createElement("span");

        //Create The Close Button imgText
        let closeButtonText = document.createTextNode("X");

        //Append Text To Close Button

        closeButton.appendChild(closeButtonText);

        //Add Class To Close Button

        closeButton.className = 'close-button';

        //Add Close Button To The Popup box

        popupBox.appendChild(closeButton);
      
    });
});

//Close Popup Box

document.addEventListener("click" , function(e){
    if(e.target.className == 'close-button'){
        //Remove The Current Popup
        e.target.parentNode.remove();
        //Remove OverLay
        document.querySelector(".popup-overlay").remove();
        

    }
});

const allBullets = document.querySelectorAll(".nav-bullets .bullet");
const allLinks= document.querySelectorAll(".links a");




function scrollToSomewhere(elements){
    
    elements.forEach(ele => {

        ele.addEventListener("click" ,(e) =>{

            e.preventDefault();

            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: 'smooth'
            });
        });
    }) ;
};

scrollToSomewhere(allBullets);
scrollToSomewhere(allLinks);



//Handle Active State
function handleActive(ev){
    ev.target.parentElement.querySelectorAll(".active").forEach(element => {
        element.classList.remove("active");
    });

    ev.target.classList.add("active");

}

let bulletsSpan = document.querySelectorAll('.bullets-option span');

let bulletsContainer = document.querySelector('.nav-bullets');



//Local Storage
let bulletLocalItem = localStorage.getItem('.bullets-option');

if(bulletLocalItem !== null){
    bulletsSpan.forEach(span =>{
        span.classList.remove("active");
    });
    if(bulletLocalItem === 'block'){
        bulletsContainer.style.display = 'block';
        document.querySelector(".bullets-option .yes").classList.add("active");

    }else{
        bulletsContainer.style.display = 'none';
        document.querySelector(".bullets-option .no").classList.add("active");
    }
}



bulletsSpan.forEach(span => {
    span.addEventListener("click" ,(e) =>{
        if(span.dataset.display === 'show'){
            bulletsContainer.style.display = 'block';
            localStorage.setItem('bullets-option', 'block');

        }else{
            bulletsContainer.style.display = 'none';
            localStorage.setItem('bullets-option', 'none');

        }
        handleActive(e);
    });
});



// document.querySelector(".toggle-menu").onclick =function(){

//     this.classList.toggle("menu-active");
//     document.querySelector(".links").classList.toggle("open");
// };


let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");

toggleBtn.onclick=function(e){
    e.stopPropagation();

    this.classList.toggle("menu-active");

    tLinks.classList.toggle("open");
    
}


//Click Anywhere Outside Menu And Toggle Button

document.addEventListener("click",(e) => {

    if(e.target !== toggleBtn && e.target !== tLinks) {
        //Check If Menu Is Open

        if(tLinks.classList.contains("open")){
            toggleBtn.classList.remove("menu-active");

            tLinks.classList.remove("open");
        }
    }
});

tLinks.onclick = function(e){
    e.stopPropagation();
}

// // Switch Colors
// const colorsLi = document.querySelectorAll(".colors-list li")
// colorsLi.forEach(li => {
//     li.addEventListener("click",(e) => {
//         document.documentElement.style.setProperty('--main--color',e.target.dataset.color);
//         localStorage.setItem("color-option",e.target.dataset.color);

//        handleActive(e);
    
//     });


// });

// Reset Button

// document.querySelector(".reset-options").onclick = function(){
//     localStorage.removeItem("bullets-option");
//     localStorage.removeItem("color-option");
//     localStorage.removeItem("background-option");
//     window.location.reload();
// };