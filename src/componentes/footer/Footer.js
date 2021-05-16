import React from 'react';


class Footer extends React.Component {

    render() {

        return (

          
            <footer className = "container p-3 my-3 border"  style={{backgroundColor: '#AED6F1'}}>
                 
            <p className = "float-right font-weight-bold"  > < a href = "#" > Subir < /a></p >
            <p class="font-weight-bold">Esencia y bienestar plus - Medellín 
            Versión  1 - {
                (new Date().getFullYear())
            }
             < /p>
            
            </footer>
         
        )

    }

}

export default Footer;