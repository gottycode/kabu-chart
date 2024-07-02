export const fetchFinanceChart = async (code) => {
  // https://query1.finance.yahoo.com/v8/finance/chart/7203.T?interval=1d&range=60d
  // const url = `https://query1.finance.yahoo.com/v8/finance/chart/${code}.T?interval=1d&range=60d`;
  const url = `/finance/v8/finance/chart/${code}.T?interval=1d&range=60d`;
  const res = await fetch(url, { mode: "cors" });
  // console.log(res.ok);
  // console.log(res.status);
  // console.log(res.statusTexts);

  const json = await res.json();
  // console.log("json");
  const data = json.chart.result[0];
  // console.log(data);
  return data;
};

export const fetchPokemon = async () => {
  const pokemonList = [];
  // https://pokeapi.co/docs/v2#pokemon
  for (let num = 1; num <= 200; num++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${num}/`;
    const res = await fetch(url);
    const json = await res.json();
    // console.log(json["types"]);
    if (json["is_default"]) {
      pokemonList.push({
        id: json["id"],
        name: json["name"],
        height: json["height"],
        weight: json["weight"],
        spriteUrl: json["sprites"]["front_default"],
        jpname: await get_pokemon_japanese_name(json["name"]),
      });
    }
  }

  return pokemonList;
};
const get_pokemon_japanese_name = async (english_name) => {
  const url = `https://pokeapi.co/api/v2/pokemon-species/${english_name.toLowerCase()}`;
  const res = await fetch(url);
  const json = await res.json();
  // console.log(json['names']);
  let jpname = "";
  json["names"].forEach((name) => {
    if (name["language"]["name"] === "ja-Hrkt") {
      // console.log(name["name"]);
      jpname = name["name"];
    }
    if (name["language"]["name"] === "ja") {
      // console.log(name["name"]);
    }
  });
  return jpname;
};
const get_pokemon_japanese_type = async (english_name) => {
  const url = `https://pokeapi.co/api/v2/pokemon-species/${english_name.toLowerCase()}`;
  const res = await fetch(url);
  const json = await res.json();
  // console.log(json['names']);
  let jpname = "";
  json["names"].forEach((name) => {
    if (name["language"]["name"] === "ja-Hrkt") {
      // console.log(name["name"]);
      jpname = name["name"];
    }
    if (name["language"]["name"] === "ja") {
      // console.log(name["name"]);
    }
  });
  return jpname;
};
