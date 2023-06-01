import React, { useState } from 'react';

function Gpt(props) {
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');

    
    const submit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3001/',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({message})
        })
        .then((res) => res.json())
        .then((data) => setResponse(data.message))
    }
    return (
        <div className='gptArea' style={{textAlign:"center"}}>
            <h3>궁금한 것이 있다면 GPT에게 질문하세요!</h3>
            <form onSubmit={submit}>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="chatGpt">
                </textarea>
                <button type='submit' className="gptBtn">질문하기</button>
            </form>
            <div id='gptResArea'>{response}</div>
        </div>
    );
}

export default Gpt;