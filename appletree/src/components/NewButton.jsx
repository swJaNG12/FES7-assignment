import React from 'react';

export default function NewButton({ onClick }) {
  return (
    <button className="new-apple" onClick={() => onClick()}>
      NewButton
    </button>
  );
}
