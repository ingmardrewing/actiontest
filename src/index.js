import p5 from 'p5';

const sketch = (s) => {
  s.setup = () => {
  }

  s.draw = () => {
    s.backgroun(0);
    s.circle(10, 10, 10);
  }
}

const sketchInstance = new P5(sketch);
