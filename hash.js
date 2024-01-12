class HashTable {
    constructor(size = 32) {
      this.size = size;
      this.table = new Array(size);
    }
  
    hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash = (hash + key.charCodeAt(i)) % this.size;
      }
      return hash;
    }
  
    set(key, value) {
      const index = this.hash(key);
      if (!this.table[index]) {
        this.table[index] = [];
      }
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index][i][1] = value;
          return;
        }
      }
      this.table[index].push([key, value]);
    }
  
    get(key) {
      const index = this.hash(key);
      if (!this.table[index]) {
        return undefined;
      }
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          return this.table[index][i][1];
        }
      }
      return undefined;
    }
  
    delete(key) {
      const index = this.hash(key);
      if (!this.table[index]) {
        return false;
      }
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index].splice(i, 1);
          return true;
        }
      }
      return false;
    }
  
    print() {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[i]) {
          console.log(i, ':', this.table[i]);
        }
      }
    }
  }
  
  // Example usage
  const table = new HashTable();
  table.set('apple', 1);
  table.set('banana', 2);
  table.set('cherry', 3);
  console.log(table.get('banana')); // Output: 2
//   table.delete('banana');
  table.print();
  