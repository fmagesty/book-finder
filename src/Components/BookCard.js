import React, { useState } from "react";
import { Card, CardTitle, CardImg, CardBody, Button, Modal } from "reactstrap";
const BookCard = ({ thumbnail, title, description, publishedDate }) => {
  // Hooks
  const [modal, setModal] = useState(false);
  const [favoritos, setFavoritos] = useState(false);
  const toggle = () => setModal(!modal);

  // HANDLE FAVORITOS
  const handleFavoritos = () => {
    console.log("adicionado aos favoritos");
    setFavoritos(true);
  };

  return (
    <Card style={{ width: "233px" }} className="m-auto ">
      <CardImg
        top
        style={{ width: "100%", height: "233px" }}
        src={thumbnail}
        alt={title}
      />
      <CardBody>
        <CardTitle className="card-title">{title}</CardTitle>
        <Button onClick={toggle}>Detalhes</Button>
        <Button
          onClick={handleFavoritos}
          style={{
            backgroundColor: "yellow",
            color: "black",
            marginLeft: "0.5rem",
          }}
        >
          +Favoritos
        </Button>
      </CardBody>
      <Modal isOpen={modal} toggle={toggle} addFavoritos={favoritos}>
        <div className="modal-header d-flex justify-content-center">
          <h5 className="modal-title text-center" id="exampleModalLabel">
            {title}
          </h5>
          <button
            aria-label="Close"
            className="close"
            type="button"
            onClick={toggle}
          >
            <span aria-hidden={true}>x</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="d-flex justify-content-between ml-3">
            <img src={thumbnail} alt={title} style={{ height: "233px" }} />
            <div>
              <p>
                <strong>Data de publicação:</strong> <br />
                {publishedDate}
              </p>
            </div>
          </div>
          <div className="mt-3">
            <strong>Descrição:</strong> <br />
            {description}
          </div>
        </div>
      </Modal>
    </Card>
  );
};

export default BookCard;
