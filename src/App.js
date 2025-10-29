// App.js
import React from 'react';
import ProductCard from './components/ProductCard';

export default function App() {
  return (
    <div style={{ padding: 20, background: '#f5f6f8', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', marginBottom: 20 }}>Demo ProductCard</h1>

      {/* Disponible */}
      <ProductCard
        initialSoldOut={false}
        title="Auriculars Inalàmbrics Pro"
        description="Cancel·lació de soroll avançada, 30 hores de bateria i so d'alta fidelitat. El disseny ergonòmic garanteix la màxima comoditat."
        priceCurrent="99,99 €"
        priceOld="149,99 €"
        image="https://via.placeholder.com/250x350"
        badge="OFERTA"
      />

      {/* Esgotat */}
      <ProductCard
        initialSoldOut={true}
        title="Auriculars Inalàmbrics Pro (Esgotat)"
        description="Model en demostració — temporalment esgotat."
        priceCurrent="99,99 €"
        priceOld="149,99 €"
        image="https://via.placeholder.com/250x350"
        badge="OFERTA"
      />
    </div>
  );
}
