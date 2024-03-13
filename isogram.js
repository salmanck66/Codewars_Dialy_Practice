function isIsogram(str) {
    const lowerCaseStr = str.toLowerCase();
    return new Set(lowerCaseStr).size === lowerCaseStr.length;
  }