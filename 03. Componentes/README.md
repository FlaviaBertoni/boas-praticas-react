# Componentes

![Blocos Lego](legos.png)

> Componentes são conjuntos isolados de lógica (Javascript), instrução de visualização (JSX/HTML) e estilização (CSS).

Componentes permitem dividir a UI em partes independentes, reutilizáveis e pensar em cada parte isoladamente.

## Componentes de Função e Classe

A maneira mais simples de definir um componente é escrever uma função JavaScript:

```jsx
function Welcome(props) {
  return <h1>Olá, {props.name}</h1>;
};
```

Este mesmo exemplo pode ser escrito em forma de Classe ES6:

```jsx
class Wellcome extends React.Component {
  render() {
    return <h1>Olá, {this.props.name}</h1>;
  }
}
```

Para o React, estes dois componentes são equivalentes.

#### Renderizando um Componente

O exemplo assim pode ser renderizado da seguinte maneira:

```jsx
function Welcome(props) {
  return <h1>Olá, {props.name}!</h1>;
}

const element = <Welcome name="Carla" />;
ReactDOM.render(element, document.getElementById('root'));
```

**Saída:** Olá, Carla!

> **Atenção**
> _Sempre inicie os nomes dos componentes com letra maiúscula._
>
> No React, componente que começam com letra minúscula são tags do DOM.
> O ```<div />``` representa a tag **div** do HTML, porém o ```<Welcome />```representa o componente **Welcome**, que acabamos de criar.
