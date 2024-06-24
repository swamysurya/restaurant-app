import {CategoriesList, Category} from './styledComponents'

function Slidebar (props) {
    const {tableMenuList,activeCategory, onUpdateCategory} = props

    const updateCategory = id => {
        onUpdateCategory(id)
      }

    return (<>
        <CategoriesList>
          {tableMenuList.map(eachItem => (
            <Category
              /* the $ sign indicate thos props are transient props
              to prevent props meant to be consumed by styled components
               from being passed to the underlying React node or rendered to the DOM element */
              $activated={(eachItem.menuCategoryId === activeCategory)}
              key={eachItem.menuCategoryId}
              onClick={() => updateCategory(eachItem.menuCategoryId)}
            >
              {eachItem.menuCategory}
            </Category>
          ))}
        </CategoriesList>
      </>)
}

export default Slidebar




