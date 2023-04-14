import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom';

const SinglePage = () => {

    const params = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`https://api.avavion.ru/api/products/${params.id}`)
            .then((r) => r.json())
            .then((data) => setProduct(data.data));
    }, []);

  return (
    
      <div class="container">
        <div class="wrapper">
          <div key={product.id} className='singlepage'>
              <img src={product.image_url} alt="" />
              <h2>{product.name}</h2>
              <p>{product.text}</p>
              <p>{product.price} руб.</p>

              <NavLink to={`/`}><div className='button'>назад</div></NavLink>
          </div>
        </div>
      </div>

  )
}

export default SinglePage