//#region Validation
function ValidateNumberInRange(min: number, max?: number) {
  return function (target: any, key: string) {
    let value: number = target[key];

    const getter = function () {
      return value;
    };

    const setter = function (newVal: number) {
      if (
        typeof newVal !== "number" ||
        newVal < min ||
        (max !== undefined && newVal > max)
      ) {
        throw new Error(
          `Invalid value for ${key}. Must be between ${min} and ${
            max !== undefined ? max : "infinity"
          }`
        );
      }
      value = newVal;
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  };
}

function ValidateArrayLength(minLength: number, maxLength?: number) {
  return function (target: any, key: string) {
    let value: any[] = target[key];

    const getter = function () {
      return value;
    };

    const setter = function (newVal: any[]) {
      if (
        !Array.isArray(newVal) ||
        newVal.length < minLength ||
        (maxLength !== undefined && newVal.length > maxLength)
      ) {
        throw new Error(
          `Invalid array length for ${key}. Must be between ${minLength} and ${
            maxLength !== undefined ? maxLength : "infinity"
          }`
        );
      }
      value = newVal;
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  };
}

function ValidateStringWithRegex(regex: RegExp) {
  return function (target: any, key: string) {
    let value: string = target[key];

    const getter = function () {
      return value;
    };

    const setter = function (newVal: string) {
      if (typeof newVal !== "string" || !regex.test(newVal)) {
        throw new Error(`Invalid value for ${key}`);
      }
      value = newVal;
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  };
}
//#endregion

//#region Classes
class Human {
  @ValidateStringWithRegex(/^[a-zA-Z\s]+$/)
  public name: string;

  @ValidateStringWithRegex(/^[a-zA-Z0-9_]+$/)
  public username: string;

  @ValidateStringWithRegex(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
  public email: string;

  @ValidateNumberInRange(18, 150)
  public age: number;

  constructor(name: string, username: string, email: string, age: number) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.age = age;
  }
}

class User extends Human {
  @ValidateNumberInRange(0)
  public score: number = 0;

  constructor(
    name: string,
    username: string,
    email: string,
    age: number,
    score: number
  ) {
    super(name, username, email, age);
    this.score = score;
  }
}

class Manager extends Human {
  @ValidateArrayLength(0)
  public reports: Array<string>;

  constructor(
    name: string,
    username: string,
    email: string,
    age: number,
    reports: Array<string>
  ) {
    super(name, username, email, age);
    this.reports = reports;
  }
}

class Admin extends Human {
  @ValidateArrayLength(0, 5)
  public billboards: Array<string>;

  constructor(
    name: string,
    username: string,
    email: string,
    age: number,
    billboards: Array<string>
  ) {
    super(name, username, email, age);
    this.billboards = billboards;
  }
}

//#endregion
const human: Human = new Human(
  "kanan",
  "kanan_yusubov",
  "kanan@yusubov.com",
  20
);

const user: User = new User(
  "kanan",
  "kanan_yusubov",
  "kanan@yusubov.com",
  20,
  10
);

const manager: Manager = new Manager(
  "kanan",
  "kanan_yusubov",
  "kanan@yusubov.com",
  20,
  ["id_1", "id_2"]
);

const admin: Admin = new Admin(
  "kanan",
  "kanan_yusubov",
  "kanan@yusubov.com",
  20,
  ["id_1", "id_2", "id_3", "id_4", "id_5"]
);

console.log(user);
