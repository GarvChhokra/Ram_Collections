export interface HeaderDataItems {
    icon: string;
    label: string;
    href: string;
}

const HeaderData: HeaderDataItems[] = [
    {
        icon: 'BiSearch', 
        label: 'Search',
        href: '/',
    },
    {
        icon: 'CgProfile',
        label: 'Profile',
        href: '/login',
    },
    {
        icon: 'GrFavorite',
        label: 'Favorites',
        href: '/favorites',
    },
    {
        icon: 'PiShoppingCart',
        label: 'Cart',
        href: '/cart',
    },
];

export default HeaderData;
