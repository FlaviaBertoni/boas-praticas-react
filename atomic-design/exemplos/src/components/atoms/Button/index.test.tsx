import { render } from '../../../tools/test-utils';
import Button, { ButtonVariants } from '.';
import theme, { ThemeColorsType } from '../../../styles/theme';

const colors = Object.keys(theme.colors);
const variants: ButtonVariants[] = ['text', 'outlined', 'contained'];

describe('Test case for Button component', () => {
  it('should be able to render the Button component without width', () => {
    const { container } = render(<Button>Text</Button>);

    // these assertions were using jest-style-component lib
    expect(container.firstChild).not.toHaveStyleRule('width', '150px');
  });

  it('should be able to render the Button component with width', () => {
    const { container } = render(<Button width="150px">Text</Button>);

    // these assertions were using jest-style-component lib
    expect(container.firstChild).toHaveStyleRule('width', '150px');
  });

  // We can test a list of properties using each.
  it.each(colors)('should be able to render the Button component for %s color and match with the snapshot', color => {
    const { container } = render(<Button color={color as keyof ThemeColorsType}>unit test</Button>);

    expect(container).toMatchSnapshot();
  });

  // We can test a list of properties using each.
  it.each(variants)(
    'should be able to render the Button component for %s variant and match with the snapshot',
    variant => {
      const { container } = render(<Button variant={variant}>unit test</Button>);

      expect(container).toMatchSnapshot();
    },
  );

  it('should be able to render a Button with black theme colors', () => {
    const { container } = render(<Button variant="contained" color="white" />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        margin: 10px;
        border-radius: 16px;
        height: 48px;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        cursor: pointer;
      }

      .c0:active {
        position: relative;
        top: 2px;
      }

      .c1 {
        border: 1px solid transparent;
        color: #000;
        background-color: #fff;
      }

      <button
        class="c0 c1"
        color="white"
      />
    `);
  });
});
