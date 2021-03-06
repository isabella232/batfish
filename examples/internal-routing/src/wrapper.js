import React from 'react';

export default class Wrapper extends React.PureComponent {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <a href="/">home</a>
            </li>
            <li>
              <a href="/numbers">numbers</a>
            </li>
            <li>
              <a href="/letters">letters</a>
            </li>
          </ul>
          <hr />
        </nav>
        {this.props.children}
      </div>
    );
  }
}
