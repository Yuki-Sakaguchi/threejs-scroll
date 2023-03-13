import { lerp } from "three/src/math/MathUtils";
import gsap from "gsap";

/**
 * モーションを設定するクラス
 */
export class Motion {
  lerp_scroll;
  params;

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

    gsap.ticker.add(this.onRaf.bind(this));
    gsap.ticker.fps(30);

    this.init();
  }

  init() {
    window.addEventListener("wheel", this.onWheel.bind(this));
  }

  destroy() {
    window.removeEventListener("wheel", this.onWheel.bind(this));
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
    console.log("wheel", this.lerp_scroll);
  }

  onRaf() {
    const t = performance.now() / 1000;
    this.lerp_scroll.y.target += this.params.speed;
    this.toUpdateX();
    this.toUpdateY();
    this.lerp_scroll.x.last = this.lerp_scroll.x.current;
    this.lerp_scroll.y.last = this.lerp_scroll.y.current;
    this.update();
  }

  update() {}
}
