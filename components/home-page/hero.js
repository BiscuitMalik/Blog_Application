import classes from './hero.module.css'
import Image from 'next/image';

function Hero() {
    return <section className={classes.hero}>
        <div className={classes.image}>
            <Image src='/images/site/haroon_crop.jpg' alt='An image shoing prfile photo' width={300} height={300} />
        </div>
        <h1> Hi, its Haroon</h1>
        <p>Here is my blog. I bolg about all what i learn.</p>

    </section>

}
export default Hero;