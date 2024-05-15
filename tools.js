/************************************************************************/
// localStorage管理
class LocalStorageManager {
  constructor(key) {
    this.key = key;
  }

  save(value) {
    localStorage.setItem(this.key, JSON.stringify(value));
  }

  get() {
    const storedValue = localStorage.getItem(this.key);
    return storedValue ? JSON.parse(storedValue) : null;
  }

  remove() {
    localStorage.removeItem(this.key);
  }
}

export const EXAMPLE = new LocalStorageManager("example");

/************************************************************************/

// uuid
export const uuidv4 = function () {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) =>
    (
      +c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (+c / 4)))
    ).toString(16)
  );
};
