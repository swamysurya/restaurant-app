import {IoCartOutline} from 'react-icons/io5'
import {
  NavContainer,
  Name,
  Orders,
  NavRightItems,
  CartCounter,
  Icon,
} from './styledComponents'

function NavBar(props) {
  const {restaurantName, cartList} = props
  return (
    <NavContainer>
      <Name>{restaurantName}</Name>
      <NavRightItems>
        <Orders>My Orders</Orders>
        <Icon>
          <IoCartOutline size={30} />
          <CartCounter>{cartList.length}</CartCounter>
        </Icon>
      </NavRightItems>
    </NavContainer>
  )
}

export default NavBar
