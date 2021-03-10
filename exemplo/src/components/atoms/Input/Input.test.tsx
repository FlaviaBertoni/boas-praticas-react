import { render, screen } from '../../../tools/test-utils';
import userEvent from '@testing-library/user-event';

import Input from '.';

describe('Input tests case', () => {
  it('should be able to render a Input component and match with snapshot', () => {
    const { container } = render(<Input name="input-test" placeholder="input-test-placeholder" />);

    const input = screen.getByPlaceholderText('input-test-placeholder');
    userEvent.type(input, 'unit-test');

    expect(input).not.toHaveValue('any-text');
    expect(input).toHaveValue('unit-test');
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        height: auto;
        width: 100%;
        border: none;
        border-radius: 0;
        margin: 0;
        padding: 0;
        font-size: 1rem;
        font-weight: normal;
        line-height: 1.2;
      }

      .c0.c0 {
        color: #7E7EB8;
        background-color: #fff;
      }

      <input
        class="c0"
        name="input-test"
        placeholder="input-test-placeholder"
      />
    `);
  });

  it('should be able to render a Input element with some properties and match with snapshot', () => {
    const { container } = render(
      <Input height="1rem" width="200px" border="1px solid #000" borderRadius="4px" margin="0" padding="0" />,
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        height: 1rem;
        width: 200px;
        border: 1px solid #000;
        border-radius: 4px;
        margin: 0;
        padding: 0;
        font-size: 1rem;
        font-weight: normal;
        line-height: 1.2;
      }

      .c0.c0 {
        color: #7E7EB8;
        background-color: #fff;
      }

      <input
        class="c0"
        height="1rem"
        width="200px"
      />
    `);
  });
});
