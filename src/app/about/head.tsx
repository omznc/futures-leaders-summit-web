import { description, photo, title } from '@helpers/seo';

// Example: "About" becomes "About - Futures Leaders Summit '{year}"
const titlePrefix = `About`;

// 1200x630
const ogPhoto = 'https://www.fls.ba/share.png';

// Fully overwrites the default description
const pageDescription =
	"Futures Leaders Summit is an event that annually gathers prosperous changemakers in the field of STEM. By hosting world-class local and international keynote speakers, hands-on workshops, and visits to local companies, this event creates a strong network that will change the way we perceive the industry and the future of our country's development.";

export default function Head() {
	return (
		<>
			{/*<!-- Primary Meta Tags -->*/}
			<meta
				name="title"
				content={titlePrefix ? `${titlePrefix} - ${title}` : title}
			/>
			<title>{titlePrefix ? `${titlePrefix} - ${title}` : title}</title>
			<meta name="description" content={pageDescription || description} />

			{/*<!-- Facebook Meta Tags -->*/}
			<meta property="og:url" content="https://www.fls.ba" />
			<meta property="og:type" content="website" />
			<meta
				property="og:title"
				content={titlePrefix ? `${titlePrefix} - ${title}` : title}
			/>
			<meta
				property="og:description"
				content={pageDescription || description}
			/>
			<meta property="og:image" content={ogPhoto || photo} />
			<meta property="og:image:secure_url" content={ogPhoto || photo} />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="630" />
			<meta
				property="og:image:alt"
				content={titlePrefix ? `${titlePrefix} - ${title}` : title}
			/>
			<meta property="og:image:type" content="image/png" />

			{/*<!-- Twitter Meta Tags -->*/}
			<meta name="twitter:card" content="summary_large_image" />
			<meta property="twitter:domain" content="fls.ba" />
			<meta property="twitter:url" content="https://www.fls.ba/" />
			<meta
				name="twitter:title"
				content={titlePrefix ? `${titlePrefix} - ${title}` : title}
			/>
			<meta
				name="twitter:description"
				content={pageDescription || description}
			/>
			<meta name="twitter:image" content={ogPhoto || photo} />
		</>
	);
}
