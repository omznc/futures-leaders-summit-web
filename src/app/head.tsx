const year = new Date().getFullYear().toString().slice(-2);

export default function Head() {
	return (
		<>
			{/*<!-- Primary Meta Tags -->*/}
			<meta name="title" content={`Futures Leaders Summit '${year}`} />
			<title>{`Futures Leaders Summit '${year}`}</title>
			<meta
				name="description"
				content="Futures Leaders Summit is an event that annually gathers prosperous changemakers in the field of STEM."
			/>
			<link rel="icon" href="/public/favicon.ico" />
			<meta name="language" content="English" />

			{/*<!-- Facebook Meta Tags -->*/}
			<meta property="og:url" content="https://www.fls.ba" />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={`Futures Leaders Summit '${year}`} />
			<meta
				property="og:description"
				content="Futures Leaders Summit is an event that annually gathers prosperous changemakers in the field of STEM."
			/>
			<meta property="og:image" content="https://www.fls.ba/share.png" />
			<meta
				property="og:image:secure_url"
				content="https://www.fls.ba/share.png"
			/>
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="630" />
			<meta
				property="og:image:alt"
				content={`Futures Leaders Summit '${year}`}
			/>
			<meta property="og:image:type" content="image/png" />

			{/*<!-- Twitter Meta Tags -->*/}
			<meta name="twitter:card" content="summary_large_image" />
			<meta property="twitter:domain" content="fls.ba" />
			<meta property="twitter:url" content="https://www.fls.ba/" />
			<meta name="twitter:title" content={`Futures Leaders Summit '${year}`} />
			<meta
				name="twitter:description"
				content="Futures Leaders Summit is an event that annually gathers prosperous changemakers in the field of STEM."
			/>
			<meta name="twitter:image" content="https://www.fls.ba/share.png" />
		</>
	);
}
