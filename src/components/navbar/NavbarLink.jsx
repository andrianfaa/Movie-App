/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-props-no-spreading */
import { useResolvedPath, useMatch, Link } from 'react-router-dom';

export default function NavbarLink({ children, to, ...rest }) {
    const resolvedPath = useResolvedPath(to);
    const match = useMatch({
        path: resolvedPath.pathname,
        end: true,
    });

    return (
        <Link
            to={to}
            className={match ? 'active' : ''}
            {...rest}
        >
            {children}
        </Link>
    );
}
