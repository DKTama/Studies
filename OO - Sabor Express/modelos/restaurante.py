from modelos.avaliacao import Avaliacao

class Restaurante:
    restaurantes = []
    
    def __init__(self, nome, categoria):
        self._nome = nome.title()
        self._categoria = categoria.upper()
        self._ativo = False
        self._avaliacao =  []
        Restaurante.restaurantes.append(self)

    def __str__(self):
        return f'{self._nome} | {self._categoria}'
    
    @classmethod
    def listar_restaurantes(cls):
        print(f'{'Nome do Restaurante'.ljust(20)} | {'Categoria'.ljust(20)} | {'Avaliações'.ljust(10)} | {'Status'}')
        for restaurante in cls.restaurantes:
            print(f'{restaurante._nome.ljust(20)} | {restaurante._categoria.ljust(20)} | {str(restaurante.media_avaliacoes).ljust(10)} | {restaurante.ativo}')
    
    @property
    def ativo(self):
        return '✓' if self._ativo else '✗'
    
    def alternar_estado(self):
        self._ativo = not self._ativo
            
    def receber_avaliacao (self, cliente, nota):
        if 0<nota <=5:
            avaliacao = Avaliacao(cliente, nota)
            self._avaliacao.append(avaliacao)

    @property
    def media_avaliacoes(self):
        if not self._avaliacao:
            return '-'
        else:
            soma_das_notas = sum(avaliacao._nota for avaliacao in self._avaliacao)
            quantidade_de_notas = len(self._avaliacao)
            media = round(soma_das_notas/quantidade_de_notas, 1)
            return media


"""
Exercicios

 restaurante_praca.categoria = 'Italiana'

nome_do_restaurante = restaurante_praca.nome

if restaurante_praca.ativo:
    print('O restaurante está ativo.')
else:
    print('O restaurante está inativo.')

categoria = Restaurante.categoria

restaurante_praca.nome = 'Bistrô'

restaurante_pizza = Restaurante()

restaurante_pizza.nome = 'Pizza Place'
restaurante_pizza.categoria = 'Fast Food'

if restaurante_pizza.categoria == 'Fast Food':
    print('A categoria é Fast Food.')
else:
    print('A categoria não é Fast Food.')

restaurante_pizza.ativo = True

print(f'Nome: {restaurante_praca.nome}, Categoria: {restaurante_praca.categoria}')
"""


