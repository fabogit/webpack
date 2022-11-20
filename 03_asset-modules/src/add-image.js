import myImage from "../public/images/wbpk.png";

function addImage() {
	const img = document.createElement('img');
	img.alt = 'Image';
	img.width = 300;
	img.src = myImage;
	const body = document.querySelector('body');
	body.appendChild(img);
}

export default addImage;