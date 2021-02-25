import { render } from '../../../tools/test-utils';
import Button, { buttonVariantType } from '.';
import theme, { ThemeColorsType } from '../../../styles/theme';

const colors = Object.keys(theme.colors);
const variants: buttonVariantType[] = ['text', 'outlined', 'contained'];

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
});
