# boas-praticas-react
Material de apoio sobre Boas Práticas na implementação de aplicações utilizando React.js e React Native

### Tópicos 

#### React.js

- Como ficar atualizado (links úteis: documentação oficial, create react app, thinking in React)
- Breve história do react (o que resolve, diferenças principais das versões 15 e > 16.8 (render, classes, hooks), é uma lib)
  - Atualização do DOM (exemplo vanilla vs react - virtual dom (VDOM) otimização é diferente do shadow dom)
  - Componentização (organização, reaproveitamento)
  - JSX - https://reactjs.org/ e https://babeljs.io/repl
- Componentes 
  - o que é um componente? tudo é componente
  - componentes compatilhados - input, button
  - componentes page - Home
  - componente puro - comportamento previsivel
- Estado
  - Componentes stateful e stateless
  - Estado do componente
  - Estado da aplicação (flux, redux, effector, hooks, context)
    - Hooks (useState, useEffect, exemplo de custom hook - sessão usuário)
    - Context (global)
- Props (proptypes / typescript - comunicação entre componentes - fluxo, children)
- Refs (perigoso)
- Estilo
  - Style inline (json) - menos performatico
  - CSS (Class Name)
  - CSS-in-JS 
    - Styled components (vantagens, dinamico, scoped - menos change de conflito de estilo)
- Estrutura de projetos mais populares (container, index, service)
- Atomic Design (testavel, reaproveitar, organização, onde vai o que?)
- Testes unitários (mount (render) - react testing library, jest, enzyme, mocha)

### React Native

- Style
- Estrutura
