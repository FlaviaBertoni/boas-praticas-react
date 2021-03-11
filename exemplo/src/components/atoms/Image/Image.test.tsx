import { render, screen } from '../../../tools/test-utils';
import Image from '.';

describe('Image test cases', () => {
  it('should be able to render the Image component', () => {
    const path = 'unit-test-path';
    const { container } = render(<Image imgPath={path} alt="unit-test" />);

    const img = screen.getByAltText('unit-test');

    expect(img).toHaveAttribute('src', path);

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
      }

      .c0 img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: 0;
      }

      <div
        class="c0"
        height="100%"
        width="100%"
      >
        <img
          alt="unit-test"
          src="unit-test-path"
        />
      </div>
    `);
  });
});
