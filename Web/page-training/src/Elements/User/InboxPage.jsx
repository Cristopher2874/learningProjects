import React, { useState } from 'react';

const Inbox = () => {
    const [selectedMessage, setSelectedMessage] = useState(null);

    const messages = [
        {
            id: 1,
            date: 'Dec 7, 2023',
            sender: 'Leopoldo Zúñiga Silva, Óscar Emiliano',
            subject: 'Final Grades',
            preview: 'Dear students: The final grades are now available...',
        },
        {
            id: 2,
            date: 'Dec 7, 2023',
            sender: 'Leopoldo Zúñiga Silva, Óscar Emiliano',
            subject: 'About Final Grades',
            preview: 'Dear students: I am still missing some...',
        },
        {
            id: 3,
            date: 'Dec 4, 2023',
            sender: 'Nahum Andrés Medellín Castillo, Óscar Emiliano',
            subject: 'Final Grades_UF Nahum Medellín',
            preview: 'Dear students: I am sending your grades...',
        },
    ];

    return (
        <div className="flex h-screen text-black">
            <div className="w-1/3 border-r border-gray-300">
                <div className="p-4 border-b">
                    <h1 className="text-lg font-semibold text-black">Inbox</h1>
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
                            <p className="font-semibold text-black">{message.sender}</p>
                            <p className="text-sm text-gray-500">{message.subject}</p>
                        </li>
                    ))}
                </ul>
            </div>
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
                        <p>No conversations selected</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Inbox;
