import './App.css'
import HashForm from './components/HashForm.tsx';
import NoisyContainer from "./components/NoisyContainer.tsx";
import bgImage from './assets/bg.png'

function App() {
    return (
        <div className="content-wrapper" style={{ backgroundImage: `url(${bgImage})`}}>
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
        </div>
    )
}

export default App
