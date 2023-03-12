let topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];
document.getElementById("demo3").innerHTML = selectTopic();
      
function selectTopic() {
  if (randomTopic === 'HTML') {
      return "Let's study HTML!";
    } else if (randomTopic === 'CSS') {
      return "Let's study CSS!";
    } else if (randomTopic === 'Git') {
      return "Let's study Git!";
    } else if (randomTopic === 'JavaScript') {
      return "Let's study JavaScript!";
    } else {
      console.log("Please try again!!!!!!");
      return "Please try again!!!!!!";
    }
}        