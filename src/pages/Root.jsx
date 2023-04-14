import { createContext, useState } from "react";
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header';



const Root = () => {

  return (
    <div className="layout">
        <Header />
        <main>
            <Outlet />
        </main>

    </div>
  )
}

export default Root;