import '../CSS/componentes.css'
// import wepacklogo from '../assets/img/webpack-logo.png'

export const saludar = (nombre = 'sin nombre') => {
    console.log('Creando eqtiqueta h1');
    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${nombre}`;
    document.body.append(h1);

    //img 

    // const img = document.createElement('img');
    // img.src = wepacklogo;
    // document.body.append(img);
}