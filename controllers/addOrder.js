
const { Order } = require("../models/order");
const { orderMail, orderManagerMail } = require("../nodemailer");


const addOrder = async (req, res) => {
    const { destination, orderSum, products } = req.body;

    function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const numOfOrder = getRandomNumber(10000, 999999);;
    const result = await Order.create({ ...req.body, numOfOrder: numOfOrder });
    

    const emailMessageForClient = {
      to: destination.clientEmail,
      html: ` <div style="padding: 50px; color: #03464F; font-family: 'Roboto', sans-serif;">
        <p style="font-weight: 700; color: #03464F; text-align: center;">Дякуємо, за замовлення! Наш менеджер звʼяжеться з вами в найближчий час.</p>
        <p style="font-weight: 700; color: #03464F; text-align: center; margin-top: 25px;">Ваше замовлення №${numOfOrder}:</p>
        <ol style="color: #03464F; margin-bottom: 10px; padding-left: 30px; padding-top: 10px;">${products.map(
          (prod) =>
            `<li style="margin-bottom: 5px;">
            <p>
              ${prod.prodName} - ${prod.quantity}шт - ${
              prod.prodPrice * prod.quantity
            }грн
            </p>
             <p style="margin-top: 5px;">
            Ціна за 1шт: ${prod.prodPrice}грн
            </p>
          </li>`
        )}</ol>
        <p style="margin-top: 15px; margin-left: 25px; font-weight: 700;">Загальна сумма: ${orderSum} грн</p>
      </div>`,
    };
  
  const emailMessageForManager = {
    html: ` <div style="padding: 50px; color: #03464F; font-family: 'Roboto', sans-serif;">
        <p style="font-weight: 700; text-align: center;">Нове замовлення:</p>
        <p style="font-weight: 700; text-align: center; margin-top: 25px;">Перелік замовлення клієнта №${numOfOrder}:</p>
        <ol style="color: #03464F; margin-bottom: 10px; padding-left: 30px; padding-top: 10px;">${products.map(
          (prod) =>
            `<li style="margin-bottom: 5px;">
            <p>
              ${prod.prodName} - ${prod.quantity}шт - ${
              prod.prodPrice * prod.quantity
            }грн
            </p>
             <p style="margin-top: 5px;">
            Ціна за 1шт: ${prod.prodPrice}грн
            </p>
          </li>`
        )}</ol>
        <p style="margin-top: 15px; margin-left: 25px; font-weight: 500;">Загальна сумма: ${orderSum} грн</p>
        <p style="margin-top: 15px; font-weight: 700;">Дані отримувача:</p>
        <p style="margin-top: 10px;">Ім'я клієнта: <span style="margin-left: 5px; font-weight: 500;">${
          destination.clientName
        }</span></p>
        <p style="margin-top: 10px;">Призвіще клієнта: <span style="margin-left: 5px; font-weight: 500;">${
          destination.clientSurname
        }</span></p>
        <p style="margin-top: 10px;">Телефон клієнта: <span style="margin-left: 5px; font-weight: 500;">${
          destination.clientPhone
        }</span></p>
        <p style="margin-top: 10px;">Пошта клієнта: <span style="margin-left: 5px; font-weight: 500;">${
          destination.clientEmail
        }</span></p>
        <p style="margin-top: 15px; font-weight: 700;">Адреса доставки:</p>
        <p style="margin-top: 10px;">Область: <span style="margin-left: 5px; font-weight: 500;">${
          destination.oblast
        }</span></p>
        <p style="margin-top: 10px;">Населений пункт: <span style="margin-left: 5px; font-weight: 500;">${
          destination.city
        }</span></p>
        <p style="margin-top: 10px;">Номер Нової пошти: <span style="margin-left: 5px; font-weight: 500;">${
          destination.numberOfPost
        }</span></p>
         <p style="margin-top: 10px;">Коментар: <span style="margin-left: 5px; font-weight: 500;">${
           destination.comment
         }</span></p>
      </div>
      `
  };
    orderManagerMail(emailMessageForManager).catch(console.error);
    orderMail(emailMessageForClient).catch(console.error);
     res.status(201).json(result);
}

module.exports = {
    addOrder
}