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
  pile = pile.addMultipleToPile([[[1, 0], 2], [[0, 1], 3], [[2, 2], 1]]);
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

it("throws when stabilizing a stable pile", () => {
  const emptyPile = mkEmptyPile(3, 3);
  expect(() => {emptyPile.stabilize();}).toThrow();
});

it("computes neighbours correctly", () => {
  const emptyPile = mkEmptyPile(3, 3);
  expect(emptyPile.getNeighbours([0, 0])).toEqual([[0, 1], [1, 0]]);
  expect(emptyPile.getNeighbours([0, 1])).toEqual([[0, 0], [0, 2], [1, 1]]);
  expect(emptyPile.getNeighbours([1, 1])).toEqual(
    [[0, 1], [1, 0], [1, 2], [2, 1]]);
});

it("stabilizes correctly", () => {
  var pile = mkEmptyPile(3, 3).addToPile([1, 1], 5);
  expect(pile.isStable).toBe(false);
  pile = pile.stabilize();
  expect(pile.isStable).toBe(true);
  expect(pile.data.toJS()).toEqual(
    [[0,1,0],
     [1,1,1],
     [0,1,0]]);
  pile = pile.resetLastChanged().addToPile([1, 0], 2).addToPile([0, 0], 4);
  expect(pile.lastChanged.toJS()).toEqual([[1, 0], [0, 0]]);
  expect(pile.isStable).toBe(false);
  pile = pile.stabilize();
  expect(pile.isStable).toBe(false);
  expect(pile.data.toJS()).toEqual(
    [[0,2,0],
     [4,1,1],
     [0,1,0]]);
  pile = pile.stabilize();
  expect(pile.isStable).toBe(true);
  expect(pile.data.toJS()).toEqual(
    [[1,2,0],
     [0,2,1],
     [1,1,0]]);
})
