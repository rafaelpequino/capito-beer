import styled from "styled-components";

const HeadContainer = styled.div`
    background-color: #bb0000;
    color: #f4ddb0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

const Logo = styled.img`  
    width: 80%;
    max-width: 300px;
`

const BtnBottom = styled.img`
    width: 30px;
    position: absolute;
    bottom: 30px;
    filter: invert(1);
`

const Head = () => {
    return (
        <HeadContainer className="logo">
            <Logo src="/img/Logo_CapitoBeer.png" />

            <BtnBottom src="/img/icons/bottom.svg" />
        </HeadContainer>
    );
};

export default Head;
