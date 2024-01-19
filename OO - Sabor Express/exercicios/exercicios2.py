#1
class Carro:
    def __init__(self, modelo, cor, ano):
        self.modelo = modelo
        self.cor = cor
        self.ano= ano

ae86 = Carro ('Toyota AE86', 'Panda', 1986)

print (vars(ae86))

#2, 3 e 4
class Restaurante:
    restaurantes = []

    def __init__(self, nome, categoria, chef, endereco, ativo=False):
        self.nome = nome
        self.categoria = categoria
        self.ativo = ativo
        self.chef = chef
        self.endereco = endereco
    
    def __str__(self):
        return f'{self.nome} | {self.categoria}'



terraco = Restaurante(nome='Terraço Itália', categoria='Italiana', chef='Toscano Pasquale Mancini', endereco='Av Ipiranga 344')

print (terraco)

#5
class Cliente:
    clientes = []
    def __init__(self, nome, etnia, altura, peso):
        self.nome = nome
        self.etnia = etnia
        self.altura = altura
        self.peso = peso
        Cliente.clientes.append(self)

    def listar_clientes():
        print(f'{'Nome'.ljust(15)} | {'Etnia'.ljust(15)} | Altura | Peso')
        for pessoa in Cliente.clientes:
            print (f'{pessoa.nome.ljust(15)} | {pessoa.etnia.ljust(15)} | {pessoa.altura}cm | {pessoa.peso}kg')

pedro = Cliente('Pedro', 'Asiática', 170, 70)
clara = Cliente('Clara', 'Hispanica', 150, 50)
miguel = Cliente('Miguel', 'Européia', 190, 120)
maria = Cliente('Maria', 'Africana', 175, 60)

Cliente.listar_clientes()