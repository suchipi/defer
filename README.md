# @suchipi/defer

Inside-out promise; lets you call resolve and reject from outside the Promise constructor function.

## Usage

```ts
import Defer from "@suchipi/defer";

function spinToWin(): Promise<string> {
  const defer = new Defer<string>();

  if (Date.now() % 2 === 0) {
    defer.resolve("You did it!");
  } else {
    defer.reject(new Error("Oh no!"));
  }

  return defer.promise;
}
```

## License

MIT
