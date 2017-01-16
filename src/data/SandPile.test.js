import {fromJS} from 'immutable';
import SandPile, {mkEmptyPile} from './SandPile';

it("has correct empty piles", () => {
  const width = 3, height = 4;
  const pile = mkEmptyPile(width, height);
  expect(pile.width).toBe(width);
  expect(pile.height).toBe(height);
  expect(pile.data).toEqual(
    fromJS([[0,0,0,0],
            [0,0,0,0],
            [0,0,0,0]]));
  expect(pile.lastChanged).toEqual(fromJS([]));
  expect(pile.isStable).toBe(true);
});

it("can correctly add to piles", () => {
  const emptyPile = mkEmptyPile(3, 3);
  var pile = emptyPile.addToPile(1, 0, 2);
  expect(pile.data).toEqual(
    fromJS([[0,0,0],
            [2,0,0],
            [0,0,0]]));
  expect(pile.lastChanged).toEqual(fromJS([[1, 0]]));
  expect(pile.isStable).toBe(true);
  pile = pile.addToPile(1, 0, 2).addToPile(0, 1, 3).addToPile(2, 2, 1);
  expect(pile.data).toEqual(
    fromJS([[0,3,0],
            [4,0,0],
            [0,0,1]]));
  expect(pile.isStable).toBe(false);
});
