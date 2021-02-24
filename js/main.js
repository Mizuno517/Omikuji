'use strict';


{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () =>{
    //おみくじの結果を配列にする
    const results = ['大吉', '中吉', '凶', '末吉'];
    btn.textContent = results[Math.floor(Math.random() * results.length)];

    //確率をif文で操作
    const n = Math.random();//0 <= n < 1
    if(n < 0.05) {
      btn.textContent = '大吉';// 5%
    } else if (n < 0.2) {
      btn.textContent = '中吉';// 15%
    } else {
      btn.textContent = '凶';// 80%
    }
  
  

    switch文
    switch (n) {
      case 0:
        btn.textContent = '大吉';
        break;
      case 1:
        btn.textContent = '中吉';
        break;
      case 2:
        btn.textContent = '凶';
        break;
    }
  });



}