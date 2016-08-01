const _ = require('lodash');

module.exports = function fEndsWith (filename, suffixList) {

  if (typeof suffixList === 'string') {
    return _.endsWith(filename, suffixList);
  } else if (Array.isArray(suffixList)) {
    let endsWith = false;
    _.forEach(suffixList, (suffix) => {
      if (_.endsWith(filename, suffix)) {
        endsWith = true;
      }
    });
    return endsWith;
  }
}
