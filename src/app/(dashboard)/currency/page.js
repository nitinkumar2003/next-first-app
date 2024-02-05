'use client'
import React, { useEffect, useState, memo, useCallback } from 'react';
import { $Services } from '@/components/network/Services';
import currencyConverterIcon from '../../../../public/Svg/currencyConverter.svg';
import Image from 'next/image';
import Button from '@/components/reuse/Button';
import { isNotNullUndefine } from '@/components/constant/Constant';

const newObj = () => {
  return { from: '', to: '', amount: 1, result: 0 };
};

const Page = () => {
  const [currencyList, setCurrencyList] = useState('');
  const [currencyTypeList, setCurrencyTypeList] = useState([]);
  const [currencyForExchange, setCurrencyForExchange] = useState({ ...newObj() });

  console.log('currencyTypeList', JSON.stringify(currencyForExchange));

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const _result = await $Services.get_currencylist();
    setCurrencyTypeList(_result);
    console.log('_result', _result);
  };

  const handleChangeCurrency = useCallback((e, key) => {
    const value = e.target.value;
    setCurrencyForExchange((prev) => ({
      ...prev,
      [key]: value,
    }));
  }, [setCurrencyForExchange]);

  const validateFun = () => {
    const { from, to, amount } = currencyForExchange;
    if (!isNotNullUndefine(from)) {
      alert('Please select currency from.');
      return true;
    } else if (!isNotNullUndefine(to)) {
      alert('Please select currency to.');
      return true;
    } else if (!(amount >= 0)) {
      alert('Currency Value can not be blank.');
      return true;
    }
    return false;
  };

  const currencyExchange = async () => {
    if (validateFun()) return;
    const _resultExchangeCurrency = await $Services.post_currencyexchange(currencyForExchange);
    console.log('_resultExchangeCurrency', _resultExchangeCurrency);
    const convertedAmount = _resultExchangeCurrency?.result.convertedAmount;
    console.log('convertedAmount', convertedAmount);
    setCurrencyForExchange((prev) => ({
      ...prev,
      result: convertedAmount,
    }));
  };

  console.log('currencyForExchange', currencyForExchange);

  return (
    <>
      <main className='grid min-h-full place-items-center bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-20'>
        <div className='text-center'>
          <div className='flex justify-center'>
            <SelectCurrency key='1' list={currencyTypeList} value={currencyForExchange.from} id='from' onChange={handleChangeCurrency} />
            <Image src={currencyConverterIcon} alt='a' className='bg-white' width={32} height={32} />
            <SelectCurrency key='2' list={currencyTypeList} value={currencyForExchange.to} id='to' onChange={handleChangeCurrency} />
          </div>
          <div className='d-flex flex-col sm:flex-row'>
            <div className='sm:mr-4'>
              <label htmlFor='currencyValue' className='block text-sm font-medium text-gray-600'>
                Enter Currency Value
              </label>
              <input
                type='number'
                id='currencyValue'
                placeholder='Enter value'
                className='mt-1 p-2 border border-gray-300 rounded-md w-full sm:w-48'
                value={currencyForExchange?.amount}
                onChange={(e) => handleChangeCurrency(e, 'amount')}
              />
            </div>
            <div className='mt-4 text-lg font-semibold text-green-700 sm:mt-0'>
              Result: {currencyForExchange?.result} {currencyForExchange.to}
            </div>
          </div>
          <div className='mt-10 flex flex-col sm:flex-row items-center justify-center gap-y-4 sm:gap-x-6'>
            <Button label='Reset' onClick={() => setCurrencyForExchange({ ...newObj() })} />
            <Button label='Exchange' onClick={currencyExchange} />
          </div>
        </div>
      </main>
    </>
  );
};

const SelectCurrency = memo(({ list = [], value, id, onChange }) => {
  return (
    <>
      <div className='relative inline-block w-full sm:w-52 mt-1'>
        <select
          onChange={(e) => onChange(e, id)}
          value={value}
          className='block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
        >
          <option value=''>Select currency {id}</option>
          {list && list.length > 0 && list.map((item, index) => <option key={index} value={item?.symbol}>{item?.symbol}</option>)}
        </select>
        <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
          <svg className='fill-current h-4 w-4' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M10 12L0 2h20l-10 10z' />
          </svg>
        </div>
      </div>
    </>
  );
});

export default Page;
