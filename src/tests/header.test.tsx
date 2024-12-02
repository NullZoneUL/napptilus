import Header from '@components/header';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

jest.mock('@assets/strings.json', () => ({
  header: 'Test Header',
}));

describe('Header component', () => {
  it('should render the logo image with the correct src and alt attributes', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    const logoImage = screen.getByAltText('Logo') as HTMLImageElement;

    expect(logoImage).toBeInTheDocument();
    expect(logoImage.src).toContain('/android-chrome-192x192.png');
    expect(logoImage.alt).toBe('Logo');
  });

  it('should render the header text from Translations', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    expect(screen.getByText('Test Header')).toBeInTheDocument();
  });

  it('should have a link that navigates to the correct route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>,
    );

    const link = screen.getByRole('link', { name: /Logo/i });

    expect(link).toHaveAttribute('href', '/index');
  });
});
