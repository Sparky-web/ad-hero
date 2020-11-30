import React, {useEffect, useState} from 'react';
import styled from "styled-components";

const StyledPills = styled.div`
  display: flex;

  width: 80px;
  max-width: 100%;
  height: 5px;
  
  & > * {
    border-radius: 10px;
    margin: 2px;
    height: 100%;
    flex: 1; transition: ease-in-out 300ms;
    background: #474E63;
  }
  
  .active {
    flex: 3
  }
`

function Pills({total, activeId}: {total: number, activeId: number}) {
    const arr = new Array(total).fill(1)

    return (
        <StyledPills>
            {arr.map((el, i) => (
                <div key={i} className={i === activeId ? "active" : undefined}/>
            ))}
        </StyledPills>
    );
}

export default Pills;
