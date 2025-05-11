function _1(md){return(
md`# animacao`
)}

function _2(DOM)
{
  const canvas = DOM.canvas(400, 300);
  const ctx = canvas.getContext("2d");
  let t = 0;

  function desenharEngrenagem(x, y, raio, dentes, cor, sentido) {
    const anguloPorDente = (2 * Math.PI) / dentes;
    ctx.beginPath();
    for (let i = 0; i < dentes; i++) {
      const angulo = t * sentido + i * anguloPorDente;
      const r1 = raio;
      const r2 = raio + 10;
      const x1 = x + Math.cos(angulo) * r1;
      const y1 = y + Math.sin(angulo) * r1;
      const x2 = x + Math.cos(angulo + anguloPorDente / 2) * r2;
      const y2 = y + Math.sin(angulo + anguloPorDente / 2) * r2;
      ctx.lineTo(x1, y1);
      ctx.lineTo(x2, y2);
    }
    ctx.closePath();
    ctx.fillStyle = cor;
    ctx.fill();
  }

  function animar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    desenharEngrenagem(150, 150, 40, 12, "#0077b6", 1);
    desenharEngrenagem(240, 150, 30, 10, "#ff8500", -1);
    desenharEngrenagem(195, 90, 25, 8, "#7d8597", 1);
    t += 0.02;
    requestAnimationFrame(animar);
  }

  animar();
  return canvas;
}


export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("animacao")).define(["DOM"], _2);
  return main;
}
