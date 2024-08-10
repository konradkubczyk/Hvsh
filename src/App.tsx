import './App.css'
import HashForm from './components/HashForm.tsx';
import NoisyContainer from "./components/NoisyContainer.tsx";

function App() {
    return (
        <NoisyContainer>
            <main id="home">
                <div id="intro">
                    <h1>h<span className="logo-v">v</span>sh</h1>
                    <p>
                        Select an algorithm and type or paste your text to see its hash below.
                    </p>
                </div>
                <HashForm/>
            </main>
        </NoisyContainer>
    )
}

export default App
