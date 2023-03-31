		// Obtener el formulario y el botón de envío
		const quizForm = document.getElementById("quizForm");
		const submitButton = quizForm.querySelector("button[type=submit]");

		// Manejar el evento de envío del formulario
		quizForm.addEventListener("submit", function(event) {
			event.preventDefault(); // prevenir el comportamiento predeterminado del formulario

			// Obtener las respuestas seleccionadas
			const q1 = quizForm.querySelector("input[name=q1]:checked");
			const q2 = quizForm.querySelector("input[name=q2]:checked");
			const q3 = quizForm.querySelector("input[name=q3]:checked");

			// Contar las respuestas correctas e incorrectas
			let correctAnswers = 0;
			let incorrectAnswers = 0;

			if (q1 && q1.value === "b") {
				correctAnswers++;
			} else {
				incorrectAnswers++;
			}

			if (q2 && q2.value === "b") {
				correctAnswers++;
			} else {
				incorrectAnswers++;
            }

if (q3 && q3.value === "b") {
    correctAnswers++;
} else {
    incorrectAnswers++;
}

// Mostrar los resultados al usuario
alert(`Respuestas correctas: ${correctAnswers}\nRespuestas incorrectas: ${incorrectAnswers}`);
});

