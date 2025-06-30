# Xagutflix

**Xagutflix** é uma aplicação front-end construída com **React.js + Vite**, que simula a interface da Netflix. O projeto oferece uma experiência fluida, com navegação entre páginas, exibição de vídeos em carrossel e sistema de favoritos com persistência local.

---

## Tecnologias Utilizadas

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![CSS Modules](https://img.shields.io/badge/CSS%20Modules-264de4?style=for-the-badge&logo=css3&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![React Router](https://img.shields.io/badge/React%20Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![JSON](https://img.shields.io/badge/JSON-000?style=for-the-badge&logo=json&logoColor=white)

---

## Funcionalidades

- Página **Home** com exibição de vídeos em **cards** organizados em **carrossel**
- Página **Favoritos** com os vídeos marcados pelo usuário
- Página **Watch**, onde o usuário pode assistir a um vídeo selecionado
- Página **Search**, com busca dinâmica de vídeos por categoria e nome
- Página **NotFound** para rotas inválidas
- Sistema de **adicionar/remover favoritos** com persistência em localStorage
- Navegação fluida com **React Router DOM**

---

## Estrutura do Projeto

```bash
xagutflix/
├── public/                       # Imagens e Favicon
├── src/
│   ├── components/               # Componentes reutilizáveis e seus CSS modules (Carrossel, Cards, Header, etc.)
│   ├── context/                  # Contexto (Favoritos)
│   ├── json/                     # Contexto (Favoritos)
│   │    ├── categoires.json      # Armazenamneto das categorias
│   │    └── db.json              # Armazenamento dos videos
│   ├── pages/                    # Páginas (Home, Watch, Search, Favoritos, NotFound)
│   ├── App.jsx                   # Componente principal
│   ├── Aroutes.jsx               # Componente de rotas
│   ├── Global.css                # CSS global
│   └── main.jsx                  # Ponto de entrada do React
├── package.json
└── vite.config.js
```
## Executando o projeto
```bash
# Clone o repositório
git clone https://github.com/ThiagoSilsa/xagutflix.git
cd xagutflix

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev

# Acesse no navegador: http://localhost:5173/
```
## ScreenShots
![image](https://github.com/user-attachments/assets/760b1231-1113-46f1-8d32-be517685af13)
![image](https://github.com/user-attachments/assets/5d134daf-faf0-4fca-b233-18f601e5cc78)
![image](https://github.com/user-attachments/assets/9bfebf79-d0c6-4698-8b99-2fac40c31513)


Acesse no navegador: http://localhost:5173/
