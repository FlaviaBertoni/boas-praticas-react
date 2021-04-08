# Props

Quando precisamos passar alguma informação para um componente fazemos isso através das _props_.
_Props_ é uma abreviação para properties, ou propriedades e ela pode receber uma string, um número, um array, um objeto ou até mesmo uma função.

Como exemplo, vamos utilizar um componente de botão, que iremos exemplificar criando ele como **Class Component** e como **Function Component**.

##### Exemplo de Class Component em Javascript:

```jsx
import React from 'react'
import PropTypes from 'prop-types'

export default class Button extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    if (this.props.onClick) {
      this.props.onClick()
    }
  }

  render() {
    const baseStyle = {
      display: 'flex',
      borderRadius: '16px',
      height: '48px',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
    }

    const textButtonStyle = {
      border: '1px solid transparent',
      color: this.props.color,
    }

    const outlinedButtonStyle = {
      border: `1px solid ${this.props.color}`,
      color: this.props.color,
    }

    const containedButtonStyle = {
      border: '1px solid transparent',
      color: '#fff',
      backgroundColor: this.props.color,
    }
    let styles;

    switch (this.props.variant) {
      case 'text':
        styles = { ...baseStyle, ...textButtonStyle }
        break;
      case 'outlined':
        styles = { ...baseStyle, ...outlinedButtonStyle }
        break;
      case 'contained':
        styles = { ...baseStyle, ...containedButtonStyle }
        break;
      default:
        styles = { ...baseStyle }
    }

    return (
      <button style={styles} onClick={this.handleClick}>
        {this.props.children}
      </button>
    )
  }
}

Button.propTypes = {
  color: PropTypes.string,
  variant: PropTypes.oneOf(['text', 'outlined', 'contained']).isRequired,
  onClick: PropTypes.func,
}
```

##### Exemplo de Functional Component em typescript:

```jsx
import React from 'react'

interface ButtonProps {
  color: string;
  variant: 'text' | 'outlined' | 'contained',
  onClick: () => void,
}

const Button: React.FC<ButtonProps> = ({onClick, color, variant, children}) => {
  const handleClick = () => {
    if (onClick) {
      onClick()
    }
  }

  const baseStyle = {
    display: 'flex',
    borderRadius: '16px',
    height: '48px',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  }

  const textButtonStyle = {
    border: '1px solid transparent',
    color: color,
  }

  const outlinedButtonStyle = {
    border: `1px solid ${color}`,
    color: color,
  }

  const containedButtonStyle = {
    border: '1px solid transparent',
    color: '#fff',
    backgroundColor: color,
  }
  let styles;

  switch (variant) {
    case 'text':
      styles = { ...baseStyle, ...textButtonStyle }
      break;
    case 'outlined':
      styles = { ...baseStyle, ...outlinedButtonStyle }
      break;
    case 'contained':
      styles = { ...baseStyle, ...containedButtonStyle }
      break;
    default:
      styles = { ...baseStyle }
  }

  return (
    <button style={styles} onClick={handleClick}>
      {children}
    </button>
  )
}

export default Button;
```
