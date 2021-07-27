class Formatter {
  static capitalize(string) {
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
  }
  static sanitize(string) {
    return string.replace(/[^a-zA-Z0-9\-\' ]/g, '');
  }
  static titleize(string) {
    return string.split(' ').map((word, index) => {
      const exclusionList = ['a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from', 'the'];
      if (index !== 0 && exclusionList.includes(word.toLowerCase())) {
        return word;
      }
      return this.capitalize(word);
    }).join(' ')
  }
}