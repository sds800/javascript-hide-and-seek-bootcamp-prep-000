function getFirstSelector(selector){
  
  var first = document.querySelector(selector);
  return first;
  
}

function nestedTarget(){
  
  return document.querySelector();
  
}

function increaseRankBy(n){
  
const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
 for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = (i + [n]).toString()
} 
  
}

function deepestChild(){
  
  
  
}