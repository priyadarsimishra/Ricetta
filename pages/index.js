import Head from "next/head";
import Image from "next/image";
import Link from 'next/link';
import { Box } from '@chakra-ui/react'
import { Badge } from '@chakra-ui/react'
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Ricetta</title>
			</Head>
			<Box bg="#857393" color="white" w="100%" h="73px">
				<Link href="signup">
					<a>Sign Up </a>
				</Link>
				<Badge display="flex" borderRadius="45px" bg="#3B1A4A" color="white" h="90px" w="300px" textAlign="center" justifyContent="center">
					<Link href="">
						<a>Ricetta</a>
					</Link>
				</Badge>
				<Link href="login">
					<a>Sign In</a>
				</Link>
			</Box>
		</div>
	);
}