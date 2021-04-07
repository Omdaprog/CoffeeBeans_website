import React from 'react'
import CollectionFilterNav from '../Components/categorie/CollectionFilterNav'
import CollectionHero from '../Components/categorie/CollectionHero'
import ProductList from '../Components/categorie/ProductList'

function CategoryPage() {
    return (
      <>
        <CollectionHero />
        <CollectionFilterNav />
        <ProductList />
      </>
    );
}

export default CategoryPage
