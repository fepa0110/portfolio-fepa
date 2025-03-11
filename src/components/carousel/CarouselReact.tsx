import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import type { SlideData } from "../../types/SlideData";
import { Image } from "astro:assets";

interface CarouselReactProps {
	width: number;
	images: SlideData[];
}

export default function CarouselReact({ images, width }: CarouselReactProps) {
	return (
		<Carousel
			transitionTime={1000}
            interval={4000}
            showArrows={false}
			infiniteLoop={true}
			autoPlay={true}
			centerMode={false}
			showIndicators={false}
			showStatus={false}
			showThumbs={false}
			stopOnHover={true}
			width={width}>
			{images.map((image) => {
				return (
					<div className="flex h-full w-full justify-center items-center">
						<img
							src={image.src}
							width={image.width}
							height={image.height}
						/>
					</div>
				);
			})}
		</Carousel>
	);
}
