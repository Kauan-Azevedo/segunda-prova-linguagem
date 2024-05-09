// Crie as duas classes da imagem abaixo, Pessoa e Endereço. A classe pessoa possui os atributos nome e cpf, a classe endereço possui os atributos rua e número. Em seguida crie 1 objetos pessoas e 2 objetos endereços.

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

// Crie a classe livro seguindo o diagrama abaixo e adicione 2 objetos dessa classe.

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

const livro1 = new Livro('JavaScript: The Good Parts', 'Douglas Crockford', 'O\'Reilly Media', 2008);
const livro2 = new Livro('Clean Code', 'Robert C. Martin', 'Prentice Hall', 2008);

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

// Crie a superclasse Funcionário com os atributos nome, email, cpf. Crie as subclasses Engenheiro, Diretor, Secretário e Gerente. A classe Funcionário deve possuir como parâmetros no construtor: nome, email, cpf. As subclasses devem conter um atributo de sua escolha que tenha relação ao cenário de uma empresa de construção civil. Cada subclasse deve conter um atributo diferente da classe “irmã”.

// Crie 1 objetos para cada subclasse.

class Funcionario {
    #nome;
    #email;
    #cpf;

    constructor(nome, email, cpf) {
        this.#nome = nome;
        this.#email = email;
        this.#cpf = cpf;
    }

    get nome() { return this.#nome }
    get email() { return this.#email }
    get cpf() { return this.#cpf }
    set nome(novoNome) { this.#nome = novoNome }
    set email(novoEmail) { this.#email = novoEmail }
    set cpf(novoCpf) { this.#cpf = novoCpf }
}

class Engenheiro extends Funcionario {
    #remuneracao;
    
    constructor(nome, email, cpf, remuneracao) {
        super(nome, email, cpf);
        this.#remuneracao = remuneracao;
    }

    get remuneracao() { return this.#remuneracao }
    set remuneracao(novaRemuneracao) { this.#remuneracao = novaRemuneracao }

    toString() {
        return `Nome: ${this.nome} Email: ${this.email} Cpf: ${this.cpf} remuneracao: ${this.remuneracao}` 
    }

    static dummyEngenheiro() {
        const eng = new Engenheiro("Roberto", "rbto.agro@gmail.com", "555.723.132-58", "R$ 2.500,00");

        console.log(eng.toString());
    }
}

class Diretor extends Funcionario {
    #cargo;
    
    constructor(nome, email, cpf, cargo) {
        super(nome, email, cpf);
        this.#cargo = cargo;
    }

    get cargo() { return this.#cargo }
    set cargo(novoCargo) { this.#cargo = novoCargo }

    toString() {
        return `Nome: ${this.nome} Email: ${this.email} Cpf: ${this.cpf} cargo: ${this.cargo}` 
    }

    static dummyDiretor() {
        const dir = new Diretor("Claudio", "claudio.dit@gmail.com", "345.723.132-50", "Vendas");

        console.log(dir.toString());
    }
}

class Secretario extends Funcionario {
    #contratacoes;
    #demissoes;
    
    constructor(nome, email, cpf, demissoes, contratacoes) {
        super(nome, email, cpf);
        this.#contratacoes = contratacoes;
        this.#demissoes = demissoes;
    }

    get contratacoes() { return this.#contratacoes }
    set contratacoes(novaContratacao) { this.#contratacoes = novaContratacao }

    get demissoes() { return this.#demissoes }
    set demissoes(novaDemissao) { this.#demissoes = novaDemissao }

    toString() {
        return `Nome: ${this.nome} Email: ${this.email} Cpf: ${this.cpf} numero de contratações: ${this.contratacoes} Numero de demissões: ${this.demissoes}` 
    }

    static dummySecretario() {
        const sec = new Secretario("Renato", "rentato.sec@gmail.com", "123.753.732-36", 1000, 500);

        console.log(sec.toString());
    }
}

class Gerente extends Funcionario {
    #metas;
    
    constructor(nome, email, cpf, metas) {
        super(nome, email, cpf);
        this.#metas = metas;
    }

    get metas() { return this.#metas }
    set metas(novaMeta) { this.#metas = novaMeta }

    toString() {
        return `Nome: ${this.nome} Email: ${this.email} Cpf: ${this.cpf} metas: ${this.metas}` 
    }

    static dummyGerente() {
        const gen = new Gerente("Ana", "ana.gen@gmail.com", "092.573.938-29", ["supervisionam a fase de construção", "consultar um cliente", "refinar os planos e controlar os custos"]);

        console.log(gen.toString());
    }
}

Engenheiro.dummyEngenheiro()
Diretor.dummyDiretor()
Secretario.dummySecretario()
Gerente.dummyGerente()


// Crie as classes com base no diagrama abaixo. A superclasse pessoa possui o atributo nome. A subclasse pessoa física possui os campos cpf e rg, e a subclasse pessoa jurídica possui o campo cnpj e ie (inscrição estadual). A superclasse possui o nome como atributo obrigatório, sendo inserido no construtor. Todas as classes devem ter os métodos getters e setters e o toString.

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    getNome() {
        return this.nome;
    }

    setNome(nome) {
        this.nome = nome;
    }

    toString() {
        return `Pessoa { nome: ${this.nome} }`;
    }
}
class PessoaFisica extends Pessoa {
    constructor(nome) {
        super(nome);
        this.cpf = '';
        this.rg = '';
    }

    getCpf() {
        return this.cpf;
    }

    setCpf(cpf) {
        this.cpf = cpf;
    }

    getRg() {
        return this.rg;
    }

    setRg(rg) {
        this.rg = rg;
    }

    toString() {
        return `PessoaFisica { nome: ${this.getNome()}, cpf: ${this.cpf}, rg: ${this.rg} }`;
    }
}

class PessoaJuridica extends Pessoa {
    constructor(nome) {
        super(nome);
        this.cnpj = '';
        this.ie = '';
    }

    getCnpj() {
        return this.cnpj;
    }

    setCnpj(cnpj) {
        this.cnpj = cnpj;
    }

    getIe() {
        return this.ie;
    }

    setIe(ie) {
        this.ie = ie;
    }

    toString() {
        return `PessoaJuridica { nome: ${this.getNome()}, cnpj: ${this.cnpj}, ie: ${this.ie} }`;
    }
}

let pessoa1 = new PessoaFisica('João do QA');
pessoa1.setCpf('123.123.123-00');
pessoa1.setRg('987654321');
console.log(pessoa1.toString());

let pessoa2 = new PessoaJuridica('Empresa Teste');
pessoa2.setCnpj('00.123.111/0001-99');
pessoa2.setIe('123456789');
console.log(pessoa2.toString());
