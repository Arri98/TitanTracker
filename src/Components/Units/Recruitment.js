/* eslint-disable no-unused-vars */
const Recruitment = {};

Recruitment.Angel = (number) => [];

Recruitment.Arcangel = (number) => [];

Recruitment.Titan = (number) => ([{ Unidad: 'Centauro', Casilla: 'Tower' }, { Unidad: 'Gargola', Casilla: 'Tower' }, { Unidad: 'Ogro', Casilla: 'Tower' }]);

Recruitment.Guardian = (number) => ([{ Unidad: 'Guardian', Casilla: 'Tower' }]);

Recruitment.Warlock = (number) => ([{ Unidad: 'Warlock', Casilla: 'Tower' }]);

Recruitment.Behemot = (number) => {
  if (number < 2) {
    return [{ Unidad: 'Behemot', Casilla: 'Jungle' }];
  }
  if (number >= 2) {
    return [{ Unidad: 'Behemot', Casilla: 'Jungle' }, { Unidad: 'Serpiente', Casilla: 'Jungle' }];
  }
  return [];
};

Recruitment.Centauro = (number) => {
  if (number < 2) {
    return [{ Unidad: 'Centauro', Casilla: 'Plains' }];
  }
  if (number === 2) {
    return [{ Unidad: 'Centauro', Casilla: 'Plains' }, { Unidad: 'Leon', Casilla: 'Plains' }];
  }
  if (number >= 3) {
    return [{ Unidad: 'Centauro', Casilla: 'Plains' }, { Unidad: 'Leon', Casilla: 'Plains' }, { Unidad: 'Warbear', Casilla: 'Woodds' }];
  }
  return [];
};

Recruitment.Coloso = (number) => {
  if (number > 0) {
    return [{ Unidad: 'Coloso', Casilla: 'Mountain' }];
  }
  return [];
};

Recruitment.Ciclope = (number) => {
  if (number < 2) {
    return [{ Unidad: 'Ciclope', Casilla: 'Brush' }, { Unidad: 'Ciclope', Casilla: 'Jungle' }];
  }
  if (number === 2) {
    return [{ Unidad: 'Ciclope', Casilla: 'Brush' }, { Unidad: 'Ciclope', Casilla: 'Jungle' }, { Unidad: 'Gorgona', Casilla: 'Brush' }];
  }
  if (number >= 3) {
    return [{ Unidad: 'Ciclope', Casilla: 'Brush' }, { Unidad: 'Ciclope', Casilla: 'Jungle' }, { Unidad: 'Gorgona', Casilla: 'Brush' }, { Unidad: 'Behemot', Casilla: 'Jungle' }];
  }
  return [];
};

Recruitment.Dragon = (number) => {
  if (number < 2) {
    return [{ Unidad: 'Dragon', Casilla: 'Mountain' }];
  }
  if (number >= 2) {
    return [{ Unidad: 'Dragon', Casilla: 'Mountain' }, { Unidad: 'Coloso', Casilla: 'Mountain' }];
  }
  return [];
};

Recruitment.Gargola = (number) => {
  if (number < 2) {
    return [{ Unidad: 'Gargola', Casilla: 'Brush' }, { Unidad: 'Gargola', Casilla: 'Jungle' }];
  }
  if (number === 2) {
    return [{ Unidad: 'Gargola', Casilla: 'Brush' }, { Unidad: 'Gargola', Casilla: 'Jungle' }, { Unidad: 'Ciclope', Casilla: 'Brush' }];
  }
  if (number >= 3) {
    return [{ Unidad: 'Gargola', Casilla: 'Brush' }, { Unidad: 'Gargola', Casilla: 'Jungle' }, { Unidad: 'Ciclope', Casilla: 'Brush' }, { Unidad: 'Ciclope', Casilla: 'Jungle' }];
  }
  return [];
};

Recruitment.Gigante = (number) => {
  if (number < 2) {
    return [{ Unidad: 'Gigante', Casilla: 'Tundra' }];
  }
  if (number >= 2) {
    return [{ Unidad: 'Gigante', Casilla: 'Tundra' }, { Unidad: 'Coloso', Casilla: 'Tundra' }];
  }
  return [];
};

Recruitment.Gorgona = (number) => {
  if (number > 0) {
    return [{ Unidad: 'Gorgona', Casilla: 'Brush' }];
  }
  return [];
};

Recruitment.Griffo = (number) => {
  if (number < 2) {
    return [{ Unidad: 'Griffo', Casilla: 'Desert' }];
  }
  if (number >= 2) {
    return [{ Unidad: 'Griffo', Casilla: 'Desert' }, { Unidad: 'Hydra', Casilla: 'Desert' }];
  }
  return [];
};

