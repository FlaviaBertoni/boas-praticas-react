# Estado

Estado (state) é uma propriedade onde armazenamos dados que podem ser alterada com o tempo. Essa mudança pode, ou não, ser fruto de uma interação do usuário com a aplicação.
Diferente da _Prop_ ele não é repassado por um outro componente e sim configurado dentro dele.

## Componentes stateful e stateless

Em termos simples, componente stateful são componentes que armazenam seu estado, enquanto componenete stateless não faz manipulação de estado.
Antes dos _Hooks_ era utilizado **classe** para componentes _stateful_ e **functions** para componentes _stateless_

> **Observação:**
>
> O State não pode sofrer alteração direta, ele leva um conceito de _imutabilidade_, ou seja, após inicializada a variável não pode ser alterada somente substituída!
> Para isso utilizaremos um método especial da classe chamado _setState_

##### Class Component Stateful

```jsx
class Button extends React.Component {
  constructor() {
    super()
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const newCount = this.state.count + 1;
    this.setState({ count: newCount })
  }

  render() {
    return (
      <div>
        <h1>Stateful Component</h1>
        <label>
          { this.state.count === 0 ? 'O Botão ainda não foi clicado!' : `O botão foi clicado ${this.state.count}x`}
        </label>
        <button onClick={this.handleClick}>
          Click Aqui!
        </button>
      </div>
    )
  }
}

```

##### Function Component Stateless

##### Function Component utilizando o Hook _useState_
## Gerenciamento do Estado

### Estado do componente

### Estado da aplicação
