import SandPile, {mkEmptyPile} from './SandPile';

it("has correct empty piles", () => {
  const width = 3, height = 4;
  const pile = mkEmptyPile(width, height);
  expect(pile.width).toBe(width);
  expect(pile.height).toBe(height);
  expect(pile.data.toJS()).toEqual(
    [[0,0,0,0],
     [0,0,0,0],
     [0,0,0,0]]);
  expect(pile.lastChanged.toJS()).toEqual([]);
  expect(pile.isStable).toBe(true);
});

it("can correctly add to piles", () => {
  const emptyPile = mkEmptyPile(3, 3);
  var pile = emptyPile.addToPile([1, 0], 2);
  expect(pile.data.toJS()).toEqual(
    [[0,0,0],
     [2,0,0],
     [0,0,0]]);
  expect(pile.lastChanged.toJS()).toEqual([[1, 0]]);
  expect(pile.isStable).toBe(true);
  pile = pile.addToPile([1, 0], 2).addToPile([0, 1], 3).addToPile([2, 2], 1);
  expect(pile.data.toJS()).toEqual(
    [[0,3,0],
     [4,0,0],
     [0,0,1]]);
  expect(pile.isStable).toBe(false);
  expect(pile.lastChanged.toJS()).toEqual([[1, 0], [0, 1], [2, 2]]);
  pile = pile.addToPile([1, 0], -2);
  expect(pile.data.toJS()).toEqual(
    [[0,3,0],
     [2,0,0],
     [0,0,1]]);
  expect(pile.lastChanged.toJS()).toEqual([[1, 0], [0, 1], [2, 2]]);
  expect(pile.isStable).toBe(true);
});
