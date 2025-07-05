"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";

export default function Navigation() {
    const path = usePathname();

    function HyperLink({ name }: { name: string }) {
        const href = name === "Home" ? "/" : `/${name.toLowerCase()}`;
        // const href = `${name.toLowerCase()}`;
        const isActive = path === href;

        return (
            <li>
                <Link href={href}>{name}</Link>{isActive && " <<"}
            </li>
        );
    }

    const links = ["Home", "About"];

    return (
        <nav className={styles.nav}>
            <ul>
                {links.map((name) => (
                    <HyperLink key={name} name={name} />
                ))}
            </ul>
        </nav>
    );
}
