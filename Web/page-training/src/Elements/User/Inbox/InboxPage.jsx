import React, { useState } from 'react';
import './InboxPage.css';

const Inbox = () => {
    const [selectedMessage, setSelectedMessage] = useState(null);

    const messages = [
        {
            id: 1,
            date: '7 de dic de 2023',
            sender: 'Leopoldo Zúñiga Silva, Óscar Emiliano',
            subject: 'Calificaciones Finales',
            preview: 'Estimados alumnos: Ya están liberadas...',
        },
        {
            id: 2,
            date: '7 de dic de 2023',
            sender: 'Leopoldo Zúñiga Silva, Óscar Emiliano',
            subject: 'Sobre Calif. Finales',
            preview: 'Estimados alumnos: Aún me faltan algunos...',
        },
        {
            id: 3,
            date: '4 de dic de 2023',
            sender: 'Nahum Andrés Medellín Castillo, Óscar Emiliano',
            subject: 'Calificaciones finales_UF Nahum Medellín',
            preview: 'Estimados alumnos: Les envío sus calific...',
        },
    ];

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="w-1/3 border-r border-gray-300">
                <div className="p-4 border-b">
                    <h1 className="text-lg font-semibold">Bandeja de entrada</h1>
                </div>
                <ul className="overflow-y-auto h-full">
                    {messages.map((message) => (
                        <li
                            key={message.id}
                            onClick={() => setSelectedMessage(message)}
                            className={`p-4 border-b hover:bg-gray-100 cursor-pointer ${
                                selectedMessage?.id === message.id ? 'bg-gray-200' : ''
                            }`}
                        >
                            <p className="text-sm text-gray-500">{message.date}</p>
                            <p className="font-semibold">{message.sender}</p>
                            <p className="text-sm text-gray-500">{message.subject}</p>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Message View */}
            <div className="flex-1 flex items-center justify-center">
                {selectedMessage ? (
                    <div className="p-8">
                        <h2 className="text-xl font-bold mb-4">{selectedMessage.subject}</h2>
                        <p className="text-gray-500">{selectedMessage.sender}</p>
                        <p className="mt-4">{selectedMessage.preview}</p>
                    </div>
                ) : (
                    <div className="text-center text-gray-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-16 h-16 mx-auto mb-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21.75 9v9.75a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V9m0 0L12 3l9.75 6z"
                            />
                        </svg>
                        <p>No se han seleccionado conversaciones</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Inbox;
