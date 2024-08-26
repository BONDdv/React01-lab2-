


function App() {
   const st1 = {}
    return (
        <div style = {{backgroundColor: '#23272F',color: 'white' ,  height : "100vh", padding : '20px 40px'}}>
        
        <h1>Quick Start</h1>
        <p>Welcome to the React documentation! This page will give you an introduction to the 80% of React concepts that you will use on a daily basis.</p>
        
            <div style = {{backgroundColor: '#343A46',color: 'white' , padding : 40 , width : '80%'  , borderRadius : '10px' }}>
                
                <h1>You will learn</h1>
                <ul>
                    <li>How to create and nest components</li>
                    <li>How to add markup and styles</li>
                    <li>How to add markup and styles</li>
                    <li>How to add markup and styles</li>
                    <li>How to add markup and styles</li>
                    <li>How to add markup and styles</li>
                </ul>
            </div>
        
        </div>
    )
}



ReactDOM.createRoot(document.querySelector('#root'))
.render(<App />)