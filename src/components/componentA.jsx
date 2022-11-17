import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Contacto } from "../models/contacto.class";
import ComponentB from "./componentB";

const ComponentA=()=>{
    const contacto=new Contacto('Michel', 'Machin', 'michelma1988@gmail.com', false);

    return(
        <div className='container-fluid vh-100 d-flex align-items-center justify-content-center'>
            <ComponentB contacto={contacto} />
        </div>
    );
}

export default ComponentA