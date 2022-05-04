const axios = require('axios');
const fs = require('fs').promises;


axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then((response) => {
        console.log('Successfully retrieved our list of movies');

        // Extraer los datos son importantes
        var datos = response.data.bpi
        var datos_moneda= ["BTC","BCH","USDTether","USDC"] // clasificacion de moneda
        var valores = []
        // Ordenas los Datos
        datos_moneda.forEach(datos_moneda) 
            var linea = " "+ moneda + ": "+ datos[moneda].rate.toString()
            valores.push(linea)
        })
        
        var salida = ["Valor actual del Bitcoin \n"]
       console.log(salida[0])
       
       valores.forEach(v =>{
           console.log(v)
            salida.push(v.toString()+"\n") 
        })


       fs.writeFile("Precio en Bitcoin.txt",salida,(errores)=>{
           console.log(errores)
       })
    