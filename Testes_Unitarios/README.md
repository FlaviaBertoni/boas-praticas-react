# Testes unitários

**DISCLAIMER:**

Vamos assumir que a linguagem de programação é **JavaScript**.

O Framework de teste padrão será o **Jest** e todos os exemplos serão baseados nele, mas vamos falar sobre outros frameworks de teste conhecidos para o JavaScript.

O _mindset_ utilizado será para aplicações **Frontend**.

## O que é um teste unitário ou de unidade?

Por teste unitário ou teste de unidade é entendido que testamos a menor parte **testável** de um software, o que podemos assumir como uma função ou método de uma classe.

Por exemplo, dado a função:

```js
function sum(value1, value2) {
  return value1 + value2;
}
```

Um teste simples para essa função seria:

```js
expect(sum(1, 2)).to.equal(3);
```

O exemplo acima é um clássico que você vai poder encontrar por toda internet. Mas para que serve teste unitário? Que dor que o teste resolve? O que devemos testar? Como testar?

## Função dos testes unitários

Os testes unitários nos dão uma vantagem muito maior do que deixar os pequenos pedaços testados e ver o coverage subindo, eles nos dão **confiança**. Confiança que nossa aplicação vai funcionar quando seus usuários a utilizarem.

Outra vantagem dos testes unitários é quando precisamos refatorar.

Já pensou se precisar refatorar a função **sum** para que, internamente, ela fique mais explicita?

```js
function sum(value1, value2) {
  const result = value1 + value2;

  return result;
}
```

Ou se a gente mudasse de _named function_ para _arrow function_?

```js
const sum = (x, y) => x + y;
```

Refatoramos os **detalhes da implementação** de nossa função, mesmo assim o teste continuaria passando.

Este é o poder dos testes: Nos dar confiança tanto para mudanças tanto para garantir o funcionamento do código em produção.

## Frameworks de teste

Existem vários framworks de teste para JavaScript, como Cypress, Jasmine, Mocha e Jest.

Quando usamos o Create React App para criar nossa aplicação React, o Jest faz parte do pacote que é instalado pelo CRA.

Jest foi criado pelo Facebook, é um framework que não precisa de muita configuração, uma vez que ele já vem com suporte a mock e sua biblioteca de assersões. Fora isso, é bem documentado e considerado como uma rápido e performático.

Jasmine e Mocha foram (e são) frameworks de teste muito famosos até 2016 segundo o site [State of JS 2020 survey](https://2020.stateofjs.com/en-US/technologies/testing/), porém perderam espaço para o Jest pela facilidade de instalação e configuração.

Já o Cypress é um framwork voltado mais para testes de ponta a ponta, os famosos E2E (end to end) e muito utilizado para validação da UI e fluxos completos. Também é possível realizar testes de integração e até unitários.

## Bibliotecas de teste

Dentre as várias bibliotecas de teste, vamos destacar as duas mais utilizadas hoje no Frontend, principalmente com React: **Enzyme e React Testing Library**.

Tanto Enzyme quanto RTL são "utilitários" que usamos junto ao nosso framework de teste, deixando mais fácil criar testes para nossos componentes construidos com o React. Geralmente essas bibliotecas adicionam formas de manipular e/ou simular eventos como clique e algumas formas de realizar a assersão dos nossos testes.

Nosso foco aqui será com a biblioteca React Testing Library. Não entraremos nos detalhes de configuração inicial de cada biblioteca.

### Enzyme

Criada pela equipe da AirBnB que já construiu vários outros componentes para React e também uma Style Guide muito famosa utilizada por muitos Devs quando falamos de desenvolvimento JavaScript / TypeScript.

[Na documentação oficial do Enzyme](https://enzymejs.github.io/enzyme/), diz que o Enzyme é um utilitário de testes para o React que torna fácil testar a saída de nossos componentes.

A API do Enzyme é jQuery-like para localizar elementos, disparar eventos, etc.

No Enzyme possuímos basicamente três métodos para renderizar um componente para o teste:

- **mount()**

  Renderiza toda a arvore DOM com todos os childrens e dá a possibilidade de usar toda API do Enzyme simulando cliques, acessando elementos que foram renderizados na DOM e aí por diante.

- **shallow()**

  Renderiza somente o componente sem seus filhos e não dá a possibilidade de usar **toda** API do Enzyme, como simulação cliques.

- **render()**

  Retorna uma string com o código gerado em HTML.

Abaixo, alguns exemplos de testes utilizando Enzyme:

```js
import MyComponent from "./MyComponent";
import Foo from "./Foo";
import { expect } from "chai";
import { shallow } from "enzyme";
import { mount } from "enzyme";

// Shallow
it("renders three <Foo /> components", () => {
  const wrapper = shallow(<MyComponent />);
  expect(wrapper.find(Foo)).to.have.lengthOf(3);
});

// Mount
it("allows us to set props", () => {
  const wrapper = mount(<Foo bar="baz" />);
  expect(wrapper.props().bar).to.equal("baz");
  wrapper.setProps({ bar: "foo" });
  expect(wrapper.props().bar).to.equal("foo");
});

// Render
it("renders three `.foo-bar`s", () => {
  const wrapper = render(<Foo />);
  expect(wrapper.find(".foo-bar")).to.have.lengthOf(3);
});
```

### React Testing Library

> The more your tests resemble the way your software is used, the more confidence they can give you. [Kent C. Dodds](https://kentcdodds.com/)

> Quanto mais seus testes se assemelham à forma como o software é usado, mais confiança eles podem lhe dar. Google Translate
