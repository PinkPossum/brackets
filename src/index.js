module.exports = function check(str, bracketsConfig) {
  const openBrackets = [];
  const closeBrackets = [];
  const arrSplitted = str.split('');
  const arr = [];
  let openIndex;

  bracketsConfig.forEach(item => {
    openBrackets.push(item[0]);
    closeBrackets.push(item[1]);
  });

  for (let i = 0; i < arrSplitted.length; i++) {
    openIndex = openBrackets.indexOf(arrSplitted[i]);

    if (openIndex !== -1) {
      if (closeBrackets.indexOf(arrSplitted[i]) === -1) {
        arr.push(openIndex);
      } else {
        if (arr[arr.length - 1] === openIndex) {
          arr.pop();
        } else {
          arr.push(openIndex);
        }
      }
    } else {
      if (arr[arr.length - 1] === closeBrackets.indexOf(arrSplitted[i])) {
        arr.pop();
      } else {
        return false;
      }
    }
  }

  return arr.length === 0;
};
/* Task
    Implement function check(str, bracketsConfig), that for given brackets sequence will return true if it is correct and false otherwise

    In the second param there is bracketsConfig - the array of pairs open-closed brackets. Each subarray includes only 2 elements - opening and closing bracket

    check('()', [['(', ')']]) // -> true
    check('((()))()', [['(', ')']]) // -> true
    check('())(', [['(', ')']]) // -> false
    check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']]) // -> true
    check('[(])', [['(', ')'], ['[', ']']]) // -> false
    check('[]()', [['(', ')'], ['[', ']']]) // -> true
    check('[]()(', [['(', ')'], ['[', ']']]) // -> false

    // special case: opening and closing bracket can be the same :)

    check('||', [['|', '|']]) // -> true
    check('|()|', [['(', ')'], ['|', '|']]) // -> true
    check('|(|)', [['(', ')'], ['|', '|']]) // -> false
    check('|()|(||)||', [['(', ')'], ['|', '|']]) // -> true
    Write your code in src/index.js */