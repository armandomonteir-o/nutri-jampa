"use client"
import { useEffect, useState } from "react"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import Image from "next/image"
import styles from "@/components/pages/fourthLayout/fourthLayout.module.css"
import { feedback } from "@/constants/feedbacks"
import "react-alice-carousel/lib/alice-carousel.css"
import RatingAverage from "@/components/RatingAverage"

export default function FourthLayout() {
	const responsive = {
		0: { items: 1 },
		768: { items: 2 },
		1024: { items: 3 },
	}

	const [isClient, setIsClient] = useState(false)

	useEffect(() => {
		setIsClient(true)
	}, [])

	// Prepara os itens do carrossel
	const carouselItems = feedback.map((item, index) => (
		<div key={index} className={styles.carouselItem}>
			<div className={styles.feedbackCard}>
				<Image
					src={item.avatar}
					alt={item.name}
					width={120}
					height={120}
					className={styles.avatar}
				/>
				<h3 className={styles.clientName}>{item.name}</h3>
				<p className={styles.clientRole}>{item.role}</p>
				<p className={styles.feedbackText}>{item.text}</p>
			</div>
		</div>
	))

	return (
		<div className={styles.container}>
			<div className={styles.whyConsultWrapper}>
				<h2>Por que consultar comigo?</h2>

				<RatingAverage />

				<p>
					&ldquo;Lorem ipsum dolor sit amet, consectetur
					adipiscing elit, sed do eiusmod tempor incididunt ut
					labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor
					in reprehenderit in voluptate velit esse cillum dolore
					eu fugiat nulla pariatur. Excepteur sint occaecat
					cupidatat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum.&rdquo;
				</p>
			</div>
			<div className={styles.carouselWrapper}>
				{isClient ? (
					<AliceCarousel
						mouseTracking
						infinite
						autoPlay
						autoPlayInterval={3000}
						animationDuration={800}
						disableDotsControls
						responsive={responsive}
						items={carouselItems}
					/>
				) : (
					<div className={styles.loadingCarousel}>
						Carregando depoimentos...
					</div>
				)}
			</div>
		</div>
	)
}
