// DOM Selection

// getElementById -> element
// cara nulis : document.getElementById()

// const judul = document.getElementById('judul');
// // merubah style judul 
// judul.style.color = 'red';

// // merubah html
// judul.innerHTML = 'Watsap Cuk';
// // console.log(judul);

// // getElementsByTagName -> HTML Collection (didalam array datanya)
// // cara nulis : document.getElementsByTagName()
// const p = document.getElementsByTagName('p');
// // p[2] = index array ke 2 dari html collection p
// // p[2].style.backgroundColor = 'lightblue';

// for (let i = 0; i < p.length; i++)
// {
//     p[i].style.backgroundColor = 'lightblue';
// }

// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '50px';

// // getElementsByClassName() -> HTML Collection (didalam array datanya)
// // cara nulis : document.getElementsByClassName()
// const p1 = document.getElementsByClassName('p1');
// p1[0].innerHTML = 'Coba merubah dari js';

// document.querySelector() -> element (hanya 1 datanya)

// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange';

// document.querySelectorAll() -> NodeList
// const p = document.querySelectorAll('p');

// for (let i = 0; i < p.length; i++)
// {
//     p[i].style.backgroundColor = 'lightblue';
// }


// mengubah node root (document)
const sectionB = document.querySelector('section#b');
const p4 = sectionB.getElementsByTagName('p')[0];
p4.style.backgroundColor = 'orange';