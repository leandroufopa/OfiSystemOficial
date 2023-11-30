# OfiSystem
## Uma breve descrição:

### Seja bem-vindo ao repositório Git do aplicativo mobile OfiSystem, desenvolvido pelo discente Leandro de Oliveira, do curso de Bacharelado em Sistemas de Informação da Universidade Federal do Oeste do Pará (UFOPA), em parceria com o também discente João Victor Nascimento.
### O aplicativo OfiSystem foi esenvolvido para atender as demandas da Oficina Roda Mais, situada em Santarém, estado do Pará. Todavia, ele pode ser adaptado para ser utilizado em outras empresas do ramo. 


## Tecnologias Utilizadas:
- FrontEnd: **Node.js, Expo, React-Native, JavaScript**;
- DataBase: **MySQL Workbench, Heroko, JawsDB MySQL, ExpressJS**;
- BackEnd-API: **JavaScript, Nodemon, Cors, Sequelize**.

## Ferramentas Utilizadas:

- [Node JS - LTS](https://nodejs.org/en/download) para funcionamento do backend e da API.
- [My SQL Community (installer)](https://dev.mysql.com/downloads/installer/) para gerenciar as instalações do ambiente de banco de dados SQL.
- [WampServer](https://sourceforge.net/projects/wampserver/) para gerenciar o banco de dados.
- [VS Code](https://code.visualstudio.com/download) (ou outra IDE) para execução da API e do frontend.

## Passos para execução do projeto:
### 1. Baixando os arquivos necessários
- Projeto do GitHub [aqui](https://github.com/leandroufopa/OfiSystemOficial). Após baixar, importe o projeto no Visual Studio Code;
- Banco de Dados MySql [aqui](https://github.com/leandroufopa/OfiSystemOficial/blob/main/DOCUMENTOS/BaseOfisystem.sql). Após baixar o banco de dados, deve-se importá-lo no PhpMyAdmin;

### 2. Executando BackEnd
- Abra o diretório BackEnd-Api e execute o comando a seguir para instalar todas as dependências:
```
  npm i
```
- Instale o framework Express, conforme comando abaixo:
```
npm install express --save 
```
- Instale o módulo Cors, que controla as requisições ao BD, conforme o comando abaixo:
```
npm install cors --save
```
- Instale o módulo Sequelize, conforme o comando abaixo:
```
npm install sequelize --save 
```
- Instale o componente Nodemon, conforme o comando abaixo:
```
npm install -g nodemon
```
- Ajuste as credenciais de "development" do arquivo [config.js](https://github.com/leandroufopa/Ofisystem-/blob/main/FRONTEND/config.json) de acordo com as credenciais do banco de dados MySql importados no PHPMyAdmin.
#### Nota: O arquivo config.json não ficou na pasta BackEnd-Api pois o VS Cod não permite voltar mais que 3 diretorios.
- Execute o comando abaixo para executar o BackEnd da aplicação:
```
modemon Controller.js
```
- Servidor rodando!

### 3. Executando FrontEnd
- Abra o diretório FrontEnd e esexute o comando a seguir para instalar todas as dependências:
```
  npm i
```
- Depois instale o Expo no projeto com o comando abaixo:
```
npm install -g expo
```
- Quando a instalação finalizar, execute o comando abaixo para utilizar o emulado Expo Go:
```
expo start
```
- Para finalizar, copie o Ip do expo e cole na variável global "urlRoot" do arquivo [config.js](https://github.com/leandroufopa/Ofisystem-/blob/main/FRONTEND/config.json).

## Parabéns, se você chegou até aqui é porque conseguiu executar nosso projeto.
