declare namespace JSX {
  interface IntrinsicElements {
    'applause-button': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      color?: string
      multiclap?: string
    }
  }
}
