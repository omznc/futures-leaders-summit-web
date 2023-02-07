import Image from 'next/image'
import { Anton, Inter } from '@next/font/google'
import styles from './page.module.css'
import { CallToAction } from "@/app/components/CallToAction/CallToAction";


const inter = Inter({ subsets: [ 'latin' ] })
const anton = Anton({ weight: "400", subsets: [ 'latin' ] })

export default function Home() {
	return (
		<main className={ `${ styles.main } ${ inter.className }` }>

			{/* HERO SECTION*/ }
			<div className={ styles.hero }>
				<Image
					className={ styles.background }
					src="/hero.webp"
					alt="Futures Leaders Summit"
					width={ 1920 } height={ 871 }
				/>
				<Image
					className={ styles.image }
					src="/hero-new.svg"
					alt="Futures Leaders Summit"
					width={ 900 } height={ 500 }
				/>
			</div>

			{/* ABOUT SECTION */ }
			<div className={ styles.hero_half }>
				<div className={ styles.content }>
					<h1 className={ [ styles.title, anton.className ].join(' ') }>
						ABOUT THE SUMMIT
					</h1>
					<p className={ styles.description }>
						We provide up-and-coming
						<span> STEM leaders </span>
						of
						<span> Bosnia and Herzegovina </span>
						the three key ingredients for success:
						<span> quality education</span>,
						<span> access to technology</span>, and
						<span> leadership development</span>.
					</p>
					<p className={ styles.description }>
						This year, we will hear the stories of leaders and organisations
						about how they are rethinking our present approach to global challenges,
						and <span> inspire </span> us to <span> reimagine </span> a
						more <span> prosperous future </span>
						in which we take a more active role.
					</p>
				</div>
				<div className={ styles.backgroundOverlay }>
					<Image src="/hex.svg" alt="decor" width={ 428 } height={ 653 }/>
				</div>
			</div>

			<CallToAction/>
		</main>
	)
}
