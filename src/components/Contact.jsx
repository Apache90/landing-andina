import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [alertMessage, setAlertMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then(
        (result) => {
          console.log(result.text);
          setAlertMessage('Mensaje enviado correctamente');
        },
        (error) => {
          console.log(error.text);
          setAlertMessage('Hubo un error al enviar el mensaje. Por favor intenta de nuevo.');
        }
      );
  };

  return (
    <div className='mt-20' id='contact'>
      <h1 className="font-fredoka text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-center m-10">Contactanos</h1>
      <form ref={form} onSubmit={sendEmail} className="max-w-auto mx-auto lg:pr-40 lg:pl-40 md:pr-20 md:pl-20 pr-5 pl-5">
        <label className="block mb-2 text-gray-700">Nombre / Empresa</label>
        <input type="text" name="user_name" required className="w-full p-2 mb-4 border rounded" placeholder='Ingrese su nombre' />
        <label className="block mb-2 text-gray-700">Email</label>
        <input type="email" name="user_email" required className="w-full p-2 mb-4 border rounded" placeholder='Ingrese su correo electronico' />
        <label className="block mb-2 text-gray-700">Mensaje</label>
        <textarea name="message" required className="w-full p-2 mb-4 border rounded"  placeholder='Envienos su peticion de informacion adicional o presupuesto y sera respondida a la brevedad'></textarea>
        <center><button type="submit" className="px-20 py-3 font-bold text-white bg-borraDeVino rounded hover:bg-orange-500">
          Enviar
        </button></center>
      </form>
      {alertMessage && (
        <div className="mt-8 p-3 bg-red-100 text-red-700 rounded">
          {alertMessage}
        </div>
      )}
    </div>
  );
};

export default Contact;
