import { GildedRose } from '../lib/gilded-rose';

describe('GildedRose', () => {

  describe('#tick', () => {

    describe('Normal Items', () => {

      test('updates normal items before sell date', () => {
        const item = new GildedRose('normal', 10, 5);
        item.tick();
        expect(item.quality).toEqual(9);
        expect(item.sellIn).toEqual(4);
      });

      test('updates normal items on the sell date', () => {
        const item = new GildedRose('normal', 10, 0);
        item.tick();
        expect(item.quality).toEqual(8);
        expect(item.sellIn).toEqual(-1);
      });

      test('updates normal items after the sell date', () => {
        const item = new GildedRose('normal', 10, -5);
        item.tick();
        expect(item.quality).toEqual(8);
        expect(item.sellIn).toEqual(-6);
      });

      test('updates normal items with a quality of 0', () => {
        const item = new GildedRose('normal', 0, 5);
        item.tick();
        expect(item.quality).toEqual(0);
        expect(item.sellIn).toEqual(4);
      });

    });

    describe('Brie Items', () => {

      test('updates Brie items before the sell date', () => {
        const item = new GildedRose('Aged Brie', 10, 5);
        item.tick();
        expect(item.quality).toEqual(11);
        expect(item.sellIn).toEqual(4);
      });

      test('updates Brie items before the sell date with maximum quality', () => {
        const item = new GildedRose('Aged Brie', 50, 5);
        item.tick();
        expect(item.quality).toEqual(50);
        expect(item.sellIn).toEqual(4);
      });

      test('updates Brie items on the sell date', () => {
        const item = new GildedRose('Aged Brie', 10, 0);
        item.tick();
        expect(item.quality).toEqual(12);
        expect(item.sellIn).toEqual(-1);
      });

      test('updates Brie items on the sell date, near maximum quality', () => {
        const item = new GildedRose('Aged Brie', 49, 0);
        item.tick();
        expect(item.quality).toEqual(50);
        expect(item.sellIn).toEqual(-1);
      });

      test('updates Brie items on the sell date with maximum quality', () => {
        const item = new GildedRose('Aged Brie', 50, 0);
        item.tick();
        expect(item.quality).toEqual(50);
        expect(item.sellIn).toEqual(-1);
      });

      test('updates Brie items after the sell date', () => {
        const item = new GildedRose('Aged Brie', 10, -10);
        item.tick();
        expect(item.quality).toEqual(12);
        expect(item.sellIn).toEqual(-11);
      });

      test('updates Briem items after the sell date with maximum quality', () => {
        const item = new GildedRose('Aged Brie', 50, -10);
        item.tick();
        expect(item.quality).toEqual(50);
        expect(item.sellIn).toEqual(-11);
      });

    });

    describe('Sulfuras Items', () => {

      test('updates Sulfuras items before the sell date', () => {
        const item = new GildedRose('Sulfuras, Hand of Ragnaros', 10, 5);
        item.tick();
        expect(item.quality).toEqual(10);
        expect(item.sellIn).toEqual(5);
      });

      test('updates Sulfuras items on the sell date', () => {
        const item = new GildedRose('Sulfuras, Hand of Ragnaros', 10, 5);
        item.tick();
        expect(item.quality).toEqual(10);
        expect(item.sellIn).toEqual(5);
      });

      test('updates Sulfuras items after the sell date', () => {
        const item = new GildedRose('Sulfuras, Hand of Ragnaros', 10, -1);
        item.tick();
        expect(item.quality).toEqual(10);
        expect(item.sellIn).toEqual(-1);
      });

    });

    describe('Backstage Passes', () => {

      test('updates Backstage pass items long before the sell date', () => {
        const item = new GildedRose('Backstage passes to a TAFKAL80ETC concert', 10, 11);
        item.tick();
        expect(item.quality).toEqual(11);
        expect(item.sellIn).toEqual(10);
      });

      test('updates Backstage pass items close to the sell date', () => {
        const item = new GildedRose('Backstage passes to a TAFKAL80ETC concert', 10, 10);
        item.tick();
        expect(item.quality).toEqual(12);
        expect(item.sellIn).toEqual(9);
      });

      test('updates Backstage pass items close to the sell data, at max quality', () => {
        const item = new GildedRose('Backstage passes to a TAFKAL80ETC concert', 50, 10);
        item.tick();
        expect(item.quality).toEqual(50);
        expect(item.sellIn).toEqual(9);
      });

      test('updates Backstage pass items very close to the sell date', () => {
        const item = new GildedRose('Backstage passes to a TAFKAL80ETC concert', 10, 5);
        item.tick();
        expect(item.quality).toEqual(13); // goes up by 3
        expect(item.sellIn).toEqual(4);
      });

      test('updates Backstage pass items very close to the sell date, at max quality', () => {
        const item = new GildedRose('Backstage passes to a TAFKAL80ETC concert', 50, 5);
        item.tick();
        expect(item.quality).toEqual(50);
        expect(item.sellIn).toEqual(4);
      });

      test('updates Backstage pass items with one day left to sell', () => {
        const item = new GildedRose('Backstage passes to a TAFKAL80ETC concert', 10, 1);
        item.tick();
        expect(item.quality).toEqual(13);
        expect(item.sellIn).toEqual(0);
      });

      test('updates Backstage pass items with one day left to sell, at max quality', () => {
        const item = new GildedRose('Backstage passes to a TAFKAL80ETC concert', 50, 1);
        item.tick();
        expect(item.quality).toEqual(50);
        expect(item.sellIn).toEqual(0);
      });

      test('updates Backstage pass items on the sell date', () => {
        const item = new GildedRose('Backstage passes to a TAFKAL80ETC concert', 10, 0);
        item.tick();
        expect(item.quality).toEqual(0);
        expect(item.sellIn).toEqual(-1);
      });

      test('updates Backstage pass items after the sell date', () => {
        const item = new GildedRose('Backstage passes to a TAFKAL80ETC concert', 10, -1);
        item.tick();
        expect(item.quality).toEqual(0);
        expect(item.sellIn).toEqual(-2);
      });

    });

    describe('Conjured Items', () => {

      test.skip('updates Conjured items before the sell date', () => {
        const item = new GildedRose('Conjured Mana Cake', 10, 10);
        item.tick();
        expect(item.quality).toEqual(8);
        expect(item.sellIn).toEqual(9);
      });

      test.skip('updates Conjured items at zero quality', () => {
        const item = new GildedRose('Conjured Mana Cake', 0, 10);
        item.tick();
        expect(item.quality).toEqual(0);
        expect(item.sellIn).toEqual(9);
      });

      test.skip('updates Conjured items on the sell date', () => {
        const item = new GildedRose('Conjured Mana Cake', 10, 0);
        item.tick();
        expect(item.quality).toEqual(6);
        expect(item.sellIn).toEqual(-1);
      });

      test.skip('updates Conjured items on the sell date at 0 quality', () => {
        const item = new GildedRose('Conjured Mana Cake', 0, 0);
        item.tick();
        expect(item.quality).toEqual(0);
        expect(item.sellIn).toEqual(-1);
      });

      test.skip('updates Conjured items after the sell date', () => {
        const item = new GildedRose('Conjured Mana Cake', 10, -10);
        item.tick();
        expect(item.quality).toEqual(6);
        expect(item.sellIn).toEqual(-11);
      });

      test.skip('updates Conjured items after the sell date at zero quality', () => {
        const item = new GildedRose('Conjured Mana Cake', 0, -10);
        item.tick();
        expect(item.quality).toEqual(0);
        expect(item.sellIn).toEqual(-11);
      });

    });

  });
  
});
