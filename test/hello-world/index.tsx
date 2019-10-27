import Duck from '@konglx/duckjs'

const MySu: Duck.FC<{ name: string}> = (props) => <p>{props.name}</p>
MySu.tag = 'my-su';