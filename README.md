# Mini assistent

Interface de chat responsiva e minimalista para testar uma API de chatbot, desenvolvida com React, TypeScript e Tailwind CSS.

## Funcionalidades

- Interface de chat moderna e responsiva
- Seletor de personas (Smalltalk, Tech, Pricing)
- Histórico de mensagens em tempo real
- Indicadores de loading state
- Design acessível e responsivo
- Temas escuros para melhor experiência visual

## Tecnologias

- React 18
- TypeScript
- Tailwind CSS
- Lucide React (ícones)
- Vite (build tool)

## Como executar

1. Clone o repositório
2. Instale as dependências:
```bash
npm install
```
3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

## Estrutura do Projeto

- `/src/components` - Componentes React reutilizáveis
- `/src/services` - Serviços e integrações com API
- `/src/types` - Definições de tipos TypeScript

## Comportamento
### Fluxo de Mensagens
. O usuário digita uma mensagem e a envia através do componente ChatInput.

. A mensagem do usuário é adicionada ao estado chatState.messages e o estado de carregamento é ativado.

. A função sendMessage é chamada para enviar a mensagem ao backend (via API).

. Quando a resposta é recebida do backend, uma mensagem do bot é adicionada ao histórico.

. Se ocorrer algum erro, uma mensagem de erro é exibida no chat.

### Componente de Contatos
O componente Contatos exibe links para as redes sociais do autor, permitindo que o usuário entre em contato via LinkedIn ou GitHub.

### Layout
A aplicação é responsiva e utiliza Tailwind CSS para garantir que os componentes se ajustem bem em diferentes tamanhos de tela. A estrutura de layout é flexível, utilizando classes como flex, min-h-screen, e max-w-3xl para garantir um design adequado.

### Contribuição
Este projeto é mantido e atualizado com o objetivo de facilitar o desenvolvimento de aplicações frontend com Vite, React e TypeScript. Se você deseja contribuir, sinta-se à vontade para abrir um pull request ou relatar problemas.
