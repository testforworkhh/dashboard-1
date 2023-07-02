import React, { FC } from 'react'
import Rodal from 'rodal'
import "rodal/lib/rodal.css";
import css from './index.module.scss'

type Props = {
    visible: boolean
    onClose: () => void
    handleCardAdd: (title: string, detail: string) => void
}
const AddCardModal: FC<Props> = ({visible, onClose, handleCardAdd}) => {
    const customStyles = {
        background: "rgb(58 58 58)",
        padding: "20px",
        width: "50%",
        top: "-3rem",
        height: "fit-content",
        maxWidth: "40rem"

    }
    const [title, setTitle] = React.useState('')
    const [detail, setDetail] = React.useState('')

    return (
        <Rodal customStyles={customStyles} visible={visible} onClose={onClose}>
            <div className={css.container}>
                <div>
                    <span className={css.label}>Card Title</span>
                    <input
                        className={css.input}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                    />
                </div>
                <div>
                    <span className={css.label}>Detail</span>
                    <textarea
                        className={css.input}
                        value={detail}
                        onChange={(e) => setDetail(e.target.value)}
                        rows={10}
                    />
                </div>
                <button
                    disabled={title === "" && detail === ""}
                    className={css.saveButton}
                    onClick={() => {
                        handleCardAdd(title, detail)
                        setDetail("")
                        setTitle("")
                    }}
                >
                    Add
                </button>
            </div>
        </Rodal>
    )
}

export default AddCardModal