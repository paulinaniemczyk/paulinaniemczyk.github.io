document.getElementById('formularz').addEventListener('submit',function(event){
    event.preventDefault();
    
    console.log(document.getElementsByTagName('input')[0].value);
    console.log(document.getElementsByTagName('input')[1].value);
    
});