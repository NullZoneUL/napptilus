import Item from '@elements/list/item';
import Translations from '@assets/strings.json';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { Routes } from '@/routes/pageConfig';

const mockData = {
  first_name: 'John',
  last_name: 'Doe',
  favorite: {
    color: 'Blue',
    food: 'Pizza',
    random_string: 'Lorem Ipsum',
    song: 'Imagine',
  },
  gender: 'M' as 'M' | 'F',
  image: 'https://example.com/image.jpg',
  profession: 'Engineer',
  email: 'john.doe@example.com',
  age: 30,
  country: 'USA',
  height: 180,
  id: 1,
};

describe('Item Component', () => {
  it('renders the component correctly with given data', () => {
    render(
      <MemoryRouter>
        <Item data={mockData} />
      </MemoryRouter>,
    );

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', mockData.image);
    expect(
      screen.getByText(`${mockData.first_name} ${mockData.last_name}`),
    ).toBeInTheDocument();
    expect(screen.getByText(Translations.male)).toBeInTheDocument();
    expect(screen.getByText(mockData.profession)).toBeInTheDocument();
  });

  it('renders the correct link for the item', () => {
    render(
      <MemoryRouter>
        <Item data={mockData} />
      </MemoryRouter>,
    );

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', `/${Routes.detail}/${mockData.id}`);
  });

  it('renders the female translation when gender is F', () => {
    const femaleData = { ...mockData, gender: 'F' as 'M' | 'F' };

    render(
      <MemoryRouter>
        <Item data={femaleData} />
      </MemoryRouter>,
    );

    expect(screen.getByText(Translations.female)).toBeInTheDocument();
  });
});
