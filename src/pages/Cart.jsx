import React, { useContext } from 'react';
import Layout from '../components/Layout';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { CartContext } from '../Contexts/CartContext';

const Cart = () => {
    const { cartItems, removeFromCart, decreaseQuantity, increaseQuantity } = useContext(CartContext);

    // ฟังก์ชันในการคำนวณยอดรวม
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.quantity * parseFloat(item.price.replace('฿', ''))), 0).toFixed(2);
    };



    //  ฟังก์ชันในการลบสินค้า
    const MySwal = withReactContent(Swal);

    const handleRemoveItem = (itemName) => {
        showAlertRemoveProduct(itemName);
    };
    
    const showAlertRemoveProduct = (itemName) => {
        MySwal.fire({
            title: "ต้องการลบสินค้าหรือไม่?",
            text: "ต้องการลบจำนวนสินค้าทั้งหมดหรือไม่",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "ตกลง",
            cancelButtonText: "ยกเลิก",
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {
                removeFromCart(itemName);
                MySwal.fire({
                    title: "ลบสินค้าเรียบร้อย!",
                    text: "สินค้าถูกลบออกจากตะกร้าแล้ว",
                    icon: "success",
                    confirmButtonText: "ตกลง"
                });
            }
        });
    };

    return (
        <Layout>
            <div className='bg-white p-8 mt-10 mb-12 shadow-xl rounded-lg'>
                <div className='text-center'>
                    <h1 className='text-2xl font-bold text-purple-700 mb-6'>ตะกร้าสินค้าของคุณ</h1>
                </div>

                <div className='mt-8'>
                    <h2 className='text-xl font-semibold text-gray-800 mb-6'>สินค้าในตะกร้า</h2>
                    {cartItems.length === 0 ? (
                        <p className="text-md text-gray-600 text-center">ไม่มีสินค้าในตะกร้า</p>
                    ) : (
                        <ul className='space-y-8'>
                            {cartItems.map((item, index) => (
                                <li key={index} className='flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-8 py-6 border-b'>
                                    <img className="w-28 h-28 object-cover rounded-lg shadow-md" src={`/images/${item.image}`} alt={item.name} />
                                    <div className='flex-1 flex flex-col sm:flex-row items-center justify-between w-full'>
                                        <span className='font-semibold text-xl text-gray-800'>{item.name} <span className='text-gray-500'>({item.quantity})</span></span>
                                        <div className='flex items-center space-x-3'>
                                            <button onClick={() => decreaseQuantity(item.name)} className='bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded-l-lg text-purple-700'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-minus">
                                                    <path d="M5 12h14"/>
                                                </svg>
                                            </button>
                                            <span className='px-4 py-2 bg-gray-100 rounded-md text-lg font-bold'>{item.quantity}</span>
                                            <button onClick={() => increaseQuantity(item.name)} className='bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded-r-lg text-purple-700'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus">
                                                    <path d="M12 5v14"/>
                                                    <path d="M5 12h14"/>
                                                </svg>
                                            </button>
                                        </div>
                                        <button onClick={() => handleRemoveItem(item.name)} className='flex gap-1 bg-red-500 hover:bg-red-600 rounded-lg text-white font-bold px-6 py-3 mt-4 sm:mt-0'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
                                            ลบสินค้า
                                        </button>
                                        <span className='text-lg font-bold text-red-600'>{(item.quantity * parseFloat(item.price.replace('฿', ''))).toFixed(2)}฿</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div className='flex justify-between'>
                    <div className='flex flex-col gap-3 sm:flex-row items-center mt-10 pt-6 '>
                        <h2 className='text-xl font-bold text-gray-800'>ยอดรวม:</h2>
                        <span className='text-xl font-bold text-purple-700'>{calculateTotal()}฿</span>
                    </div>
                    <div className='pt-[60px]'>
                        <button className='bg-red-500 hover:bg-red-600 px-3 h-[50px] rounded-xl text-white font-medium flex pt-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-dollar-sign"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>ชำระเงิน
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Cart;
