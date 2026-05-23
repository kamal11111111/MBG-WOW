// =======================
// FITNESS
// =======================

function fitness(menu){

return(

(menu.protein*4)

+

(menu.serat*3)

+

(menu.energi*0.03)

-

(menu.biaya*0.001)

);

}



// =======================
// PILIH TAMBAHAN
// =======================

function pilihTambahan(menu){

if(
!tambahan
||
tambahan.length===0
){

return{

nama:"Tidak ada",

harga:0,

energi:0,

protein:0,

lemak:0,

karbo:0,

serat:0

};

}



if(menu.protein<25){

return tambahan.find(
x=>
x.kategori==="Protein"
)

||

tambahan[0];

}



if(menu.serat<5){

return tambahan.find(
x=>
x.kategori==="Serat"
)

||

tambahan[0];

}



if(menu.karbo<100){

return tambahan.find(
x=>
x.kategori==="Karbo"
)

||

tambahan[0];

}



return tambahan[

Math.floor(

Math.random()

*

tambahan.length

)

];

}



// =======================
// ALASAN
// =======================

function alasan(menu){

let hasil=[];



if(
menu.protein>=30
){

hasil.push(
"Protein tinggi"
);

}



if(
menu.serat>=5
){

hasil.push(
"Serat baik"
);

}



if(
menu.biaya<=12000
){

hasil.push(
"Biaya efisien"
);

}



if(
hasil.length===0
){

hasil.push(
"Gizi seimbang"
);

}



return hasil.join(
" • "
);

}



// =======================
// GENERATE
// =======================

function generateMenu(){



const jenis=

document
.getElementById(
"jenis"
)
.value;



const budget=

Number(

document
.getElementById(
"budget"
)
.value

);



const prioritas=

document
.getElementById(
"prioritas"
)
.value;



const hasil=

document
.getElementById(
"simulation-result"
);



if(!hasil){

alert(
"Container hasil tidak ditemukan"
);

return;

}



hasil.innerHTML=

`

<div class="loading-box">

<div class="loader">

</div>

<h2>

Menjalankan Optimasi...

</h2>

<p>

Menghitung kombinasi menu terbaik

</p>

</div>

`;



setTimeout(()=>{



const data=

jenis==="Menu Basah"

?

menuBasah

:

menuKering;



if(

!data

||

data.length===0

){

hasil.innerHTML=

`

<h2>

⚠ Dataset kosong

</h2>

`;

return;

}



let kandidat=[];



data.forEach(menu=>{



const t=

pilihTambahan(
menu
);



const total={

...menu,

tambahan:t,

energi:
menu.energi+t.energi,

protein:
menu.protein+t.protein,

lemak:
menu.lemak+t.lemak,

karbo:
menu.karbo+t.karbo,

serat:
menu.serat+t.serat,

biaya:
menu.biaya+t.harga

};



const lolos=

total.energi>=500

&&

total.protein>=15

&&

total.lemak>=20

&&

total.karbo>=100

&&

total.serat>=5

&&

total.biaya<=budget;



if(!lolos){

return;

}



let nilai=

fitness(
total
);



if(
prioritas==="Protein Tinggi"
){

nilai*=1.15;

}



if(
prioritas==="Serat Tinggi"
){

nilai+=
total.serat*6;

}



if(
prioritas==="Energi Tinggi"
){

nilai+=
total.energi*0.08;

}



if(
prioritas==="Biaya Minimum"
){

nilai-=
total.biaya*0.002;

}



kandidat.push({

...total,

fitness:nilai

});



});



if(

kandidat.length===0

){

hasil.innerHTML=

`

<h2>

😭 Tidak ada rekomendasi

</h2>

`;

return;

}



kandidat.sort(

(a,b)=>

b.fitness-

a.fitness

);



const top=

kandidat.slice(
0,
6
);



let html=

`

<h2>

🍱 Top 6 Menu Optimal

</h2>

<p class="hasil-desc">

Menu dipilih berdasarkan
fitness tertinggi,
constraint,
dan efisiensi biaya.

</p>

`;



top.forEach(

(menu,index)=>{



const warna=

menu.biaya<=12000

?

"budget-hijau"

:

menu.biaya<=15000

?

"budget-biru"

:

"budget-merah";



html+=`

<div class="menu-card">

<h3>

${
index===0

?

"🏆 Rekomendasi Terbaik"

:

`#${index+1}`

}

</h3>



<h2>

${menu.nama}

</h2>



<p>

${(menu.isi||[]).join("<br>")}

</p>



<hr>



<p>

➕

${menu.tambahan.nama}

</p>



<p>

⚡ ${menu.energi.toFixed(0)} kkal

</p>

<p>

🥩 ${menu.protein.toFixed(1)} g

</p>

<p>

🥑 ${menu.lemak.toFixed(1)} g

</p>

<p>

🍚 ${menu.karbo.toFixed(1)} g

</p>

<p>

🌿 ${menu.serat.toFixed(1)} g

</p>



<p class="budget-status ${warna}">

💰 Rp

${menu.biaya.toLocaleString()}

</p>



<p>

⭐

${menu.fitness.toFixed(1)}

</p>



<p>

💡

${alasan(menu)}

</p>



<p>

✔ Constraint Satisfied

</p>

</div>

`;



});



hasil.innerHTML=

html;



},5000);



}
