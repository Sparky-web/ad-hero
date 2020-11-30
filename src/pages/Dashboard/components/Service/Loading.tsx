import React, {ReactNode} from 'react';
import styled from "styled-components";

const StyledLoading = styled.div`
  overflow: hidden;
  position: relative;
  
  @keyframes loading_animation {
      from {
        left: -100%
      }
      to {
        left: 150%;
      }
  }
  
  .loadElement {
      position: absolute;
      transform: rotate(45deg);
      top: -50%;
      height: 200%;
      width: 50%;
      background: white;
      opacity: 0.35;
      box-shadow: 0 0 50px 50px white;
    
      animation-name: loading_animation;
      animation-duration: 0.5s;
      animation-iteration-count: infinite;
  }
`

function Loading(props: {children: ReactNode}) {
    return (
        <StyledLoading>
            <div className="loadElement" />
            {props.children}
        </StyledLoading>
    );
}

export default Loading;
