"use client"
import Image from "next/image"
import slimMindLogo from "../../../../public/images/slimmindwhitelogo.webp"
import styles from "@/components/pages/initialLayout/initialLayout.module.css"
import Button from "@/components/Button"

export default function initialLayout() {
	const handleClick = () => {
		console.log("oi")
	}

	return (
		<>
			<div className={styles.container}>
				<div className={styles.innercontainer}>
					<Image
						src={slimMindLogo}
						alt="Logo SlimMind"
						width={150}
						height={150}
					></Image>
					<h1>Jampa nutricionista</h1>
					<h2>
						Aprenda as técnicas para viralizar seus reels em
						tempo recorde e{" "}
						<strong>lucrar muito com isso</strong>
					</h2>
					{/* <div className={styles.videocontainer}>
      <Video
          className={styles.videocontainer}
          src={getStarted}
          controls={true}
          style={{
              height: "40vh",
          }}
      ></Video>
  </div> */}
					<div
						className={styles.videocontainer}
						style={{
							height: "40vh",
							width: "100%",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<p>Em breve...</p>
					</div>
					<div className={styles.buttonWrapper}>
						<Button variant="thirdary" onClick={handleClick}>
							Quero consultar
						</Button>
						<p>Por menos de 10 reais por dia.</p>
					</div>
				</div>
			</div>
		</>
	)
}
