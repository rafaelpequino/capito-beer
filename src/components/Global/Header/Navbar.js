import styled from "styled-components";
import { navItens } from "./navItens";
import { useEffect, useState } from "react";

const NavbarContainer = styled.nav`
    z-index: 10;
`;

const NavList = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    gap: 30px;
    font-size: 12px;
    color: var(--white);
    transition: .3s;

    ::-webkit-scrollbar {
        width: 4px; 
    }

    ::-webkit-scrollbar-thumb {
        background-color: #444;
        border-radius: 10px; 
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    @media (max-width: 1200px) {
        position: fixed;
        top: 0;
        left: 0;
        width: 80vw;
        max-width: 300px;
        height: 100vh;
        overflow-y: auto;
        display: block;
        padding: 10px 20px;
        background-color: var(--gray);
    }
`;

const HeadNav = styled.div`
    display: none;
    
    @media (max-width: 1200px) {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
    }
`

const Logo = styled.img`
    width: 50px;
    user-select: none;
`;

const CloseMenuIcon = styled.img`
    width: 15px;
    filter: invert(1);
    cursor: pointer;
    user-select: none;
`

const NavItem = styled.li`
    @media (max-width: 1200px) {
        &:not(:last-child) {
            width: 100%;
            padding: 20px 0;
            border-top: 1px solid var(--white);
        }
    }
`;

const MenuIcon = styled.img`
    width: 25px;
    filter: invert(1);
    cursor: pointer;
    user-select: none;

    @media (min-width: 1201px) {
        display: none;
    }
`;

const Navbar = () => {

    const [navbarStatus, setNavbarStatus] = useState('close');

    const useWindowWidth = () => {
        const [width, setWidth] = useState(window.innerWidth);

        useEffect(() => {
            const handleResize = () => setWidth(window.innerWidth);
            window.addEventListener('resize', handleResize);

            return () => window.removeEventListener('resize', handleResize);
        }, []);

        return width;
    };

    return (
        <NavbarContainer>
            <NavList
                style={{
                    left: useWindowWidth >= 1200 ? 0 : (navbarStatus === 'open' ? 0 : '-300px')
                }}
            >

                <HeadNav>
                    <Logo src="/img/Logo_CapitoBeer.png" alt="Logo da Capito Beer" />
                    <CloseMenuIcon
                        src="img/icons/x.svg"
                        alt="Ícone de X"
                        onClick={() => setNavbarStatus('close')}
                    />
                </HeadNav>
                {navItens.map(item => (
                    <NavItem key={item.name}> {item.name} </NavItem>
                ))}
            </NavList>

            <MenuIcon
                className="menu"
                src="/img/icons/menu.svg"
                alt="Ícone de menu"
                onClick={() => setNavbarStatus('open')}
            />
        </NavbarContainer>
    );
};

export default Navbar;
