import './App.css'
import HashForm from './components/HashForm.tsx';
import bgImage from './assets/bg.png'

function App() {
    return (
        <div className="canvas" style={{backgroundImage: `url(${bgImage})`}}>
            <div className="content-wrapper">
                <main id="home">
                    <div id="intro">
                        <h1>h<span className="logo-v">v</span>sh</h1>
                        <p>
                            Select an algorithm and type or paste your text to see its hash below.
                        </p>
                    </div>
                    <HashForm/>
                </main>
            </div>
        </div>
    )
}

export default App
