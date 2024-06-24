import styled from 'styled-components'

export const DishesList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  padding: 10px;
  font-family: 'roboto';
  flex-direction: column;
`
export const Dish = styled.li`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding: 10px 5px;
  border-style: solid;
  border-width: 1px;
  border-color: gray;
  margin: 5px 0px;
  border-radius: 10px;
`
export const DishDetails = styled.div`
  width: 60%;
`

export const DishImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 5px;

  @media screen and (min-width: 768px){
    width: 150px;
    height: 150px;
  }
`
export const CaloriesAndDishImage = styled.div`
  display: flex;
  flex-direction: row;
  width: 30%;
  gap: 10px;
  justify-content: flex-end;
  align-items: center;

 @media screen and (min-width: 768px){
    gap:30px;
 }
`
export const DishName = styled.h1`
  font-size: 18px;
  margin: 5px 0px 5px 0px;

  @media screen and (min-width: 768px){
    font-size: 22px;
  }
`
export const SAR = styled.p`
  color: #717172;
  font-size: 15px;
  margin: 5px 0px 5px 0px;
  font-weight: 500;
  @media screen and (min-width: 768px){
    font-size: 19px
  }
`
export const Description = styled.p`
  color: gray;
  font-size: 14px;

  @media screen and (min-width: 768px){
    font-size: 18px;
  }
`
export const Calories = styled.p`
  color: #ffc38f;
  font-size: 16px;
  font-weight: 600;

  @media screen and (min-width: 768px){
    font-size: 20px;
  }
`
export const CartButtons = styled.div`
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  display: flex;
  width: 150px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  gap: 20px;
  color: #ffffff;
  background-color: #338218;
`

export const Quantity = styled.p`
  font-size: 16px;
`

export const INC = styled.button`
  border: none;
  ouline: none;
  width: 20px;
  height: 20px;
  color: #ffffff;
  font-size: 20px;
  background-color: #338218;
`
export const DEC = styled(INC)``

export const NotAvailable = styled.p`
  font-weight: 400;
  font-size: 18px;
  margin: 5px 0;
  color: red;
`
export const Custamization = styled.p`
  font-weight: 500;
  font-size: 18px;
  margin: 5px 0;
  color: #734ff4;
`
export const Box = styled.div`
  border-style:solid;
  color:${props => (props.$dishtype === 1 ? 'red' : 'green')};
  width:50px;
  height:50px;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  margin-top:10px;
  margin-right:10px;
  @media screen and (max-width:768px){
    width:30px;
    height:30px;
  }
`
export const Circle = styled.div`
  width:25px;
  height:25px;
  border-radius:50%;
  background-color:${props => (props.$dishtype === 1 ? 'red' : 'green')};

  @media screen and (max-width:768px){
    width:10px;
    height:10px;
  }
`
