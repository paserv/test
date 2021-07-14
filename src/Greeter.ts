import { Common } from 'common';
class Greeter {
  private constructor() {}

  static getVersion(): string {
    return 'Main version';
  }

  static testCommon(): string {
    return Common.getVersion();
  }
}

export { Greeter };
