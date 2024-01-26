<<<<<<< HEAD
from exercicios4 import Livro

livro3 = Livro('1984', 'George Orwell', 1949)
print(f'Disponibilidade do livro {livro3._titulo}: {livro3._disponivel}')
livro3.emprestar()
print(f'Disponibilidade do livro {livro3._titulo}: {livro3._disponivel}')

ano_especifico = 2024
livros_disponiveis_ano = Livro.verificar_disponibilidade(ano_especifico)
=======
from exercicios4 import Livro

livro3 = Livro('1984', 'George Orwell', 1949)
print(f'Disponibilidade do livro {livro3._titulo}: {livro3._disponivel}')
livro3.emprestar()
print(f'Disponibilidade do livro {livro3._titulo}: {livro3._disponivel}')

ano_especifico = 2024
livros_disponiveis_ano = Livro.verificar_disponibilidade(ano_especifico)
>>>>>>> 9fddb904b4c31fa9be70aa732dab05d8b2f0fc87
print(f'Os livros disponíveis publicados no ano de {ano_especifico} são: {livros_disponiveis_ano}')