let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(800)
  .typeString('Soy programadora frontend y lo aprendí en Tecnolochicas.')
  .pauseFor(100)
  .deleteChars(300)
  .start();
