export default function Botao(props) {
    /*let contador = null
    const iniciaEParaRelogio = () => {
        if(props.name === 'Play and Pause') {
            let minutos = props.cronometro.substring(0, 2)
            let segundos = props.cronometro.substring(3, 5)
            console.log(props.stop)
            
            if (props.stop === true) {
                props.setStop(false)
                props.setContador (
                    setInterval(() => {
                        if(segundos === '00') {
                            if(minutos !== '00') {
                                minutos = minutos - 1
                                segundos = '59'
                            }
                        }
                        else if(segundos <= '10') {
                            let aux = segundos - 1
                            segundos = '0' + aux
                        }
                        else {
                            segundos = segundos - 1
                        }
                        props.setCronometro(minutos + ':' + segundos)
                    }, 1000)
                )
            } else {
                props.setStop(true)
                clearInterval(contador)
                props.setCronometro(minutos + ':' + segundos)
            }
        }
    }*/
    return (
        <button id={props.id} onClick={iniciaEParaRelogio}>{props.name}</button>
    )
}