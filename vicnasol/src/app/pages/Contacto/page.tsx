"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";

import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Leaf,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Número de WhatsApp (cambiar por el número real)
  const whatsappNumber = "+5989447698";

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    const response = await fetch('https://formspree.io/f/mwpbdpak', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    if (response.ok) {
      setIsSubmitted(true);
      // Reset form
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      }, 3000);
    } else {
      throw new Error('Error en la respuesta');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Error al enviar el formulario');
  }
};

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      `¡Hola! Me interesa conocer más sobre sus servicios de jardinería. Mi nombre es ${
        formData.name || "[Nombre]"
      }.`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  const services = [
    "Diseño de jardines",
    "Mantenimiento de jardines",
    "Poda de árboles",
    "Sistema de riego",
    "Paisajismo",
    "Consultoría",
    "Otro",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="container mx-auto px-4 py-12 ">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Contactanos
          </h2>
          <p className="text-lg text-green-600 max-w-2xl mx-auto">
            Estamos aquí para hacer realidad el jardín de tus sueños.
            Contáctanos por email o WhatsApp para una consulta gratuita.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="shadow-xl border-green-100 bg-white rounded-lg">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-t-lg p-5">
              <div className="flex items-center gap-2 font-bold text-xl">
                <Mail className="h-5 w-5" />
                Envíanos un mensaje
              </div>
              <div className="text-green-100 text-sm">
                Completa el formulario y te responderemos en menos de 24 horas
              </div>
            </div>
            <div className="p-6 bg-white">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    ¡Mensaje enviado!
                  </h3>
                  <p className="text-green-600">
                    Gracias por contactarnos. Te responderemos pronto.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre completo *
                      </label>
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Tu nombre"
                        required
                        className="border-green-200 focus:border-green-500 p-2 text-sm rounded-md w-full border-2 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="tu@email.com"
                        required
                        className="border-green-200 focus:border-green-500 p-2 text-sm rounded-md w-full border-2 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Teléfono
                      </label>
                      <input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+54 11 1234-5678"
                        className="border-green-200 focus:border-green-500 p-2 text-sm rounded-md w-full border-2 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Servicio de interés
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border-green-200 focus:border-green-500 p-2 text-sm rounded-md border-2 focus:outline-none"
                      >
                        <option value="">Selecciona un servicio</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Mensaje *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Cuéntanos sobre tu proyecto de jardinería..."
                      rows={4}
                      required
                      className="border-green-200 focus:border-green-500 p-2 text-sm rounded-md w-full border-2 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white m-auto font-semibold px-4 py-2 rounded-md flex items-center justify-center transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="h-4 w-4 mr-2"/>
                    Enviar mensaje
                  </button>
                </form>
              )}
            </div>
            {/* Footer with Logo */}
              <div className="mt-6 p-4 rounded-b-lg">
                <Image   src="/images/prueba.jpg"
                  width={400}
                  height={400}
                  alt="Logo"
                  className="m-auto rounded-full">
                </Image>
              </div>
          </div>

          {/* Contact Info & WhatsApp */}
          <div className="space-y-6">
            {/* WhatsApp Card */}
            <div className="shadow-xl border-green-100 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-lg">
              <div className="p-6">
                <div className="text-center">
                  <MessageCircle className="h-16 w-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">
                    ¿Necesitas respuesta inmediata?
                  </h3>
                  <p className="mb-6 text-green-100">
                    Chatea con nosotros por WhatsApp y obtén una respuesta al
                    instante
                  </p>
                  <button
                    onClick={openWhatsApp}
                    className="bg-white text-green-600 hover:bg-green-50 font-semibold px-8 py-3 rounded-md flex items-center justify-center transition-colors duration-200 mx-auto"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Abrir WhatsApp
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="shadow-xl border-green-100 p-6 rounded-lg bg-white">
              <div>
                <div className="text-green-800 font-bold text-xl">Información de contacto</div>
              </div>
              <div className="my-4">
                <div className="flex items-center gap-3 mb-3">
                  <Phone className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium">Teléfono</p>
                    <p className="text-gray-600">+598 94 476 398</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <Mail className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">vicnasol@hotmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium">Dirección</p>
                    <p className="text-gray-600">Buenos Aires M7 S4</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Badge */}
            <div className="shadow-xl border-green-100 p-5 rounded-lg bg-white">
              <div>
                <div className="text-green-800 font-bold text-xl">Nuestros servicios</div>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {services.slice(0, -1).map((service) => (
                    <div key={service} className="bg-green-100 text-green-700 rounded-full px-2 py-1 text-sm font-bold">
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Image */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent rounded-2xl"></div>
          <Image
            src="/images/FondoPrinci.jpeg"
            width={1200}
            height={800}
            alt="Jardín hermoso"
            className="w-full h-64 object-cover rounded-2xl"
          ></Image>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-3xl font-bold mb-2">
                Transformamos espacios
              </h3>
              <p className="text-lg">
                Creamos jardines únicos que reflejan tu personalidad
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
