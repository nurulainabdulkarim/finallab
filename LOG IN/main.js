/////////////////////////////DO A MODAl/////////////////////////

// //GET A MODAL
// let modal = document.querySelector(".modal");


// //TRIGGERED MODAL
// let openModal = document.querySelector(".button1");

// //Listen for open click
// document.querySelector(".button1").addEventListener('click', open);

// //Function for open click
// function open() {
//     modal.style.display = "block"
// }

// //Close A modal
// let closeModal = document.querySelector (".closeModal");

// //Listen to click -- close
// document.querySelector(".closeModal").addEventListener('click', close);

// //Function for close -- click
// function close(){
//     modal.style.display ="none"
// }

///////////CHANGE THE HEADER COVER WITH ANOTHER IMAGES BY CLICK ON THAT IMAGES//////////



function change(){
    var image = document.querySelector(".img_cover");

    let image_tracker = 'new';

    if (image_tracker =='new'){
        image.src = "img/new.jpg";
        image_tracker ='new'
    }else{
        image.src = "img/covergracey.png";
        image_tracker ='old'
    }
}

/////////TOGGLE MENU BAR///////////////
function barnav() {
    var x = document.querySelector(".navactive");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

/////////CHANGE ANY TITLE WITH ANOTHER TITLE///////////////

/////////CHANGE THE REWARD BUTTON TI ANOTHER COLOR ///////////////

let tekan = 'now';
function reward(){
    let reward_btn = document.querySelector(".rewardbutton");
    
    if (tekan == 'now'){
        reward_btn.style.backgroundColor="maroon";
        reward_btn.style.color="white";
        tekan ='this'
    }else{
        reward_btn.style.backgroundColor="pink";
        reward_btn.style.color="black";
        tekan = 'now'
    }
}




