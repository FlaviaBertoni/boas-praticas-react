import { render, screen } from '../../../tools/test-utils';

import Avatar from '.';

describe('Avatar tests case', () => {
  it('should be able to render the Avatar component and match with snapshot', () => {
    const { container } = render(<Avatar name="unit-test" avatarPath="unit-test-img" />);

    expect(screen.getByAltText('user avatar')).toBeInTheDocument();

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-align-content: normal;
        -ms-flex-line-pack: normal;
        align-content: normal;
        justify-items: normal;
        -webkit-box-pack: normal;
        -webkit-justify-content: normal;
        -ms-flex-pack: normal;
        justify-content: normal;
        width: auto;
        height: auto;
        max-width: unset;
        margin: unset;
        padding: unset;
        background-color: unset;
        border: none;
        border-radius: 0;
      }

      .c2 {
        width: 2.5rem;
        height: 2.5rem;
        margin: 0;
        padding: 0;
      }

      .c2 img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: 50%;
      }

      .c1 {
        font-size: 1rem;
        color: #7E7EB8;
        font-weight: normal;
        margin: 0 0.5rem 0 0;
        padding: unset;
        cursor: inherit;
      }

      <div
        class="c0"
        direction="row"
        height="auto"
        width="auto"
      >
        <label
          class="c1"
        >
          unit-test
        </label>
        <div
          class="c2"
          height="2.5rem"
          width="2.5rem"
        >
          <img
            alt="user avatar"
            src="unit-test-img"
          />
        </div>
      </div>
    `);
  });

  it('should be still render the Avatar component without a image path', () => {
    render(<Avatar name="unit-test" />);
    const imageComponent = screen.getByAltText('user avatar');
    expect(imageComponent).toHaveAttribute('src', '');
  });
});
