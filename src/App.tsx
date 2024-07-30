import './App.css'
import HashForm from './components/HashForm.tsx';

function App() {
    return (
        <main id="home">
            <div id="intro">
                <h1>h<span className="logo-v">v</span>sh</h1>
                <p>
                    Select an algorithm and type or paste your text to see its hash below.
                </p>
            </div>
            <HashForm/>
        </main>
    )
}

export default App
