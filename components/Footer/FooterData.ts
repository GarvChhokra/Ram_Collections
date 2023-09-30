export interface FooterDataProps {
    title: string,
    labels: {name: string, href: string}[],
}

const FooterData: FooterDataProps[] = [
    {
    title:"Company",
    labels: [
        {
        name: "About", href: "/about"
        } , 
        {
            name: "Store Locator", href: "/store-locator"
        }
    ]
    },{
    title:"Help Center",
    labels: [
        {
        name: "Contact Us", href: "/contact-us"
        } , 
        {
            name: "Delivery Information", href: "/delivery-information"
        }
    ]
    },{
    title:"Legal",
    labels: [
        {
        name: "Privacy Policy", href: "/privacy-policy"
        } , 
        {
            name: "Terms & Condition", href: "/terms&condition"
        },
        {
            name: "Shipping Policy", href: "/shipping-policy"
        }
    ]
    },
]

export default FooterData;