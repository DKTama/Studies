numero_user = int (input('Digite um número: '))

if (numero_user%2) == 0:
    print(f'1. O número {numero_user} é par\n')
else:
    print(f'1. O número {numero_user} é ímpar\n')


idade_user = int (input('Digite sua idade: '))

if idade_user <=12 and idade_user>=0:
    print(f'2. A idade {idade_user} mostra que você é uma criança.\n')
elif idade_user >= 13 and idade_user <= 18:
    print(f'2. A idade {idade_user} mostra que você é um adolescente.\n')
else:
    print(f'2. A idade {idade_user} mostra que você é um adulto.\n')


login_user = input ('Digite seu login: ')
pass_user = input('Digite sua senha: ')
login = 'DiogoT'
password = '123Teste098'

if login_user==login and pass_user==password:
    print(f'3. Bem-vindo {login_user}, acesso realizado com sucesso\n')
else:
    print(f'3. Dados de login {login_user} e senha {pass_user} não correspondem\n')


x = int(input('Digite a coordenada X: '))
y = int(input('Digite a coordenada Y: '))

if x>0 and y > 0:
    print(f'As coordenadas {x} e {y}, indicam que o ponto se encontra no Primeiro Quadrante.\n')
elif x<0 and y>0:
    print(f'As coordenadas {x} e {y}, indicam que o ponto se encontra no Segundo Quadrante.\n')
elif x<0 and y<0:
    print(f'As coordenadas {x} e {y}, indicam que o ponto se encontra no Terceiro Quadrante.\n')
elif x>0 and y<0:
    print(f'As coordenadas {x} e {y}, indicam que o ponto se encontra no Quarto Quadrante.\n')
else:
    print(f'As coordenadas {x} e {y}, indicam que o ponto se encontra no Eixo de origem.\n')
