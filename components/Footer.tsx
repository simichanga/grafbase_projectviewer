import React from 'react';
import Image from "next/image";
import {footerLinks} from "@/constants";
import Link from "next/link";

type ColumnProps = {
    title: string,
    links: Array<String>
}

const FooterColumn = ({ title, links } : ColumnProps) => (
    <div className="footer_column">
        <h4 className="font-semibold">{title}</h4>
        <ul className="flex flex-col gap-2 font-normal">
            {links.map((link) => <Link href="/" key={link}>{link}</Link>)}
        </ul>
    </div>
)

const Footer = () => {
    const maxLinksSize = Math.max(...footerLinks.map(item => item.links.length));

    return (
        <footer className="flexStart footer">
            <div className="flex flex-col gap-12 w-full">
                <div className="flex items-start flex-col">
                    <Image
                        src="/logo-purple.svg"
                        width={115}
                        height={38}
                        alt="Logo"
                    />
                </div>
                <div className="flex flex-wrap justify-between gap-12">
                    {footerLinks.map((item, index) => (
                        <div className={`flex flex-col flex-1 gap-4 h-${maxLinksSize * 10}`} key={index}>
                            {item.links && item.links.length > 0 && (
                                <FooterColumn title={item.title} links={item.links} />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;