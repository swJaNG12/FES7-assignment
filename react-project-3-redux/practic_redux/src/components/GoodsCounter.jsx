import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { addNumber, subtractNumber } from '../modules/goodsCounter';

export default function GoodsCounter() {


  const { stock, goods } = useSelector((state) => {
    return {
      stock: state.goodsReducer.stock,
      goods: state.goodsReducer.goods
    }
  })

  const dispatch = useDispatch();

  const onAddNumber = () => dispatch(addNumber());
  const onsubtractNumber = () => dispatch(subtractNumber())

  return (
    <>
      <h1>Product Detail</h1>
      <h2>딥러닝 개발자 무릎 담요</h2>
      <span><strong>17,500</strong>원</span>
      <div id="counter-box">
        <button type="button" id="minus" onClick={onsubtractNumber} disabled={goods <= 0 ? true : false}>MINUS</button>
        <span id="number">{goods}</span>
        <button type="button" id="plus" onClick={onAddNumber} disabled={stock <= 0 ? true : false}>PLUS</button>
      </div>
      <div>총 수량 <strong id="quantity">{stock}</strong></div>
      <div><strong id="total">0</strong>원</div>
    </>
  )
}
