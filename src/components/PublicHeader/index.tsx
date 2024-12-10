import { Fragment } from "react";
import { Link } from "../Link";
import { Container, ContainerHeader, LeftLinks, RightLink } from "./styles";

export function PublicHeader() {
    const currentPath = window.location.pathname;

    return(
        <Container>
            <ContainerHeader>
                <LeftLinks>
                    <Link href="/">Home</Link>
                    <Link href="/pets">Pets</Link>
                </LeftLinks>
                <RightLink>
                    <Link href="/signin">Login</Link>
                </RightLink>
            </ContainerHeader>
        </Container>
    )
}