# Breve história do React

## DOM e Virtual DOM

O **DOM** (Document Object Model) é uma interface que representa como os documentos HTML e XML são lidos pelo brower.
A maneira mais fácial e corriqueira de se alterar um elemento da página pelo javascript é manipulando a DOM.

Como manipular o DOM pode ser um processo meio demorado, bibliotecas como o React, implementaram o conceito de **Virtual DOM**, que é nada mais do que a representação do **DOM** em memória. Com isso, quando alguma parte do HTML precisa ser atualizado, a biblioteca faz toda esta manipulação no Virtual DOM, compara com o DOM e só altera o estritamente necessário, economizando processamento.

## JSX

O JSX é uma extensão de sintaxe para JavaScript que lembra uma linguagem de Templates, como o HTML ou XML.

Como podemos ver no código abaixo, temos uma sintaxe que se parece com uma mescla entre JavaScript e HTML.

```jsx
const element = <h1>Hello, world!</h1>

ReactDOM.render(element, document.getElementById('root'))
```

Apesar de ser extremamente recomendado o uso de JSX com React, seu uso não é obrigatório. O mesmo código acima, pode ser escrito da seguinte maneira:

```js
const element = React.createElement("<h1>", null, "Hello, world!");

ReactDOM.render(element, document.getElementById('root'))
```

### Vantagens em utilizar JSX com React

1. Garante maior legibilidade do código
   Uma vez que a sintaxe se parece com uma linguagem de Template, fica visualmente mais organizado e mais fácil de entender sua estrutura.

2. Otimiza o código ao "compilar"
   O JSX é transpilado por motores, como o _babel_, para javascript puro, de maneira que o browser consiga interpreta-lo.

3. Previne injection
   Por padrão, o React DOM escapa quaisquer valores incorporados no JSX antes de renderizá-los. Assim, assegura que você nunca injete algo que não esteja explicitamente escrito na sua aplicação. Tudo é convertido para string antes de ser renderizado. Isso ajuda a prevenir ataques XSS (cross-site-scripting).

> **Atenção:**
>
>Como JSX é mais próximo de JavaScript que do HTML, o React DOM usa camelCase como convenção para nomes de propriedades ao invés dos nomes de atributos do HTML.
>
>Por exemplo, class se transforma em className em JSX, e tabindex se transforma em tabIndex.