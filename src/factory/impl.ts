interface ILogger {
  info(message: string): void;
  warn(message: string): void;
  debug(message: string): void;
  error(message: string): void;
}

class ProductionLogger implements ILogger {
  info(_message: string): void {}
  warn(message: string): void {
    console.warn(message);
  }
  debug(_message: string): void {}
  error(message: string): void {
    console.error(message);
  }
}

class DevelopmentLogger implements ILogger {
  info(message: string): void {
    console.info(message);
  }
  warn(message: string): void {
    console.warn(message);
  }
  debug(message: string): void {
    console.debug(message);
  }
  error(message: string): void {
    console.error(message);
  }
}

class LoggerFactory {
  public static createLogger(environment: Env): ILogger {
    switch (environment) {
      case EnvEnum.production:
        return new ProductionLogger();
      case EnvEnum.development:
        return new DevelopmentLogger();
    }
  }
}

const EnvEnum = {
  production: "production",
  development: "development",
} as const;
type Env = typeof EnvEnum[keyof typeof EnvEnum];

Deno.test("factory", () => {
  const logger = LoggerFactory.createLogger(EnvEnum.production);
  logger.info("production info");
  logger.warn("production warn");
  logger.debug("production debug");
  logger.error("production error");

  const logger2 = LoggerFactory.createLogger(EnvEnum.development);
  logger2.info("development info");
  logger2.warn("development warn");
  logger2.debug("development debug");
  logger2.error("development error");
});
