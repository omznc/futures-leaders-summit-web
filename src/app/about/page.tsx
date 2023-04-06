import { OverlayBottom } from '@components/OverlayBottom/OverlayBottom';
import { Metadata } from 'next';
import { title } from '@helpers/seo';
import { Information } from '@components/Information/Information';
import { BarInformation } from '@components/BarInformation/BarInformation';
import styles from './page.module.css';

export const metadata: Metadata = {
	title: `About | ${title}`,
	description: `About the Futures Leaders Summit`,
};

export default function Page() {
	return (
		<div className={styles.main}>
			<Information title={'ABOUT THE SUMMIT'}>
				<p>
					The vision of the{' '}
					<span>Bosnia and Herzegovina Future Foundation</span> is to transform{' '}
					<span>Bosnia and Herzegovina</span> into a{' '}
					<span>prosperous nation</span> capable of responding to the challenges
					of the 21st century. For that to happen, we provide up-and-coming{' '}
					<span>STEM leaders</span> of Bosnia and Herzegovina the three key
					ingredients for success:{' '}
					<span>
						quality education, access to technology, and leadership development
					</span>
					.
				</p>
				<br />
				<p>
					<span>Futures Leaders Summit</span> is an event that annually gathers
					prosperous changemakers in the field of <span>STEM</span>. By hosting
					world-class local and international keynote speakers, hands-on
					workshops, and visits to local companies, this event creates a strong
					network that will change the way we perceive the industry and the{' '}
					<span>future of the development of our country</span>.
				</p>
				<br />
				<p>
					The running engine behind the event are the{' '}
					<span>incredible scholars, alumni, volunteers, and staffers</span> of
					the Foundation, supported by our
					<span>mentors, donors, ambassadors</span>, and{' '}
					<span>many others</span> that find our cause close to their heart.
				</p>
			</Information>
			<BarInformation
				title={'THE PURPOSE OF THE SUMMIT'}
				description={
					'Positioning the Futures Leaders Summit as the leading platform' +
					' in the country for ongoing collaboration between young STEM leaders,' +
					' the local economy and the global community with the aim of creating' +
					' the next generation of change makers that will transform' +
					' Bosnia and Herzegovina into a prosperous nation.'
				}
			/>
			<OverlayBottom />
		</div>
	);
}
