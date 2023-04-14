import {useEffect, useState} from "react"
import { NavLink } from "react-router-dom";
import SinglePage from "../pages/SinglePage";

const HomePage = () => {

    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const r = await fetch('https://api.avavion.ru/api/products');

        const data = await r.json();

        setProducts(data.data);
    }
    

    const discountCount = (price, discount) => {
        return Math.round(price - ((price * discount)/100));
    }
    
    useEffect(() => {
        fetchProducts();
    }, [])

    const [query, setQuery] = useState("");

    const filteredProducts = products.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()));

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
                        filteredProducts.length ?
                            (
                                filteredProducts.map((product) => {
                                    return (
                                        <div className="service" key={product.id}>
                                            
                                            <img src={product.image_url} alt="" />
                                            <h2>{product.name}</h2>
                                            
                                            <h3>{product.price} руб. {discountCount([product.item])}</h3>
                                                
                                            <p>{product.short_text}</p>

                                            <NavLink to={`/products/${product.id}`}><div className='button'>перейти</div></NavLink>
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