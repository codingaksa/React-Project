import React, { useState } from 'react';
import '../css/currency.css';
import { SlArrowRightCircle } from 'react-icons/sl';
import axios from 'axios';
let BASE_URL = 'https://api.freecurrencyapi.com/v1/latest';
let apiKey = 'fca_live_MruvidhRxVWbCcDf3qjpTWkSSaS9HZ6h1Za3B1hE';
// let EXCHANGE_API = `${}`
function Currency() {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('TRY');
  const [result, setResult] = useState('0');
  const exchange = async () => {
    const response = await axios.get(
      `${BASE_URL}?apikey=${apiKey}&base_currency=${fromCurrency}`
    );
    const result = (response.data.data[toCurrency] * amount).toFixed(2);
    setResult(result);
  };
  return (
    <div className="currency-div">
      <div>
        <h3 className="bslk">DÖVİZ KURU UYGULAMASI</h3>
      </div>
      <div>
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          className="amount"
        />
        <select
          onChange={(e) => setFromCurrency(e.target.value)}
          className="from-currency-option"
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="TL">TRY</option>
        </select>
        <SlArrowRightCircle className="rgt-arrow" />
        <select
          onChange={(e) => setToCurrency(e.target.value)}
          className="to-currency-option"
        >
          <option value="USD">TRY</option>
          <option value="EUR">EUR</option>
          <option value="TL">USD</option>
        </select>
        <input
          value={result}
          onChange={(e) => setResult(e.target.value)}
          type="number"
          className="result"
        />
      </div>
      <button onClick={exchange} className="exchange-btn">
        Çevir
      </button>
    </div>
  );
}

export default Currency;
