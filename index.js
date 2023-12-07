var adding=document.getElementById('addForm');
var itemlist=document.getElementById('items');

//form submit event
adding.addEventListener('submit',addItem);

//delete element
itemlist.addEventListener('click',remove);



function addItem(e){
    e.preventDefault();
    // console.log(1);

    var newitem=document.getElementById('item').value;

    //creating a new li element
    var li =document.createElement('li');
    //add class name

    li.className='list-group-item';

    //add text node with input value;
    li.appendChild(document.createTextNode(newitem));

    //create a  new delete button
    var del=document.createElement('button');
    //inserting classname
    del.className='btn btn-danger btn-sm float-right delete';
   //appending  textnode
   del.appendChild(document.createTextNode('X'));
   //append to li
   li.append(del);

  itemlist.appendChild(li);

}
function remove(e){
 if(e.target.classList.contains('delete')){
   if(confirm('are you sure?')){
    var li =e.target.parentElement;
    itemlist.removeChild(li);
   }
 }
}