#Exercicio 1
pessoa = {'nome':'Bob', 'idade': 30, 'cidade':'São Paulo'}

#Exercicio 2
pessoa['idade'] = 31
#pessoa.update({'idade':31}) // Outro método de update

pessoa['profissão'] = 'Carpinteiro'

del pessoa['cidade']

print (f'{pessoa}\n')

#Exercicio 3
numeros_quadrados = {x: x**2 for x in range(1, 6)}
print(f'{numeros_quadrados}\n')

#Exercicio 4
cep = {'pais':'Brasil', 'estado':'São Paulo', 'cidade': 'São Paulo'}
if 'pais' in cep:
    print ("A chave 'pais' existe no dicionario.\n")
else:
    print ("A chave 'pais' não existe no dicionario.\n")

#Exercicio 4
frase = 'Elden Ring é um jogo eletrônico de RPG de ação em terceira pessoa, desenvolvido pela FromSoftware e publicado pela Bandai Namco Entertainment. O jogo é um projeto colaborativo entre o diretor Hidetaka Miyazaki e o romancista de fantasia George R. R. Martin.'
numero_palavras = {}
palavras = frase.split()
for palavra in palavras:
    numero_palavras[palavra] = numero_palavras.get(palavra, 0)+1
print(f' A contagem de palavras deu {numero_palavras}\n')