import React from 'react';
import { useTrail, animated } from 'react-spring';

function Trail({ open, children, ...props }) {
  const items = React.Children.toArray(children);

  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 30 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <div style={{ overflow: 'hidden' }} {...props}>
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={index}
            style={{ ...rest, transform: x.interpolate((x) => `translate3d(0,${x}px,0)`) }}
          >
            <animated.div style={{ height }}>{items[index]}</animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  );
}

export default function Expressions({ expressions, open }) {
  return (
    <Trail open={open}>
      {expressions.map((expression) => (
        <span key={expression.id}>{expression.text}</span>
      ))}
    </Trail>
  );
}
