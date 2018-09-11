const domContainer = document.getElementById('root');
var React = require('react');
var Sound = require('react-sound').default;
 
class Timer extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          value: '',
          isPlay: false,
          isRunning: false
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.lastTimerId = null;
  }


  handleChange(event) {
      this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    if(!this.state.isRunning) {
        this.setState({ isRunning: true });
        if(this.lastTimerId) {
            clearInterval(this.lastTimerId);
        }
        const ms = this.state.value * 60000;
        alert(`Get Up Stand Up in ${this.state.value} minutes ! `);
        this.lastTimerId = setInterval(() => {
            this.setState({isPlay: true});
        }, ms);
    } else {
        clearInterval(this.lastTimerId);
        this.setState({ isRunning: false, isPlay: false });
    }
  }

  sound(status) {
      return <Sound url="spongebob-dolphin-censor.mp3" playStatus={status}/>;
  }
    
  render() {
    const input = <form onSubmit={this.handleSubmit}>
        <label>
          Time (in minutes):
          <input type="number" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value={this.state.isRunning ? "Stop" : "Start"} />
      </form>
    
    const timer = 
      <div>
        {this.state.isPlay ? this.sound(Sound.status.PLAYING)
                           : this.sound(Sound.status.STOPPED)}
        {input}
      </div>
    return timer;
  }
}

ReactDOM.render(
  <Timer />, 
  domContainer);
