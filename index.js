function getFirstSelector(selector){
  
  var first = document.querySelector(selector);
  return first;
  
}

function nestedTarget(){
  
 return document.getElementById('nested').querySelector('.target');
  
}

function increaseRankBy(n){
  
const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
 for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = parseInt(lis[i].innerHTML) + n ;
} 
  
}

function deepestChild(){
  let current = document.getElementById('grand-node')
  let dive = current.children[0]

  while (dive) {
    current = dive
    dive = current.children[0]
  }

  return current
  
}