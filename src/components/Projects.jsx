import projectsText from '../assets/text/projectsText'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Column from 'react-bootstrap/Col'

const Projects = () => {
    const Project = ( {project} ) => (
        <Container>
            <Row>
                <Column md={6}>
                    <h2> {project.name}</h2>
                    <img src={`/${project.image}`} alt={project.image} height='300'/><br />
                    <div style={{textAlign: 'left', marginTop: '5px', marginLeft: '60px'}}>
                        <strong>Created using:</strong> {project.tools.map((tool, index, array) => (
                            <React.Fragment key={index}>
                                {tool}
                                {index !== array.length - 1 && ', '}
                            </React.Fragment>
                        ))} <br />
                        <strong>Areas of focus:</strong> {project.fields.map((field, index, array) => (
                            <React.Fragment key={index}>
                                {field}
                                {index !== array.length - 1 && ', '}
                            </React.Fragment>
                        ))} <br />
                        <div style={{'marginBottom': '50px'}}>
                        <strong>Made:</strong> {project.date} <br />
                        </div>
                    </div>
                </Column>
                <Column md={6}>
                    <div style={{'textAlign': 'left', 'marginTop': '50px'}}>
                        <h3>About the project: </h3>
                        &nbsp; &nbsp; &nbsp; &nbsp;{project.description} <br />
                        <h3 style={{marginTop: '50px'}}>Check out the project here:
                            <a href={project.link} target="_blank" rel="tag"> {project.name}</a> 
                        </h3>
                    </div>
                </Column>
                <hr style={{ border: '1px solid #888', width: '100%', margin: '20px 0' }} />

            </Row>
        </Container>
    )

    const projectArray = Object.values(projectsText)

    return (
        <div id='projects-section'>
            <h1 style={{marginBottom: '25px', marginTop: '50px'}}>Projects</h1>
            <hr style={{ border: '3px solid #888', width: '100%', margin: '20px 0' }} />
            {projectArray.map(project => 
                <Project key={project.name} project={project} />)}
        </div>
    )
}

export default Projects