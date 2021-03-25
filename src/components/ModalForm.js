import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import AddCategory from "./masterfile/AddCategory";

function ModalForm({icon, title}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div>
      <div onClick={handleShow}  className="flex">
        {icon} {title}
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        centered
        scrollable
        className="modal hide fade"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddCategory />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Add New Category</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalForm;
