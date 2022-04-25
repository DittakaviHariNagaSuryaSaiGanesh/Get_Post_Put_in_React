import PostList from './Components/PostList';
import PostForm from './Components/PostForm';
import PutTest from './Components/PutTest';
import Delete from './Components/Delete';
import './App.css';
import './Components/style.css'

function App() {
  return (
    <div className="App">
      <div className='card text-white bg-primary mb-3'>
        <h1>This is GET Request</h1>
      </div>

      <PostList></PostList>

      <div className='card text-white bg-primary mb-3 mt-5'>
        <h1>This is POST Request</h1>
      </div>

      <PostForm></PostForm>

      <div className='card text-white bg-primary mb-3 mt-5'>
        <h1>This is PUT Request</h1>
      </div>

      <PutTest></PutTest>

      <div className='card text-white bg-primary mb-3 mt-5'>
        <h1>This is Delete Request</h1>
      </div>

      <Delete></Delete>
    </div>
  );
}

export default App;
