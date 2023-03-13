import { lerp } from "three/src/math/MathUtils";
import gsap from "gsap";

/**
 * モーションを設定するクラス
 */
export class Motion {
  lerp_scroll;
  params;
  isDown: boolean;

  constructor() {
    this.params = {
      w: window.innerWidth,
      h: window.innerHeight,
      depth: 100,
      color: "#fff",
      direction: {
        x: "down",
        y: "down",
      },
      speed: -2,
    };
    this.lerp_scroll = {
      ease: 0.1,
      current: 0,
      target: 0,
      last: 0,
      x: {
        current: 0,
        target: 0,
        last: 0,
      },
      y: {
        current: 0,
        target: 0,
        last: 0,
      },
    };

    this.isDown = false;

    gsap.ticker.add(this.onRaf.bind(this));
    gsap.ticker.fps(30);

    this.init();
  }

  init() {
    window.addEventListener("wheel", this.onWheel.bind(this));
    window.addEventListener("mousedown", this.onTouchDown.bind(this));
    window.addEventListener("mousemove", this.onTouchMove.bind(this));
    window.addEventListener("mouseup", this.onTouchUp.bind(this));
    window.addEventListener("touchstart", this.onTouchDown.bind(this));
    window.addEventListener("touchmove", this.onTouchMove.bind(this));
    window.addEventListener("touchend", this.onTouchUp.bind(this));
  }

  destroy() {
    window.removeEventListener("wheel", this.onWheel.bind(this));
    window.removeEventListener("mousedown", this.onTouchDown.bind(this));
    window.removeEventListener("mousemove", this.onTouchMove.bind(this));
    window.removeEventListener("mouseup", this.onTouchUp.bind(this));
    window.removeEventListener("touchstart", this.onTouchDown.bind(this));
    window.removeEventListener("touchmove", this.onTouchMove.bind(this));
    window.removeEventListener("touchend", this.onTouchUp.bind(this));
  }

  toUpdateX() {
    this.lerp_scroll.x.current = lerp(
      this.lerp_scroll.x.current,
      this.lerp_scroll.x.target,
      this.lerp_scroll.ease
    );
  }

  toUpdateY() {
    this.lerp_scroll.y.current = lerp(
      this.lerp_scroll.y.current,
      this.lerp_scroll.y.target,
      this.lerp_scroll.ease
    );
  }

  onWheel(e: WheelEvent) {
    this.lerp_scroll.y.target += 0.5 * e.deltaY;
    this.lerp_scroll.x.target += 0.5 * e.deltaX;
  }

  onTouchDown() {
    console.log("down");
    this.isDown = true;
  }

  onTouchMove() {
    if (this.isDown) {
      console.log("move");
    }
  }

  onTouchUp() {
    console.log("up");
    this.isDown = false;
  }

  onRaf() {
    const t = performance.now() / 1000;
    // ここで足すことで自動スクロール
    // this.lerp_scroll.y.target += this.params.speed;
    this.toUpdateX();
    this.toUpdateY();
    this.lerp_scroll.x.last = this.lerp_scroll.x.current;
    this.lerp_scroll.y.last = this.lerp_scroll.y.current;
    this.update();
  }

  update() {}
}
