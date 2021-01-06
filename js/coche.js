let cerrar = document.querySelectorAll( '.closee' )[0];
let cerrar1 = document.querySelectorAll( '.closee' )[1];
let abrir = document.querySelectorAll( '.abrir-modal')[ 0 ];
let modal = document.querySelectorAll( '.modal' )[0];
let modalContainer = document.querySelectorAll( '.modal-container' )[0];

let guardar = document.getElementById( "registrar-coche" );

let accion = "";

abrir.addEventListener( "click", function(e) {
    e.preventDefault();
    accion = "guardar"
    guardar.innerHTML = "Guardar";  
    document.getElementById("form-inputs").reset();  
    modalContainer.style.opacity = 1;
    modalContainer.style.visibility = "visible";
    modal.classList.toggle("modal-close");
});

cerrar.addEventListener( "click", function(e) {    
    modal.classList.toggle( "modal-close" );
    modalContainer.style.oppacity = 0;
    setTimeout( function() {        
        modalContainer.style.visibility = "hidden";
    } , 600 );
});

cerrar1.addEventListener( "click", function(e) {   
    //console.log( accion ); 
    modal.classList.toggle( "modal-close" );
    modalContainer.style.oppacity = 0;
    setTimeout( function() {        
        modalContainer.style.visibility = "hidden";
    } , 600 );
});

window.addEventListener( "click", function(e) {
    /*console.log( e.target );*/
   // console.log( accion );
    if( e.target == modalContainer ) {
        modal.classList.toggle( "modal-close" );
        modalContainer.style.oppacity = 0;
        setTimeout( function() {        
            modalContainer.style.visibility = "hidden";
            } , 600 );
    }
});

const coches = [
    {
        id: 1,
        marca : 'Nissan',
        modelo: 'N-MKG08',
        color : 'Gris',
        anio  : '2019',
        precio: '50000',
        imagen: ''
    }
];



function printCoches() {
    let content = '';
    for( let i = 0; i < coches.length; i++ ) {
        content += 
            `<tr>
                <td> ${ coches[i].marca } </td>
                <td> ${ coches[i].modelo} </td>
                <td> ${ coches[i].color } </td>
                <td> ${ coches[i].anio  } </td>
                <td> ${ coches[i].precio} </td>
                <td> ${ coches[i].imagen} </td>
                <td> 
                    <button class = "button button-primary" onclick="editCoche(${coches[i].id })" id="edit"> Editar </button>
                    <button class = "button button-danger" onclick="deleteCoche(${coches[i].id })" id="deleteCoche"> Eliminar </button>
                </td>
            </tr>`;
    } 
    const element = document.getElementById( "listado-coches" );
    element.innerHTML = content ;
}

printCoches();



guardar.addEventListener( "click", function(e) {
    e.preventDefault();
    const inputMarca  = document.getElementsByName( "marca")[0].value;
    const inputModelo = document.getElementsByName( "modelo" )[0].value;
    const inputColor  = document.getElementsByName( "color" )[0].value;
    const inputAnio   = document.getElementsByName( "anio" )[0].value;
    const inputPrecio = document.getElementsByName( "precio" )[0].value;
    if( accion == "guardar") {
    
        let idMax = coches[ 0 ].id;
        for( let i = 1 ; i < coches.length ; i++ ) {
            if( coches[ i ].id > idMax ){
                idMax = coches[ i ].id;
            }
        }

        const newCoche = {
            id: idMax + 1,
            marca: inputMarca,
            modelo: inputModelo,
            color: inputColor,
            anio: inputAnio,
            precio: inputPrecio,
            imagen: ''
        };
        coches.push( newCoche );         
    }

    if( accion == "editar" ) {
        const index = document.getElementById("index").value;
        coches[ index ].marca = inputMarca;
        coches[ index ].modelo = inputModelo;
        coches[ index ].color= inputColor;
        coches[ index ].anio = inputAnio;
        coches[ index ].precio = inputPrecio;        
    }

    document.getElementById( 'form-inputs').reset();
    printCoches();

});


function editCoche( id ) {
    let modal = document.querySelectorAll( '.modal' )[0];

    //prueba
    //console.log( accion );
    
    guardar.innerHTML = "Actualizar";
    accion = "editar";
    modalContainer.style.opacity = 1;
    modalContainer.style.visibility = "visible";
    modal.classList.toggle("modal-close");
    let idC = document.getElementById( "index" );
    const inputMarca  = document.getElementsByName( "marca")[0];
    const inputModelo = document.getElementsByName( "modelo" )[0];
    const inputColor  = document.getElementsByName( "color" )[0];
    const inputAnio   = document.getElementsByName( "anio" )[0];
    const inputPrecio = document.getElementsByName( "precio" )[0];
    const index = coches.findIndex( (coche ) => coche.id === id) ;
    idC.value = index;
    inputMarca.value = coches[index].marca;
    inputModelo.value = coches[index].modelo;
    inputColor.value = coches[ index ].color;
    inputAnio.value = coches[ index ].anio;
    inputPrecio.value = coches[ index ].precio;
}

function deleteCoche(id) {
    
    const index = coches.findIndex( (coche ) => coche.id === id) ;
    coches.splice( index, 1 );
    printCoches();
    alert( `se eliminara el elemento ${id}` );
}
    
