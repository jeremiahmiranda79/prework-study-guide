let data = ['HTML', 'CSS', 'Git', 'JavaScript'];
let list = document.getElementById("demo4");
      
data.forEach((item) => {
  let li = document.createElement("li");
  li.innerText = item;
  list.appendChild(li);
});     