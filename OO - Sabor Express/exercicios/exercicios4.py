class Livro:
    def __init__(self, titulo, autor, ano_publicacao):
        self._titulo = titulo
        self._autor = autor
        self._ano_publicacao = ano_publicacao
        self._disponivel = True
    
    def __str__(self):
        return f'O livro {self._titulo}, escrito pelo autor {self._autor} do ano {self._ano_publicacao}.'
    
    def emprestar(self):
        self._disponivel = False

    @staticmethod
    def verificar_disponibilidade(ano):
        livros_disponiveis = [livro for livro in Livro.livros if livro._ano_publicacao == ano and livro.disponivel]
        return livros_disponiveis




livro1 = Livro('Senhor dos Anéis', 'J. R. R. Tolkien', 1954)
livro2 = Livro('Dom Quixote', 'Miguel de Cervantes', 1605)

print(livro1)
print(livro2)

livro1.emprestar()
print(f'O livro {livro1._titulo} se encontra com disponibilidade? {livro1._disponivel}')

Livro.livros = [livro1, livro2]
