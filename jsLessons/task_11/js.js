let btn = document.querySelectorAll('button');

btn.forEach(function(item){
    item.addEventListener('click', function() {
         console.log(showUser());
    }); 
 });
let age = document.getElementById('age');

age.addEventListener('change', showUser);
function showUser(surname, name) {
     name = 'John';
     surname = 'Petrov';
     
    alert('Пользователь ' + surname + " " + name + ", его возраст " + this.value);
 console.log(surname);
 console.log(name);
 console.log(this.value);
 
}






