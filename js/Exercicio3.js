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