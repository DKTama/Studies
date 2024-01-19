class Pessoa:
    def __init__(self, nome, idade, profissao):
        self.nome = nome.title()
        self.idade = idade
        self.profissao = profissao.title()

    def __str__(self):
        return f'{self.nome} | {self.idade} | {self.profissao}'

    def aniversario(self):
        self.idade +=1

    def saudacao(self):
        if self.profissao:
            return f'Olá, meu nome é {self.nome}. Trabalho como {self.profissao}.'
        else:
            return f'Olá, meu nome é {self.nome}.'
        


class ContaBancaria:
    def __init__(self, titular, saldo):
        self._titular = titular.title()
        self._saldo = saldo
        self._ativo = False

    def __str__(self):
        return f'Olá {self._titular}! Seu saldo é de R${self._saldo}.'
    
    def ativar_conta(self):
        self._ativo = True
    
    @property
    def titular(self):
        return self._titular

    @property
    def saldo(self):
        return self._saldo

    @property
    def ativo(self):
        return self._ativo

    
pedro = ContaBancaria('Pedro', 2000)
maria = ContaBancaria('Maria', 5000)

print(pedro)
print(maria)

joao = ContaBancaria('João', 1000)
print(f'A conta do {joao.titular}, antes de ativar a conta: {joao._ativo}')
ContaBancaria.ativar_conta(joao)
print(f'A conta do {joao.titular}, depois de ativar a conta: {joao._ativo}')

priscila = ContaBancaria('Priscila', 10000)
print(f'Titular da conta: {priscila.titular}')


class ClienteBanco:
    def __init__(self, titular, saldo, endereco, cpf, profissao):
        self.titular = titular
        self.saldo = saldo
        self.endereco = endereco
        self.cpf = cpf
        self.profissao = profissao
    
    @classmethod
    def criar_conta(self, titular, saldo_inicial):
        conta = ContaBancaria(titular, saldo_inicial)
        return conta

cbanco1 = ClienteBanco('Charlie', 5000, 'Rua das Lavouras', '736.793.510-03', 'Programador')
cbanco2 = ClienteBanco('Larry', 7000, 'Rua Verizon', '366.253.550-54', 'Carpinteiro')
cbanco3 = ClienteBanco('Charlie', 105000, 'Rua dos Ricos', '742.517.580-05', 'Ator')

cbanco4 = ClienteBanco.criar_conta('Margot', 9000)
print(f'Conta de {cbanco4.titular} criada com sucesso, com saldo inicial de R$ {cbanco4.saldo}.')