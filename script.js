
// CRUD 
// Crear Leer Actualizar Borrar
alert("Greetings, Universe! Let’s connect and create ✿");

let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

// Usar el punto es para llamar a una propiedad o a una acción del objeto.
// Acciones se distinguen por los paréntesis ()
typewriter
  .pauseFor(2500)
  .typeString('Damaris Romero')
  .pauseFor(300)
  .deleteAll()
  .typeString('Auditora Financiera')
  .pauseFor(1000)
  .start();

let frase = document.getElementById('frase');

let typewriterFrase = new Typewriter(frase, {
  loop: true,
  delay: 75,
});

// Usar el punto es para llamar a una propiedad o a una acción del objeto.
// Acciones se distinguen por los paréntesis ()
typewriterFrase
  .pauseFor(2500)
  .typeString('"The best way to predict the future is to invent it."')
  .pauseFor(400)
  .deleteAll()
  .typeString('Alan Kay')
  .pauseFor(1000)
  .start();