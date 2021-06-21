import React from 'react'
import styled from 'styled-components'
import Sections from './Sections'

function Home() {
    return (
        <Container>
            <Sections 
            title="Model S" 
            description="Order Online for Touchless Delivery"
            backgroundImg="model-s.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
            />
            <Sections
            title="Model Y" 
            description="Order Online for Touchless Delivery"
            backgroundImg="model-y.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
            />
            <Sections
            title="Model 3" 
            description="Order Online for Touchless Delivery"
            backgroundImg="model-3.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
            />
            <Sections
            title="Model X" 
            description="Order Online for Touchless Delivery"
            backgroundImg="model-x.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
            />

            <Sections
            title="Lowest Cost Solar Panels in America" 
            description="Money-back Guarantee"
            backgroundImg="solar-panel.jpg"
            leftBtnText="Order now"
            rightBtnText="Learn more"
            />
            <Sections
            title="Solar for New Roofs" 
            description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
            backgroundImg="solar-roof.jpg"
            leftBtnText="Order now"
            rightBtnText="Learn more"
            />

            <Sections
            title="Accessories" 
            description=""
            backgroundImg="accessories.jpg"
            leftBtnText="Shop now"            
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
   height: 100vh;

`;
