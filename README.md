# 🚀 OrbitGuard Mission Control

## 🛰️ Monitoramento Experimental da Missão Aurora-7

O **OrbitGuard Mission Control** é uma aplicação web interativa desenvolvida para a Global Solution da disciplina **Application Development**, com o tema norteador **Indústria Espacial**.

A proposta do projeto é simular uma central de controle de uma missão espacial experimental fictícia chamada **Aurora-7**, permitindo o acompanhamento de informações operacionais da nave, como temperatura, nível de energia, comunicação com a Terra, status da missão e sensores ativos.

O projeto foi desenvolvido utilizando apenas **HTML5, CSS3 e JavaScript puro**, sem frameworks, bibliotecas externas, backend, banco de dados ou APIs.

---

## 📌 Sobre o Projeto

A exploração espacial exige sistemas capazes de monitorar dados importantes em tempo real, como energia, temperatura, comunicação e funcionamento dos sensores. Pensando nisso, o **OrbitGuard Mission Control** foi criado como uma simulação acadêmica de um painel de controle espacial.

A aplicação apresenta uma interface moderna, organizada e responsiva, permitindo que o usuário interaja com os dados simulados da missão e registre ocorrências por meio de um formulário.

---

## 🎯 Objetivo

Desenvolver uma aplicação web interativa para simular o monitoramento de uma missão espacial experimental, aplicando os principais conceitos estudados na disciplina, como:

* Estruturação com HTML semântico;
* Estilização com CSS;
* Organização visual com Flexbox;
* Responsividade com Media Queries;
* Manipulação do DOM com JavaScript;
* Interação com botões e formulário;
* Atualização dinâmica de informações na tela.

---

## 💡 Justificativa

O tema **Indústria Espacial** está diretamente relacionado ao uso de tecnologia para monitoramento, comunicação e controle de missões. Mesmo sendo uma aplicação fictícia, o projeto representa uma situação próxima de um painel operacional, onde informações importantes precisam ser exibidas de forma clara e organizada.

O sistema foi pensado para demonstrar como uma aplicação web simples pode auxiliar na visualização de dados simulados, contribuindo para a tomada de decisão em uma missão espacial experimental.

---

## 🧪 Missão Fictícia: Aurora-7

A **Aurora-7** é uma missão espacial experimental fictícia responsável por monitorar sensores internos da nave e manter a comunicação com a estação terrestre.

### Dados acompanhados no painel:

| Informação              | Descrição                                               |
| ----------------------- | ------------------------------------------------------- |
| 🌡️ Temperatura da nave | Simula a temperatura interna da nave espacial           |
| 🔋 Nível de energia     | Mostra a energia disponível nos sistemas principais     |
| 📡 Comunicação          | Indica a situação da conexão com a Terra                |
| 🟢 Status operacional   | Mostra se a missão está operando, em atenção ou crítica |
| 🛰️ Sensores ativos     | Exibe a quantidade de sensores funcionando              |

---

## ⚙️ Funcionalidades

O projeto possui as seguintes funcionalidades:

* ✅ Menu de navegação simples;
* ✅ Introdução da missão Aurora-7;
* ✅ Dashboard com dados simulados;
* ✅ Cards visuais para informações da missão;
* ✅ Barras simples de temperatura e energia;
* ✅ Botão para alternar entre tema claro e escuro;
* ✅ Botão para atualizar os dados simulados;
* ✅ Mudança visual do status operacional;
* ✅ Área lateral com alertas da missão;
* ✅ Função para ocultar e exibir alertas;
* ✅ Formulário para cadastro de relatório da missão;
* ✅ Mensagem dinâmica de confirmação após envio do formulário;
* ✅ Layout responsivo para dispositivos móveis.

---

## 🖥️ Demonstração do Fluxo da Aplicação

```text
Usuário acessa o sistema
        ↓
Visualiza a introdução da missão Aurora-7
        ↓
Acompanha os dados simulados no dashboard
        ↓
Pode atualizar os dados da missão
        ↓
Pode alternar o tema claro/escuro
        ↓
Pode ocultar ou exibir alertas
        ↓
Preenche o relatório de ocorrência
        ↓
Recebe uma mensagem de confirmação na tela
```

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Utilização no Projeto                                     |
| ---------- | --------------------------------------------------------- |
| HTML5      | Estrutura e conteúdo da aplicação                         |
| CSS3       | Estilização visual, cores, cards, botões e responsividade |
| JavaScript | Interatividade, eventos, DOM e atualização dinâmica       |

