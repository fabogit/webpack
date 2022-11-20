// import './hello-world-button.css';
import './hello-world-button.scss';

class HelloWorldButton {
	buttonCssClass = 'hello-btn';
	render() {
		const button = document.createElement('button');
		button.innerHTML = 'I am button, click me 🫵';
		// button.classList.add('hello-btn');
		button.classList.add(this.buttonCssClass);
		button.onclick = function () {
			const pElem = document.createElement('p');
			pElem.innerHTML = 'Hello there! 👋';
			pElem.classList.add('hello-text');
			body.appendChild(pElem);
		};
		const body = document.querySelector('body');
		body.appendChild(button);
	}
}

export default HelloWorldButton;