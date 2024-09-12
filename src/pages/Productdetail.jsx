import React, { useContext } from 'react';
import Layout from '../components/Layout';
import { useParams } from 'react-router-dom';
import QuantitySelector from '../components/QuantitySelector';
import { CartContext } from '../Contexts/CartContext.jsx';

const products = [
      {
        image: "Apple.png",
        name: "แอปเปิ้ลเขียว",
        description: "แอปเปิ้ลเขียวนำเข้าจากญี่ปุ่น",
        price: "20.00฿/ต่อลูก"
      },
      {
        image: "Red Apple.png",
        name: "แอปเปิ้ลแดง",
        description: "แอปเปิ้ลแดงนำเข้าจากญี่ปุ่น",
        price: "20.00฿/ต่อลูก"
      },
      {
        image: "Orange.png",
        name: "ส้ม ส้ม",
        description: "ส้มนำเข้าจากญี่ปุ่น",
        price: "20.00฿/ต่อลูก"
      },
      {
        image: "Cheese.png",
        name: "ชีส",
        description: "ชีสนำเข้าจากเยอรมัน",
        price: "85.00฿"
      },
      {
        image: "Eggland.png",
        name: "ไข่ไก่เบอร์ 0",
        description: "ไข่ไก่จากอภิชาติฟาร์ม เบอร์แรงแซงทางโค้ง",
        price: "120.00฿"
      },
      {
        image: "Fritos.png",
        name: "ขนม Fritos รสบาบีคิว",
        description: "ผลิตจากมันฝรั่งแท้ๆ รสชาติบาบีคิว",
        price: "25.00฿"
      },
      {
        image: "meat1.png",
        name: "เนื้อเกรด S+",
        description: "เนื้อวัวที่โตในวัง เลี้ยงด้วยอาหารอย่างดี",
        price: "500.00฿"
      },
      {
        image: "meat3.png",
        name: "เนื้อเกรด S+",
        description: "เนื้อวัวที่โตในวัง เลี้ยงด้วยอาหารอย่างดี",
        price: "500.00฿"
      },
      {
        image: "Bread.png",
        name: "ขนมปัง",
        description: "ขนมปังนุ่มละลายในปาก หอมแป้งสาลีจากล้านนา",
        price: "30.00฿"
      },
      {
        image: "Velveeta (1).png",
        name: "ชีส Velveeta",
        description: "เวลวีตาเป็นชื่อตราสินค้าของชีสแปรรูปที่คล้ายกับชีสอเมริกัน",
        price: "60.00฿"
      },
      {
        image: "Velveeta (2).png",
        name: "ชีส Velveeta แบบกล่อง",
        description: "เวลวีตาเป็นชื่อตราสินค้าของชีสแปรรูปที่คล้ายกับชีสอเมริกัน",
        price: "120.00฿"
      },
      {
        image: "Smart Balance Original.png",
        name: "Smart Balance Original",
        description: "เป็นทางเลือกที่ดีต่อสุขภาพแทนเนยจริงๆ นะ",
        price: "60.00฿"
      },
      {
        image: "Milk.png",
        name: "นมวัว",
        description: "นมวัวแท้ๆ จากวัวที่โตในวังถูกเลี้ยงมาอย่างดี",
        price: "65.00฿"
      },
      {
        image: "Salmon.png",
        name: "ปลาแซลมอน",
        description: "ปลาแซลมอนจากนอร์เวย์ที่กลับไปวางไข่",
        price: "120.00฿"
      },
      {
        image: "Blueberries.png",
        name: "บลูเบอรรี่",
        description: "บลูเบอรรี่ฉ่ำๆ เปรี้ยมอมหวาน  จากเชียงใหม่",
        price: "60.00฿"
      },
];

const Productdetail = () => {
    const { name } = useParams();
    const { addToCart } = useContext(CartContext);

    if (!addToCart) {
        console.error("addToCart is undefined");
        return null;
    }

    const product = products.find(p => p.name === name);

    if (!product) {
        return <Layout><p className='text-3xl text-center p-4'>ไม่พบข้อมูลผลิตภัณฑ์</p></Layout>;
    }

    const handleAddToCart = (quantity) => {
        addToCart({ ...product, quantity });
    };

    return (
        <Layout>
            <div className="container mx-auto p-6">
                <div className="flex flex-col md:flex-row bg-white border border-gray-200 p-8 rounded-xl shadow-lg">
                    <img className="w-full md:w-[400px] object-cover mb-6 md:mb-0 rounded-lg shadow-md" src={`/images/${product.image}`} alt={product.name} />
                    <div className='md:pl-8 flex flex-col justify-center'>
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
                        <p className="text-lg text-gray-600 mb-6">{product.description}</p>
                        <span className="text-2xl font-semibold text-purple-600 mb-6">{product.price}</span>
                        <QuantitySelector onAddToCart={handleAddToCart} />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Productdetail;
