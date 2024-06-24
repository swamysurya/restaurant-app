import styled from 'styled-components'

export const CategoriesList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  gap: 20px;
  align-items: center;
  padding: 20px 10px 20px 10px;
`
export const Category = styled.li`
  flex-shrink: 0;
  padding-bottom: 5px;
  color: ${props => (props.$activated ? '#dc716f' : '')};
  border-bottom: ${props => (props.$activated ? 'solid 5px' : '')};
`

//${props => (props.activated === 'true'? '#dc716f' : '')}