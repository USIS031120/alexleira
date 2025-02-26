
import React, { useState } from 'react'

export const Contacto = () => {


    const [ data, setData ] = useState({
        nombre: '',
        correo: '',
        mensaje: ''
    });
    const onFocus = (e) => {
        let label = e.target.parentNode.querySelector("label");
        label.classList.add("active");
    }

    const onBlur = (e) => {
        if (data[e.target.name] != '') return;
        let label = e.target.parentNode.querySelector("label");
        label.classList.remove("active");
    }

    const onTextCambiado = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
        
    }

    const onSubmit = (e) => {
        
        e.preventDefault();
        fetch('/correo.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(data).toString()
        })
        .then(response => response.text())
        .then(result => {
            console.log('Success:', result);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
    
    
  return (
    <div className="contacto">
        <div className="container pb-28  m-auto px-5 mediano:px-0 w-full max-w-[1000px]">
            <h2 className='font-bold mediano:my-28 my-[50px] mediano:text-5xl text-[32px] text-center'>CONTACTO</h2>

            <form className='flex flex-wrap justify-between' action="https://formsubmit.co/21906e9ac84f68b72349f6eefd4c3248" method='POST'>
    <div className="grupo mediano:w-2/5 mediano:mb-0 mb-10 w-full relative">
        <label className='mediano:text-xl text-sm mb-5 transition-all duration-300 absolute text-black bottom-0 left-0' htmlFor="nombre">
            Nombre:
        </label>
        <input id='nombre' onChange={onTextCambiado} name='nombre' value={data.nombre} onFocus={onFocus} onBlur={onBlur} className='bg-transparent text-xl w-full border-black border-b-2 outline-none' required type="text" />
    </div>
    <div className="grupo mediano:w-2/5 w-full relative">
        <label className='mediano:text-xl text-sm transition-all duration-300 mb-5 absolute bottom-0 text-black left-0' htmlFor="correo">
            Correo:
        </label>
        <input id='correo' value={data.correo} onChange={onTextCambiado} onFocus={onFocus} name='correo' onBlur={onBlur} className='bg-transparent w-full text-xl border-black border-b-2 outline-none' required type="email" />
    </div>
    <div className="grupo my-10 w-full">
        <textarea value={data.mensaje} onChange={onTextCambiado} placeholder='Mensaje:' className='text-black min-h-[245px] max-h-[245px] placeholder-current mediano:p-[20px] p-[30px] text-sm mediano:text-xl w-full rounded-[10px] h-[245px] outline-none bg-transparent border-2 border-black' required name="mensaje"></textarea>
    </div>
    <button className="btn bg-green mediano:text-xl text-white text-center w-full mediano:p-7 p-4 rounded-[10px]" type='submit'>Enviar</button>
</form>

        </div>
    </div>
  )
}
