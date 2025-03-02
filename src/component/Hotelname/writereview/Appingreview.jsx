import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import './review.css'





function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Enter your booking details
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="review-form">
                    <form>
                        <div className="booking-nbr mb-3">
                            <p className='m-0 book-title mb-2'>Booking Number</p>
                            <input type="text" />
                        </div>
                        <div className="pin-nbr">
                            <p className='m-0 book-title mb-2'>PIN</p>
                            <input type="text" />
                        </div>
                    </form>
                    <div className="send-btn">
                        <button>Rate your stay</button>
                    </div>
                </div>
                <div className="suggestion mt-4">
                    <p className='m-0'>Only a customer who has booked through Booking.com and stayed at the property in question can write a review. This lets us know that our reviews come from real guests, like you.</p>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default function Appingreview() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button variant="outline-primary"  onClick={() => setModalShow(true)}>
                Write a Review
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}






