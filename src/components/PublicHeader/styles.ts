import styled from "styled-components";

export const Container = styled.nav`
    background-color: ${({theme}) => theme.colors.primary};
    padding: 10px 20px;
    color: ${({theme}) => theme.colors.white};
`;

export const ContainerHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
`;

export const LeftLinks = styled.div`
    display: flex;
    align-items: center;
    gap: 10px; /* Espaçamento entre os itens */

    & > a:not(:last-child)::after {
        content: "|"; /* Adiciona o separador apenas para itens que não são o último */
        margin-left: 10px;
        color: ${({ theme }) => theme.colors.secondary}; /* Cor da barra */
    }
`;

export const RightLink = styled.div`
    margin-left: auto;
`;
