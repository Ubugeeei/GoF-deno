abstract class DirectorScraper {
  constructor(public path: string) {}

  scanFiles() {
    return Array.prototype.reduce.call(
      Deno.readDirSync(this.path),
      // deno-lint-ignore no-explicit-any
      (acc: any, file: string) => {
        if (this.isJSONFile(file)) {
          acc[file] = this.readJSON(`${this.path}/${file}`);
        } else {
          acc[file] = this.readText(`${this.path}/${file}`);
        }
        return acc as Record<string, unknown>;
      },
      {},
    );
  }

  abstract isJSONFile(filePath: string): boolean;
  abstract readText(filePath: string): string;
  abstract readJSON(filePath: string): unknown;
}

class MyFileReader extends DirectorScraper {
  isJSONFile(file: string): boolean {
    return file.endsWith(".json");
  }

  readText(file: string): string {
    return Deno.readFileSync(file).toString();
  }

  readJSON(file: string): unknown {
    return JSON.parse(this.readText(file));
  }
}

Deno.test({ name: "factory method", permissions: { read: true } }, () => {
  const director = new MyFileReader(
    "./src/factory_method/data/",
  );
  console.log(director.scanFiles());
});
