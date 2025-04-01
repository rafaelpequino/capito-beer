import styled from "styled-components";
import Navbar from "./Navbar";

const HeaderContainer = styled.header`
    width: 100%;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--black);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 15;
`

const Logo = styled.img`
    width: 50px;
`

const Header = () => {
    return (
        <HeaderContainer>
            <Logo src="/img/Logo_CapitoBeer.png" alt="Logo da Capito Beer" />
            <Navbar />
        </HeaderContainer>
    )
}

export default Header;