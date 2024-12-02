import Searcher from '@elements/searcher';
import { render, screen } from '@testing-library/react';

jest.mock('@assets/strings.json', () => ({
  search: 'Search...',
}));

describe('Searcher Component', () => {
  it('should render the search input field', () => {
    render(<Searcher onInput={jest.fn()} />);

    const inputElement = screen.getByPlaceholderText('Search...');
    expect(inputElement).toBeInTheDocument();
  });

  it('should initialize input with default value', () => {
    const defaultValue = 'test';
    render(<Searcher onInput={jest.fn()} defaultValue={defaultValue} />);

    const inputElement = screen.getByPlaceholderText('Search...');
    expect(inputElement).toHaveValue(defaultValue);
  });

  it('should clear the timeout on unmount', () => {
    const clearTimeoutMock = jest.fn();
    globalThis.clearTimeout = clearTimeoutMock;

    const { unmount } = render(<Searcher onInput={jest.fn()} />);
    unmount();

    expect(clearTimeoutMock).toHaveBeenCalled();
  });

  it('should render the search icon', () => {
    render(<Searcher onInput={jest.fn()} />);

    const searchIcon = screen.getByRole('img');
    expect(searchIcon).toBeInTheDocument();
    expect(searchIcon).toHaveAttribute(
      'src',
      expect.stringContaining('testing'),
    );
  });
});
