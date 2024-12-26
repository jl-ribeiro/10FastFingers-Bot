#language:pt

Funcionalidade: Realiza o teste de digitação

Cenário: Teste no 10fastFingers
    Dado que o usuário acessa o 10FastFingers
    #E concorda com os cookies
    E altera o idioma para "Portuguese"
    E realiza a leitura das palavras
    Então começa a digitar o texto lido
    E espera o teste terminar

Cenário: Teste avançado no 10fastFingers
    Dado que o usuário acessa o 10FastFingers
    #E concorda com os cookies
    E altera o idioma para "Dutch"
    E acessa o modo avançado
    E realiza a leitura das palavras
    Então começa a digitar o texto lido
    E espera o teste terminar