abstract class Aggregate<T> {
  abstract iterator(): Iterator<T>;
}
abstract class Iterator<T> {
  abstract hasNext(): boolean;
  abstract next(): T;
}

class Arr extends Aggregate<number> {
  private arr: number[];
  constructor(arr: number[]) {
    super();
    this.arr = arr;
  }
  iterator(): Iterator<number> {
    return new ArrIterator(this.arr);
  }
}

class ArrIterator implements Iterator<number> {
  private arr: number[];
  private index: number;
  constructor(arr: number[]) {
    this.arr = arr;
    this.index = 0;
  }
  hasNext(): boolean {
    return this.index < this.arr.length;
  }
  next(): number {
    return this.arr[this.index++];
  }
}

import { assertEquals } from "https://deno.land/std@0.152.0/testing/asserts.ts";
Deno.test("iterator", () => {
  const arr = new Arr([1, 2, 3, 4, 5]);
  const it = arr.iterator();
  assertEquals(it.next(), 1);
  assertEquals(it.next(), 2);
  assertEquals(it.next(), 3);
  assertEquals(it.hasNext(), true);
  assertEquals(it.next(), 4);
  assertEquals(it.next(), 5);
  assertEquals(it.hasNext(), false);
});
