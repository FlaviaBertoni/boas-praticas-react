import React from 'react';
import { ComponenteNormal } from './components/normal-component';
import { ComponentePuro } from './components/pure-component';

type AppState = {
  numbers: number[];
};

class App extends React.Component<{}, AppState> {
  state = {
    numbers: [],
  };

  handleClick = () => {
    this.setState(({ numbers }) => {
      const nextNumber = Number((Math.random() * 100).toFixed(0));
      numbers.push(nextNumber);
      return {
        numbers,
      };
    });
  };

  render() {
    const { numbers } = this.state;

    return (
      <>
        <button
          style={{ marginBottom: '16px' }}
          onClick={() => this.handleClick()}
          type="button"
        >
          Incluir
        </button>
        <div>
          <ComponenteNormal numbers={numbers} />
          <ComponentePuro numbers={numbers} />
        </div>
      </>
    );
  }
}

export default App;
