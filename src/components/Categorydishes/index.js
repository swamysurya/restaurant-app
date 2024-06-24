import {
  DishesList,
  Dish,
  DishImage,
  DishDetails,
  CaloriesAndDishImage,
  DishName,
  SAR,
  Description,
  Calories,
  CartButtons,
  INC,
  DEC,
  Quantity,
  NotAvailable,
  Custamization,
  Box,
  Circle,
} from './styledComponents'

function Categorydishes(props) {
  const {
    activeCategory,
    addItemToCart,
    cartList,
    removeItemFromCart,
    tableMenuList,
  } = props

  const increment = dishDetaills => addItemToCart(dishDetaills)
  const decrement = dishDetaills => removeItemFromCart(dishDetaills)

  const getDishes = tableMenuList.find(
    eachItem => eachItem.menuCategoryId === activeCategory,
  )
  const {categoryDishes} = getDishes
  return (
    <DishesList>
      {categoryDishes.map(eachItem => {
        const getQuantity = () => {
          const cartItem = cartList.find(
            item => item.dishId === eachItem.dishId,
          )
          return cartItem ? cartItem.quantity : 0
        }
        return (
          <Dish key={eachItem.dishId}>
            <Box $dishtype={eachItem.dishType}>
              <Circle $dishtype={eachItem.dishType}></Circle>
            </Box>
            <DishDetails>
              <DishName>{eachItem.dishName}</DishName>
              <SAR>
                {eachItem.dishCurrency} {eachItem.dishPrice}
              </SAR>
              <Description>{eachItem.dishDescription}</Description>
              {eachItem.dishAvailability && (
                <CartButtons>
                  <INC onClick={() => decrement(eachItem)}>-</INC>
                  <Quantity>{getQuantity()}</Quantity>
                  <DEC onClick={() => increment(eachItem)}>+</DEC>
                </CartButtons>
              )}
              {!eachItem.dishAvailability && (
                <NotAvailable>Not available</NotAvailable>
              )}
              {eachItem.addonCat.length !== 0 && (
                <Custamization>Customizations available</Custamization>
              )}
            </DishDetails>
            <CaloriesAndDishImage>
              <Calories> {eachItem.dishCalories} calories</Calories>
              <DishImage src={eachItem.dishImage} />
            </CaloriesAndDishImage>
          </Dish>
        )
      })}
    </DishesList>
  )
}

export default Categorydishes
