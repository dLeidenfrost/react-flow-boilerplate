/* @flow */
import * as React from 'react';
import './Home.scss';

type Props = {
  name: string,
  n: number,
};

const square = (n: number): number => {
  return n * n;
}

class Home extends React.Component<Props> {
  render() {
    return (
      <div className="test">This is a test {this.props.name} I added new text mennnnnnn {square(this.props.n)} !!!!</div>
    )
  }
}

export default Home;
