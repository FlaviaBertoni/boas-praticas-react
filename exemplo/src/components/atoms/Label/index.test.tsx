import { render } from '../../../tools/test-utils';
import Label from '.';
import theme, { ThemeColorsType } from '../../../styles/theme';

type Size = 'small' | 'medium' | 'large' | 'extra-large';
type Weight = 'normal' | 'bold';

const colors = Object.keys(theme.colors);
const sizes = ['small', 'medium', 'large', 'extra-large'];
const weights = ['normal', 'bold'];

const matriz: Array<Array<String>> = [];

/*
 * Just for test purposes.
 * Only will work ordered with the biggest to the smallest array.
 */
colors.map(color => sizes.map(size => weights.map(weight => matriz.push([size, weight, color]))));

describe('Test case for Label component', () => {
  // We can create tests to check just one property

  it('should be able to render the Label component with small size', () => {
    const { container } = render(<Label size="small">unit test</Label>);

    // these assertions were using jest-style-component lib
    expect(container.firstChild).toHaveStyleRule('font-size', '1rem');
    expect(container.firstChild).toHaveStyleRule('color', theme.colors.primary);

    // this assertion was using only jest matcher
    expect(container.firstChild).toHaveStyle({
      fontSize: '1rem',
      color: theme.colors.primary,
      fontWeight: 'normal',
    });
  });

  // We can test a list of properties using each.
  it.each(colors)('should be able to render the Label component for %s color and match with the snapshot', color => {
    const { container } = render(
      <Label size="small" color={color as keyof ThemeColorsType}>
        unit test
      </Label>,
    );

    expect(container).toMatchSnapshot();
  });

  // We can even test a list of lists using each:
  it.each(matriz)(
    'should be able to render the Label component with %s size, %s weight, %s color and match with the snapshot',
    (size, color, weight) => {
      const { container } = render(
        <Label size={size as Size} color={color as keyof ThemeColorsType} weight={weight as Weight}>
          unit test
        </Label>,
      );

      expect(container).toMatchSnapshot();
    },
  );

  // Also we can use a inline snapshot
  it('should be able to render', () => {
    const { container } = render(<Label size="extra-large">unit test</Label>);

    expect(container).toMatchInlineSnapshot(`
      .c0 {
        font-size: 3rem;
        color: #7E7EB8;
        font-weight: normal;
        margin: unset;
        padding: unset;
        cursor: inherit;
      }

      <div>
        <label
          class="c0"
        >
          unit test
        </label>
      </div>
    `);
  });
});
