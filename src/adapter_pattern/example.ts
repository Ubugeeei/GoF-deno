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
