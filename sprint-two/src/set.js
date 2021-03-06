var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (this._storage.indexOf(item) === -1) {
    this._storage.push(item); 
  } else {
    return undefined;
  }
};

setPrototype.contains = function(item) {
  if (this._storage.indexOf(item) !== -1) {
    return true;
  } else {
    return false;
  }
};

setPrototype.remove = function(item) {
  var index;
  if (this._storage.indexOf(item) !== -1) {
    index = this._storage.indexOf(item);
    this._storage.splice(index, 1);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
