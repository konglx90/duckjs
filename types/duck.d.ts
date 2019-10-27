declare module "@konglx/duckjs" {
  namespace Duck {
    interface FunctionComponent<P> {
      (props: P): string | null;
      tag: string;
    }
  
    type FC<P = {}> = FunctionComponent<P>;
  }

  export = Duck;
}