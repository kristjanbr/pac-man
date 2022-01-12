const target = window.document.getElementById('pac');

const flickerLetter = letter => `<span style="animation: text-flicker-in-glow ${Math.random()*3}s linear both">${letter}</span>`
const colorLetter = letter => `<span style="color: yellow;">${letter}</span>`
const flickerAndColorText = text =>
	text
		.split('')
		.map(flickerLetter)
		.map(colorLetter)
		.join('');
const neonGlory = target => target.innerHTML = flickerAndColorText(target.textContent);

neonGlory(target);
