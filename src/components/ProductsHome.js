import styled from "styled-components";
import {newProducts} from "../data";
import ProductHome from "./ProductHome.js";

const Container=styled.div`
    padding:20px;
    display: flex;
    flex-wrap: wrap;
    justify-content:space-between
`;

const Products = () => {
    return (
        <Container>
            {newProducts.map((item)=>(
                <ProductHome item={item} key={item.id}/>
            ))}
        </Container>
    )
};

export default Products;
