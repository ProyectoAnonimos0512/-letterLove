const envelope = document.querySelector(".envelope-wrapper");
const letter = document.querySelector(".letter");

document.addEventListener("click", (e) => {
	if (
		e.target.matches(".envelope") ||
		e.target.matches(".tap-right") ||
		e.target.matches(".tap-left") ||
		e.target.matches(".heart")
	) {
		envelope.classList.toggle("flap");

		if (!letter.classList.contains("opened")) {
			setTimeout(() => {
				letter.classList.add("letter-opening");

				setTimeout(() => {
					letter.classList.remove("letter-opening");
					letter.classList.add("opened");
				}, 500);
			}, 1000);
		}
	} else if (e.target.matches(".envelope *")) {
		envelope.classList.remove("flap");
		if (letter.classList.contains("opened")) {
			letter.classList.add("closing-letter");
			setTimeout(() => {
				letter.classList.remove("closing-letter");
				letter.classList.remove("opened");
			}, 500);
		}
	}
});

document.addEventListener("DOMContentLoaded", () => {
	const envelope = document.querySelector(".envelope-wrapper");
	const letter = document.querySelector(".letter");

	// Función para crear pétalos en los nenúfares
	function createPetals() {
		const lilyPads = document.querySelectorAll(".lily-pad");
		lilyPads.forEach((lilyPad) => {
			for (let i = 0; i < 8; i++) {
				const petal = document.createElement("div");
				petal.className = "petal";
				petal.style.transform = `rotate(${i * 45}deg)`;
				lilyPad.appendChild(petal);
			}
		});
	}

	// Crear pétalos
	createPetals();

	// Crear luciérnagas
	const container = document.body;
	const fireflyCount = 15;

	for (let i = 0; i < fireflyCount; i++) {
		createFirefly();
	}

	function createFirefly() {
		const firefly = document.createElement("div");
		firefly.className = "firefly";

		// Posición inicial aleatoria
		const x = Math.random() * window.innerWidth;
		const y = Math.random() * (window.innerHeight * 0.7);

		firefly.style.left = `${x}px`;
		firefly.style.top = `${y}px`;

		// Movimiento más orgánico
		const duration = Math.random() * 10 + 10;
		const delay = Math.random() * -15;

		firefly.style.animation = `
            drift ${duration}s infinite ease-in-out ${delay}s,
            float ${duration * 1.5}s infinite ease-in-out ${delay}s
        `;

		container.appendChild(firefly);
	}

	// Animación de los nenúfares
	function animateNenuphars() {
		const lilyPads = document.querySelectorAll(".lily-pad");
		lilyPads.forEach((lilyPad, index) => {
			const delay = index * 2;
			lilyPad.style.animation = `
                float ${8 + index * 2}s infinite ease-in-out ${delay}s,
                rotate ${12 + index * 3}s infinite ease-in-out ${delay}s
            `;
		});
	}

	// Iniciar animación de nenúfares
	animateNenuphars();
});
