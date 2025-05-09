const dicionario = {
  "um": "one",
  "dois": "two",
  "três": "three",
  "quatro": "four",
  "cinco": "five",
  "seis": "six",
  "sete": "seven",
  "oito": "eight",
  "nove": "nine",
  "dez": "ten",
};

function traduzirPalavra() {
  const input = document.getElementById("palavraInput");
  const palavra = input.value.trim().toLowerCase();
  const resultado = document.getElementById("resultado");
  
  if (palavra in dicionario) {
    resultado.textContent = `"${palavra}" em inglês é "${dicionario[palavra]}"`;
  } else {
    resultado.textContent = `Não tenho tradução para "${palavra}".`;
  }
  
  input.value = "";
}