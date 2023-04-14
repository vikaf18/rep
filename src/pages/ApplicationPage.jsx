import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2';

const ApplicationPage = () => {

    const [form, setForm] = useState({
        email: "",
        full_name: "",
        message: "",
        service_id: 1
    });

    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const r = await fetch('https://api.avavion.ru/api/products');

        const data = await r.json();

        setProducts(data.data);
    }
    

    useEffect(() => {
        fetchProducts();
    }, [])


    const onSubmitHandle = (event) => {
        event.preventDefault();
    }

    const onChangeForm = (event) => {
        setForm((prevState) => {
            prevState = {...prevState};

            prevState[event.target.name] = event.target.value.trim();

            return prevState;
        });
    }

    const sendApplication = async (body) => {
        const response = await fetch("https://api.avavion.ru/api/applications/create", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept':'application/json'
            },
            body: JSON.stringify(body)
        });

        const data = await response.json();

        if(data.status){
            return Swal.fire({
                icon: 'success',
                title: data.message
            });
        }

        return Swal.fire({
            icon: 'error',
            title: data.message
        })
    }

    const onClickHandle = (event) => {
        event.preventDefault();

        sendApplication(form);
    }

    const onChangeSelectForm = (event) => {

        setForm((prevState) => {
            prevState = {...prevState};

            prevState[event.target.name] = event.target.options[event.target.selectedIndex].value;

            return prevState;
        });
    }

    console.log(form);

  return (
    <div>
        <div className='container'>
            <div className='wrapper'>
                <form onSubmit={onSubmitHandle.bind(this)} className='form'>
                    <div className="form-group">
                        <label htmlFor="email">Электронная почта</label>
                        <input 
                        onChange={onChangeForm.bind(this)}
                        value={form.email}
                        type="email"
                        name="email"
                        id="email" 
                        className='form-input'/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="full_name">Фамилия Имя</label>
                        <input 
                            onChange={onChangeForm.bind(this)}
                            value={form.full_name}
                            type="text" 
                            name="full_name" 
                            id="full_name" 
                            className='form-input'/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="first_name">Имя</label>
                        <input 
                            onChange={onChangeForm.bind(this)}
                            value={form.first_name}
                            type="text" 
                            name="first_name" 
                            id="first_name" 
                            className='form-input'/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="last_name">Фамилия</label>
                        <input 
                            onChange={onChangeForm.bind(this)}
                            value={form.last_name}
                            type="text" 
                            name="last_name" 
                            id="last_name" 
                            className='form-input'/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Сообщение</label>
                        <textarea 
                            className='form-input'
                            onChange={onChangeForm.bind(this)}
                            name="message" 
                            id="message" 
                            cols="30" rows="10">{form.message}</textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="service">Выберите услугу</label>
                        <select onChange={onChangeSelectForm.bind(this)} name="product_id" id="service">
                            {
                                products.map((product) => {
                                    return (
                                        <option value={product.id} key={product.id}>
                                            {product.name}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </div>

                    <button onClick={onClickHandle.bind(this)} className='button'>Отправить сообщение</button>
                </form>
                </div>
        </div>
    </div>
  )
}

export default ApplicationPage