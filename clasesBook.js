/* Clases */

class Booklist{
    constructor(){
        this.arrayBooks = [];
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
        for(let i=this.currentBookIndex+1;i<this.arrayBooks.length;i++){
            if(this.arrayBooks[i].read == "")
                return this.arrayBooks[i];
        }
        return null;
    }
    get currentBook(){
        if(this.arrayBooks.length != 0)
        for( let book of this.arrayBooks)
            if(book.read == "")
                return book;
        return null;
    }
    get currentBookIndex(){
        if(this.arrayBooks.length != 0)
            for(let i=0;i<this.arrayBooks.length;i++){
                if(this.arrayBooks[i].read == "")
                    return i;
            }
        return null;
    }
    // Métodos 

    add(book) {
        return this.arrayBooks.push(book);
    }

    removeBooks(index){
        delete this.arrayBooks[index];
    }

    finishCurrent(index){
        if(this.currentBookIndex < this.arrayBooks.length){
            this.arrayBooks[index].read = true;
            this.arrayBooks[index].readDate = new Date(Date.now());
            this.lastbook = this.arrayBooks[index];
        }else
            console.log("No esta leyendo ningún libro");
    }
}

class Book{
    constructor(title,genre,author){
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = "";
        this.readDate = "";
        this.codBook = "";
    }
}

export{Book,Booklist};