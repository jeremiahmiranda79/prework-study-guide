// // When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// // Get the header
// var header = document.getElementById("myHeader");

// // Get the offset position of the navbar
// var sticky = header.offsetTop;

// // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }


// var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
// var randomTopic = topics[Math.floor(Math.random() * topics.length)];

// function listTopics() {
//     for(var x = 0; x < topics.length; x++) {
//         console.log(topics[x]);
//     }
// }

// function selectTopic() {
//     if (randomTopic === 'HTML') {
//         console.log("Let's study HTML!");
//       } else if (randomTopic === 'CSS') {
//         console.log("Let's study CSS!");
//       } else if (randomTopic === 'Git') {
//         console.log("Let's study Git!");
//       } else if (randomTopic === 'JavaScript') {
//         console.log("Let's study JavaScript!");
//       } else {
//         console.log('Please try again!');
//       }
// }

// var condition;
// if (condition === true) {
//   //code executed
// } else {
//   //code executed
// }

// var arr1 = [1,2,3,4,5,6];
// var arr2 = ["1","2","3"];
// var arr3 = [1, "2", a ]


// console.log('Here are the topics we learned through Prework:');
// listTopics();
// console.log('Which topic should we study first?');
// selectTopic();

// document.write(selectTopic());



// var coll = document.getElementsByClassName("collapsible");
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// }