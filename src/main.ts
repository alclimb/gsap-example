import gsap from "gsap";
import "./style.css";

// ボタンクリックイベントの登録
document.querySelector<HTMLDivElement>(`#button1`)!.addEventListener(`click`, () => {

  // gsap: アニメーション実行
  gsap.to(`#app > *`, {
    duration: 0.3,  // アニメーション時間 (単位:秒)
    opacity: 0.0,   // 透明度 (0.0 ～ 1.0)
    x: -50,         // X位置 (単位: px)
    stagger: 0.05,  // 対象が複数ある場合タイミングをずらす
  });
  
});
