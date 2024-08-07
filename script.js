var itemCount=0;

function addToList(){
    itemCount++;

    var listItem = document.createElement('li');
    listItem.innerText='Item'+ itemCount;
    document.getElementById('itemList').appendChild(listItem);
}