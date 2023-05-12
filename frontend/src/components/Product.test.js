import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Products from './Products';
import '@testing-library/jest-dom/extend-expect';

describe('Products', () => {
  const product = {
    _id: '123',
    name: 'Sample Product',
    price: 9.99,
    image: 'sample-image.jpg',
  };

  test('renders product information correctly', () => {
    render(
        <BrowserRouter>
          <Products products={product} />
        </BrowserRouter>
    );

    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', `/product/${product._id}`);

    const imageElement = screen.getByRole('img');
    expect(imageElement).toHaveAttribute('src', product.image);
    expect(imageElement).toHaveAttribute('alt', 'Product');

    const nameElement = screen.getByText(product.name);
    expect(nameElement).toBeInTheDocument();


  });

  test('renders product name as heading', () => {
    render(
        <BrowserRouter>
          <Products products={product} />
        </BrowserRouter>
    );

    const headingElements = screen.getAllByRole('heading', { level: 1 });
    expect(headingElements[0]).toHaveTextContent(product.name);


  });
});
