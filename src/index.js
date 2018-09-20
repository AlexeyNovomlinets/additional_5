module.exports = function check(str, bracketsConfig) {
  // your solution
  var inPairs = str.split('');
  var stack = [];
  var openPairs = [];
  var closePairs = [];
  var openIndex, closeIndex;
  var key = false;

  if ((str.length % 2) != 0) return false;

  for (var i = 0; i < bracketsConfig.length; i++) {
    openPairs[i] = bracketsConfig[i][0];
    closePairs[i] = bracketsConfig[i][1];
  }

  for (i = 0; i < inPairs.length; i++) {
    openIndex = openPairs.indexOf(inPairs[i]);
    if (openIndex != -1 ) {
      if ((closePairs.indexOf(inPairs[i]) != -1) && !key && stack.indexOf(openIndex) != -1) key = true;
      if (!key) {
        stack.push(openIndex);
        continue;
      }
    }
    closeIndex = closePairs.indexOf(inPairs[i]);
    openIndex = stack.pop();
    if (closeIndex != openIndex) return false;
    key = false;
  }

  return true;
}
