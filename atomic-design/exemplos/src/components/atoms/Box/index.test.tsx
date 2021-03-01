import { render } from '../../../tools/test-utils';

import Box from '.';
import theme from '../../../styles/theme';

describe('Box test case', () => {
  it('should be render the Box Component', () => {
    render(<Box />);
  });

  it('should be able to render the Box Component receiving properties and rendering childrens components', () => {
    const { container } = render(
      <Box
        direction="column"
        borderRadius="4px"
        bgColor="disable"
        padding="0.5rem"
        margin="0.5rem"
        border={`1px solid ${theme.colors.black}`}
      >
        <p>text</p>
        <p>other text</p>
        <p>one more</p>
      </Box>,
    );

    expect(container.firstChild).toHaveStyleRule('border-radius', '4px');
    expect(container.firstChild).toHaveStyleRule('flex-direction', 'column');
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        width: auto;
        height: auto;
        margin: 0.5rem;
        padding: 0.5rem;
        background-color: disable;
        border: 1px solid #000;
        border-radius: 4px;
      }

      <div>
        <div
          class="c0"
          direction="column"
          height="auto"
          width="auto"
        >
          <p>
            text
          </p>
          <p>
            other text
          </p>
          <p>
            one more
          </p>
        </div>
      </div>
    `);
  });
});
