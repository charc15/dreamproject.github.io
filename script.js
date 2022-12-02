// Cambio de Brahian
function info_brahian(){
    let info = document.getElementById('brahian');
    info.innerHTML = '<h2>Brahian Arias</h2><p>Le gusta los videojuegos, la cocina, la música y el arte</p><p>Su sueño es ser ingeniero electrónico</p>';
}
function volver_estado_brahian(){
    let info = document.getElementById('brahian');
    info.innerHTML = '<img src="images/avatar/Brahian.png" alt="Avatar de brahiangod" width="300px" height="300px"><h2>Brahian Arias</h2><p>Programador y diseñador</p><p>16 años</p>';
}

// Cambio de Frank
function info_frank(){
    let info = document.getElementById('frank');
    info.innerHTML = '<h2>Frank<br>Rivas</h2><p>Le gusta jugar basquet</p><p>Su sueño es ser ingeniero de sistemas</p>';
}
function volver_estado_frank(){
    let info = document.getElementById('frank');				
    info.innerHTML = '<img src="images/avatar/Frank.png" alt="Avatar de Frank" width="300px" height="300px"><h2>Frank<br>Rivas</h2><p>Programador</p><p>16 años</p>';
}

// Cambio de Carlos
function info_carlos(){
    let info = document.getElementById('carlos');
    info.innerHTML = '<h2>Carlos Esteban</h2><p>Le gusta leer y escuchar música</p><p>Su sueño es ir al extranjero</p>';
}
function volver_estado_carlos(){
    let info = document.getElementById('carlos');
    info.innerHTML = '<img src="images/avatar/Carlos.png" alt="Avatar de Carlos" width="300px" height="300px"><h2>Carlos Esteban</h2><p>Logística</p><p>15 años</p>';
}

// Cambio de Julian
function info_julian(){
    let info = document.getElementById('julian');
    info.innerHTML = '<h2>Julián Cuervo</h2><p>Le gusta el futbol y el dinero</p><p>Su sueño es emprender una empresa grande</p>';
}
function volver_estado_julian(){
    let info = document.getElementById('julian');
    info.innerHTML = '<img src="images/avatar/Julian.png" alt="Avatar de Julian" width="300px" height="300px"><h2>Julian Cuervo</h2><p>Comediante</p><p>15 años</p>'
}

// Bara de progreso para la documentación
function steps(){
    let bar = document.getElementById('progress');
    let enc = document.getElementById('progress-enc');
    let ft = document.getElementById('progress-foot');
    let body = document.getElementById('registro');
    if(bar.className == ''){
        bar.className = 'step-1';
        enc.innerHTML = 'Paso 1 de 3';
        ft.innerHTML = '¡Yendo paso a paso!';
        body.innerHTML = '<label><input type="text" placeholder="Usuario" required></label><label><input type="email" placeholder="Correo electrónico" required></label><label><p style="margin-bottom: 30px;">¿Cuál es tu materia favorita?</p><select><option>Selecciona una materia</option><option>Física</option><option>Tecnología</option><option>Química</option><option>Matemáticas</option><option>Historia</option><option>Biología</option></select></label><input type="button" value="Siguiente" name="submit" id="sub" onclick="steps()">';
    } else if(bar.className == 'step-1'){
        bar.className = 'step-2';
        enc.innerHTML = 'Paso 2 de 3';
        ft.innerHTML = '¡Ya casi!';
    } else if(bar.className = 'step-2'){
        bar.className = 'step-3';
        enc.innerHTML = 'Paso 3 de 3';
        ft.innerHTML = '¡Vamos a ello!';
    }
}