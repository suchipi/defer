/**
 * An inside-out Promise; lets you call resolve and reject from outside the
 * Promise constructor function.
 */
export default class Defer<T> {
  /**
   * Resolve `this.promise` with the provided value.
   */
  resolve!: (value: T) => void;

  /**
   * Reject `this.promise` with the provided value.
   */
  reject!: (err: any) => void;

  /**
   * The underlying Promise this defer's `resolve` and `reject` functions correspond to.
   */
  promise: Promise<T>;

  constructor() {
    this.promise = new Promise<T>((res, rej) => {
      this.resolve = res;
      this.reject = rej;
    });
  }
}
