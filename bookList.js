import{Book,Booklist} from "./clasesBook.js";

// Main
const listaLibros = new Booklist();
var codLibro = 0;
window.addEventListener('load',main);


function main(){
    let boton = document.querySelector('button');
    boton.addEventListener('click',añadirLibro);
    //let tabla = document.getElementById("tabla");
    
}

function añadirLibro(){
    let titulo = document.getElementById('tituloLibro').value;
    let genero = document.getElementById('generoLibro').value;
    let autor = document.getElementById('autorLibro').value;
    let libro = new Book(titulo,genero,autor);
    libro.codBook = codLibro;
    listaLibros.add(libro);
    borrarDatosInpunt();
    añadirLibroTabla(libro);
    codLibro++;
    //dibujarTabla(listaLibros);
}

/**
 * 
 * @param {Book} libro 
 */
function añadirLibroTabla(libro){
    let trLibro = document.createElement("tr");
    trLibro.id = libro.codBook;

    let tdTitulo = document.createElement("td");
    tdTitulo.textContent = libro.title;
    let tdAuthor = document.createElement("td");
    tdAuthor.textContent = libro.author;
    let tdGenre = document.createElement("td");
    tdGenre.textContent = libro.genre;
    let tdLeido = document.createElement("td");
    tdLeido.textContent = libro.read;
    let tdFecha = document.createElement("td");
    tdFecha.textContent = libro.readDate;
    let tdAcciones = document.createElement("td");
    let iconoBorrar = document.createElement("span");
    iconoBorrar.classList.add("material-icons");
    iconoBorrar.textContent = "delete";
    let libroLeido = document.createElement("span");
    libroLeido.classList.add("material-icons");
    libroLeido.textContent = "book";
    

    trLibro.appendChild(tdTitulo);
    trLibro.appendChild(tdAuthor);
    trLibro.appendChild(tdGenre);
    trLibro.appendChild(tdLeido);
    trLibro.appendChild(tdFecha);
    trLibro.appendChild(tdAcciones);
    tdAcciones.append(iconoBorrar);
    tdAcciones.append(libroLeido);
    iconoBorrar.addEventListener("click", borrarFila);
    libroLeido.addEventListener('click',finalizarLibro);

    document.getElementById("tabla").appendChild(trLibro);

}

/**
 * 
 * @param {MouseEvent} e 
 */
function borrarFila(e){
    let fila = e.target.parentNode.parentNode.id;
    listaLibros.removeBooks(fila);
    e.target.parentNode.parentNode.remove();
}

function borrarDatosInpunt(){
    document.getElementById('tituloLibro').value = "";
    document.getElementById('generoLibro').value = "";
    document.getElementById('autorLibro').value = "";
}

/**
 * 
 * @param {MouseEvent} e 
 */
function finalizarLibro(e){
    let fila = e.target.parentNode.parentNode.id;
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    e.target.parentNode.parentNode.childNodes[3].textContent="Si";
    e.target.parentNode.parentNode.childNodes[4].textContent=new Date().toLocaleDateString('es-ES', options);
    listaLibros.finishCurrent(fila);
}