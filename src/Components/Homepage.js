import React, { useState } from "react";
import {
  InputGroup,
  Input,
  InputGroupAddon,
  Button,
  Spinner,
  FormGroup,
} from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import BookCard from "../Components/BookCard";
import bg from "../Assets/bg.jpg";
import noCover from "../Assets/noCover.png";
import { BrowserRouter as Link } from "react-router-dom";

function Homepage() {
  //  HOOKS
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);
  // HANDLES SEARCH IF ENTER IS PRESSED
  const handleEnter = (e) => {
    if (e.charCode === 13) {
      handleSubmit();
    }
  };
  // SEARCH BOOKS
  const handleSubmit = async () => {
    setLoading(true);
    let response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${input}&maxResults=40`
    );
    const responseBody = await response.json();
    console.log(responseBody);
    if (!responseBody.items) {
      toast.error(
        "Não foram encontrados livros com este título. Por favor tente novamente com outro título."
      );
    } else {
      //
      if (responseBody.items.length > 0) {
        setLoading(false);
        setCards(responseBody.items);
      }
    }
  };
  const handleNextPage = async (props) => {
    let index = props;
    console.log(index);
    setLoading(true);
    let response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${input}&maxResults=40&startIndex=${index}`
    );
    const responseBody = await response.json();
    console.log(responseBody);
    if (!responseBody.items) {
      toast.error(
        "Não foram encontrados livros com este título. Por favor tente novamente com outro título."
      );
    } else {
      //
      if (responseBody.items.length > 0) {
        setLoading(false);
        setCards(responseBody.items);
      }
    }
  };
  // HEADER
  const mainHeader = () => {
    return (
      <div
        className="main-image d-flex justify-content-center align-items-center flex-column"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h1
          className="display-2 text-center text-white mb-3"
          style={{ zIndex: 2 }}
        >
          Encontre seu livro
        </h1>
        <div style={{ width: "60%", zIndex: 2 }}>
          <InputGroup size="lg" className="mb-3">
            <Input
              placeholder="Digite o título do livro"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="input"
              onKeyPress={handleEnter}
            />
            <InputGroupAddon addonType="append">
              <Button color="secondary" onClick={handleSubmit}>
                <i className="fas fa-search"></i>
              </Button>
            </InputGroupAddon>
          </InputGroup>
          <div className="btns d-flex text-white justify-content-center">
            <FormGroup>
              <Button>
                <Link to="/home">Homepage</Link>
              </Button>
            </FormGroup>
            <FormGroup className="ml-5">
              <Button>
                <Link to="/favoritos">Favoritos</Link>
              </Button>
            </FormGroup>
          </div>
        </div>
      </div>
    );
  };
  // RENDER BOOKCARDS
  const handleCards = () => {
    if (loading) {
      return (
        <div className="d-flex justify-content-center mt-3">
          <Spinner style={{ width: "3rem", height: "3rem" }} />
        </div>
      );
    } else {
      const books = cards.map((book, i) => {
        let cover = noCover;
        if (book.volumeInfo.imageLinks) {
          cover = book.volumeInfo.imageLinks.thumbnail;
        }

        return (
          <div className="col-lg-4 mb-3" key={book.id}>
            <BookCard
              thumbnail={cover}
              title={book.volumeInfo.title}
              description={book.volumeInfo.description}
              publishedDate={book.volumeInfo.publishedDate}
            />
          </div>
        );
      });
      return (
        <div className="container my-5">
          <div className="row">{books}</div>
          <Button onClick={() => handleNextPage(40)}>Próxima página</Button>
        </div>
      );
    }
  };

  return (
    <div className="w-100 h-100">
      {mainHeader()}
      {handleCards()}
      <ToastContainer />
    </div>
  );
}

export default Homepage;
