import React from 'react';
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import { useState, useEffect } from "react";
// import {MyLoader} from './components/loader/Loader';
import {fetchGallery} from './Api';
import Button from './components/button/Button';
import ImageGallery from './components/imageGallery/ImageGallery';
import Modal from './components/modal/Modal';
import Searchbar from './components/searchbar/Searchbar';

const apiDelay = 2000;

export default function App() {
    const [inputQuerry, setInputQuerry] = useState("");
    const [page, setPage] = useState(1);
    const [status, setStatus] = useState("idle");
    const [gallery, setGallery] = useState([]);
    const [modalImg, setModalImg] = useState(null);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        if (!inputQuerry) {
            return;
        }
        setStatus("pending");
        fetchGallery(inputQuerry, page)
            .then((data) => data.hits)
            .then((response) => {
                if (response.length === 0) {
                    Notify.failure("Sorry, we couldn't find any matches", {
                        position: "center-center",
                        fontSize: "24px",
                        timeout: 2500,
                        width: "30%",
                    });
                    setStatus("idle");
                    Loading.remove();
                } else {
                    setGallery((prevState) => [...prevState, ...response]);
                    setStatus("resolved");
                }
            });
    }, [page, inputQuerry]);

    const onSubmitForm = (inputQuerry) => {
        setInputQuerry(inputQuerry);
        setGallery([]);
        setPage(1);
    };

    const buttonLoadMore = () => {
        setPage(page + 1);
    };
    const FindmodalImg = (id, img, tags) => {
        setModalImg({ id, img, tags });
    };

    const toggleModal = () => {
        setModal(!modal);
    };

    return (
        <>
            <Searchbar onSubmit={onSubmitForm}></Searchbar>
            {status === "pending" && Loading.pulse()}
            {status === "resolved" && Loading.remove(apiDelay)}
            <ImageGallery
                response={gallery}
                toggleModal={toggleModal}
                onImageClick={FindmodalImg}
            />
                
                {status === "resolved" && <Button onClick={buttonLoadMore}></Button>}
                
                {modal && <Modal closeModal={toggleModal} modalImg={modalImg} />}
            
        </>
    );
}