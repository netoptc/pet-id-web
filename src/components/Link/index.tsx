import NextLink from 'next/link';

export function Link({ children, href, ...props}: { children: React.ReactNode; href: string }) {
    return (
        <NextLink href={href} passHref>
            <span {...props}>{children}</span>
        </NextLink>
    );
}