import { createContext, useState } from "react";
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header';
import CartButton from "../components/CartButton/CartButton";

export const CartContext = createContext({});
export const ModalContext = createContext({});

const Root = () => {
  const [isModalActive, setIsModalActive] = useState(false);

    const toggleModal = setIsModalActive.bind(this, !isModalActive);
  return (


                      <ModalContext.Provider value={{ isModalActive, toggleModal }}>
                          <div className="layout">
                              <Header />
                              <main>
                                  <Outlet />
                              </main>

                              <CartButton />
                          </div>
                      </ModalContext.Provider>

        

  )
}

export default Root;