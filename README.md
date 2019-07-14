# Pomodoro

## 六角學院 2019 theF2EChallenge Week1 蕃茄鐘
- [DEMO page(未完成)](https://akari0624.github.io/hexSchool2019Week1_pomodoro/)
- [資訊](https://challenge.thef2e.com/news/12?fbclid=IwAR3GgNSQl_FtQ4IkWrmvGRTUHmTuTnSc9lbZbRwi1Dh1X36Y03rh12OzphY)
- [UI設計師的設計理念](https://challenge.thef2e.com/user/2760?schedule=2468#works-2468)
- [UI設計稿](https://xd.adobe.com/spec/4f6eb081-4411-4b48-69ae-34b92df3f3e4-395f/)

## repo資訊
- 本repo使用Create-React-App with Typescript模板，一開始是先在[codesandbox](https://codesandbox.io/s/increase-gradually-circle-lt3mz)上寫，之後下載zip下來，以轉成一般專案。

## 也許值得一看的技巧
- react hook api, `useRef`, `useLayoutEffect`.....，其中在`useEffect`裡要呼叫`setInterval`時，有些很雷的地方值得注意。
- 兩層canvas堆疊
- 使用`requestAnimationFrame`以期望達到最順暢，最節省硬體資源的動畫效果

## todo 
重要性由上而下排列：
1. 時間到期時，播放音效(但 CRA沒辦法打包mp3，所以做起來很麻煩，不然就是mp3檔案url直接用網路連結)
2. 選擇其他todo時切換`currTask`
3. 資料的`持久化`對策（最簡單的作法就存在localstorage裡）
4. 報表頁面, whole todoList頁面, 切換鈴聲頁面 