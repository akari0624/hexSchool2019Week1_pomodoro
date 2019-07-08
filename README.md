# Pomodoro

## 六角學院 2019 theF2EChallenge Week1 蕃茄鐘
- [資訊](https://challenge.thef2e.com/news/12?fbclid=IwAR3GgNSQl_FtQ4IkWrmvGRTUHmTuTnSc9lbZbRwi1Dh1X36Y03rh12OzphY)
- [UI設計師的設計理念](https://challenge.thef2e.com/user/2760?schedule=2468#works-2468)
- [UI設計稿](https://xd.adobe.com/spec/4f6eb081-4411-4b48-69ae-34b92df3f3e4-395f/)

## repo資訊
- 本repo使用Create-React-App with Typescript模板，一開始是先在[codesandbox](https://codesandbox.io/s/increase-gradually-circle-lt3mz)上寫，之後下載zip下來，以轉成一般專案。

## 也許值得一看的技巧
- react hook api, `useRef`, `useLayoutEffect`.....，其中在`useEffect`裡要呼叫`setInterval`時，有些很雷的地方值得注意。
- 兩層canvas堆疊
- 使用`requestAnimationFrame`以期望達到最順暢，最節省硬體資源的動畫效果