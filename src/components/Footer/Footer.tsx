import styles from './style.module.css';
import { Socials } from '@components/Socials/Socials';
import LogoFLS from '@public/logos/logo-fls.svg';
import LogoBHFF from '@public/logos/logo-bhff.svg';
import Image from 'next/image';
import { Button } from '@components/Button/Button';
import { IPaymentMethod, ISocial } from '@interfaces/interfaces';
import PayPal from '@public/logos/payment-services/paypal.svg';
import Mastercard from '@public/logos/payment-services/mastercard.svg';
import Visa from '@public/logos/payment-services/visa.svg';
import Maestro from '@public/logos/payment-services/maestro.svg';

const socials = [
	{
		name: 'facebook',
		link: 'https://www.facebook.com/Futures-Leaders-Summit-100876219014134',
	},
	{
		name: 'instagram',
		link: 'https://www.instagram.com/futuresleaderssummit/',
	},
	{
		name: 'linkedin',
		link: 'https://www.linkedin.com/company/futuresleaderssummit/',
	},
] as ISocial[];

const payments = [
	{ name: 'PayPal', icon: PayPal },
	{ name: 'Mastercard', icon: Mastercard },
	{ name: 'Visa', icon: Visa },
	{ name: 'Maestro', icon: Maestro },
] as IPaymentMethod[];

// A component that renders the footer. TODO: The footer is not yet implemented.
export function Footer() {
	return (
		<>
			<footer className={styles.footer}>
				<div className={styles.info}>
					<div className={styles.health}>
						<h2>{"FLS'23 HEALTH AND SAFETY PROTOCOLS"}</h2>
						<p>
							{
								'All safety measures are in accordance with the orders and instructions of the Federal and Cantonal Crisis Staff. The organizing team will put in place all measures needed to prevent the further spread of COVID-19 during event days. Your health and well-being is of the utmost importance for us.'
							}
						</p>
						<Button
							title={'Contact Us'}
							link={'/contact'}
							style={'yellow'}
						/>
						<div className={styles.payments}>
							{payments.map(payment => (
								<Image
									src={payment.icon}
									alt={payment.name}
									key={payment.name}
								/>
							))}
						</div>
					</div>

					<div className={styles.legal}>
						<h2>Legal Information</h2>
						<p>
							{`© Bosnia & Herzegovina Futures Foundation • All rights reserved • ${new Date().getFullYear()}`}
						</p>
					</div>
				</div>
				<div className={styles.social}>
					<div className={styles.contact}>
						<h2>Follow FLS</h2>
						<Socials socials={socials} theme={'yellow'} />
					</div>
					<div className={styles.logos}>
						<Image
							src={LogoFLS}
							alt={'Futures Leaders Summit Logo'}
						/>
						<Image
							src={LogoBHFF}
							alt={'BH Futures Foundation Logo'}
						/>
					</div>
				</div>
			</footer>
		</>
	);
}
