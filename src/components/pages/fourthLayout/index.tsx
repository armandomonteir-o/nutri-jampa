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
	const [isMounted, setIsMounted] = useState(false)
	const [isTouch, setIsTouch] = useState(false)

	useEffect(() => {
		setIsMounted(true)
		// Verifica se é um dispositivo touch quando o componente é montado no cliente
		setIsTouch(window.matchMedia('(max-width: 1366px) and (pointer: coarse)').matches)
	}, [])

	const carouselItems = feedback.map((item, index) => (
		<div key={index} className={styles.carouselItem}>
			<div className={styles.feedbackCard}>
				<Image
					src={item.avatar}
					alt={item.name}
					width={100}
					height={100}
					className={styles.avatar}
					priority={index < 3}
				/>
				<h3 className={styles.clientName}>{item.name}</h3>
				<p className={styles.clientRole}>{item.role}</p>
				<p className={styles.feedbackText}>{item.text}</p>
			</div>
		</div>
	))

	const responsive = {
		0: { items: 1, itemsFit: "contain" },
		768: { items: 2, itemsFit: "contain" },
		1024: { items: 2, itemsFit: "contain" },
		1200: { items: 3, itemsFit: "contain" },
	}

	return (
		<div className={styles.container}>
			<div className={styles.whyConsultWrapper}>
				<h2>Por que consultar comigo?</h2>

				<RatingAverage />

				<p>
					Você não precisa embarcar em &ldquo;mais uma
					dieta&rdquo; restritiva e frustrante.
				</p>
				<p>
					O que você realmente precisa é de um acompanhamento que
					olhe para você como um todo: considerando sua mente,
					sua rotina, suas emoções e seus objetivos de vida.
				</p>
				<p>
					Consultar comigo é dar um passo em direção a uma vida
					mais leve e equilibrada, onde a nutrição se torna parte
					natural de quem você é, e não uma obrigação passageira.
				</p>
				<p>
					Eu estarei ao seu lado em cada etapa desta jornada.
					Alcançar seus resultados não é apenas meu trabalho, é a
					minha missão.
				</p>
			</div>
			<div className={styles.carouselWrapper}>
				{isMounted ? (
					<AliceCarousel
						mouseTracking
						items={carouselItems}
						responsive={responsive}
						controlsStrategy="alternate"
						disableDotsControls
						touchTracking={true}
						touchMoveDefaultEvents={false}
						disableButtonsControls={isTouch}
						infinite
						autoPlay
						autoPlayInterval={4000}
						animationDuration={800}
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
