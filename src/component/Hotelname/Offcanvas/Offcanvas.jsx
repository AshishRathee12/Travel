import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './offcanvas.css'
import { Col, Container, Row } from 'react-bootstrap';

const options = [
    {
        name: '+26 images',
        scroll: false,
        backdrop: true,
    },
];

function OffCanvasExample({ name, image, title, ...props }) {
    const [show, setShow] = useState(false);
    // console.log(image)
    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);

    return (
        <>
            <Button onClick={toggleShow} className="me-2">
                {name}
            </Button>
            <Offcanvas show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton className=''>
                    <Offcanvas.Title className='me-auto'>{title}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="images-container">
                        <Container>
                            <Row className='g-2'>
                                {image.map((elem, index) => {
                                    return (
                                        <Col md={3} className='' key={index}>
                                            <div className="small-image show-image">
                                                <img src={elem.image.url} alt="" className='img-fluid show-images-1' />
                                            </div>
                                        </Col>
                                    )
                                })}
                            </Row>
                        </Container>
                    </div>
                </Offcanvas.Body>
            </Offcanvas >
        </>
    );
}

export default function Example({ images, name }) {
    // console.log(images)
    return (
        <>
            {options.map((props, idx) => (
                <OffCanvasExample key={idx} image={images} {...props} title={name} />
            ))}
        </>
    );
}

