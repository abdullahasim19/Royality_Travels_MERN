import React, { useState } from 'react';

import Card from '../UIElements/Card';
import Button from '../FormElements/Button';
import Modal from 'react-bootstrap/Modal'
import './PlaceItem.css';

const PlaceItem = props => {


  const [showConfirmModal, setShowConfirmModal] = useState(false);

 
  const showBookingWarningHandler = () => {
    setShowConfirmModal(true);
  };

  const cancelBookingHandler = () => {
    setShowConfirmModal(false);
  };

  const confirmBookingHandler = () => {
    setShowConfirmModal(false);
    //booking logic here
  };

  return (
    <React.Fragment>
   
      <Modal
        show={showConfirmModal}
        onHide={cancelBookingHandler}
      >
      <Modal.Header closeButton>
          <Modal.Title>Are you Sure?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          Do you want to proceed to booking page?
      </Modal.Body>
      <Modal.Footer>
        <Button inverse onClick={cancelBookingHandler}>
              Cancel
        </Button>
        <Button danger onClick={confirmBookingHandler}>
              Book
        </Button>
      </Modal.Footer>
        
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
          <Button danger onClick={showBookingWarningHandler}>
              Book Trip
          </Button>
          <Button>Add to Wishlist</Button>
            
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
