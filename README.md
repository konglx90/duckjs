# duckjs

## Target

A Complier for web component by using FPR And TypeScript.

## Feature

- JSX
- No class
- FPR
- Web Component
- Easy to PWAs
- TypeScript

## Demo

- basic

```tsx
import Duck from '@konglx/duckjs'

const MySu: DUCK.FC<{ name: string}> = (props) => <p>{props.name}</p>
MySu.tag = 'my-su'

// use
<my-su name="suyuchun"></my-su>
```

- advanced(TODO redesign)

```tsx
import Duck, { useState, useEffect }  from '@konglx/duckjs'

const 

function MyLovelySu() {
  const state = useState<{ time: number }>({ time: Date.now() })
  
  useEffect(() => {
    const timer = window.setInterval(() => {
      state.time = Date.now();
    }, 1000);
    return () => {
      window.clearInterval(timer);
    }
  }, [])

  return <span>{new Date(state.time).toLocaleTimeString()}</span>
}
```

## Thanks to

- stenciljs
- elm
- web component MDN