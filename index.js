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
  depth = document.getElementById('grand-node').querySelectorAll('div')
for (let i = 0; i < depth.length; i++){
  depth[i].innerHTML =+ childElementCount > 0

  return depth
  
} 
    
  
  
}