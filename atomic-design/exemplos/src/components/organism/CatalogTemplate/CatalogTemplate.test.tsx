import { render, screen } from '../../../tools/test-utils';
import CatalogTemplate from '.';
import theme from '../../../styles/theme';

describe('Catalog Template test cases', () => {
  it('should be able able to render the CatalogTemplete component with the title, subtitle and grid', () => {
    render(<CatalogTemplate title="Title" subtitle="Subtitle" />);

    // We can assert using a11y as the React Testing Library recommends.
    // https://testing-library.com/docs/react-testing-library/intro
    expect(screen.getByRole('heading', { name: 'Title' })).toBeInTheDocument();

    // Also we can use Regex to find texts
    expect(screen.getByRole('heading', { name: /subtitle/i })).toBeInTheDocument();

    expect(screen.getByRole('grid')).toBeInTheDocument();
  });

  it('should be able to render the component without the subtitle property', () => {
    render(<CatalogTemplate title="Title" />);

    // queryBy will try to find an element and return null if not found.
    // exactly fit with this case
    expect(screen.queryByRole('heading', { name: /subtitle/i })).not.toBeInTheDocument();
  });

  it('should be able to match with the title and subtile color', () => {
    render(<CatalogTemplate title="Title" subtitle="Subtitle" titleColor="primary" subtitleColor="dark" />);

    const title = screen.getByRole('heading', { name: 'Title' });
    const subtitle = screen.getByRole('heading', { name: /subtitle/i });

    expect(title).toHaveStyleRule('color', theme.colors.primary);
    expect(subtitle).toHaveStyleRule('color', theme.colors.dark);
  });
});
