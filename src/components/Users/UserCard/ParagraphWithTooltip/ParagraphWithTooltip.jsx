import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ParagraphWithTooltip extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.textElement = React.createRef();
  }

  state = {
    isOverflowed: false,
  };

  componentDidMount() {
    this.setState({
      isOverflowed:
        this.textElement.current.scrollWidth >
        this.textElement.current.clientWidth,
    });
  }

  render() {
    const { isOverflowed } = this.state;
    const { children, className } = this.props;
    return (
      <p
        className={className}
        data-tip={isOverflowed ? children : ''}
        ref={this.textElement}
      >
        {children}
      </p>
    );
  }
}
