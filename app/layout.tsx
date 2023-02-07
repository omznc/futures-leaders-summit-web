import './globals.css'
import Header from './components/Header/Header'
import { Inter } from '@next/font/google'
import { ReactNode } from "react";
import { Footer } from "@/app/components/Footer/Footer";

const inter = Inter({ subsets: [ 'latin' ] })

export default function RootLayout({ children }: {
	children: ReactNode
}) {
	return (
		<>
			<html lang="en" className={ inter.className }>
			<head/>
			<body>
			<Header/>
			{ children }
			<Footer/>
			</body>
			</html>
		</>

	)
}
