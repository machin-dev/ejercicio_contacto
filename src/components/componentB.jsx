import React from "react";
import PropType from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-icons/fc';
import { Contacto } from "../models/contacto.class";
import { FcAddressBook } from "react-icons/fc";


const ComponentB=({contacto})=>{
    return(
       <div className="card">        
        <div className="card-body">
            <h2 className="card-title">{contacto.name}</h2>
            <h4 className="card-text text-muted">{contacto.lastname}</h4>
            <p className="text-secondary"><FcAddressBook /> {contacto.email}</p>            
        </div>
          {contacto.conected ? (
                <>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                      Contacto en linea
                     <span className="visually-hidden">unread messages</span>
                </span>
                </>
          ) : (
                <>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      Contacto no disponible
                     <span className="visually-hidden">estado del contacto</span>
                </span>
                </>
          )}
       </div>
    );
    
};
ComponentB.propType={
    contacto: PropType.instanceOf(Contacto)
};
export default ComponentB