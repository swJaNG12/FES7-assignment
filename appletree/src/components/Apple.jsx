import React from 'react';

export default function Apple({ apple, onDragStart, onDragEnd, onDobleClick }) {
  return (
    <li
      className="apple"
      style={{ left: apple.position.left, top: apple.position.top }}
      onMouseDown={(e) => {
        const clickOffset = {
          // 클릭과 관련된 정보를 저장하는 객체
          x: e.clientX - parseFloat(e.currentTarget.style.left),
          y: e.clientY - parseFloat(e.currentTarget.style.top),
        };
        // console.log(e.clientX, parseFloat(e.currentTarget.style.left));
        // console.log(e.clientY, parseFloat(e.currentTarget.style.top));
        onDragStart(clickOffset);
      }}
      // 마우스 업 이벤트가 발생하면 드래그를 종료합니다.
      onMouseUp={onDragEnd}
      // 마우스 더블클릭 이벤트
      onDoubleClick={onDobleClick}
    >
      {apple.sweetness}
    </li>
  );
}
