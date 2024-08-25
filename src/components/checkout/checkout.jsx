import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Checkout.css'; 

const CheckOut = ({ setCart, setIsCheckoutComplete }) => {
  const navigate = useNavigate(); 

  const [form, setForm] = useState({
    name: '',
    address: '',
    telephone: '',
    cardNumber: '',
    cardExpiry: '',
    cardCVV: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    address: '',
    telephone: '',
    cardNumber: '',
    cardExpiry: '',
    cardCVV: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const validateCardNumber = (number) => {
    const cleaned = ('' + number).replace(/\D/g, '');
    let sum = 0;
    let shouldDouble = false;

    for (let i = cleaned.length - 1; i >= 0; i--) {
      let digit = parseInt(cleaned.charAt(i), 10);
      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }
      sum += digit;
      shouldDouble = !shouldDouble;
    }

    return (sum % 10 === 0);
  };

  const validateExpiryDate = (date) => {
    if (!date) return false;

    const [month, year] = date.split('/').map(Number);
    const today = new Date();
    const expiryDate = new Date(year, month - 1);
    const lastDayOfMonth = new Date(year, month, 0);

    return expiryDate >= today && lastDayOfMonth >= today;
  };

  const validateCVV = (cvv) => {
    const cleaned = ('' + cvv).replace(/\D/g, '');
    return cleaned.length === 3 || cleaned.length === 4;
  };

  const validateTelephone = (telephone) => {
    const phoneRegex = /^[+]?[0-9\s]{10,15}$/;
    return phoneRegex.test(telephone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;
    const newErrors = {};

    if (!form.name) newErrors.name = 'Name is required.';
    if (!form.address) newErrors.address = 'Address is required.';
    if (!form.telephone) newErrors.telephone = 'Telephone is required.';
    else if (!validateTelephone(form.telephone)) newErrors.telephone = 'Invalid telephone number format.';
    if (!validateCardNumber(form.cardNumber)) newErrors.cardNumber = 'Invalid card number.';
    if (!validateExpiryDate(form.cardExpiry)) newErrors.cardExpiry = 'Expiry date must be in the future.';
    if (!validateCVV(form.cardCVV)) newErrors.cardCVV = 'CVV must be 3 or 4 digits.';

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      valid = false;
    }

    if (valid) {
      setIsCheckoutComplete(true); // Set the checkout as complete
      setCart([]); // Empty the cart
      navigate('/payment'); // Redirect to payment
    }
  };

  return (
    <div className="checkout-container">
      <h1 className="text-4xl font-black leading-9 text-gray-800">Checkout</h1>
      <form onSubmit={handleSubmit} className="checkout-form">
        <h2 className="text-2xl font-bold text-gray-800">Shipping Information</h2>
        <label>
          Name:
          <input type="text" name="name" value={form.name} onChange={handleChange} />
          {errors.name && <span className="error">{errors.name}</span>}
        </label>
        <label>
          Address:
          <input type="text" name="address" value={form.address} onChange={handleChange} />
          {errors.address && <span className="error">{errors.address}</span>}
        </label>
        <label>
          Telephone:
          <input type="tel" name="telephone" value={form.telephone} onChange={handleChange} />
          {errors.telephone && <span className="error">{errors.telephone}</span>}
        </label>
        <h2 className="text-2xl font-bold text-gray-800">Payment Information</h2>
        <label>
          Card Number:
          <input type="text" name="cardNumber" value={form.cardNumber} onChange={handleChange} />
          {errors.cardNumber && <span className="error">{errors.cardNumber}</span>}
        </label>
        <label>
          Expiry Date:
          <input type="text" name="cardExpiry" value={form.cardExpiry} onChange={handleChange} placeholder="MM/YYYY" />
          {errors.cardExpiry && <span className="error">{errors.cardExpiry}</span>}
        </label>
        <label>
          CVV:
          <input type="number" name="cardCVV" value={form.cardCVV} onChange={handleChange} />
          {errors.cardCVV && <span className="error">{errors.cardCVV}</span>}
        </label>
        <button type="submit" className="submit-button">Complete Purchase</button>
      </form>
    </div>
  );
};

export default CheckOut;
