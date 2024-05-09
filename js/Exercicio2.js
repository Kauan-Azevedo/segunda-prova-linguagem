class Livro {
    constructor(titulo, autor, editora, ano) {
        this._titulo = titulo;
        this._autor = autor;
        this._editora = editora;
        this._ano = ano;
    }
 
    setTitulo(titulo) {
        this._titulo = titulo;
    }
 
    getTitulo() {
        return this._titulo;
    }
 
    setAutor(autor) {
        this._autor = autor;
    }
 
    getAutor() {
        return this._autor;
    }
 
    setEditora(editora) {
        this._editora = editora;
    }
 
    getEditora() {
        return this._editora;
    }
 
    setAno(ano) {
        this._ano = ano;
    }
 
    getAno() {
        return this._ano;
    }
 
    toString() {
        return `Livro: ${this._titulo} - Autor: ${this._autor} - Editora: ${this._editora} - Ano: ${this._ano}`;
    }
}

const livro1 = new Livro('JavaTeste: Cypress E2E', 'Douglas do QA', 'O\'Teste Media', 2023);
const livro2 = new Livro('Teste Code', 'Kauan o Dev', 'DaleDeleDeleDoli', 2000);

console.log(`Livro 1 - Título: ${livro1.getTitulo()}`);
console.log(`Livro 1 - Autor: ${livro1.getAutor()}`);
console.log(`Livro 1 - Editora: ${livro1.getEditora()}`);
console.log(`Livro 1 - Ano: ${livro1.getAno()}`);


livro1.setAno(2015);
console.log(`Livro 1 - Novo ano de publicação: ${livro1.getAno()}`);

console.log(`Livro 2 - Título: ${livro2.getTitulo()}`);
console.log(`Livro 2 - Autor: ${livro2.getAutor()}`);
console.log(`Livro 2 - Editora: ${livro2.getEditora()}`);
console.log(`Livro 2 - Ano: ${livro2.getAno()}`);


console.log(livro1.toString());
console.log(livro2.toString());
