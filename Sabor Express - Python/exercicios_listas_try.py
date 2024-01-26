#Exercicio 1
lista_números = [1,2,3,4,5,6,7,8,9,10]
lista_nomes = ['Amelia','Bianca', 'Carina', 'Dennise']
lista_anos = [1989, 2024]

#Exercicio 2
lista_ms = ['Barbatos', 'RX-78', 'Gouf', 'Wing', 'Freedom']
for mobile_suit in lista_ms:
    print(f'{mobile_suit}')
print()

#Exercicio 3
soma_impares = 0
for i in range(1, 11, 2):
    soma_impares += i
    print(f'{soma_impares}')
print()

#Exercicio 4
for i in range(10,0,-1):
    desc=i
    print(desc)
print()

#Exercicio 5
numero_user = int (input('Digite um número: '))
for i in range(1,11):
    tabuada = i*numero_user
    print(f'{numero_user} * {i} = {tabuada}')
print()

#Exercicio 6
lista_numeros_6 = [3,50,23,-7,13]
soma = 0
try:
    for numero in lista_numeros_6:
        soma += numero
        print (f'Soma dos elementos: {soma}')
except Exception as e:
    print(f"Ocorreu um erro: {e}")
print()

#Exercicio 7
valores = [3,5,9,4,6]
soma_valores = 0
try:
    for n in valores:
        soma_valores += n
    media = soma_valores / len(valores)
    print(f'Média dos valores: {media}')
except ZeroDivisionError:
    print("A lista está vazia, não é possível calcular a média.")
except Exception as e:
    print(f"Ocorreu um erro: {e}")
print()