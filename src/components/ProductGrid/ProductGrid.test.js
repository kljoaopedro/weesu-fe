import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProductGrid from './ProductGrid';

// Função auxiliar para renderizar o componente com o contexto do Router
function renderWithRouter(ui, { route = '/' } = {}) {
    window.history.pushState({}, 'Test page', route);
    return render(ui, { wrapper: BrowserRouter });
}

describe('ProductGrid Component', () => {
    it('renders correctly when products have value', () => {
        const products = [{ id: 1, name: 'Product 1', thumbnail: 'image.jpg', linkML: 'link', price: 100, originalPrice: 120 }];

        // Renderiza o componente com o Router
        renderWithRouter(<ProductGrid isLoadingProducts={false} products={products} />);

        const productGridDiv = screen.getByTestId('product-grid');
        expect(productGridDiv).toBeInTheDocument();
    });
});
