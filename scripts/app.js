// variables
let pcSelection;
let pcSelected;
let gamesSelection;
let gamesSelected;
// constantes
const userName = prompt('Ingrese su nombre:');
const userAge = parseInt(prompt('Ingrese su edad: '));
const juegosGamaBaja = ['Counter Strike', 'Valorant', 'Fortnite'];
const juegosGamaMedia = ['GTA V', 'Hitman', 'Resident Evil'];
const juegosGamaAlta = ['Battlefield', 'Forza', 'War Zone'];
// objetos
const pcBaja = {
    nombre: 'Light Core v2',
    precio: 2000
}
const pcMedia = {
    nombre: 'Flusk Speed X',
    precio: 5000
}
const pcAlta = {
    nombre: 'Ultra Racer Z1',
    precio: 9000
}
// funciones
function bienvenida() {
    alert(`Bienvenido(a) a ProPC ${userName} a continuacion podra empezar a realizar compras ->`);
}

function buyPc(pc) {
    pcSelection = parseInt(prompt(`Por favor seleccione la PC que desea comprar (1)${pcBaja.nombre} $${pcBaja.precio}, (2)${pcMedia.nombre} $ ${pcMedia.precio}, (3)${pcAlta.nombre} $ ${pcAlta.precio}`));
    if (pcSelection == 1) {
        alert(`Ha seleccionado la PC: ${pcBaja.nombre} y se ha agregado al carrito`);
        pcSelected = pcBaja;
    } else if (pcSelection == 2) {
        alert(`Ha seleccionado la PC: ${pcMedia.nombre} y se ha agregado al carrito`);
        pcSelected = pcMedia;
    } else if (pcSelection == 3) {
        alert(`Ha seleccionado la PC: ${pcAlta.nombre} y se ha agregado al carrito`);
        pcSelected = pcAlta;
    } else {
        alert('Por favor seleccione una pc de nuestra lista para continuar!');
        buyPc();
    }
}

function buyGames() {
    gamesSelection = parseInt(prompt(`Ahora seleccione los juegos que desea comprar: (1) ${juegosGamaBaja.join('  -  ')}, (2) ${juegosGamaMedia.join('  -  ')}, (3) ${juegosGamaAlta.join('  -  ')}, si no desea comprar juegos seleccione (4)`));
    if (gamesSelection == 1) {
        gamesSelected = juegosGamaBaja
        alert(`Se han agregado correctamente los siguientes juegos al carito: ${gamesSelected}`);
        // metodo push en array juegos
        gamesSelected.push(300);
    } else if (gamesSelection == 2) {
        gamesSelected = juegosGamaMedia
        alert(`Se han agregado correctamente los siguientes juegos al carito: ${gamesSelected}`);
        // metodo push en array juegos
        gamesSelected.push(600);
    } else if (gamesSelection == 3) {
        gamesSelected = juegosGamaAlta
        alert(`Se han agregado correctamente los siguientes juegos al carito: ${gamesSelected}`);
        // metodo push en array juegos
        gamesSelected.push(950);
    } else if (gamesSelection == 4) {
        gamesSelected = [];
        alert('No se han agregado juegos al carrito de compras');
    } else {
        alert('No se han agregado juegos a su carrito');
    }
}

// funcion con un parametro de precio total 
function totalPrice(total) {
    total = (pcSelected.precio + parseInt(gamesSelected.slice(3, 4)));
    if (gamesSelection == 1 || gamesSelection == 2 || gamesSelection == 3) {
        // metodo slice para tomar el valor numerico del array juegos
        alert(`El total de su compra sera de: $${total} ||por la PC: ${pcSelected.nombre} = $${pcSelected.precio} || y los juegos: ${gamesSelected.slice(0,3)} = $${gamesSelected.slice(3,4)} `);
    } else {
        alert(`EL total de su compra sera de: ${pcSelected.precio} || PC: ${pcSelected.nombre} = $${pcSelected.precio}`);
    }
}
// inicio simulador
if (userAge > 18) {
    bienvenida();
    buyPc();
    buyGames();
    totalPrice();
    alert('Gracias por comprar en ProPC, vuelva pronto!');
} else {
    alert(`${userName} usted no es mayor de edad y no podra realizar compras!`);
}