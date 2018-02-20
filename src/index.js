class Sorter{
  constructor() {
    this.container = [];
    this.comparator = (a,b) => a-b;
  }

  add(element) {
    this.container.push(element)
  }

  at(index) {
    return this.container[index]
  }

  get length() {
    return this.container.length
  }

  toArray() {
    return this.container.slice()
  }

  sort(indices) {
      let subArray = indices.sort().map((index) => this.container[index]);
      subArray.sort(this.comparator);
      this.container.reduce((previousValue, currentItem, index, arr) => {
          if(indices.indexOf(index) > -1){
            arr[index] = subArray[indices.indexOf(index)]
          }
          return arr
      }, null);
      return this
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;