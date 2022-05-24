//console.dir(document)
////console.log(document.getElementById('header-title'))
//var header=document.getElementById('header-title');
//header.style.color='blue';
//console.log(header);
//
var item=document.getElementsByClassName('list-group-item');
//console.log(item);
//item[1].textContent='Hello';
//item[1].style.fontWeight='bold';
//item[1].style.color='green';
//
//item[2].style.backgroundColor='green';
item[1].style.backgroundColor='#90EE90';
for(var x of item){
    x.style.fontWeight='bold';
}
item[2].style.display='none';
item[1].style.color='green';

//var ite=document.getElementsByTagName('li');
//ite[4].textContent='hello jani';

var odd=document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green';
}
