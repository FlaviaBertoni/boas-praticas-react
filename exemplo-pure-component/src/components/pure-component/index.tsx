import React from 'react';

interface ComponenteProps {
  numbers: number[];
}

export class ComponentePuro extends React.PureComponent<ComponenteProps> {
  render() {
    const { numbers } = this.props;

    return (
      <>
        <div>Pure Component</div>
        <ul>
          {numbers.map((num, idx) => (
            <li key={idx}>{num}</li>
          ))}
        </ul>
      </>
    );
  }
}
