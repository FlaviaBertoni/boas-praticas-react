# boas-praticas-react

Material de apoio sobre Boas Práticas na implementação de aplicações utilizando React.js e React Native

### Tópicos

#### React.js

1. [Como se manter atualizado](#como-se-manter-atualizado)
2. [Breve história do react](/02.%20Breve%20historia%20do%20react/README.md) (o que resolve, diferenças principais das versões 15 e > 16.8 (render, classes, hooks), é uma lib)  
   2.1. [DOM e Virtual DOM](02.%20Breve%20historia%20do%20react/README.md#DOM-e-Virtual-DOM)  
   2.2. [JSX](02.%20Breve%20historia%20do%20react/README.md#JSX) - <https://reactjs.org/> e <https://babeljs.io/repl>

3. [Componentes](03.%20Componentes/README.md)  
   3.1. [Class Component e Function Component](03.%20Componentes/README.md#Class-Component-e-Function-Component)  
   3.2. [Componentes Puros](03.%20Componentes/README.md#Componentes-Puros)

4. Estado
   4.1. Componentes stateful e stateless  
   4.2. Estado do componente  
   4.3. Estado da aplicação (flux, redux, effector, hooks, context)

   - Hooks (useState, useEffect, exemplo de custom hook - sessão usuário)
   - Context (global)

5. Props (proptypes / typescript - comunicação entre componentes - fluxo, children)

6. Refs (perigoso)

7. [Estilos](/07.%20Estilos/README.md)

8. Estrutura de projetos mais populares (container, index, service)

9. [Atomic Design](/09.%20Atomic%20Design/README.md)

10. [Testes unitários](/10.%20Testes%20unitarios/README.md)

### React Native

- Style
- Estrutura

# React.js

Desde as versões 0.\* até a 17 tiveram diversas mudanças em como se escreve o código usando react.js que consequentemente impactaram nos padrões e boas práticas, por isso o primeiro tópico será sobre alguns links que ajudam a se manter atualizado:

## Como se manter atualizado

[Documentação oficial](https://pt-br.reactjs.org/docs/getting-started.html): a melhor referência quando se trata de programação, porém não são todos os exemplos dela que estão sempre atualizados com as mudanças mais recentes, atualmente por exemplo existem diversos exemplos no site que não contêm os hooks e componentes escritos como funções, porém a comunidade está cada vez mais adotando essas novas funcionalidades e deixando de usar as classes.

[Pensando em React](https://pt-br.reactjs.org/docs/thinking-in-react.html): recomendo para entender conceitualmente como escrever aplicações em react.

[Create react app](https://github.com/facebook/create-react-app): uma das toolchains mais utilizadas para começar a desenvolver usando react.js, costuma estar bem atualizada e com diversas configurações úteis para o desenvolvimento local e build para produção. Então é legal acompanhar as novas versões olhando para o que está sendo adicionado e porquê.

[Outras toolchais recomendadas pelo React](https://pt-br.reactjs.org/docs/create-a-new-react-app.html#recommended-toolchains): é bom ver também outras toolchains que o react recomenda, para conhecer as novas soluções que estão surgindo para os problemas que você pode encontrar no seu projeto.

[Changelog](https://github.com/facebook/react/blob/master/CHANGELOG.md): é sempre bom acompanhar o que muda em cada versão do react e para isso o changelog é extremamente útil!

[Mantenha-se Informado](https://pt-br.reactjs.org/docs/getting-started.html#staying-informed): nesse link você vai encontrar as dicas do próprio react para se manter atualizado :)

Outros links legais para conhecer:

- [Medium React Brasil](https://medium.com/reactbrasil/tagged/react)
- [ReactJS Github](https://github.com/reactjs)
- [Rocketseat blog](https://blog.rocketseat.com.br/tag/reactjs/) e [canal no youtube](https://www.youtube.com/c/RocketSeat)
- [Material-ui](https://material-ui.com/pt/)
