import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function Button({ children, ...props }: ButtonProps) {
  return <button {...props}>{children}</button>;
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

export default function Input({ onChange, type = 'text', ...props }: InputProps) {
  return <input {...props} onChange={onChange} type={type} />;
}

interface FormProps {
  handleSubmit: ({ name, email }: { name: string; email: string }) => void;
}

function Form({ handleSubmit }: FormProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit({ name, email });
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="name">Nome</label>
      <Input onChange={handleChangeName} id="name" placeholder="Digite seu nome" />

      <label htmlFor="email">Email</label>
      <Input type="email" onChange={handleChangeEmail} id="email" placeholder="Digite seu email" />

      <Button type="submit">Enviar</Button>
    </form>
  );
}

const onClick = jest.fn();
const onChange = jest.fn();
const handleSubmit = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Button test cases', () => {
  it('should be able to render the button and dispatch a event when click on it', () => {
    render(
      <Button name="unit-test" onClick={onClick}>
        unit test
      </Button>,
    );

    const button = screen.getByRole('button');

    userEvent.click(button);

    expect(button).toBeInTheDocument();
    expect(onClick).toHaveBeenCalled();
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should be able to render the button with CSS properties', () => {
    const style = {
      width: '200px',
      height: '50px',
      border: 0,
    };
    render(<Button style={style}>unit test</Button>);

    const button = screen.getByRole('button');

    expect(button).toHaveStyle(style);
  });
});

describe('Input test cases', () => {
  it('should be able to render the Input and dispach onChange event', () => {
    render(<Input onChange={onChange} />);

    const input = screen.getByRole('textbox');

    const text = 'unit text';

    userEvent.type(input, text);

    expect(onChange).toHaveBeenCalledTimes(text.length);
    expect(input).toHaveValue(text);
  });
});

describe('Form test cases', () => {
  it('should be able to render and interact with Form', () => {
    render(<Form handleSubmit={handleSubmit} />);

    const name = screen.getByLabelText(/nome/i);
    const email = screen.getByLabelText(/email/i);
    const button = screen.getByRole('button');

    userEvent.type(name, 'unit test');
    userEvent.type(email, 'unit-test@test.com');
    userEvent.click(button);

    expect(name).toHaveValue('unit test');
    expect(email).toHaveValue('unit-test@test.com');
    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith({ name: 'unit test', email: 'unit-test@test.com' });
  });
});
