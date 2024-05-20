import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

export default function ControleDeTamanho(props) {
    return (
        <div className="container-controls">
            <h3 id={props.id}>{props.content}</h3>

            <div id="buttons">

                <button id={props.idBotao1} onClick={() => {
                    if(props.counter > '1')
                    props.setCounter(props.counter - 1)
                    }}><FaArrowDown /></button>

                <p id={props.idCounter}>{props.counter}</p>

                <button id={props.idBotao2} onClick={() => {
                    if(props.counter <= '59')
                    props.setCounter(props.counter + 1)
                    }}><FaArrowUp /></button>
                
            </div>
        </div>
    )
}