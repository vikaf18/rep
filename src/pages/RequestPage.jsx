import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2';

const RequestPage = () => {

    const [form, setForm] = useState({
        email: "",
        full_name: "",
        message: "",
        service_id: 1
    });

    const [services, setServices] = useState([]);

    const fetchServices = async () => {
        const r = await fetch('https://exam.avavion.ru/api/services');

        const data = await r.json();

        setServices(data.data);
    }
    

    useEffect(() => {
        fetchServices();
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

    const sendRequest = async (body) => {
        const response = await fetch("https://exam.avavion.ru/api/requests/create", {
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

        sendRequest(form);
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
        <form onSubmit={onSubmitHandle.bind(this)}>
            <div className="form-group">
                <label htmlFor="email">Электронная почта</label>
                <input 
                onChange={onChangeForm.bind(this)}
                value={form.email}
                type="email"
                name="email"
                id="email" />
            </div>

            <div className="form-group">
                <label htmlFor="full_name">Фамилия Имя</label>
                <input 
                    onChange={onChangeForm.bind(this)}
                    value={form.full_name}
                    type="text" 
                    name="full_name" 
                    id="full_name" />
            </div>

            <div className="form-group">
                <label htmlFor="message">Сообщение</label>
                <textarea 
                    onChange={onChangeForm.bind(this)}
                    name="message" 
                    id="message" 
                    cols="30" rows="10">{form.message}</textarea>
            </div>

            <div className="form-group">
                <label htmlFor="service">Выберите услугу</label>
                <select onChange={onChangeSelectForm.bind(this)} name="service_id" id="service">
                    {
                        services.map((service) => {
                            return (
                                <option value={service.id} key={service.id}>
                                    {service.name}
                                </option>
                            )
                        })
                    }
                </select>
            </div>

            <button onClick={onClickHandle.bind(this)}>Отправить сообщение</button>
        </form>
    </div>
  )
}

export default RequestPage