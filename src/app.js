const domContainer = document.getElementById('root');
var React = require('react');
var Sound = require('react-sound').default;
 
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', isPlay:false};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.lastTimerId = null;
  }


  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.lastTimerId) {
      clearInterval(this.lastTimerId);
    } 
    const ms = this.state.value * 60000;
    alert(`Get Up Stand Up in ${this.state.value} minutes ! `);
    this.lastTimerId = setInterval(() => {
      this.setState({isPlay: true});
    }, ms);

  }

  render() {
    const input = <form onSubmit={this.handleSubmit}>
        <label>
          Time (in minutes):
          <input type="number" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    
    const timer = 
      <div>
        {this.state.isPlay ? <Sound url="spongebob-dolphin-censor.mp3" 
                              playStatus={Sound.status.PLAYING}/>
                     : ''}
        {input}
      </div>
    return timer;
  }
}

ReactDOM.render(
  <Timer />, 
  domContainer);