import React from 'react';
import '../styles/NotFound.scss'

const NotFound = () => {
    return (
      /*  <div>
            No encontrado, error 404
        </div>*/
        <div id="not-found" >
        <div id="error-page">
         <div className="content">
            <h2 className="header" data-text="404">
               404
            </h2>
            <h4 data-text="Opps! Page not found">
               Pagina no encontrada
            </h4>
            

         </div>
      </div>
      </div>
    );
}

export default NotFound;