var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var domContainer = document.getElementById('root');
var React = require('react');
var Sound = require('react-sound').default;

var Timer = function (_React$Component) {
    _inherits(Timer, _React$Component);

    function Timer(props) {
        _classCallCheck(this, Timer);

        var _this = _possibleConstructorReturn(this, (Timer.__proto__ || Object.getPrototypeOf(Timer)).call(this, props));

        _this.state = {
            value: '',
            isPlay: false,
            isRunning: false
        };

        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.lastTimerId = null;
        return _this;
    }

    _createClass(Timer, [{
        key: 'handleChange',
        value: function handleChange(event) {
            this.setState({ value: event.target.value });
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            var _this2 = this;

            event.preventDefault();

            if (!this.state.isRunning) {
                this.setState({ isRunning: true });
                if (this.lastTimerId) {
                    clearInterval(this.lastTimerId);
                }
                var ms = this.state.value * 60000;
                alert('Get Up Stand Up in ' + this.state.value + ' minutes ! ');
                this.lastTimerId = setInterval(function () {
                    _this2.setState({ isPlay: true });
                }, ms);
            } else {
                clearInterval(this.lastTimerId);
                this.setState({ isRunning: false, isPlay: false });
            }
        }
    }, {
        key: 'sound',
        value: function sound(status) {
            return React.createElement(Sound, { url: 'spongebob-dolphin-censor.mp3', playStatus: status });
        }
    }, {
        key: 'render',
        value: function render() {
            var input = React.createElement(
                'form',
                { onSubmit: this.handleSubmit },
                React.createElement(
                    'label',
                    null,
                    'Time (in minutes):',
                    React.createElement('input', { type: 'number', value: this.state.value, onChange: this.handleChange })
                ),
                React.createElement('input', { type: 'submit', value: this.state.isRunning ? "Stop" : "Start" })
            );

            var timer = React.createElement(
                'div',
                null,
                this.state.isPlay ? this.sound(Sound.status.PLAYING) : this.sound(Sound.status.STOPPED),
                input
            );
            return timer;
        }
    }]);

    return Timer;
}(React.Component);

ReactDOM.render(React.createElement(Timer, null), domContainer);