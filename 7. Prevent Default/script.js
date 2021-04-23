// Event Handling
// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click', function(){
//     card.style.display = 'none';
// });

// DOM Traversal
const close = document.querySelectorAll('.close');

// cara 1 :
// for(let i = 0; i < close.length; i++) 
// {
//     close[i].addEventListener('click', function(event) {
//         // close[i].parentElement.style.display = 'none';
//         // console.log(event.target);
//         event.target.parentElement.style.display = 'none';

//     })
// }

// cara 2 :
close.forEach(function(el){
    el.addEventListener('click', function(e) {
        e.target.parentElement.style.display = 'none';
        // mencegah aksi default
        e.preventDefault();
    });
});

// const nama = document.querySelector('.nama');
// console.log(nama.previousElementSibling);