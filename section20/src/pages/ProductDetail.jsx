import React, { Fragment } from 'react'
import {useParams} from 'react-router-dom';

function ProductDetail() {

    const params = useParams();

  return (
      <Fragment>

          <div>ProductDetail</div>
          <p>{params.productID}</p>

      </Fragment>
  )
}

export default ProductDetail;
