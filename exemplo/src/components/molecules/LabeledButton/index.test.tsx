import { render } from '../../../tools/test-utils';
import LabeledButton, { LabeledButtonSizes } from '.';
import theme, { ThemeColorsType } from '../../../styles/theme';
import { ButtonVariants } from '../../atoms/Button';

const colors = Object.keys(theme.colors);
const variants: ButtonVariants[] = ['text', 'outlined', 'contained'];
const sizes: LabeledButtonSizes[] = ['small', 'large'];

const matriz: Array<Array<String>> = [];

/*
 * Just for test purposes.
 * Only will work ordered with the biggest to the smallest array.
 */
colors.map(color => sizes.map(size => variants.map(variant => matriz.push([size, variant, color]))));

describe('Test case for LabeledButton component', () => {
  // We can even test a list of lists using each:
  it.each(matriz)(
    'should be able to render the LabeledButton component with %s size, %s variant, %s color and match with the snapshot',
    (size, color, variant) => {
      const { container } = render(
        <LabeledButton
          size={size as LabeledButtonSizes}
          color={color as keyof ThemeColorsType}
          variant={variant as ButtonVariants}
        >
          unit test
        </LabeledButton>,
      );

      expect(container).toMatchSnapshot();
    },
  );
});
