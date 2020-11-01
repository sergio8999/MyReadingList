/* Clases */

class Booklist{
    constructor(){
        this.arrayBooks = [];
        this.currentBookIndex = 0;
        this.lastbook = null;
    }

    // Propiedades
    get readBooks(){
        return this.arrayBooks.filter((book) => book.read).length;
    }
    get notReadBooks(){
        return this.arrayBooks.filter((book) => !book.read).length;
    }
    get nextBook(){
        if(this.currentBookIndex < this.arrayBooks.length-1)
            return this.arrayBooks[this.currentBookIndex+1];
        return null;
    }
    get currentBook(){
        if(this.arrayBooks.length != 0)
            return this.arrayBooks[this.currentBookIndex];
        return null;
    }
    
    // Métodos 

    add(book) {
        return this.arrayBooks.push(book);
    }

    finishCurrent(){
        if(this.currentBookIndex < this.arrayBooks.length){
            this.arrayBooks[this.currentBookIndex].read = true;
            this.arrayBooks[this.currentBookIndex].readDate = new Date(Date.now());
            this.lastbook = this.arrayBooks[this.currentBookIndex];
            this.currentBookIndex++;
        }else
            console.log("No esta leyendo ningún libro");
    }
}

class Book{
    constructor(title,genre,author){
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = false;
        this.readDate = "";
    }
}

// Main

window.addEventListener('load',main);
const listaLibros = new Booklist();

function main(){
    let boton = document.querySelector('button');
    dibujarTabla(listaLibros);
    boton.addEventListener('click',añadirLibro);
    let tabla = document.getElementById('tabla');
    tabla.addEventListener('click',finalizarLibro);
}

function añadirLibro(){
    let titulo = document.getElementById('tituloLibro').value;
    let genero = document.getElementById('generoLibro').value;
    let autor = document.getElementById('autorLibro').value;
    listaLibros.add(new Book(titulo,genero,autor));
    borrarDatosInpunt();
    dibujarTabla(listaLibros);
}

function borrarDatosInpunt(){
    document.getElementById('tituloLibro').value = "";
    document.getElementById('generoLibro').value = "";
    document.getElementById('autorLibro').value = "";
}

function dibujarTabla(lista){
    options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    tabla = "";
    tabla += "<table>";
    tabla += "<th>Titulo</th><th>Genero</th><th>Autor</th><th>Leido</th><th>Fecha</th>";
    lista.arrayBooks.forEach(libro => {
        tabla += "<tr>";
        tabla += "<td>"+ libro.title+"</td>";
        tabla += "<td>"+ libro.genre+"</td>";
        tabla += "<td>"+ libro.author+"</td>";
        if(libro.read){
            tabla += "<td>Si</td>";
            tabla += "<td>"+ libro.readDate.toLocaleDateString('es-ES', options)+ "</td>";
        }else{
        tabla += "<td>No</td>";
        tabla += "<td> </td>";
        }
        tabla += "</tr>";
    });
    tabla += "</table>";
    document.getElementById("tabla").innerHTML = tabla;
}

function finalizarLibro(){
    listaLibros.finishCurrent();
    dibujarTabla(listaLibros);
}