# Projeto de API de Login

## Descrição
Este projeto é uma iterface com um fluxo de criação de usuario login e logout.

## Índice
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Uso](#uso)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Rotas](#rotas)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Instalação
1. Clone o repositório front-end:
    ```sh
    git clone https://github.com/vinicius3g/insights-iot.git
    ```
2. Clone o repositório back-end:
    ```sh
    git clone https://github.com/vinicius3g/login-service.git
    ```
3. Navegue até o diretório do projeto:
    ```sh
    cd seu-repositorio
    ```
4. Instale as dependências:
    ```sh
    npm install
    ```

## Configuração
1. Crie um arquivo `.env` na raiz do projeto e configure as seguintes variáveis de ambiente:
    ```env
    PORT=5000
    PGHOST=seu_host
    PGDATABASE=seu_banco_de_dados
    PGUSER=seu_usuario
    PGPASSWORD=sua_senha
    JWT_SECRET=sua_chave_secreta
    ```

## Uso
1. Inicie o ambiente:
    ```sh
    npm run start
    ```
2. Inicie o servidor no back-end:
    ```sh
    npm run dev
    ```

## Estrutura do Projeto
src/ \
├── components\
│ └── Footer\
│ └── Header\
│ └── Loader\
│ └── PrivateRouter\
│ └── routes\
│ └── App.modules.css\
│ └── App.tsx\
├── context/\
│ └── AuthContext.tsx\
├── hooks/\
│ └── userRequireAuth.ts\
├── pages/\
│ └── CreateUser\
│ └── Dashboard\
│ └── Login\
├── index.css\
└── index.tsx

## Tecnologias Utilizadas
- React.js
- TypeScript
- Axios
- react-router

## Contribuição
1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commite suas mudanças (`git commit -m 'Adiciona minha feature'`)
4. Faça um push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## Licença
Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.