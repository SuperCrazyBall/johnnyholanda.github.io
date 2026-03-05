function versiculoDoDia() {

  const versiculos = [
    {
      texto: "O Senhor é o meu pastor; nada me faltará.",
      referencia: "Salmos 23:1"
    },
    {
      texto: "Tudo posso naquele que me fortalece.",
      referencia: "Filipenses 4:13"
    },
    {
      texto: "Entrega o teu caminho ao Senhor; confia nele.",
      referencia: "Salmos 37:5"
    },
    {
      texto: "Porque sou eu que conheço os planos que tenho para vocês.",
      referencia: "Jeremias 29:11"
    }
  ];

  const hoje = new Date().getDate();
  const indice = hoje % versiculos.length;

  const escolhido = versiculos[indice];

  if (typeof desenharNoCanvas === "function") {
    desenharNoCanvas(escolhido.texto, escolhido.referencia);
  }

document.getElementById("versiculo").innerText = texto
document.getElementById("referencia").innerText = referencia

}
