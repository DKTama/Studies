<<<<<<< HEAD
from modelos.restaurante import Restaurante

restaurante_praca = Restaurante('praça', 'Gourmet')
""" restaurante_mexicano = Restaurante('Taco Loco', 'Mexicana')
restaurante_pizza = Restaurante('Pizza Ninja', 'Italiana')

restaurante_mexicano.alternar_estado()
 """


restaurante_praca.receber_avaliacao('Gui', 10)
restaurante_praca.receber_avaliacao('Alex', 5)
restaurante_praca.receber_avaliacao('Igor', 7)

def main():
    Restaurante.listar_restaurantes()

if __name__ == '__main__':
=======
from modelos.restaurante import Restaurante

restaurante_praca = Restaurante('praça', 'Gourmet')
""" restaurante_mexicano = Restaurante('Taco Loco', 'Mexicana')
restaurante_pizza = Restaurante('Pizza Ninja', 'Italiana')

restaurante_mexicano.alternar_estado()
 """


restaurante_praca.receber_avaliacao('Gui', 10)
restaurante_praca.receber_avaliacao('Alex', 5)
restaurante_praca.receber_avaliacao('Igor', 7)

def main():
    Restaurante.listar_restaurantes()

if __name__ == '__main__':
>>>>>>> 9fddb904b4c31fa9be70aa732dab05d8b2f0fc87
    main()