---

## 📁 Estrutura de Pastas

```text
OrbitGuard-Mission-Control/
│
├── index.html
├── README.md
├── integrantes.txt
│
├── css/
│   └── style.css
│
└── js/
    └── script.js
```

---

## 📄 Explicação dos Arquivos

### `index.html`

Arquivo principal do projeto.
Contém a estrutura da página, utilizando HTML semântico com:

* `header`;
* `main`;
* `section`;
* `article`;
* `aside`;
* `footer`.

Também possui o dashboard da missão, a área de alertas e o formulário de cadastro de relatório.

---

### `css/style.css`

Arquivo responsável pela aparência visual da aplicação.

Nele foram aplicados:

* Cores com tema espacial;
* Bordas;
* Espaçamentos;
* Box model;
* Cards visuais;
* Botões estilizados;
* Formulário organizado;
* Flexbox;
* Media Queries para responsividade;
* Tema claro e escuro.

---

### `js/script.js`

Arquivo responsável pela interatividade da aplicação.

Principais funções:

* Alternar tema claro/escuro;
* Atualizar dados simulados do dashboard;
* Alterar visualmente o status operacional;
* Ocultar e exibir alertas;
* Capturar envio do formulário;
* Exibir mensagem dinâmica de confirmação.

---

## 🧠 Principais Conceitos Aplicados

### HTML Semântico

A página foi organizada com tags semânticas para melhorar a estrutura e facilitar a leitura do código.

Exemplo de uso:

```html
<header>
<main>
<section>
<article>
<aside>
<footer>
```

---

### Flexbox

O Flexbox foi utilizado para organizar os elementos da página, como o cabeçalho, a introdução, os cards do dashboard e o formulário.

Isso ajuda a deixar o layout mais flexível e organizado.

---

### Responsividade

Foram utilizadas Media Queries para adaptar a aplicação em telas menores, como celulares e tablets.

Em telas pequenas, os elementos se reorganizam para melhorar a experiência do usuário.

---

### JavaScript e DOM

O JavaScript foi utilizado para manipular elementos da página de forma dinâmica.

Exemplos de interações:

* Alterar textos dos cards;
* Modificar classes CSS;
* Atualizar barras visuais;
* Exibir mensagens na tela;
* Esconder e mostrar alertas.

---

## 🚦 Status Operacional da Missão

O status da missão muda de acordo com os dados simulados.

| Status      | Situação                             |
| ----------- | ------------------------------------ |
| 🟢 Operando | Sistemas dentro do esperado          |
| 🟡 Atenção  | Algum dado precisa ser acompanhado   |
| 🔴 Crítico  | A missão precisa de atenção imediata |

Essa funcionalidade foi criada para representar uma análise simples dos dados da nave.

---

## 🧾 Formulário de Relatório

O formulário permite cadastrar uma ocorrência fictícia da missão.

Campos disponíveis:

* Nome do operador;
* Identificação da missão;
* Tipo de ocorrência;
* Observações;
* Botão de envio.

Após o envio, uma mensagem de confirmação aparece dinamicamente na tela, mostrando as informações principais do relatório.

---

## ▶️ Como Executar o Projeto

Para executar o projeto, siga os passos abaixo:

1. Baixe ou clone este repositório;
2. Abra a pasta do projeto no computador;
3. Abra o arquivo `index.html` em um navegador;
4. Navegue pela página e teste as funcionalidades.

Também é possível abrir o projeto pelo VS Code utilizando a extensão **Live Server**.

Não é necessário instalar dependências.

##

---

## 📚 Relação com a Indústria Espacial

O projeto se conecta ao tema da Indústria Espacial porque representa uma interface de monitoramento operacional de uma missão. Em missões reais, sistemas de controle são essenciais para acompanhar dados da nave, verificar alertas, analisar status e apoiar decisões.

No caso do OrbitGuard, os dados são fictícios, mas a ideia simula uma situação tecnológica real de acompanhamento de missão espacial.

---

## 👨‍💻 Autores

**Gabriel Ramos Moreira e Vinicius Mello Siqueira**

---

## 🏫 Informações Acadêmicas

**Instituição:** FIAP
**Curso:** Ciência da Computação
**Disciplina:** Application Development
**Projeto:** Global Solution
**Tema:** Indústria Espacial
**Missão fictícia:** Aurora-7

##
