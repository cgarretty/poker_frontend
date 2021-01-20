import './stylesheets/App.css';
import Grid from '@material-ui/core/Grid';
import {Chatter} from './components/containers';

const Title = ({ title }) => (
  <h1 className="Title">{title}</h1>
);

function App() {
  return (
    <Grid container className="App">
      <Grid item xs={9} className="Game-box">
        <Title title="Poker Room"/>
      </Grid>
      <Grid item xs={3} className="Chat-box">
        <Chatter />
      </Grid>
    </Grid>
  );
}

export default App;
