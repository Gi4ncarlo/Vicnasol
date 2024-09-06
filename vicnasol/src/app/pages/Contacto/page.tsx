import { NextPage } from 'next';

const Contact: NextPage = () => {
  return (
    <div className="container mt-8 mx-auto p-4 max-w-lg bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">Contacto</h2>
      <p className="mb-6 text-gray-600 text-center">
        Por favor, rellene el formulario para más información y nos comunicaremos lo antes posible. Todos los campos son obligatorios.
      </p>
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Nombre:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Ingrese su nombre completo"
            className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Correo Electrónico:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Ingrese su correo electrónico"
            className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Teléfono:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder="Ingrese su número de teléfono"
            className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Mensaje:
          </label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Escriba su mensaje aquí"
            className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 h-32"
            style={{ resize: 'none' }}
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contact;
