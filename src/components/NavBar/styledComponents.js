import styled from 'styled-components'

export const NavContainer = styled.nav`
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: 350px;
  padding: 0px 30px 0px 30px;
  font-family: 'Roboto';
`
export const Name = styled.h1`
  font-size: 20px;
`
export const Orders = styled.p`
  font-size: 16px;
  font-weight: 600;
`
export const NavRightItems = styled.div`
  display: flex;
  flex-direction: row;
  jutsify-content: flex-start;
  align-items: center;
  gap: 10px;
`
export const CartCounter = styled.p`
  background-color: #ff6347;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  text-align: center;
  font-size: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const Icon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
