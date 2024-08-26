import React from 'react';
import { TiTick } from 'react-icons/ti';

function PaymentMode() {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h2 className="text-lg font-bold mb-2">Payment Mode</h2>
      <ul className="list-disc">
        <li className="flex items-center">
          <TiTick className='text-[#008000]' />
          <label>Deposit to Account</label>
        </li>
        <li className="flex items-center">
          <TiTick className='text-[#008000]' />
          <label>Net Banking</label>
        </li>
        <li className="flex items-center">
          <TiTick className='text-[#008000]' />
          <label>Credit Card/Debit Card</label>
        </li>
        <li className="flex items-center">
          <TiTick className='text-[#008000]' />
          <label>UPI</label>
        </li>
        <li className="flex items-center">
          <TiTick className='text-[#008000]' />
          <label>Wallets (PayTM/PhonePe/Amazon etc.)</label>
        </li>
      </ul>
    </div>
  );
}

export default PaymentMode;