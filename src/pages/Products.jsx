import React from 'react'
import Cardprod from '../components/Cardprod';
import { Link } from 'react-router-dom';

const Products = () => {
    const p = [
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
      return (
          <div className="p-4">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                  {p.map((product) => (
                      <div key={product.name} className="w-full">
                          <Link to={`/product/${product.name}`}></Link>
                              <Cardprod {...product} />
                      </div>
                  ))}
              </div>
          </div>
      );
  };
export default Products;