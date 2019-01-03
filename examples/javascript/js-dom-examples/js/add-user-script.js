let addButton = document.getElementById('add-user-button');

addButton.addEventListener('click', function() {
    let usersListLength = document.getElementsByClassName('user-item').length;
    
    let newUserItem = document.createElement('li');
    newUserItem.setAttribute('class',"user-item");
    newUserItem.innerHTML = 'User' + (usersListLength + 1);
    
    document.querySelector('.users').appendChild(newUserItem);
    
    
    console.log(newUserItem);
});

