import React from 'react'

const App = (props) => {
    return (
        <div>
            <h1>App</h1>
            <pre>
                {JSON.stringify(props, null, 2)}
            </pre>
        </div>
    )
}

export default App

export async function getServerSideProps({ req, res }) {
    return {
        props: {
            user: {
                name: 'Stefano Paulo'
            }
        }
    }
}