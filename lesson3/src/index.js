//B1 import React
import React, { StrictMode,  } from 'react'
import {createRoot} from "react-dom/client"
import App from './app'
//B2 Khai báo dom
const root = document.querySelector("#root")

//B3 Tao react dom
const reactRoot = createRoot(root)

//b4 render
reactRoot.render(

    <StrictMode>
        <App />
    </StrictMode>
)


