import React, { ReactNode } from 'react'
import { Fade, Typography } from "@material-ui/core";

interface IErrorBoundaryProps {}

interface IErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends React.Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
    super(props)
    this.state = {
      hasError: false
    }
  }


  componentDidCatch(err: any): void {
    this.setState({ hasError: true })
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <Fade in={this.state.hasError}>
          <Typography color="secondary" style={{textAlign: "center"}}>
            Something went wrong :(
          </Typography>
        </Fade>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary