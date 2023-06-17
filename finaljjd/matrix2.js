const abejita = document.querySelector('.abeja');


abejita.addEventListener('click', function () {

  window.location.href = '/escape-end';
});

const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

let matrixStream;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  if (matrixStream) {
    matrixStream.stop();
    matrixStream = null;
  }
  initMatrixStream();
}

function initMatrixStream() {
  const fontSize = 16;
  const columns = Math.floor(canvas.width / fontSize);
  const rows = Math.floor(canvas.height / fontSize);

  const characters = [];
  for (let i = 0; i < 200; i++) {
    characters.push(String.fromCharCode(Math.random() * 128));
  }

  matrixStream = new MatrixStream(columns, rows, fontSize, characters);
  matrixStream.start();
}

class MatrixStream {
  constructor(columns, rows, fontSize, characters) {
    this.columns = columns;
    this.rows = rows;
    this.fontSize = fontSize;
    this.characters = characters;

    this.streams = [];
  }

  start() {
    for (let i = 0; i < this.columns; i++) {
      const stream = new MatrixStreamColumn(i, this.rows, this.fontSize, this.characters);
      this.streams.push(stream);
    }

    this.animate();
  }

  stop() {
    this.streams = [];
  }

  animate() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < this.streams.length; i++) {
      const stream = this.streams[i];
      stream.update();
      stream.draw();
    }

    requestAnimationFrame(this.animate.bind(this));
  }
}

class MatrixStreamColumn {
  constructor(x, rows, fontSize, characters) {
    this.x = x;
    this.rows = rows;
    this.fontSize = fontSize;
    this.characters = characters;

    this.reset();
  }

  reset() {
    this.y = -Math.floor(Math.random() * this.rows) * this.fontSize;
    this.length = Math.floor(Math.random() * 40) + 10;
    this.speed = Math.random() * 3 + 2;
    this.charIndex = Math.floor(Math.random() * this.characters.length);
  }

  update() {
    this.y += this.speed;
    if (this.y > canvas.height) {
      this.reset();
    }
  }

  draw() {
    let y = this.y;
    for (let i = 0; i < this.length; i++) {
      if (y + i * this.fontSize >= 0) {
        const char = this.characters[(this.charIndex + i) % this.characters.length];
        ctx.fillStyle = 'lime';
        ctx.font = `${this.fontSize}px monospace`;
        ctx.fillText(char, this.x * this.fontSize, y + i * this.fontSize);
      }
    }
  }
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();


