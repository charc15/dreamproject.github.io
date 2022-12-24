let brahian = document.getElementById('brahian');
let frank = document.getElementById('frank');
let carlos = document.getElementById('carlos');
let julian = document.getElementById('julian');

// Cambiar estado de Brahian
brahian.addEventListener('click', () =>{
    brahian.classList.toggle('infoBrahian');
    if(brahian.className == 'avatar infoBrahian'){
        brahian.innerHTML = `
        <h2>Brahian Arias</h2>
        <p>Le gusta los videojuegos, la cocina, la música y el arte</p>
        <br>
        <p>Su sueño es ser ingeniero electrónico</p>
        `;
    } else {
        brahian.innerHTML = `
        <img src="images/avatar/Brahian.png" alt="Avatar de Brahian">
        <h3>Brahian Arias</h3>
        <p>16 años</p>
        <p>Programador y diseñador</p>
        `;
    };
});

// Cambiar estado de Frank
frank.addEventListener('click', () =>{
    frank.classList.toggle('infoFrank');
    if(frank.className === 'avatar infoFrank'){
        frank.innerHTML = `
        <h2>Frank<br>Smith</h2>
        <p>Le gusta el basketball y hacer ejercicio</p>
        <br>
        <p>Su sueño es ser ingeniero de sistemas</p>
        `;
    } else {
        frank.innerHTML = `
        <img src="images/avatar/Frank.png" alt="Avatar de Frank">
        <h3>Frank Smith</h3>
        <p>16 años</p>
        <p>Programador</p>
        `;
    };
});

// Cambiar estado de Carlos
carlos.addEventListener('click', () =>{
    carlos.classList.toggle('infoCarlos');
    if(carlos.className === 'avatar infoCarlos'){
        carlos.innerHTML = `
        <h2>Carlos Ladino</h2>
        <p>Le gusta leer ciencia ficción y escuchar música</p>
        <br>
        <p>Su sueño es poder viajar al extranjero</p>
        `;
    } else {
        carlos.innerHTML = `
        <img src="images/avatar/Carlos.png" alt="Avatar de Carlos">
        <h3>Carlos Ladino</h3>
        <p>15 años</p>
        <p>Logística</p>
        `;
    }
});

// Cambiar estado de Julian
julian.addEventListener('click', () =>{
    julian.classList.toggle('infoJulian');
    if(julian.className === 'avatar infoJulian'){
        julian.innerHTML = `
        <h2>Julián Cuervo</h2>
        <p>Le gusta jugar fútbol y ganar dinero</p>
        <br>
        <p>Su sueño es fundar una empresa grande y reconocida</p>
        `;
    } else {
        julian.innerHTML = `
        <img src="images/avatar/Julian.png" alt="Avatar de Julian">
        <h3>Julian Cuervo</h3>
        <p>15 años</p>
        <p>Comediante</p>
        `;
    };
});