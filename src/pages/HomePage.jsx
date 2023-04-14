import {useEffect, useState} from "react"
import { NavLink } from "react-router-dom";
import SinglePage from "../pages/SinglePage";

const HomePage = () => {

    const [services, setServices] = useState([]);

    const fetchServices = async () => {
        const r = await fetch('https://exam.avavion.ru/api/services');

        const data = await r.json();

        setServices(data.data);
    }
    

    useEffect(() => {
        fetchServices();
    }, [])

    const [query, setQuery] = useState("");

    const filteredServices = services.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()));

    const onChangeQuery = (event) => {
        setQuery(event.target.value);
    }

  return (
    <div className="container">
        <div class="wrapper">
            <section className="section">
                <div className="search-box">

                    <input
                        value={query}
                        onChange={(e) => onChangeQuery(e)}
                        type="text"
                        placeholder="Поиск..."
                        className="input"
                    />
                </div><br></br>

                <div className="services">

                    {
                        filteredServices.length ?
                            (
                                filteredServices.map((service) => {
                                    return (
                                        <div className="service" key={service.id}>
                                            <img src={service.image_url} alt="" />
                                            <h2>{service.name}</h2>
                                            <h3>{service.price} руб.</h3>
                                            <p>{service.content}</p>

                                            <NavLink to={`/services/${service.id}`}><div className='button'>перейти</div></NavLink>
                                        </div>
                                    );
                                })
                            )

                            :

                            <h2>По вашему запросу "{query}" ничего не найдено!</h2>
                    }

                </div>
            </section>
        </div>
    </div>
  )
}

export default HomePage