import { render } from '../../../tools/test-utils';

import { Background } from '.';

describe('Background test case', () => {
  it('should be able to receive the url parameter and appears in the component properties', () => {
    const url = 'unit-test-url';
    const { container } = render(<Background url={url} />);
    expect(container.firstChild).toHaveStyleRule('background', new RegExp(url, 'i'));
  });
});
