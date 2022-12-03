import React from 'react'
import html from '../images/html.jpg'

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const Card1 = (props) => {
    return (
        <>

            <div className='col-md-4 col-10 mx-auto'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={props.img} />
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>
                            This course will give you complete overview
                            and help you to gain good understanding of module
                        </Card.Text>

                    </Card.Body>
                </Card>

            </div>
        </>

    )
}

export default Card1