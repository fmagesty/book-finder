import React, { useEffect, useState } from "react";
import { Card, CardTitle, CardImg, CardBody, Button, Modal } from "reactstrap";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";

const BookCard = ({ thumbnail, title, description, publishedDate, id }) => {
  // Hooks
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [favorites, setFavorites] = useState([]);
  const getArray = JSON.parse(localStorage.getItem("favorites") || 0);

  useEffect(() => {
    if (getArray !== 0) {
      setFavorites([...getArray]);
    }
  }, []);

  // HANDLE FAVORITOS
  const addFavorite = (props) => {
    let array = favorites;
    let addArray = true;
    array.map((item, key) => {
      if (item === props.id) {
        array.splice(key, 1);
        addArray = false;
      }
      return null;
    });
    if (addArray) {
      array.push(props.id);
    }
    setFavorites([...array]);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    let storage = localStorage.getItem(props.id);
    if (storage === null) {
      localStorage.setItem(props.id, [
        props.title,
        props.thumbnail,
        props.description,
        props.publishedDate,
        props.id,
      ]);
    } else {
      localStorage.removeItem(props.id);
    }
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
        {favorites.includes(id) ? (
          <IoIosHeart
            size={30}
            onClick={() => addFavorite({ title, id })}
            style={{ marginLeft: "3rem", color: "red" }}
          />
        ) : (
          <IoIosHeartEmpty
            size={30}
            onClick={() =>
              addFavorite({ title, id, thumbnail, description, publishedDate })
            }
            style={{
              marginLeft: "3rem",
              color: "red",
            }}
          />
        )}
      </CardBody>
      <Modal isOpen={modal} toggle={toggle}>
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
