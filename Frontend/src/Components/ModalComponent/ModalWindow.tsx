import React from "react";

interface ModalProps {
    isOpen: boolean;
    message: string;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, message, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
            <div className="bg-white p-8 rounded-lg text-center">
                <p>{message}</p>
                <div className="mt-4">
                    <button onClick={onClose} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Close</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
