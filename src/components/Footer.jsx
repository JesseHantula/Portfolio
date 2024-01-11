import '../App.css'

const Footer = () => {
    return (
        <div id='extra-section' style={{ background: '#f8f8f8', padding: '10px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', marginTop: '20px' }}>
            <hr style={{borderTop: '1px solid #000', marginTop: '10px'}} />
            <h6 style={{marginTop: '10px'}}>This portfolio was made using the React library</h6> 
            <h6 style={{marginTop: '10px'}}>Created by Jesse Hantula</h6>
        </div>
    )
}

export default Footer