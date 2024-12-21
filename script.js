var carta = document.querySelector(".cartinha");
var nome_da_carta = window.document.querySelector(".nome_da_carta");
var descricao_da_carta = document.querySelector(".descricao_da_carta");
var anterior = document.querySelector(".anterior");
var proximo = document.querySelector(".proxima");
var secao = document.querySelector(".secao");
var ligamagic = document.querySelector("#ligamagic")
var mtg_ofc = document.querySelector("#magic_site_ofc")

var contador = 0;

proximo.addEventListener("click", () => {
  contador += 1;
  if (contador > 2) {
    contador = 0;
  }
  switch (contador) {
    case 0:
      carta.src = "./imgs/carta_pantlaza.jpg";
      carta.alt = "Imagem do Pantlaza, Favorito do Sol de Magic The Gathering";
      nome_da_carta.innerHTML = "Pantlaza, Favorito do Sol";
      descricao_da_carta.innerHTML =
        "Pantlaza é o jovem companheiro raptor de Huatli, e tão igual em estatura a outros dinossauros quanto o poeta-guerreiro é aos cidadãos do Império do Sol. Leal e inteligente, Pantlaza é infamemente independente, uma característica que ele trouxe para sua parceria com Huatli.";
      secao.style.backgroundColor = "#e6b4818e";
      ligamagic.href = "https://www.ligamagic.com.br/?view=cards/card&show=1&card=Pantlaza,%20Sun-Favored"
      mtg_ofc.href = "https://gatherer.wizards.com/Pages/Card/Details.aspx?name=Pantlaza%2C%20Sun-Favored"
      break;
    case 1:
      carta.src = "./imgs/o_ur-dragao.png";
      carta.alt = "Imagem do O Ur-dragão de Magic The Gathering";
      nome_da_carta.innerHTML = "O Ur-dragão";
      descricao_da_carta.innerHTML =
        "O Ur-Dragon é descrito como uma sombra enorme, escura e aterrorizante. É um ser que vive no meio e no meio, num lugar e em nenhum lugar: é cego. Em suas viagens pelos planos, cria tempestades com o bater de suas asas: dessas tempestades nascem outros dragões.";
      secao.style.backgroundColor = "#B785B3";
      ligamagic.href = "https://www.ligamagic.com.br/?view=cards/card&card=The+Ur-Dragon"
      mtg_ofc.href = "https://gatherer.wizards.com/pages/card/Details.aspx?multiverseid=435143"
      break;
    case 2:
      carta.src = "./imgs/Maha, As Plumas da Noite.jpg";
      carta.alt = "Imagem da Maha, As Plumas da Noite de Magic The Gathering";
      nome_da_carta.innerHTML = "Maha, As Plumas da Noite";
      descricao_da_carta.innerHTML =
        "Maha, As Plums da Noite, era a guardiã das sombras e protetora dos seres noturnos. Nascida da magia ancestral da floresta, suas asas negras brilhavam como o céu estrelado. Quando o necromante Kairon ameaçou o reino com seu exército de sombras, Maha usou seu poder celestial para derrotá-lo, restaurando a paz. Sua bravura se tornou lenda, e até hoje, sob a lua, seu espírito vigia aqueles que necessitam.";
      secao.style.backgroundColor = "#F7D0AF";
      ligamagic.href = "https://www.ligamagic.com.br/?view=cards/card&card=Maha%2C+Its+Feathers+Night"
      mtg_ofc.href = "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=668774"
      break;
    default:
      break;
  }
});
anterior.addEventListener("click", () => {
  contador -= 1;
  if (contador < 0) {
    contador = 0;
  }
  switch (contador) {
    case 0:
      carta.src = "./imgs/carta_pantlaza.jpg";
      nome_da_carta.innerHTML = "Pantlaza, Favorito do Sol";
      descricao_da_carta.innerHTML =
        "Pantlaza é o jovem companheiro raptor de Huatli, e tão igual em estatura a outros dinossauros quanto o poeta-guerreiro é aos cidadãos do Império do Sol. Leal e inteligente, Pantlaza é infamemente independente, uma característica que ele trouxe para sua parceria com Huatli.";
      break;
    case 1:
      carta.src = "./imgs/o_ur-dragao.png";
      nome_da_carta.innerHTML = "O Ur-dragão";
      descricao_da_carta.innerHTML =
        "O Ur-Dragon é descrito como uma sombra enorme, escura e aterrorizante. É um ser que vive no meio e no meio, num lugar e em nenhum lugar: é cego. Em suas viagens pelos planos, cria tempestades com o bater de suas asas: dessas tempestades nascem outros dragões.";
      break;
    case 2:
      carta.src = "./imgs/Maha, As Plumas da Noite.jpg";
      nome_da_carta.innerHTML = "Maha, As Plumas da Noite     ";
      descricao_da_carta.innerHTML =
        "Maha, As Plumas da Noite, era a guardiã das sombras e protetora dos seres noturnos. Nascida da magia ancestral da floresta, suas asas negras brilhavam como o céu estrelado. Quando o necromante Kairon ameaçou o reino com seu exército de sombras, Maha usou seu poder celestial para derrotá-lo, restaurando a paz. Sua bravura se tornou lenda, e até hoje, sob a lua, seu espírito vigia aqueles que necessitam.";
      break;
    default:
      break;
  }
});
