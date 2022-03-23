import Head from "next/head";
import Image from "next/image";
import Link from 'next/link';
import { Box } from '@chakra-ui/react'
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<Box bg="black" color="#D6C8DA" w="100%" h="73px">
			<Head>
				<title>Ricetta</title>
			</Head>
			<h1>Ricetta</h1>
			<Link href="signup">
				<a>sign up</a>
			</Link>
			<Link href="login">
				<a>sign in</a>
			</Link>
		</Box>
	);
}