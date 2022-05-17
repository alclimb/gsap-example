import gsap from "gsap";
import "./style.css";

// ボタンクリックイベントの登録
document.querySelector<HTMLDivElement>(`#button1`)!.addEventListener(`click`, onClick);

async function onClick() {
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
}
