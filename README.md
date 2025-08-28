# 🚀 PTec - Inovação em Soluções e Educação

<div align="center">

**Transformando vidas por meio da inovação digital**

[![React](https://img.shields.io/badge/React-18.1.0-blue.svg)](https://reactjs.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.1.3-purple.svg)](https://getbootstrap.com/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-green.svg)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

</div>

---

## 📋 Sobre o Projeto

A **PTec** é uma empresa líder em soluções tecnológicas, dedicada a transformar ideias em realidade através da inovação e excelência técnica. Este repositório contém o código-fonte do site institucional da empresa, desenvolvido com tecnologias modernas e foco na experiência do usuário.

### 🎯 Objetivo

Criar experiências imersivas e conectadas que utilizam tecnologias de ponta, como inteligência artificial, para oferecer soluções personalizadas e de impacto no setor educacional e empresarial.

## ✨ Características

- 🎨 **Design Moderno**: Interface responsiva e atrativa
- ⚡ **Performance Otimizada**: Carregamento rápido e suave
- 📱 **100% Responsivo**: Compatível com todos os dispositivos
- 🌟 **Animações Fluidas**: Experiência visual envolvente
- 📧 **Sistema de Contato**: Integração com NodeMailer
- 🔄 **Carousel Interativo**: Apresentação dinâmica de projetos

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React** 18.1.0 - Biblioteca JavaScript para interfaces
- **React Bootstrap** 2.4.0 - Componentes UI responsivos
- **Animate.css** 4.1.1 - Animações CSS
- **React Router** 6.3.0 - Navegação SPA
- **React Mailchimp Subscribe** 2.1.3 - Integração newsletter

### Backend
- **Node.js** com Express 4.18.1 - Servidor web
- **NodeMailer** 6.7.5 - Envio de emails
- **CORS** 2.8.5 - Configuração de Cross-Origin

### Ferramentas de Desenvolvimento
- **Create React App** 5.0.1 - Setup e build
- **Bootstrap Icons** - Ícones vetoriais
- **React Testing Library** - Testes automatizados

## 🚀 Instalação e Execução

### Pré-requisitos
```bash
node -v  # v14.0.0 ou superior
npm -v   # v6.0.0 ou superior
```

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/ptec-site.git
cd ptec-site
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure variáveis de ambiente
Crie um arquivo `.env` na raiz do projeto:
```env
EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=sua-senha-de-app
```

### 4. Execute o projeto

#### Desenvolvimento (Frontend)
```bash
npm start
```
Acesse: http://localhost:3000

#### Servidor de Email (Backend)
```bash
node server.js
```
Servidor rodando na porta: 5000

## 📁 Estrutura do Projeto

```
ptec-site/
├── public/
│   ├── favicon.svg          # Favicon personalizado
│   ├── index.html          # Template HTML
│   └── manifest.json       # PWA manifest
├── src/
│   ├── assets/
│   │   ├── img/            # Imagens e ícones
│   │   └── font/           # Fontes customizadas
│   ├── components/
│   │   ├── Banner.js       # Seção hero
│   │   ├── Contact.js      # Formulário de contato
│   │   ├── Footer.js       # Rodapé
│   │   ├── NavBar.js       # Navegação
│   │   ├── Projects.js     # Portfólio
│   │   ├── ProjectCard.js  # Card de projeto
│   │   └── Skills.js       # Sobre a empresa
│   ├── App.js              # Componente principal
│   ├── App.css             # Estilos globais
│   └── index.js            # Ponto de entrada
├── server.js               # Servidor Express
├── package.json            # Dependências
└── README.md              # Este arquivo
```

## 🌟 Funcionalidades Principais

### 🏠 Página Inicial
- Hero section com animação de texto dinâmico
- Apresentação da empresa e valores
- Call-to-action para contato

### 💼 Portfólio de Projetos
- **SGA**: Sistema de Gestão Acadêmica
- **AVA**: Ambiente Virtual de Aprendizagem  
- **My Coach**: Plataforma de mentoria com IA
- **EduFlow**: Gestão de fluxos educacionais
- **Grafana**: Dashboard de analytics
- **PDF Creator**: Gerador automático de documentos

### 📞 Sistema de Contato
- Formulário responsivo
- Validação de campos
- Envio via NodeMailer
- Feedback visual para o usuário

### 🎯 Diferenciais Destacados
- 🚀 Inovação Constante
- 🛡️ Confiabilidade Total  
- ⚡ Agilidade e Performance
- 🎯 Foco em Resultados

## 🔧 Scripts Disponíveis

```bash
npm start          # Inicia o servidor de desenvolvimento
npm run build      # Cria build de produção
npm test           # Executa testes
npm run eject      # Ejeta configurações (irreversível)
```

## 📱 Responsividade

O projeto é totalmente responsivo e testado em:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1200px+)

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

<div align="center">

**Desenvolvido com ❤️ pela equipe PTec**

*Transformando ideias em realidade através da tecnologia*

</div>
