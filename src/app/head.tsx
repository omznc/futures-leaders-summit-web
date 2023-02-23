import { description, photo, title } from '@helpers/seo';

export default function Head() {
	return (
		<>
			{/*<!-- Primary Meta Tags -->*/}
			<meta name="title" content={title} />
			<title>{title}</title>
			<meta name="description" content={description} />
			<link rel="icon" href="/favicon.ico" />

			{/*<!-- Facebook Meta Tags -->*/}
			<meta property="og:url" content="https://www.fls.ba" />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={photo} />
			<meta property="og:image:secure_url" content={photo} />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="630" />
			<meta property="og:image:alt" content={title} />
			<meta property="og:image:type" content="image/png" />

			{/*<!-- Twitter Meta Tags -->*/}
			<meta name="twitter:card" content="summary_large_image" />
			<meta property="twitter:domain" content="fls.ba" />
			<meta property="twitter:url" content="https://www.fls.ba/" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={photo} />
		</>
	);
}
