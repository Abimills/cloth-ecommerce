import React from 'react'
import styled from 'styled-components';
import { categories } from '../data';
import { Mobile } from '../Responsive';
import CategoryItem from './CategoryItem';
const Container = styled.div`
display:flex;
padding:20px;
justify-content:space-between;
${Mobile({padding:'5px',marginTop:'30px',flexDirection:'column'})}
`
const Categories = () => {
  return (
    <Container>
        {categories.map(item => {
            return <CategoryItem key={item.id} {...item} />
        })}
    </Container>
  )
}

export default Categories