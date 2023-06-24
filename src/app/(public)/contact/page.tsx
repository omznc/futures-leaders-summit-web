import styles from './page.module.css';
import { Metadata } from 'next';
import { title } from '@helpers/seo';
import Title from '@components/Title/Title';
import Image from 'next/image';
import Hex from '@public/hex.svg';
import { Button } from '@components/Button/Button';

export const metadata: Metadata = {
	title: `Contact | ${title}`,
	description: `Contacts the Futures Leaders Summit`,
};

export default function Page() {
	return (
		<>
			<div className={styles.hero}>
				<div className={styles.info}>
					<Title title={'Contact us'} />
					<p>
						Fill in the form below and we will get back to you as soon as
						possible.
					</p>
				</div>
				<Form />
			</div>
			<div className={styles.backgroundOverlay}>
				<Image src={Hex} alt='decor' width={428} height={653} priority={true} />
			</div>
		</>
	);
}

const Form = () => {
	return (
		<form className={styles.form}>
			<div className={styles.formGroup}>
				<label htmlFor='type'>Inquiry type</label>
				<select name='type' id='type'>
					<option value='general'>General</option>
					<option value='media'>Become a Sponsor</option>
				</select>
			</div>
			<div className={styles.formGroup}>
				<label htmlFor='name'>Name</label>
				<input type='text' name='name' id='name' />
			</div>
			<div className={styles.formGroup}>
				<label htmlFor='email'>Email</label>
				<input type='email' name='email' id='email' />
			</div>
			<div className={styles.formGroup}>
				<label htmlFor='message'>Message</label>
				<textarea name='message' id='message' rows={5} />
			</div>
			<Button title={'Submit'} style={'yellow'} />
		</form>
	);
};
