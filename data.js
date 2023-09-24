const searchByName = (cards, name) => {
  return cards.filter((cards) => {
    return cards.name.toLowerCase().includes(name.toLowerCase());
    
  });
};

const filterArcane = (data, arcaneSelected) => {
  return data.filter((card) => card.type === arcaneSelected);
};

const filterSuits = (data, suitsSelected) => {
  return data.filter((card) => card.suit === suitsSelected);
};

function numericalOrder(value, cards) {
  const orderValue = [...cards];
  if (value === "minor-value") {
    orderValue.sort(function (a, b) {
      return a.value - b.value; // Ordenação crescente: menor para maior
    });
  } else if (value === "major-value") {
    orderValue.sort(function (a, b) {
      return b.value - a.value; // Ordenação decrescente: maior para menor
    });
  }
  return orderValue;
}

function calculatePercentage (allCards, filteredCards) {
  return Math.round((filteredCards * 100) / allCards);
}

export{
  searchByName,
  filterArcane,
  filterSuits,
  numericalOrder,
  calculatePercentage
};


