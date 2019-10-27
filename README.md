# duckjs

A Complier to Web Component for using FPR, TypeScript, JSX code.

## Features

- JSX
- No class
- Web Component
- TypeScript
- immutable
- FPR in logic layer
- Easy to PWAs

## UI

## Uses

- basic

```tsx
import Duck from '@konglx/duckjs'

const MySu: Duck.FC<{ name: string}> = (props) => <p>{props.name}</p>
MySu.tag = 'my-su'

// use
<my-su name="suyuchun"></my-su>
```

- advanced(TODO redesign)

```tsx
import Duck, { state, useEffect }  from '@konglx/duckjs'

const MyLovelySu: Duck.FC = () => {
  const [state, setState] = useState<{ time: number }>({ time: Date.now() })
  useEffect(() => {
    const timer = window.setInterval(() => {
      setState(Date.now())
    }, 1000);
    return () => {
      window.clearInterval(timer);
    }
  }, [])
  return <span>{new Date(state.time).toLocaleTimeString()}</span>
}
MyLovelySu.tag = 'my-lovely-su'
```

## Dev Tools

- [Rollup](https://github.com/rollup/rollup)
- 

## Thanks to

- [stenciljs](https://stenciljs.com/)
- [RxJS](https://github.com/reactivex/rxjs)
- [elm](https://elm-lang.org/)
- web component MDN
- [cycle.js](https://cycle.js.org/#-learn-it-in-1h-37min)
- [cycle.js silde](http://slides.com/erykpiast/cycle)
- [What if the user was a function?](https://www.youtube.com/watch?v=1zj7M1LnJV4m/watch?v=1zj7M1LnJV4)
- [some-problems-with-react-redux](https://staltz.com/some-problems-with-react-redux.html)
- [Functional Reactive Programming for front-end developers](http://slides.com/erykpiast/frp#/)
- [A General Theory of Reactivity](https://github.com/kriskowal/gtor)
- [git tricks](http://slides.com/erykpiast/discover-git#/)
- [Custom Elements Everywhere](https://custom-elements-everywhere.com/)
- [Real time programming : special purpose or general purpose languages](https://hal.inria.fr/file/index/docid/75494/filename/RR-1065.pdf)