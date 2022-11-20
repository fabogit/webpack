import myImage from "../public/images/image-big.jpg";

export function addImageResource() {
	const img = document.createElement('img');
	img.alt = 'Image';
	img.width = 300;
	img.src = myImage;
	const body = document.querySelector('body');
	body.appendChild(img);
}

export default addImageResource;