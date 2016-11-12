'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Ripple = require('./Ripple.scss');

var _Ripple2 = _interopRequireDefault(_Ripple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Ripple = function (_React$Component) {
  (0, _inherits3.default)(Ripple, _React$Component);

  function Ripple() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Ripple);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Ripple.__proto__ || (0, _getPrototypeOf2.default)(Ripple)).call.apply(_ref, [this].concat(args))), _this), _this._doTheRipple = function (event) {
      var rippleSize = _this._calculateRippleSize(_this.refs.rippleContainer);
      var ripplePosition = _this._calculateRipplePosition(event, _this.refs.rippleContainer, rippleSize);

      _this._renderRipple(_this.refs.ripple, rippleSize, ripplePosition);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Ripple, [{
    key: '_calculateRippleSize',
    value: function _calculateRippleSize(parent) {
      var offsetWidth = parent.offsetWidth,
          offsetHeight = parent.offsetHeight;


      return offsetWidth >= offsetHeight ? offsetWidth : offsetHeight;
    }
  }, {
    key: '_calculateRipplePosition',
    value: function _calculateRipplePosition(event, parent, rippleSize) {
      var bounds = parent.getBoundingClientRect();

      var x = event.clientX - bounds.left - rippleSize / 2;
      var y = event.clientY - bounds.top - rippleSize / 2;

      return { x: x, y: y };
    }
  }, {
    key: '_renderRipple',
    value: function _renderRipple(toNode, size, position) {
      _reactDom2.default.unmountComponentAtNode(toNode);
      _reactDom2.default.render(_react2.default.createElement('span', {
        style: {
          left: position.x,
          top: position.y,
          width: size,
          height: size
        },
        className: _Ripple2.default.ripple
      }), toNode);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          rippleContainerClassName = _props.className;


      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, this.props, {
          ref: 'rippleContainer',
          onClick: this._doTheRipple,
          className: (0, _classnames2.default)(_Ripple2.default.RippleContainer, rippleContainerClassName)
        }),
        children,
        _react2.default.createElement('span', { ref: 'ripple' })
      );
    }
  }]);
  return Ripple;
}(_react2.default.Component);

exports.default = Ripple;