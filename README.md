# TechFlow

## Visão Geral do Projeto
TechFlow é um sistema web projetado para gerenciar pedidos, técnicos e informações sobre a empresa. O sistema possui cinco páginas principais:
- **index.html**: Página inicial
- **pedidos.html**: Página de pedidos
- **tecnico.html**: Página de técnicos
- **sobre.html**: Página "Sobre"
- **login.html**: Página de login

O design segue um padrão de cores consistente:
- **Fundo Geral:** Branco (#ffffff)
- **Elementos Destacados:** Ciano (#32cdd5)
- **Cards Especiais:** Bege (#f5f5dc)

O layout é responsivo e utiliza o **Bootstrap 5.3** para componentes e grid.

## Estrutura de Arquivos
```
TechFlow/
│
├── css/
│   ├── styles.css        # Estilos gerais (index.html, pedidos.html, tecnico.html, sobre.html)
│   └── login.css         # Estilos específicos para login.html
│
├── js/
│   └── script.js         # JavaScript para sidebar, filtros e acordeão
│
├── imgs/
│   └── imagem.png        # Placeholder para imagem de fundo do login
│
├── index.html            # Página inicial
├── pedidos.html          # Página de pedidos
├── tecnico.html          # Página de técnicos
├── sobre.html            # Página "Sobre"
└── login.html            # Página de login
```

## Funcionalidades Implementadas
### 1. Páginas Principais
- **Header Fixo:** Exibe o nome "TECHFLOW" com animação de pulsação, botão de menu e opções de usuário.
- **Sidebar Fixo:** Menu lateral responsivo com links destacados.
- **Footer Fixo:** Exibe "TECH FLOW 2025".
- **Responsividade:** Layout adaptável a diferentes tamanhos de tela.

### 2. Páginas Específicas
- **Index:** Exibe cards estilizados com fundo semi-transparente e efeito de blur.
- **Pedidos e Técnicos:** Tabelas interativas com filtros e botões estilizados.
- **Sobre:** Seção com acordeão interativo e imagens de fundo.
- **Login:** Formulário estilizado com efeito de blur e interação com icones do BoxIcons.

### Responsividade
- Ajustes para telas menores (≤768px e ≤576px).

## Instruções de Uso
### 1. Requisitos
- Navegador moderno (Chrome, Firefox, Edge, etc.).
- Imagens de fundo disponíveis nos caminhos corretos.

### 2. Como Executar
1. Clone ou baixe o repositório.
2. Abra **login.html** no navegador.
3. Acesse as páginas pelo sidebar:
   - **Início**: index.html
   - **Pedidos**: pedidos.html
   - **Técnicos**: tecnico.html
   - **Sobre**: sobre.html

## Detalhes Técnicos
### Tecnologias Utilizadas
- **HTML5**: Estrutura
- **CSS3**: Estilização e responsividade
- **Bootstrap 5.3**: Componentes e grid
- **BoxIcons**: Ícones
- **JavaScript**: Sidebar, filtros e acordeão

## Melhorias Futuras
- Validação de formulários.
- Backend para pedidos e técnicos.
- Modo escuro (dark mode).
- Mais animações e transições UX.
