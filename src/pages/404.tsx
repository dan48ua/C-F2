import Image from 'next/image'

export default function Custom404() {
	return (
		// <Image
		// 	src='/404/DALL·E 2025-03-03 23.47.20 - A dark yet warm and moody wide-angle image of a mourning candle in a black glass jar, symbolizing sadness and loss. The candle casts a dim but warm go.webp'
		// 	quality={100}
		// 	fill
		// 	sizes='100%'
		// 	alt='background'
		// 	style={{ objectFit: 'cover', objectPosition: 'center' }}
		// />
		<Image
			src='/404/okak.webp'
			quality={100}
			fill
			sizes='100%'
			alt='background'
			style={{ objectFit: 'cover', objectPosition: 'center' }}
		/>
	)
}
