import styled from 'styled-components';

export const HeaderGlass = styled.div`
  height: 60px;
`;

export const HeaderContainer = styled.div`
  height: var(--header-height);
  top: 0;
  left: 0;
  position: fixed;
  z-index: 100;
  width: 100%;
  background: rgb(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  user-select: none;

  h2 {
    cursor: pointer;
    transition: text-shadow 100ms;
    font-size: 16px;
    font-weight: 300;
  }
`;

export const HeaderMenuContainer = styled.div`
  max-width: 1600px;
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderMenu = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  color: black;
`;

export const HeaderMenuItem = styled.div`
  cursor: pointer;
  display: flex;
  gap: 12px;
  height: 100%;
  align-items: center;
  padding: 20px;
  white-space: nowrap;
  h2 {
    font-size: 12px;
  }
  &:hover {
    text-shadow: 0px 0px 1px black;
  }
  img {
    width: 20px;
  }
`;

export const SandwichButtonContainer = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.25rem;
  padding: 6px;
  border-radius: 2px;
  scale: 0.8;
  div {
    border-bottom: 2px solid black;
    border-radius: 5px;
    width: 100%;
  }
`;

export const DropdownMenuContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  text-transform: uppercase;
  color: black;
  background: black;
  h2 {
    color: white;
  }
`;

export const DropdownMenuItem = styled.div`
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  white-space: nowrap;
  transition: background 100ms;

  &:hover {
    background-color: #cecece;
    h2 {
      color: black;
      text-shadow: 0px 0px 1px black;
    }
  }
`;

export const HeaderMenuMobile = styled.div``;
