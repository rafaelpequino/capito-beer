import styled from "styled-components";

const BlogSummaryContainer = styled.section`
    width: 100%;
    height: 300px;
    background-color: var(--red);
    display: flex;
    align-items: center;
    justify-content: center;

    & a {
        color: #000;
        padding: 10px 30px;
        background-color: #fff;
        border-radius: 10px;

    }
`

const BlogSumary = () => {
    return (
        <BlogSummaryContainer>
            <a
                href="/ADO-RESUMO-ARDUINO-TRIAC.pdf"
                target="_blank"
                
            >
                📄 Baixar Resumo do Blog - TRIAC
            </a>
        </BlogSummaryContainer>
    );
};

export default BlogSumary;
