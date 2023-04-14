import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom';

const SinglePage = () => {

    const params = useParams();

    const [service, setService] = useState({});

    // console.log(params);

    useEffect(() => {
        fetch(`https://exam.avavion.ru/api/services/${params.id}`)
            .then((r) => r.json())
            .then((data) => setService(data.data));
    }, []);

  return (
    
      <div class="container">
        <div class="wrapper">
          <div key={service.id} className='singlepage'>
              <img src={service.image_url} alt="" />
              <h2>{service.name}</h2>
              <p>{service.content}</p>

              <NavLink to={`/`}><div className='button'>назад</div></NavLink>
          </div>
        </div>
      </div>

  )
}

export default SinglePage