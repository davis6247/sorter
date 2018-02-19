class Sorter {
  constructor() {
    this.array = [];
    this.len = 0;    
    this.comparator;
  }

  add(element) {
    this.array.push(element);
    this.len++;
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.len;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
    var compareFunction;
    if(this.comparator){
      compareFunction = this.comparator;
    }
    else
      compareFunction = function(a,b){return a - b};

    var tempArr = [];

    for(var i = 0; i < indices.length; i++){
      tempArr.push(this.array[indices[i]]);
    }

    indices.sort(function(a,b){return a - b}); 
    tempArr.sort(compareFunction);  
    
    for(var i = 0; i < indices.length; i++){
      this.array[indices[i]] = tempArr[i];
    }
  }

  setComparator(compareFunction) {
      this.comparator = compareFunction;
  }
}

module.exports = Sorter;

