import React, { Component } from "react";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import API from "./servises/images-api";
import Button from "./components/Button";
import Modal from "./components/Modal";
import Container from "./components/Container";
import Loader from "./components/Loader";
import ImageGalleryError from "./components/ImageGalleryError";

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

class App extends Component {
  state = {
    searchQuery: "",
    images: [],
    error: null,
    status: Status.IDLE,
    page: 1,
    showModal: false,
    imgModal: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    const prevPage = prevState.page;
    const nextPage = this.state.page;
    if (prevQuery !== nextQuery || prevPage !== nextPage) {
      this.setState({ status: Status.PENDING });

      API.fechAxiosImg(nextQuery, this.state.page)
        .then((hits) => {
          if (hits.length === 0) {
            this.setState({
              error: { message: `No pictures with the name ${nextQuery}` },
              status: Status.REJECTED,
            });
            return;
          }
          this.setState(({ images, status }) => ({
            images: [...images, ...hits],
            status: Status.RESOLVED,
          }));
        })
        .catch((error) =>
          this.setState({
            error: { message: "ERROR" },
            status: Status.REJECTED,
          })
        );
    }
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  hendleFormSubmit = (query) => {
    // this.setState({ searchQuery: query, images: [], page: 1 });
    this.setState((prevState) => {
      if (prevState.searchQuery === query) {
        return {
          searchQuery: query,
          images: prevState.images,
          page: prevState.page,
        };
      }
      return {
        searchQuery: query,
        images: [],
        page: 1,
      };
    });
  };

  onButtonClick = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  toggleModal = () => {
    this.setState((prevState) => ({ showModal: !prevState.showModal }));
  };

  setImgModal = (img, alt) => {
    this.setState({ imgModal: { img: img, alt: alt } });
  };

  render() {
    const { images, status, showModal, imgModal, error } = this.state;

    return (
      <Container>
        <Searchbar onSubmit={this.hendleFormSubmit} />
        {status === Status.PENDING && (
          <>
            <ImageGallery imgList={images} />
            <Loader />
          </>
        )}
        {status === Status.RESOLVED && (
          <>
            <ImageGallery
              onToggleModal={this.toggleModal}
              onSetImgModal={this.setImgModal}
              imgList={images}
            />
            <Button
              type="bunnon"
              onClick={this.onButtonClick}
              text="Load more..."
            />
            {showModal && (
              <Modal onClose={this.toggleModal} imgModal={imgModal} />
            )}
          </>
        )}
        {status === Status.REJECTED && (
          <ImageGalleryError message={error.message} />
        )}
      </Container>
    );
  }
}

export default App;
