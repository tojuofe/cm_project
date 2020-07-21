import React from 'react';

import Commodity from '../card';
import SideNavbar from '../navbar/sideNav';
import { ProductContainer } from '../navbar/style';

const Market = () => (
  <ProductContainer>
    <SideNavbar />
    <div>
      <h4 className='mt-1'>Commodity Market: &#10095;&#10095; Now Selling</h4>
      <Commodity />
    </div>
  </ProductContainer>
);

export default Market;
