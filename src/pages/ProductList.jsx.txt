import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbars';
import Footer from '../components/Footer';
import Products from '../components/Products';

const Container=styled.div``;
const Title=styled.h1`
    margin:20px;
    `;
const Filter=styled.div`
   margin:20px;
   `;
const FilterContainer=styled.div`
    display: flex;
    justify-Content: space-between;
    `;

const FilterText=styled.span`
    font-size:20px;
    font-weight:600;
    margin-right:20px;
    `;
const Select =styled.select`
    padding:8px;
    margin-right:20px;
    `;
const Option=styled.option``



const ProductList = () => {
    return (
        <Container>
            <Navbar/>
            <Title>
                Regular Items
            </Title>
            <FilterContainer>
                <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select>
                <Option disabled selected>
                Used For
                </Option>
                <Option> 2 mts</Option>
                <Option> 4 mts</Option>
                <Option> 6 mts</Option>
                <Option> 1 yr</Option>
                <Option>2 yr+</Option>
            </Select>
            <Select>
                <Option disabled selected>
                Condition
                </Option>
                <Option>Brand New</Option>
                <Option>Like New</Option>
                <Option>Old</Option>
                <Option>Worned Off</Option>
                <Option>XL</Option>
            </Select>
                     
                </Filter>
                <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select>
                    <Option selected>Newest</Option>
                    <Option>Oldest</Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>
                </Select>
                </Filter>
            </FilterContainer>
            <Products/>
            <Footer/>
        </Container>
        
    )
}

export default ProductList
