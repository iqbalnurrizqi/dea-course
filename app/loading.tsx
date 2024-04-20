import React from 'react'
import Wrapper from './component/Wrapper'

export default function loading() {
  return (
    <Wrapper title="Loading...">
      <span className="loading loading-spinner loading-xl"></span>
    </Wrapper>
  );
}
