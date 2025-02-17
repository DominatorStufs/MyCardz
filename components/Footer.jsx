import Link from "next/link";
import Logo from "./Logo";
import { ModeToggle } from "./ModeToggle";

export default function Footer() {
    return (
        <footer className="px-8 md:px-20 lg:px-32 py-5 mt-3 grid gap-4">
            <div className="flex justify-between">
                <div>
                    <Logo />
                    <p className="text-xs">Built by <a href="https://github.com/DominatorStufs" className="hover:text-primary hover:underline">Dominator</a> codebase on <a className="hover:text-primary hover:underline" href="https://github.com/DominatorStufs/MyCard">github</a></p>
                </div>
                <div>
                    <ModeToggle/>
                </div>
            </div>
            <ul className="text-sm grid gap-1">
                <li className="hover:underline hover:text-primary text-sm"><Link href="https://github.com/DominatorStufs/MyCard">Fix This Web</Link></li>
                <li className="hover:underline hover:text-primary text-sm"><Link href="https://github.com/DominatorStufs/MyCard">Report An Issue</Link></li>
            </ul>
            <p className="text-xs">&copy; {new Date().getFullYear()} <Link href="/" className="text-primary hover:underline">MyCard</Link> All Rights Reserved.</p>
        </footer>
    )
}
