import React, { FC } from "react";
import classes from "./styles.module.scss";
import { X } from "lucide-react";

interface IProps {
    children: React.ReactNode;
    onClose: () => void;
    isOpen: boolean;
}

const Modal: FC<IProps> = ({ children, onClose, isOpen }) => {
    if (!isOpen) return null;

    return (
        <div className={classes.modal}>
            <div className={classes.modal__overlay} onClick={onClose}></div>
            <div className={classes.modal__content}>
                <X className={classes.modal__close} onClick={onClose} />
                {children}
            </div>
        </div>
    );
};

export default Modal;
