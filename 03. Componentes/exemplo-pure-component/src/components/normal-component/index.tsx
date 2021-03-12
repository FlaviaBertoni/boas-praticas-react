import React from 'react';

interface ComponenteProps {
  numbers: number[];
}

export class ComponenteNormal extends React.Component<ComponenteProps> {
  render() {
    const { numbers } = this.props;

    return (
      <>
        <div>Component</div>
        <ul>
          {numbers.map((num, idx) => (
            <li key={idx}>{num}</li>
          ))}
        </ul>
      </>
    );
  }
}
