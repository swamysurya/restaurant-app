import {useState, useEffect, act} from 'react'
import NavBar from '../NavBar'
import Slidebar from '../SlideBar'
import Categorydishes from '../Categorydishes'

import {updateData} from '../Utilities'
function Restaurant() {
  // state for featching data
  const [isLoading, setLoading] = useState(true)
  // state for active category item
  const [activeCategory, setActiveCategory] = useState('')
  // state for api data
  const [apiData, setApiData] = useState({})
  // state for cart list
  const [cartList, setCartList] = useState([])

  //fetch api url
  const apiUlr = 'https://run.mocky.io/v3/2477b10c-ee18-4487-9962-1b3d073432c4'

  const onUpdateCategory = id => {
    setActiveCategory(id)
  }

  // utility function for getting api results
  const getApiResponse = async () => {
    const apiResponse = await fetch(apiUlr)
    const data = await apiResponse.json()
    const updatedData = updateData(data[0])
    // console.log(updatedData)
    if (apiResponse.ok) {
      setApiData(updatedData)
      setActiveCategory(updatedData.tableMenuList[0].menuCategoryId)
      setLoading(false)
    }
  }

  useEffect(() => {
    // for getting Api results
    getApiResponse()
  }, [])

  const addItemToCart = dish => {
    const isAlreadyExists = cartList.find(item => item.dishId === dish.dishId)
    if (!isAlreadyExists) {
      const newDish = {...dish, quantity: 1}
      setCartList(prev => [...prev, newDish])
    } else {
      setCartList(prev =>
        prev.map(item =>
          item.dishId === dish.dishId
            ? {...item, quantity: item.quantity + 1}
            : item,
        ),
      )
    }
  }

  const removeItemFromCart = dish => {
    const isAlreadyExists = cartList.find(item => item.dishId === dish.dishId)
    if (isAlreadyExists) {
      setCartList(prev =>
        prev
          .map(item =>
            item.dishId === dish.dishId
              ? {...item, quantity: item.quantity - 1}
              : item,
          )
          .filter(item => item.quantity > 0),
      )
    }
  }

  const {restaurantName, tableMenuList} = apiData

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <>
      <NavBar restaurantName={restaurantName} cartList={cartList} />
      <Slidebar
        onUpdateCategory={onUpdateCategory}
        activeCategory={activeCategory}
        tableMenuList={tableMenuList}
      />
      <Categorydishes
        cartList={cartList}
        tableMenuList={tableMenuList}
        activeCategory={activeCategory}
        addItemToCart={addItemToCart}
        removeItemFromCart={removeItemFromCart}
      />
    </>
  )
}

export default Restaurant
