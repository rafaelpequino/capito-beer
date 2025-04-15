import styled from "styled-components";

const ArticleContainer = styled.section`
    width: 100%;
    height: 300px;
    background-color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;

    & a {
        color: #fff;
        padding: 10px 30px;
        background-color: var(--red);
        border-radius: 10px;

    }
`

const Article = () => {
    return (
        <ArticleContainer>
            <a
                href="/Artigo_CapitoBeer.pdf"
                target="_blank"
                
            >
                📄 Baixar Artigo do Projeto
            </a>
        </ArticleContainer>
    );
};

export default Article;
