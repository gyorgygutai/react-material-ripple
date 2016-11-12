import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'

class Ripple extends React.Component {
  _doTheRipple = (event) => {
    const rippleSize = this._calculateRippleSize(this.refs.rippleContainer)
    const ripplePosition = this._calculateRipplePosition(event, this.refs.rippleContainer, rippleSize)

    this._renderRipple(this.refs.ripple, rippleSize, ripplePosition)
  }
  _calculateRippleSize(parent) {
    const { offsetWidth, offsetHeight } = parent

    return offsetWidth >= offsetHeight? offsetWidth : offsetHeight
  }
  _calculateRipplePosition(event, parent, rippleSize) {
    const bounds = parent.getBoundingClientRect();

    const x = event.clientX - bounds.left - (rippleSize / 2);
    const y = event.clientY - bounds.top - (rippleSize / 2);

    return { x, y }
  }
  _renderRipple(toNode, size, position) {
    ReactDOM.unmountComponentAtNode(toNode)
    ReactDOM.render((
      <span
        style={{
          left: position.x,
          top: position.y,
          width: size,
          height: size
        }}
        className="ripple"
      />
    ), toNode)
  }

  render() {
    const { children, className: rippleContainerClassName } = this.props

    return (
      <div
        {...this.props}
        ref="rippleContainer"
        onClick={this._doTheRipple}
        className={classNames("rippleContainer", rippleContainerClassName)}
      >
        {children}
        <span ref="ripple" />
      </div>
    )
  }
}

Ripple.propTypes = {
  children: React.PropTypes.element,
  className: React.PropTypes.string
}

export default Ripple
