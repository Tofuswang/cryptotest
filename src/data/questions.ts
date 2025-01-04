import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    text: "小明看到一交易所，有即時漲跌數據，該怎麼做？",
    options: [
      "直接投錢",
      "傳給媽媽，叫他投錢",
      "打給爸爸叫他投錢", 
      "用 CoinGecko、CoinMarketCap 交叉比對網址是否正確"
    ],
    correctAnswers: [3],
    type: "single"
  },
  {
    id: 2,
    text: "網友告訴小美幾個交易所，請問他可以如何判定何者不是詐騙？",
    options: [
      "上 165 查詢",
      "在 CoinGecko 看交易所資訊",
      "在脆上問脆友",
      "除了 c. 之外都對"
    ],
    correctAnswers: [3],
    type: "single"
  },
  {
    id: 3,
    text: "脆友告訴小猴授權錢包這個網址可以領空投，點下去沒事，所以小猴應該？",
    options: [
      "點下去",
      "用小美的手點下去",
      "問 Cofacts (https://en.cofacts.tw)",
      "打掛那個網站"
    ],
    correctAnswers: [2],
    type: "single"
  },
  {
    id: 4,
    text: "小香看到了一些加密貨幣投資網站，他避免遇到釣魚或詐騙的做法，哪一個是不行的呢？",
    options: [
      "用 whois 看註冊時間和註冊商",
      "看看網頁設計長怎樣，是否跟別的網頁長很像",
      "避免輸入個資或其他敏感資訊",
      "小香覺得沒辦法，就放棄了ＱＱ"
    ],
    correctAnswers: [3],
    type: "single"
  },
  {
    id: 5,
    text: "區塊鏈投資可能存在哪些風險？（選擇所有適用項）",
    options: [
      "市場波動",
      "監管政策變化",
      "技術漏洞",
      "流動性不足"
    ],
    correctAnswers: [0, 1, 2, 3],
    type: "multiple"
  }
];