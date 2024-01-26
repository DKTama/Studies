<<<<<<< HEAD
class Musica:
    musicas = []

    def __init__(self, nome, artista, duracao):
        self.nome = nome
        self.artista = artista
        self.duracao = duracao
        Musica.musicas.append(self)

    
    def __str__(self):
        return f'{self.nome.ljust} | {self.artista.ljust} | {self.duracao}s'
    
    def listar_musicas():
        print(f'{'Nome da Música'.ljust(20)} | {'Artista'.ljust(20)} | Duração')
        for n in Musica.musicas:
            print (f'{n.nome.ljust(20)} | {n.artista.ljust(20)} | {n.duracao}s')



musica_show = Musica('Show', 'Ado', 190)
musica_realize = Musica('Realize', 'Konomi Suzuki', 256)
musica_idol = Musica('Idol', 'Yoasobi', 226)


Musica.listar_musicas()
=======
class Musica:
    musicas = []

    def __init__(self, nome, artista, duracao):
        self.nome = nome
        self.artista = artista
        self.duracao = duracao
        Musica.musicas.append(self)

    
    def __str__(self):
        return f'{self.nome.ljust} | {self.artista.ljust} | {self.duracao}s'
    
    def listar_musicas():
        print(f'{'Nome da Música'.ljust(20)} | {'Artista'.ljust(20)} | Duração')
        for n in Musica.musicas:
            print (f'{n.nome.ljust(20)} | {n.artista.ljust(20)} | {n.duracao}s')



musica_show = Musica('Show', 'Ado', 190)
musica_realize = Musica('Realize', 'Konomi Suzuki', 256)
musica_idol = Musica('Idol', 'Yoasobi', 226)


Musica.listar_musicas()
>>>>>>> 9fddb904b4c31fa9be70aa732dab05d8b2f0fc87
