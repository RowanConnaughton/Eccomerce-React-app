import React from 'react'
import { Route, Routes } from "react-router-dom";

import CollectionsOverview from '../../components/collections-overview/collections-overview.componect'

import CollectionPage from '../collection/collection';

const ShopPage = () => {

        
         return (
            <div className="shop-page">
            <h1>Collections</h1>
            <Routes>
              <Route exact path="/*" element={<CollectionsOverview />} />
              <Route exact path=":collectionId" element={<CollectionPage />} />
            </Routes>
          </div>
    )
    
   
}



export default ShopPage
