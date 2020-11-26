window.onload = () => {
  /** @member {number} maxNum    - 表示する最大数 */
  const maxNum = 99;

  /** @member {object} dispItem  - 表示する文字列 */
  const dispItem = {
    fizz: 'Fizz',
    buzz: 'Buzz',
    space: ' ',
    error: '整数値を入力してください'
  };
  
  const btn = document.getElementById('btnRun');

  btn.addEventListener('click', () => {
  
    const pattern = /^([1-9]\d*|0)$/;

    const divAns = document.getElementById("divAns");
    const fizz = document.getElementById("fizzNum").value;
    const buzz = document.getElementById("buzzNum").value;
  
    // 子要素を削除
    divAns.innerHTML = '';

    if (fizz.match(pattern) && buzz.match(pattern)){
      // チェック成功時のDOM生成処理
      const fizzNum = Number(fizz);
      const buzzNum = Number(buzz);
      for (let i = 1; i <= maxNum; i++) {
        let text = '';
        if(i%fizzNum === 0){
          text = text + dispItem.fizz;
        }
        if(i%buzzNum === 0){
          text = text + dispItem.buzz;
        }
        if(text !== ''){
          const newRow = document.createElement("div");
          newRow.innerHTML = text + dispItem.space + i;
          divAns.appendChild(newRow);
        }
      }
    } else {
      // チェック失敗時のDOM生成処理
      const newRow = document.createElement("div");
      newRow.innerHTML = dispItem.error;
      divAns.appendChild(newRow);
    }
  });
};
