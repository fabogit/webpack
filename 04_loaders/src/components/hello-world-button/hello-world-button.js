import './hello-world-button.css';

class HelloWorldButton {
	render() {
		const button = document.createElement('button');
		button.innerHTML = 'I am button, click me';
		button.classList.add('hello-btn');
		button.onclick = function () {
			const pElem = document.createElement('p');
			pElem.innerHTML = 'Hello there!';
			pElem.classList.add('hello-text');
			body.appendChild(pElem);
		};
		const body = document.querySelector('body');
		body.appendChild(button);
	}
}

export default HelloWorldButton;