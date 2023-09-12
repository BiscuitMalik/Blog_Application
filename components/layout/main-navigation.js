import Link from "next/link";
import Logo from "./logo";
import classes from "./main-navigation.module.css"

function MianNavigation() {
    return (
        <header className={classes.header}>
            <Link href='/'>
                <Logo />
            </Link>
            <nav>
                <ul>
                    <li><Link href='/posts'>Posts</Link></li>
                    <li><Link href='/login'>Login</Link></li>
                    <li><Link href='/profile'>Profile</Link></li>
                    <li><Link href='/contact'>Contact</Link></li>
                    <button >Logout</button>
                </ul>
            </nav>
        </header>
    )

}
export default MianNavigation;