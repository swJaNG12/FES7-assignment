import React from 'react'
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { sale, soldOut } from '../modules/stockCounter';

export default function StockCounter() {

  const {message} = useSelector((state) => {
    return {
      message:state.stockReducer.message
    }
  })


  const {stock} = useSelector((state) => {
    return {
      stock: state.goodsReducer.stock
    };
  })

  const dispatch = useDispatch();


  const onSoldOut = () => dispatch(soldOut());
  const onSale = () => dispatch(sale());

  useEffect(() => {
    if(stock <= 0) {
      onSoldOut();
      console.log('soldout')
    } else {
      onSale();
      console.log('sale')
    }
  },[stock])




  return (
    <p>
      {message}
    </p>
  )
}
