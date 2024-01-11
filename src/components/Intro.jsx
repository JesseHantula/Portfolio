import '../App.css'
import aboutMeText from '../assets/text/aboutMeText'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'

const Intro = () => {
    const skillsArray = aboutMeText.skills

    const createTableRows = () => {
        const rows = []
        const numberOfColumns = 2
    
        for (let i = 0; i < skillsArray.length; i += numberOfColumns) {
          const row = skillsArray.slice(i, i + numberOfColumns)
          rows.push(
            <tr key={i}>
              {row.map((skill, index) => (
                <td key={index}>{skill}</td>
              ))}
            </tr>
          )
        }
    
        return rows
      }

    return (
        <Container id='about-section'>
            <h1>About me</h1>
                 <hr style={{ border: '3px solid #888', width: '100%', margin: '20px 0' }} />
            <Row>
                <Col md={6}>
                    <h2>A short introduction</h2>
                    <div className="image-container">
                    <img src='/jesse.jpeg' height='400px' /> <img src='/jesse2.jpeg' height='400px' />
                    </div>
                    <p style={{ fontSize: '18px', textAlign: 'left', marginTop: '20px' }}>{aboutMeText.message}</p>
                </Col>
                <Col md={6}>
                    <h2 style={{marginBottom: '25px'}}>Skills</h2>
                        <Table striped bordered responsive="sm" style={{marginLeft: '120px', width: '60%'}}>
                            <tbody>{createTableRows()}</tbody>
                        </Table>
                    <h2 style={{marginTop: '30px', marginBottom: '20px'}}>Fields of interest</h2>
                    <ul>
                        {aboutMeText.interests.map((interest, index) => (
                            <li className="interest" key={index} style={{marginLeft: '50px', width: '80%'}}>{interest}</li>
                        ))}
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default Intro