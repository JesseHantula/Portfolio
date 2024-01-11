import React, { useState, useEffect } from 'react'
import textsToType from '../assets/text/randomTextToTypes'
import '../App.css'

const AdditionalInfo = () => {
    const TypingSimulation = ( {textsToType} ) => {
        const [text, setText] = useState('')
        const [currentIndex, setCurrentIndex] = useState(0)
        const [refresh, setRefresh] = useState(false)

        useEffect(() => {
            const randomIndex = Math.floor(Math.random() * textsToType.length)
            const selectedText = textsToType[randomIndex]

            let charIndex = 0

            const typingInterval = setInterval(() => {
                setText(selectedText.substring(0, charIndex + 1))
                setCurrentIndex((prevIndex) => prevIndex + 1)

                if (charIndex === selectedText.length) {
                    clearInterval(typingInterval)
                    setCurrentIndex(0)
                    setText('')
                    setRefresh(!refresh)
                }
                charIndex++
            }, 100)

            return () => {
                clearInterval(typingInterval)
            }
        }, [refresh])

        return <div style={{ backgroundColor: '#000', padding: '20px', borderRadius: '8px', overflow: 'hidden', width: 'max', height: '70px' }}>
        <div style={{ color: '#FFF', fontFamily: 'monospace', fontSize: '16px', whiteSpace: 'pre-line' }}>{text}</div>
      </div>
    }

    return (
        <div id='extra-section'>
            <h2>Additional info + Contact details</h2>
            <hr style={{ border: '3px solid #888', width: '100%', margin: '20px 0' }} />
            <TypingSimulation textsToType={textsToType} />
        <div style={{marginTop: '25px'}}>
            <h4>Thank you so much for taking the time to look through my portfolio. If you have any questions, please feel free to contact me!</h4>
            <strong>Email:</strong> jessehantula@gmail.com <br />
            <strong>Phone number:</strong> +358 45 3587332 <br />
        </div>
        <h4 style={{'marginTop': '25px'}}>
            You can also reach out to me through these online platforms! </h4> <br />
            <a href='https://www.linkedin.com/in/jesse-hantula-4b17a9242/' target="_blank" style={{'marginRight': '50px'}} className='logo'>
                <img src="/Linkedin.png" alt="Linkedin" height='100px' />
            </a>
            <a href='https://github.com/JesseHantula' target="_blank" style={{'marginRight': '50px'}} className='logo'>
                <img src="/Github.png" alt="Github" height='100px' />
            </a>
            <a href='https://www.instagram.com/jesse.hantula/' target="_blank">
                <img src="/Instagram.png" alt="Instagram" height='100px' className='logo'/>
            </a>
            <div style={{'marginTop': '50px', 'marginBottom': '50px'}}>
                As a final note, feel free to check out my CV for more information regarding myself and my experiences!
                <a href='/CV-Jesse-Hantula.pdf' download="jesse-hantula-cv.pdf">
                    <br /> Download Jesse Hantula's CV (pdf)
                </a>
                <p><em style={{'fontSize': '12px'}}>CV last updated: 11th Jan, 2024</em></p>
            </div>
        </div>
    )
}

export default AdditionalInfo