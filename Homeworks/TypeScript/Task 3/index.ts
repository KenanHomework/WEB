function manageableClassDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    isFrozen: boolean = false;
    frozenUntil: Date | null = null;
    frozenToUntil = function (endDate: Date) {
      this.frozenUntil = endDate;
      this.isFrozen = true;
    };
    unFroze = function () {
      this.frozenUntil = null;
      this.isFrozen = false;
    };
  };
}

@manageableClassDecorator
class User {
  constructor(
    public username: string,
    public email: string,
    public age: number
  ) {}
}

console.log("\n\tAfter Froze");
const user: User = new User("kanan", "kananysbv@gmail.com", 24);
user.frozenToUntil(new Date(2023, 12, 6));
console.log(user);

console.log("\n\tAfter UnFroze");
user.unFroze();
console.log(user);
