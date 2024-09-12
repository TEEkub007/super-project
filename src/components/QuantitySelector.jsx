import React, { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function QuantitySelector({ onAddToCart }) {
    const [quantity, setQuantity] = useState(1);
    const MySwal = withReactContent(Swal);

    const changeQuantity = (amount) => {
        const newQuantity = quantity + amount;
        if (newQuantity >= 1) {
            setQuantity(newQuantity);
        }
    };

    const handleAddToCart = () => {
        if (quantity < 1) {
            console.error("Quantity must be at least 1");
            return;
        }
        onAddToCart(quantity);
        showAddCartAlert(); 
    };

    const showAddCartAlert = () => {
        MySwal.fire({
            title: "เพิ่มสินค้าเรียบร้อย!",
            text: "สินค้าได้ถูกเพิ่มลงในตะกร้าแล้ว",
            icon: "success",
            confirmButtonText: "ตกลง"
        });
    };

    return (
        <div className="flex flex-col items-center">
            <div className='flex items-center text-gray-600 mb-4'>
                <button 
                    onClick={() => changeQuantity(-1)} 
                    className='bg-gray-200 hover:bg-gray-300 border rounded-l-lg px-4 py-2 text-purple-600 hover:text-purple-800 transition duration-300 ease-in-out'
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-minus">
                        <path d="M5 12h14"/>
                    </svg>
                </button>
                <input 
                    className="border border-gray-300 p-2 text-center w-16 font-medium text-gray-700" 
                    type="text" 
                    value={quantity} 
                    readOnly 
                />
                <button 
                    onClick={() => changeQuantity(1)} 
                    className='bg-gray-200 hover:bg-gray-300 border rounded-r-lg px-4 py-2 text-purple-600 hover:text-purple-800 transition duration-300 ease-in-out'
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus">
                        <path d="M5 12h14"/>
                        <path d="M12 5v14"/>
                    </svg>
                </button>
            </div>

            <button 
                className="flex items-center space-x-2 text-white bg-purple-600 hover:bg-purple-700 p-3 rounded-lg shadow-md transition duration-300 ease-in-out" 
                onClick={handleAddToCart}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-basket">
                    <path d="m15 11-1 9" />
                    <path d="m19 11-4-7" />
                    <path d="M2 11h20" />
                    <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4" />
                    <path d="M4.5 15.5h15" />
                    <path d="m5 11 4-7" />
                    <path d="m9 11 1 9" />
                </svg>
                <p>ใส่ตะกร้า</p>
            </button>
        </div>
    );
}

export default QuantitySelector;
