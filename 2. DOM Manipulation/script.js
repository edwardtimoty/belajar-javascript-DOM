// // element.innerHTML 
// const judul = document.getElementById('judul');
// judul.innerHTML = 'Test';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'Halo';

// // element.style.<properti css>
// const judul = document.querySelector('#judul');
// judul.style.color = 'lightblue';
// judul.style.backgroundColor = 'salmon';

// // element.setAttribute(), element.getAttribute(), element.removeAttribute()
// const judul = document.getElementsByTagName('h1')[0];
// const a =  document.querySelector('section#a a');
// // menambahkan attribute baru
// judul.setAttribute('name', 'judul');
// a.setAttribute ('id', 'link');


// element.classlist.add()
// const p2 = document.querySelector('.p2');
// p2.classList.add('test');


// DOM Manipulation

// buat elemen baru
const pBaru = document.createElement('p');
const teksPB = document.createTextNode('paragraf baru');

// simpan tulisan kedalam paragraf
pBaru.appendChild(teksPB);

// simpan pBaru di akhir section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);


// menambah liBaru menggunakan insertBefore
const liBaru = document.createElement('li');
const teksliBaru = document.createTextNode('Item Baru');

liBaru.appendChild(teksliBaru);

const ul = document.querySelector('section#b ul');
// const li2 = document.querySelector('section#b ul li:nth-child(2)');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);

// menghapus Child
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

// mengganti Child
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru');
h2Baru.appendChild(teksH2Baru);

sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';

