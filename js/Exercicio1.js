class Pessoa {
    #nome;
    #cpf;

    constructor(nome, cpf) {
        this.#nome = nome;
        this.#cpf = cpf;
    }

    get nome() { return this.#nome }
    get cpf() { return this.#cpf }
    set nome(novoNome) { this.#nome = novoNome }
    set cpf(novoCpf) { this.#cpf = novoCpf }

    toString() {
        return `Nome: ${this.nome} Cpf: ${this.cpf}`
    }

    static dummyPessoa() {
        const pessoa = new Pessoa("Joao", "123.456.789-10");
        console.log(pessoa.toString())
    }
}

class Endereco {
    #rua;
    #numero;

    constructor(rua, numero) {
        this.#rua = rua;
        this.#numero = numero;
    }

    get rua() { return this.#rua }
    get numero() { return this.#numero }
    set rua(novaRua) { this.#rua = novaRua }
    set numero(novoNumero) { this.#numero = novoNumero }

    toString() {
        return `Rua: ${this.rua} Numero: ${this.numero}` 
    }

    static dummyEndereco() {
        let enderecoUm = new Endereco("Rua do bobo", 0);
        let enderecoDois = new Endereco("Rua Felipe Schmidt", 575);

        console.log(enderecoUm.toString())
        console.log(enderecoDois.toString())
    }
}

Pessoa.dummyPessoa();
Endereco.dummyEndereco();