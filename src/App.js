import React, {Component} from 'react';
import {MyLoader} from './components/loader/Loader';
import {getImagesWithDelay} from './Api';
import Button from './components/button/Button';
import ImageGallery from './components/imageGallery/ImageGallery';
import Modal from './components/modal/Modal';
import Searchbar from './components/searchbar/Searchbar';

const apiDelay = 2000;

class App extends Component {
    state = {
        pageNum: 1,
        searchTerm: '',
        images: [],
        modalLargeURL: '',
        showLoader: false
    };

    componentDidUpdate = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    };

    onSearchSubmit = searchTerm => {
        this.showLoader();

        getImagesWithDelay(searchTerm, 1, apiDelay).then(images =>
            this.setState(
                prevState => ({
                    images: images,
                    pageNum: 1,
                    searchTerm: searchTerm
                }),
                this.hideLoader
            )
            );
    };

    onBtnClick = () => {
        this.showLoader();
        getImagesWithDelay(
            this.state.searchTerm,
            this.state.pageNum + 1,
            apiDelay
        ).then(newImages =>
            this.setState(
                prevState => ({
                    images: [...prevState.images, ...newImages],
                    pageNum: prevState.pageNum + 1
                }),
                this.hideLoader
            )
            );
    };

    onItemClick = largeImageUrl => {
        this.setState({modalLargeURL: largeImageUrl});
    };

    closeModal = () => {
        this.setState({modalLargeURL: ''});
    };

    showLoader = () => {
        this.setState(prevState =>
            prevState.showLoader ? null : {showLoader: true}
        );
    };

    hideLoader = () => {
        this.setState(prevState =>
            prevState.showLoader ? {showLoader: false} : null
        );
    };

    render() {
        return (
            <>
                <Searchbar onSubmit={this.onSearchSubmit}></Searchbar>
                    {this.state.images.length > 0 && (
                        <ImageGallery
                        images={this.state.images}
                        onItemClick={this.onItemClick}
                        ></ImageGallery>
                    )}
                    {this.state.images.length > 0 && (
                        <Button onClick={this.onBtnClick}></Button>
                    )}
                    {this.state.modalLargeURL && (
                        <Modal
                            largeImageURL={this.state.modalLargeURL}
                            closeModal={this.closeModal}
                        ></Modal>
                    )}
                    {this.state.showLoader && <MyLoader></MyLoader>}
                
            </>
        );
    }
}

export default App;