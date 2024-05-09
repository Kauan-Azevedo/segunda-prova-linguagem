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
