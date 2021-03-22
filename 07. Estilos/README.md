# Estilos

Atualmente a biblioteca React não tem nenhuma opinião sobre como estilos são definidos. Você pode criar estilos da maneira que achar melhor.

React aceita tanto inline styles, quanto adicionando classes e os famosos CSS-in-JS.

## Inline Styles

Para se usar CSS inline com React (JSX), deve se usar um objeto ao invés de string como no HTML puro.

Os atributos precisam estar no padrão camelCase e separados por virgula. Exatamente como num objeto JS comum.

```js
function ColorBlock() {
  const style = {
    margin: "20px",
    width: "250px",
    height: "250px",
    backgroundColor: "yellow",
  };
  return <div style={styles}>...</div>;
}
```

```js
function ColorBlock() {
  return (
    <div style={{ backgroundColor: "red", width: "100px", height: "100px" }}>
      ...
    </div>
  );
}
```

```js
const Button = ({ green }) => {
  return (
    <button
      style={{
        width: 200,
        height: 50,
        backgroundColor: green ? "green" : "red",
      }}
    >
      My Button
    </button>
  );
};
```

**Ressalvas:**

- Não é possível utilizar pseudo-selectors, pseudo-elements, media queries, keyframe animations, entre outros.

- Dificulta a reutilização de código (Escalabilidade).

- Dificulta a utilização de estilos baseados em props.

- Impossibilita de se usar Media queries

- Não é performático, uma vez que o tamanho da DOM cresce proporcional a quantidade de elementos, mesmo que eles sejam repedidos.

- Com uso de SSR, a cada vez que a página é renderizada os estilos inline são baixados, uma vez que não há cache para o HTML gerado.

- [Estilos inline são mais demorados para serem convertidos da VDOM para a DOM](https://www.sderosiaux.com/articles/2015/08/17/react-inline-styles-vs-css-stupid-benchmark/) e levam mais tempo para o Browser conseguir tabalhar com eles também.

## Folhas de estilo

Essa é a forma mais tradicional de usar CSS. Podemos escrever nossa folha de estilo e importar para nosso componente.

Não precisa de nenhuma configuração adicional.

```css
/* style.css */
.container {
  width: 100px;
  height: 100px;
  background-color: red;
}

.container:hover {
  background-color: green;
}
```

```js
import "./style.css";

function ColorBlock() {
  return <div className="container">...</div>;
}
```

**Ressalvas:**

- Namespaces são globais e pode haver choque de nomes. Precisa usar uma estratégia de _naming_ tipo BEM (Block Element Modifier).

- Algumas features avançadas do CSS não estarão disponíveis.

- Utilização de estilos dinâmicos baseado em Props envolve a criação de mais classes CSS e complexidade maior para fazer o gerenciamento.

- Dificil de refatorar e elimiar código.

Dentre outros problemas descritos [neste slide](https://speakerdeck.com/vjeux/react-css-in-js?slide=2) de [Christopher Chedeau](http://blog.vjeux.com/), um dos engenheiros do Facebook.

## Pré-processadores

Pré-processadores CSS (SASS/LESS) são programas que recebem textos ou códigos no nosso caso e efetuam conversões lexicas, ou seja, entra com um código e troca por outro, podendo incluir troca de palavras, inclusão de código condicional e até mesmo inclusão de outros arquivos.

No caso do SASS, podemos criar variáveis, condicionais, repetição, imports e até mesmo funções e extender outros estilos para evitar duplicação de código.

É possível fazer Nesting (aninhamento) de estilos.

```scss
// variables
$red = #f00;
$green = #00aa00
```

```scss
// styles.scss

@import "variables";

.container {
  width: 100px;
  height: 100px;
  background-color: $red;

  &:hover {
    background-color: $green;
  }

  &.button {
    ...
  }
}
```

```js
import "./style.scss";

function ColorBlock() {
  return (
    <div className="container">
      ...
      <button>...</button>
    </div>
  );
}
```

Utilizando dessa forma ainda teremos problemas com colisão de nomes, mas podemos trabalhar com módulos CSS no SASS e para isso devemos usar a extensão `.module.scss`.

```scss
// styles.module.scss

@import "variables";

.container {
  width: 100px;
  height: 100px;
  background-color: $red;

  &:hover {
    background-color: $green;
  }

  &.button {
    ...
  }
}
```

```js
import styles from "./style.module.scss";

function ColorBlock() {
  return (
    <div className="container">
      ...
      <button>...</button>
    </div>
  );
}
```

**Ressalvas:**

- Curva de aprendizagem.

- Pode ser difícil de debugar.

## CSS Modules

CSS Modules é a evolução das folhas de estilo. Possui escopo local, ou seja, não teremos problemas com colisão de nomes. Também podemos trabalhar com variáveis.

O nome do arquivo precisa conter a extensão `.module.css` para que o bundler reconheça como um módulo.

A escrita do CSS continua a mesma.

```css
/* style.module.css */
--red: #e83f5b;
--green: #4cd62b;

.container {
  width: 100px;
  height: 100;
  background-color: var(--red);
}

.container:hover {
  background-color: var(--green);
}

.container button {
  ...;
}
```

```js
import styles from "./style.module.css";

function ColorBlock() {
  return (
    <div className="container">
      ...
      <button>...</button>
    </div>
  );
}
```

**Ressalvas:**

- Ainda é complicado utilizar estilos dinâmicos baseado em Props.

- Ainda não é possível fazer Nesting de estilos.

## CSS-in-JS

CSS-in-JS é uma solução como o próprio nome já diz: Escrever CSS com JS.

Com essa solução podemos aproveitar todos os métodos atuais de componentização em JavaScript para criar componentes performáticos.

### Styled-Components

[Styled-Components](https://styled-components.com/) é uma das bibliotecas mais populares para React no assunto de CSS-in-JS. A ideia é criar componentes como já utilizamos no React, porém são componentes estilizados (ou de estilo).

Segundo a documentação oficial Styled-Components vem com as seguintes vantagens:

- Critical CSS Automático: styled-components injeta somente os estilos e nada mais nos componentes automáticamente. Combinado com _code splitting_ significa que somente vai carregar o que for necessário para montar o componente.

- Sem colisão de classes: styled-components gera nomes de classes únicas para os estilos. Nunca vamos precisar preocupar com duplicação, sobreposição ou erros de digitação.

- Remoção de CSS: Como criamos estilos para componentes e não baseado em classes, fica fácil saber o que deletar. E quando deletamos um componente deletamos todos seu estilo.

- Estilo dinâmico simples: Podemos criar estilos dinâmicos baseados nas props ou em temas de forma fácil, sem usar um monte de classes.

- Manutenção sem dor: Como os estilos tem escopo do componente, não vamos mais precisar ficar "caçando" em vários arquivos qual estaria afetando o estilo.

- Vendor prefixing automático: Você escreve seu CSS no melhor padrão do mercado e pronto, os componentes cuidam para fornecer suporte para browsers antigos.

Vejamos um exemplo:

```js
// style.js
import styled from "styled-components";

export const Container = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;

  &:hover {
    background-color: green;
  }

  &.button {
    ...
  }
`;
```

```js
import { Container } from "./style";

function ColorBlock() {
  return (
    <Container>
      ...
      <button>...</button>
    </Container>
  );
}
```

E com estilos dinâmicos:

```js
// Button.styles.js
import styled from "styled-component";

export const StyledButton = styled.button`
  width: 200px,
  height: 50px,
  backgroundColor: ${(props) => (props.bgColor ? props.bgColor : "red")},
`;
```

```js
import { StyledButton } from "./Button.styles.js";
const Button = ({ bgColor }) => {
  return <StyledButton bgColor={bgColor}>My Button</StyledButton>;
};
```

Essa biblioteca ainda nos permite usar alguns recursos para melhor aproveitamento dos componentes gerados. Vamos supor que estamos construindo um Design System ou queremos reduzir a duplicação de código para os estilos.

Dado que temos dois componentes, um de texto que vamos chamar de Text e um de container que vamos chamar de Box, segue:

```js
// Text.js
import styled from "styled-components";

const Text = styled.p`
  font-size: 1rem;
  color: black;
`;

export default Text;
```

```js
// Container.styles.js
import styled from "styled-components";

const Container = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ bgColor }) => bgColor};
  border: ${({ border }) => border};
`;
```

```js
// Box.js
import { Container } from "./Container.styles";

export default function Box({ width, height, bgColor, border, children }) {
  return (
    <Container width={width} height={height} bgColor={bgColor} border={border}>
      {children}
    </Container>
  );
}
```

E agora precisamos ter uma página onde vamos ter um h1 e um form. Styled-Component nos dá uma propriedade polifórmica chamada `as` onde podemos mudar o tipo do elemento HTML e trocar o Text que é uma tag `p` para `h1` e o Box de `div` para `form`:

```js
// Form.js
import Box from "./Box";
import Text from "./Text";

export default function Form() {
  return (
    <Box as="from" width="100%" height="100%" bgColor="transparent" border="0">
      <Text as="h1">Teremos uma tag form com um h1 dentro.</Text>
    </Box>
  );
}
```

Ainda podemos extender o estilo de algum componente já criado e criar um novo:

```js
import styled from "styled-components";
import Box from "./Box";

export const StyledBox = styled(Box)`
  transition: border-color 300ms;
  &:hover {
    border: 1px dashed #999;
  }
`;
```

Dessa forma extendemos o componente Box e adicionamos a ele novas propriedades.

É importante ressaltar que para esse tipo de utilização em componentes React que retornam um componente Styled-Components, como é o caso do Box, é necessário adicionar uma propriedade chamada className no componente Box para que os estilos sejam corretamente aplicados:

```js
// Box.js
import { Container } from "./Container.styles";

export default function Box({
  width,
  height,
  bgColor,
  border,
  children,
  className,
}) {
  return (
    <Container
      className={className}
      width={width}
      height={height}
      bgColor={bgColor}
      border={border}
    >
      {children}
    </Container>
  );
}
```

A [documentação da biblioteca](https://styled-components.com/docs) é extensa e bem completa. É um excelente ponto de partida.
