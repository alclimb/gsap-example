import gsap from "gsap";
import "./style.css";

// ボタンクリックイベントの登録
document.querySelector<HTMLDivElement>(`#runButton`)!.addEventListener(`click`, async () => {
  // gsap: アニメーション実行
  await gsap.to(`#app > h1,p`, {
    duration: 0.3, // アニメーション時間 (単位:秒)
    opacity: 0.0,  // 透明度 (0.0 ～ 1.0)
    x: -50,        // X位置 (単位: px)
    stagger: 0.05, // 複数の対象要素の場合にタイミングをずらす時間 (単位: 秒)
  });

  // gsap: アニメーション実行
  await gsap.to(`#app`, {
    duration: 0.3, // アニメーション時間 (単位:秒)
    opacity: 0.0,  // 透明度 (0.0 ～ 1.0)
    x: -50,        // X位置 (単位: px)
  });
});

// ボタンクリックイベントの登録
document.querySelector<HTMLDivElement>(`#resetButton`)!.addEventListener(`click`, async () => {
  // gsap: アニメーション実行
  await gsap.to(`#app`, {
    duration: 0.3, // アニメーション時間 (単位:秒)
    opacity: 1.0,  // 透明度 (0.0 ～ 1.0)
    x: 0,        // X位置 (単位: px)
  });

  // gsap: アニメーション実行
  await gsap.to(`#app > h1,p`, {
    duration: 0.3, // アニメーション時間 (単位:秒)
    opacity: 1.0,  // 透明度 (0.0 ～ 1.0)
    x: 0,        // X位置 (単位: px)
    stagger: 0.05, // 複数の対象要素の場合にタイミングをずらす時間 (単位: 秒)
  });
});
