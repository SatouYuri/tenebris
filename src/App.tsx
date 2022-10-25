import Sheet from './components/Sheet'
import './App.css';
import {Helmet} from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"></meta>
      </Helmet>
      <Sheet />
    </>
  );
}

export default App;
