import React from 'react';

type Props = { children: React.ReactNode };
type State = { hasError: boolean };

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return (
        <main style={{ textAlign: 'center', margin: '4rem auto' }}>
          <h1>Something went wrong.</h1>
          <p>Sorry, an unexpected error occurred.</p>
          <a href="/">Go back home</a>
        </main>
      );
    }
    return this.props.children;
  }
}

//Class component because React’s built-in error boundaries must be class components (as of React 19, error boundaries are still only supported via class components).
