let btn = document.querySelectorAll('button');

// for(let i = 0; i < btn.length; i++){
//     btn[i].addEventListener('click', function(){
//         alert('Hello!');
//     });
// }
btn.forEach(function(item){
    item.addEventListener('click', function(){
        alert('Hello!');
    });
    
});
