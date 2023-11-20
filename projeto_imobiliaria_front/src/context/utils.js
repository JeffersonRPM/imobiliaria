import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function setLocalStorage(user) {
    localStorage.setItem('login', JSON.stringify(user));
}

export function getLocalStorage() {
    const json = localStorage.getItem('login');

    if (!json) {
        return null;
    }

    const user = JSON.parse(json);
    return user ?? null;
}

export const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default ScrollToTop;

export function formatPhoneNumber(value) {
    const cleaned = ('' + value).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{1})(\d{4})(\d{4})$/);
    if (match) {
        return '(' + match[1] + ') ' + match[2] + ' ' + match[3] + '-' + match[4];
    }
    return value;
}