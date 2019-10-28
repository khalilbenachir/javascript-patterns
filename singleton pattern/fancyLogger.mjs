class FancyLogger {
  constructor() {
    if (FancyLogger.instance == null) {
      this.logs = [];
      FancyLogger.instance = this;
    }
    return FancyLogger.instance;
  }

  log(message) {
    this.logs.push(message);
    console.log(message);
  }

  countLogs() {
    console.log(this.logs.length);
  }
}

const logger = new FancyLogger();
Object.freeze(logger);
export { logger };
