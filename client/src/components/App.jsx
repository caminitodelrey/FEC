import React, { useState } from 'react';
import { getData } from '../../helper.js';

import { GlobalStyle } from '../theme/globalStyle.js';

import Header from './header/Header.jsx';
import ProductInfo from './product-info/product-info.jsx';
import RelatedProducts from './related-products/RelatedProducts.jsx';
import QA from './QA/QA.jsx';
import RatingsReviews from './ratings-and-reviews/ratings-and-reviews.jsx';

// main eg --> id: 37311
// an example with 6 related products --> id: 37318
// an example with sale price --> id: 37325
export default function App() {
  const [selectedProduct, setSelectedProduct] = useState({
    // "id": 37311,
    // "campus": "hr-rfe",
    // "name": "Camo Onesie",
    // "slogan": "Blend in to your crowd",
    // "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
    // "category": "Jackets",
    // "default_price": "140.00",
    // "created_at": "2021-08-13T14:37:33.145Z",
    // "updated_at": "2021-08-13T14:37:33.145Z",
    // "features": [
    //   {
    //     "feature": "Fabric",
    //     "value": "Canvas"
    //   },
    //   {
    //     "feature": "Buttons",
    //     "value": "Brass"
    //   }
    // ],
    "id": 37327,
    "campus": "hr-rfe",
    "name": "Dorris 400 Tank Top",
    "slogan": "Rerum alias numquam nobis rem ex quasi voluptatem veritatis.",
    "description": "Modi et est excepturi occaecati asperiores nulla in dicta et. Ex nihil inventore reprehenderit impedit atque qui. Iusto quis fuga. Velit similique molestiae perferendis ea. Itaque repellendus tenetur enim harum ipsa voluptatem rerum magni. Repellat eligendi qui recusandae quas.",
    "category": "Tank Top",
    "default_price": "830.00",
    "created_at": "2021-08-13T14:37:33.285Z",
    "updated_at": "2021-08-13T14:37:33.285Z",
    "features": [
      {
        "feature": "Buttons",
        "value": "\"Blue Resin\""
      }
    ]
  });

  const handleProductChange = (productId) => {
    getData(`products/${productId}`).then(({ data }) => {
      setSelectedProduct(data);
    });
  };

  // const wishlistRef = useRef();

  // const executeScroll = () => {
  //   wishlistRef.current.scrollIntoView();
  // };

  return (
    <div>
      <GlobalStyle />
      <Header
        handleProductChange={handleProductChange}
      />
      <div style={{ 'padding': '0 15rem 10rem 15rem' }}>
        <ProductInfo product={selectedProduct} />
        <RelatedProducts
          product={selectedProduct}
          handleProductChange={handleProductChange}
        />
        <QA product={selectedProduct} />
        <RatingsReviews product={selectedProduct} />
      </div>
    </div>
  );
}
