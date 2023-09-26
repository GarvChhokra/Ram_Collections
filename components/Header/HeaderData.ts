import { IconTree } from "react-icons";
import {BiSearch} from 'react-icons/bi'
import {CgProfile} from 'react-icons/cg'
import {GrFavorite} from 'react-icons/gr'
import {PiShoppingCart} from 'react-icons/pi'

export interface HeaderDataItems {
    icon: IconTree,
    label: string,
    href: string, 
}

const HeaderData: HeaderDataItems[] = [{
    icon: BiSearch,
    label: 'Search',
    href: '/'
    }, {
    icon: CgProfile,
    label: 'Profile',
    href: '/profile',
    },{
    icon: GrFavorite,
    label: 'Favorites',
    href: '/favorites',
    },{
    icon: PiShoppingCart,
    label: 'Cart',
    href: '/cart',
    }
]

export default HeaderData;