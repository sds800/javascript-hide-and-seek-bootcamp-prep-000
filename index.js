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
  parseInt(lis[i].innerHTML) + n
} 
  
}

function deepestChild(){
  
  
  
}