Recruitment.Hydra = (number) => {
  if (number > 0) {
    return [{ Unidad: 'Hydra', Casilla: 'Desert' }];
  }
  return [];
};

Recruitment.Leon = (number) => {
  if (number < 2) {
    return [{ Unidad: 'Leon', Casilla: 'Mountain' }, { Unidad: 'Leon', Casilla: 'Plains' }, { Unidad: 'Leon', Casilla: 'Desert' }];
  }
  if (number === 2) {
    return [{ Unidad: 'Leon', Casilla: 'Mountain' }, { Unidad: 'Leon', Casilla: 'Plains' }, { Unidad: 'Leon', Casilla: 'Dessert' }, { Unidad: 'Minotauro', Casilla: 'Mountain' }, { Unidad: 'Ranger', Casilla: 'Plains' }];
  }
  if (number >= 3) {
    return [{ Unidad: 'Leon', Casilla: 'Mountain' }, { Unidad: 'Leon', Casilla: 'Plains' }, { Unidad: 'Leon', Casilla: 'Desert' }, { Unidad: 'Minotauro', Casilla: 'Mountain' }, { Unidad: 'Ranger', Casilla: 'Plains' }, { Unidad: 'Griffo', Casilla: 'Desert' }];
  }
  return [];
};

Recruitment.Minotauro = (number) => {
  if (number < 2) {
    return [{ Unidad: 'Minotauro', Casilla: 'Mountain' }];
  }
  if (number >= 2) {
    return [{ Unidad: 'Minotauro', Casilla: 'Mountain' }, { Unidad: 'Dragon', Casilla: 'Mountain' }];
  }
  return [];
};

Recruitment.Ogro = (number) => {
  if (number < 2) {
    return [{ Unidad: 'Ogro', Casilla: 'Marsh' }, { Unidad: 'Ogro', Casilla: 'Hills' }];
  }
  if (number === 2) {
    return [{ Unidad: 'Ogro', Casilla: 'Marsh' }, { Unidad: 'Ogro', Casilla: 'Hills' }, { Unidad: 'Troll', Casilla: 'Marsh' }];
  }
  if (number >= 3) {
    return [{ Unidad: 'Ogro', Casilla: 'Marsh' }, { Unidad: 'Ogro', Casilla: 'Hills' }, { Unidad: 'Troll', Casilla: 'Marsh' }, { Unidad: 'Minotaur', Casilla: 'Hills' }];
  }
  return [];
};

Recruitment.Ranger = (number) => {
  if (number > 0) {
    return [{ Unidad: 'Ranger', Casilla: 'Plains' }, { Unidad: 'Ranger', Casilla: 'Marsh' }];
  }
  return [];
};

Recruitment.Troll = (number) => {
  if (number < 2) {
    return [{ Unidad: 'Troll', Casilla: 'Tundra' }, { Unidad: 'Troll', Casilla: 'Marsh' }];
  }
  if (number >= 2) {
    return [{ Unidad: 'Troll', Casilla: 'Tundra' }, { Unidad: 'Troll', Casilla: 'Marsh' }, { Unidad: 'Warbear', Casilla: 'Tundra' }, { Unidad: 'Troll', Casilla: 'Ranger' }];
  }
  return [];
};

Recruitment.Serpiente = (number) => {
  if (number > 0) {
    return [{ Unidad: 'Serpiente', Casilla: 'Jungle' }];
  }
  return [];
};

Recruitment.Unicornio = (number) => {
  if (number > 0) {
    return [{ Unidad: 'Unicornio', Casilla: 'Jungle' }];
  }
  return [];
};

Recruitment.Warbear = (number) => {
  if (number < 2) {
    return [{ Unidad: 'Warbear', Casilla: 'Tundra' }, { Unidad: 'Warbear', Casilla: 'Woods' }];
  }
  if (number >= 2) {
    return [{ Unidad: 'Warbear', Casilla: 'Tundra' }, { Unidad: 'Warbear', Casilla: 'Woods' }, { Unidad: 'Gigante', Casilla: 'Tundra' }, { Unidad: 'Unicorn', Casilla: 'Woods' }];
  }
  return [];
};

Recruitment.Wyvern = (number) => {
  if (number < 2) {
    return [{ Unidad: 'Wyvern', Casilla: 'Swamp' }];
  }
  if (number >= 2) {
    return [{ Unidad: 'Wyvern', Casilla: 'Swamp' }, { Unidad: 'Hydra', Casilla: 'Swamp' }];
  }
  return [];
};

export default Recruitment;
