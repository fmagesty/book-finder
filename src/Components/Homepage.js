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

function Homepage() {
  //  HOOKS
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);
  const [index, setIndex] = useState(0);

  // Set favoritos
  // for (var i = 0; i < localStorage.length; i++) {
  //   console.log(window.localStorage.getItem(localStorage.key(i)));
  // }
  // localStorage.getItem(book.volumeInfo.title) === book.title;

  // HANDLES SEARCH IF ENTER IS PRESSED
  const handleEnter = (e) => {
    if (e.charCode === 13) {
      handleSubmit();
    }
  };

  const showFavoritos = () => {
    const books = cards.filter((book) => {
      let bookMap = cards.map(
        (book) => localStorage.getItem(book.volumeInfo.title) === book.id
      );
      console.log(bookMap);
      let cover = noCover;
      if (book.volumeInfo.imageLinks) {
        cover = book.volumeInfo.imageLinks.thumbnail;
      }
      if (!bookMap) {
        return (
          <div className="col-lg-4 mb-3" key={book.id}>
            <BookCard
              thumbnail={cover}
              title={book.volumeInfo.title}
              description={book.volumeInfo.description}
              publishedDate={book.volumeInfo.publishedDate}
              id={book.id}
            />
          </div>
        );
      }
    });
    return (
      <div className="container my-5">
        <div className="row">{books}</div>
      </div>
    );
  };

  const fetchAPIData = async () => {
    let apiData = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${input}&maxResults=40&startIndex=0`
    );
    const responseBody = await apiData.json();
    if (!responseBody.items) {
      toast.error(
        "Não foram encontrados livros com este título. Por favor tente novamente com outro título."
      );
    }
    return responseBody;
  };
  // SEARCH BOOKS
  const handleSubmit = async () => {
    setLoading(true);
    const response = await fetchAPIData();
    setLoading(false);
    setCards(response.items);
  };

  const handleNextPage = async () => {
    setLoading(true);
    let response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${input}&maxResults=40&startIndex=${index}`
    );
    // TOTAL ITEMS SHOULD BE THE LAST INDEX OF CARDS RENDERED
    setIndex((previndex) => previndex + 40);
    const responseBody = await response.json();
    if (responseBody.totalItems === 0) {
      toast.error(
        "Não existem mais livros com este título. Por favor tente novamente com outro título."
      );
    }
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
              <Button color="primary">Homepage</Button>
            </FormGroup>
            <FormGroup className="ml-5">
              <Button color="warning" onClick={showFavoritos}>
                Favoritos
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
      const books = cards.map((book) => {
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
              id={book.id}
            />
          </div>
        );
      });
      return (
        <div className="container my-5">
          <div className="row">{books}</div>
          <Button onClick={() => handleNextPage()}>Próxima página</Button>
        </div>
      );
    }
  };

  return (
    <div className="w-100 h-100">
      {mainHeader()}
      {handleCards()}
      {showFavoritos()}
      <ToastContainer />
    </div>
  );
}

export default Homepage;
