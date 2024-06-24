

export const updateData = (data) => {
    return ({
        branchName: data.branch_name,
        nextUrl: data.nexturl,
        restaurantId: data.restaurant_id,
        restaurantImage: data.restaurant_image,
        restaurantName:data.restaurant_name,
        tableId: data.table_id,
        tableName: data.table_name,
        tableMenuList: data.table_menu_list.map(eachItem => ({
            categoryDishes: eachItem.category_dishes.map(eachItem => ({
                addonCat:eachItem.addonCat,
                dishAvailability: eachItem.dish_Availability,
               dishCalories: eachItem.dish_calories,
               dishCurrency: eachItem.dish_currency,
               dishDescription: eachItem.dish_description,
               dishId: eachItem.dish_id,
               dishImage: eachItem.dish_image,
               dishName: eachItem.dish_name,
               dishPrice: eachItem.dish_price,
               dishType: eachItem.dish_Type,
               nextUrl: eachItem.nexturl 
            })),
            menuCategory: eachItem.menu_category,
            menuCategoryId: eachItem.menu_category_id,
            menuCategoryImage: eachItem.menu_category_image,
            nextUrl: eachItem.nexturl
        })),
    })
}




