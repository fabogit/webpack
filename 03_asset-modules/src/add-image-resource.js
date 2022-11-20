import myImage from "../public/images/image-big.jpg";
import altText from "../public/altText.txt";

export function addImageResource() {
	const img = document.createElement('img');
	img.alt = altText;
	img.width = 300;
	img.src = myImage;
	const body = document.querySelector('body');
	body.appendChild(img);
}

export default addImageResource;