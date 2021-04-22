// // Event Handler
// const p3 = document.querySelector('.p3');

// function ubahWarnaP3()
// {
//     p3.style.backgroundColor = 'lightgreen';
// }
// function ubahWarnaP2()
// {
//     p2.style.backgroundColor = 'lightgreen';
// }

// const p2 = document.querySelector('.p2');
// p2.onclick = ubahWarnaP2;

// // addEventListener
// const p4 = document.querySelector('.p4');
// p4.addEventListener('click', function(){
//     const ul = document.querySelector('section#b ul');
//     const liBaru = document.createElement('li');
//     const teksliBaru = document.createTextNode('item baru');

//     liBaru.appendChild(teksliBaru);
//     ul.appendChild(liBaru); 
// });


// perbedaan Event Handler dan addEventListener
//ketika kita memberikan lebih dari 1 perubahan pada sebuah event jika kita menggunakan event handler maka perubahan yang terakhir akan menimpa perubahan sebelumnya sedangkan menggunakan addeventlistener maka akan menambah perubahannya

const p3 = document.querySelector('.p3');
// event handler
// p3.onclick = function () {
//     p3.style.backgroundColor = 'lightgreen';
// }
// p3.onclick = function () {
//     p3.style.color = 'red';
// }

// addEventListener
p3.addEventListener('click', function () {
    p3.style.backgroundColor = 'lightgreen';
});
p3.addEventListener('click', function () {
    p3.style.color = 'red';
});
