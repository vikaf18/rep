import { useContext, useEffect, useRef } from "react";
import { CartContext, ModalContext } from "../../pages/Root";
import RequestPage from "../../pages/RequestPage";

const CartButton = () => {
    const { isModalActive, toggleModal } = useContext(ModalContext);
    const overlayRef = useRef();

    const closeModal = (event) => {
        if (event.target === overlayRef.current) {
            toggleModal();
        }
    }

    useEffect(() => {
        if (isModalActive) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => document.body.style.overflow = "";
    }, [isModalActive]);

    return (
        <div
            ref={overlayRef}
            onClick={(e) => closeModal(e)}
            className={`${isModalActive ? "overlay active" : "overlay"}`}
        >
            <div className="modal">

            <RequestPage />

            </div>
        </div>
    )
}

export default CartButton;