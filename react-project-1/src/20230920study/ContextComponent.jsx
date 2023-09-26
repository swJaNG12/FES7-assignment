import React from 'react'
import { createContext } from 'react';

const UserInfo = createContext({name: 'fary', id : 'garyisfree'});

export default function ContextComponent() {
  return (
    <div>
      <HelloLicat />
    </div>
  )
}

const HelloLicat = () => {
  return (
    <UserInfo.Consumer>
        {(value) => {
          return (
            <div>
              <h2>{value.id}</h2>
              <strong>{value.name}</strong>
              <HelloLicatTwo />
            </div>
          );

      }}
    </UserInfo.Consumer>

  );
}

const HelloLicatTwo = () => {
  return (
    <UserInfo.Consumer>
      {(value) => {
        return (
          <div>
            <h2>two : {value.id}</h2>
            <strong>two : {value.name}</strong>
          </div>
        );
      }}
    </UserInfo.Consumer>

  );
}