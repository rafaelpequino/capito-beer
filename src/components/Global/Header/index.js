import styled from "styled-components";
import Navbar from "./Navbar";

const HeaderContainer = styled.header`
    width: 100%;
    padding: 10px 20px;
    background-color: var(--black);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 15;
`

const InsideHeader = styled.div`
    width: 100%;
    max-width: 1440px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
`

const Logo = styled.img`
    width: 50px;
`

const Header = () => {
    return (
        <HeaderContainer>
            <InsideHeader>
                <Logo src="/img/Logo_CapitoBeer.png" alt="Logo da Capito Beer" />
                <Navbar />
            </InsideHeader>
        </HeaderContainer>
    )
}

export default Header;