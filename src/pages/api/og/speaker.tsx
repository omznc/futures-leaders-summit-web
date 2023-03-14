import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
	runtime: 'edge',
};

const year = new Date().getFullYear().toString().slice(2);
export default function handler(req: NextRequest) {
	try {
		const { searchParams } = new URL(req.url);

		const title = searchParams.get('title')?.slice(0, 50);
		const image = searchParams.get('image');
		const description = searchParams.get('description');

		if (!title || !description) {
			return new Response(
				`Missing query parameters: ${[
					!title && 'title',
					!image && 'image',
					!description && 'description',
				]
					.filter(Boolean)
					.join(', ')}.`,
				{
					status: 400,
				}
			);
		}

		return new ImageResponse(
			(
				<div
					style={{
						backgroundColor: '#070e12',
						backgroundSize: '150px 150px',
						height: '100%',
						width: '100%',
						padding: '0 50px',
						display: 'flex',
						textAlign: 'center',
						alignItems: 'center',
						justifyContent: 'center',
						flexDirection: 'row',
						flexWrap: 'nowrap',
						gap: '50px',
					}}
				>
					{image && (
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								justifyItems: 'center',
								marginLeft: '10%',
								marginTop: '-15%',
							}}
						>
							<img
								alt='Vercel'
								height={250}
								src={image}
								style={{ borderRadius: 128 }}
								width={250}
							/>
						</div>
					)}
					<div
						style={{
							fontSize: 60,
							fontStyle: 'normal',
							color: 'white',
							whiteSpace: 'pre-wrap',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'flex-start',
							textAlign: 'left',
							gap: '0',
							width: '55%',
							marginTop: '-15%',
						}}
					>
						<h1 style={{ fontSize: 50, color: '#f1dc13', fontWeight: 'bold' }}>
							{title}
						</h1>
						<p style={{ fontSize: 30, marginTop: 0 }}>{description}</p>
					</div>
					<div
						style={{
							position: 'absolute',
							bottom: '5%',
							right: '5%',
							left: '5%',
							width: '100%',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-around',
						}}
					>
						<img
							alt='Vercel'
							src={
								'https://futures-leaders-summit-web.vercel.app/_next/static/media/logo-fls.4507a0c0.svg'
							}
							width={250}
						/>
						<img
							alt='Vercel'
							src={
								'https://futures-leaders-summit-web.vercel.app/_next/static/media/logo-bhff.37b7b41f.svg'
							}
							width={250}
						/>
					</div>
				</div>
			),
			{
				width: 1200,
				height: 630,
			}
		);
	} catch (e: any) {
		console.log(`${e.message}`);
		return new Response(`Failed to generate the image.`, {
			status: 500,
		});
	}
}
