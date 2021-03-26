# Breve história do React

O React é uma biblioteca JavaScript open-source para construção de interfaces de usuário que foi desenvolvido inicalmente pelo Facebook a fim de resolver os problemas de atualização no DOM e hoje é mantida também pela comunidade. 

Em 2013 o Facebook precisava de uma forma mais simples e rápida de manter suas funcionalidades dinâmicas, assim era necessário que o conteúdo apresentado no HTML mudasse de forma reativa.

Outra vantagem do React é a ideia de criar sua aplicação separada em componentes, facilitando na escalada da mesma.


Algumas diferenças em como se criavam os componentes:

| Versão                   | Implementação                                                           |
| ---                      | ---                                                                     |
| 0.3.0 (Maio, 2013)       | ` React.createClass({ render() {}}) `                                   |
| 0.10.* (2014/2015)       | ` class MeuComponente extends React.Component { render() {} } `         |
| 0.14.0 (Outubro, 2015)   | ` function MeuComponent { return (</div>)} `                            |

<sub>[Pra ver mais mudanças entre as versões verifique o changelog](https://github.com/facebook/react/blob/master/CHANGELOG.md)</sub>

Outras diferença marcante foi no estado e clicos de vida, como por exemplo:

```jsx
class MeuComponente extends React.Component { 

   constructor(props) {
      super(props);
      this.state = { status: '' };
  }

  componentDidMount() {
    this.setState(state => ({
      status: 'mounted'
    }));
  }

  componentWillUnmount() {
    alert('unmounted');
  }

   render() {
    return (
      <h1> React {this.state.status} </h1>
    );
  }
} 
```

E em Fevereiro de 2019 foi lançada a versão 16.8 que apresentou os React Hooks, mudando bastante a forma como se pode trabalhar com estado e side effects:

```jsx

function MeuComponente() {

   const [status, setStatus] = useState('');

   useEffect(() => { 
      setStatus('mounted');
      return () => { alert('unmounted') }
   });

   return (
      <h1> React {status} </h1>
   );
}
```
<sub>[Exemplo em ação](https://codepen.io/flaviabertoni/pen/JjEdMjr)</sub>


## DOM e Virtual DOM

O **DOM** (Document Object Model) é uma interface que representa como os documentos HTML e XML são lidos pelo brower.
A maneira mais fácial e corriqueira de se alterar um elemento da página pelo javascript é manipulando a DOM.


```html
<html>
<head>
  <title>My Document</title>
</head>
<body>
  <h1>Header</h1>
  <p>Paragraph</p>
</body>
</html>
```

![doctree](https://developer.mozilla.org/@api/deki/files/415/=Using_the_W3C_DOM_Level_1_Core-doctree.jpg)


```js
// document.getElementsByTagName("H1") retorna um NodeList dos elementos H1
// no documento, e o primeiro é o número 0:
var header = document.getElementsByTagName("H1").item(0);

// o firstChild do cabeçalho é um Text node, e a propriedade data
// do text node contém seu texto:
header.firstChild.data = "A dynamic document";
// agora o cabeçalho é "A dynamic document".

// Recupera o primeiro elemento P no documento do mesmo modo:
var para = document.getElementsByTagName("P").item(0);
// e altera seu texto também:
para.firstChild.data = "This is the first paragraph.";

// cria um novo Text node para o segundo parágrafo
var newText = document.createTextNode("This is the second paragraph.");
// cria um novo Element para ser o segundo parágrafo
var newElement = document.createElement("P");
// insere o texto no segundo parágrafo
newElement.appendChild(newText);
// e coloca o parágrafo no final do documento acrescentando-o ao
// BODY (que é o pai de para)
para.parentNode.appendChild(newElement);
```
<sub>[Exemplo em ação](https://media.prod.mdn.mozit.cloud/attachments/2012/07/09/2495/40a92c572ccc06e25683e4e76d1122b1/example.html)</sub>

<sub>[* Para saber mais sobre como o DOM funcioan recomendo a leitura no MDN](https://developer.mozilla.org/pt-PT/docs/Web/API/Document_object_model/Using_the_W3C_DOM_Level_1_Core)</sub>

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