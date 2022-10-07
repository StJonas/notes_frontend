import './App.css';
import Header  from './components/Header';
import NotesListPage from './pages/NotesListPage';

function App() {
  return (
    <div className="App">
       <Header></Header>
       <NotesListPage/>
    </div>
  );
}

export default App;
