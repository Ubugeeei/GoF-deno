class Banner {
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

interface Print {
  printWeak(): void
  printStrong(): void
}

class PrintBanner extends Banner implements Print {
  printWeak(): void {
    this.showWithParen()
  }

  printStrong(): void {
    this.showWithAster()
  }
}

/**
 * exec
 */
;(function main() {
  const print = new PrintBanner("Hello World")
  print.printWeak()
  print.printStrong()
})()

/**
 * -----------------
 * use adapter
 * -----------------
 */
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

/**
 * exec
 */
 ;(function main() {
  const print: Print = new APrintBanner("Hello World")
  print.printWeak()
  print.printStrong()
 })()
