class ABanner {
  private readonly str: string
  constructor(str: string) {
    this.str = str
  }

  showWithParen(): void {
    console.log(`(${this.str})`)
  }

  showWithAster(): void {
    console.log(`*${this.str}*`)
  }
}

abstract class APrint {
  abstract printWeak(): void
  abstract printStrong(): void
}

class APrintBanner extends APrint {
  private readonly banner: ABanner
  constructor(str: string) {
    super()
    this.banner = new ABanner(str)
  }

  printWeak(): void {
    this.banner.showWithParen()
  }

  printStrong(): void {
    this.banner.showWithAster()
  }
}

// import { assertEquals } from "https://deno.land/std@0.152.0/testing/asserts.ts";
Deno.test("adaper", () => {
  const print = new APrintBanner("Hello World")
  print.printWeak()
  print.printStrong()
})