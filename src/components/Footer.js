import styled from "styled-components";

const Author = styled.footer`
    margin-top: 30px;
    text-align: center;
`;

const Footer = () => {
    return (
        <Author>

            © Created by <a href="https://www.facebook.com/aleksi.merebashvili/" 
            target="_blank" rel="noreferrer"
            > Aleksi Merebashvili </a>

        </Author>
    )
}

export default Footer;


