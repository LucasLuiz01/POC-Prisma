<h1 align="center"> Poc01-OrganizadorFilmes </h1>

=========================================================================
FUNCIONALIDADES
Adiocionar novas plataformas e gêneros de filme
Buscar a quantidade de filmes em cada plataforma
Adicionar filmes
Adicionar um status para um filme em questao, podendo adicionar nota, resumo e se ele já foi assistido ou nao.
Fazer um update para o status do filme
Deleter um status para o filme 
=========================================================================
comando para iniciar o servidor 
npx nodemon src/app.ts
===========================================================================
<h1 align="center"> Gênero </h1>
Para adicionar um novo gênero de filme 
post "/genre"
mandar no body: {"name" : "Aventura"}
=========================================================================
<h1 align="center"> Plataforma </h1>
Para adicionar uma nova plataforma (Netflix, Prime Video, etc...)
post "/platform"
mandar no body: {"name" : "Netflix"}

Para buscar a quantidade de filmes em cada plataforma
get"/moviesPlatform"
Nessa Query tem a rota agregadora que é da contagem.
========================================================================
<h1 align="center"> FILMES / Status </h1>
    OS CAMPOS QUE TEM "?" são opcionais no body para enviar tirar o "?"
Para adicionar um filme 
post"/movie"
mandar no body:{"name" : "Avatar", "idGenre": number, "idPlatform":number}

Para adicionar o Status do filme do usuario
post"/userStatus"
mandar no body:{"username": "string";"watched": boolean; "idMovie": number; "note?": "string"; "summary?": "string";}

Para atualizar o status do filme do user
patch"/movie"
mandar no body{ "watched": boolean, "note?": "string", "summary?": "string", "id": number;}

Para deletar um user status do filme
delete"/movie/:id"
mandar um params  com o valor do id referente ao user status que ira apagar
=========================================================================