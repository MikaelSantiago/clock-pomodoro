import { useEffect, useState } from "react";
import ControleDeTamanho from "./ControleDeTamanho";
import { HiMiniPlayPause } from "react-icons/hi2";
import { FiRefreshCw } from "react-icons/fi";
import '../style.css'

export default function Relogio() {
    const [stop, setStop] = useState(true)
    const [contador, setContador] = useState(null)
    const [counterBreak, setCounterBreak] = useState(5)
    const [counterSession, setCounterSession] = useState(25)
    const [cronometro, setCronometro] = useState('25:00')
    const [clockName, setClockName] = useState('Session')
    let audio = document.getElementById('beep')
    let statusTimeClock = true
      
    useEffect(() => {
        if(counterSession < 10) {
            setCronometro('0' + counterSession + ':' + '00')
        } else {
            setCronometro(counterSession + ':' + '00')
        }
    }, [counterSession])

    const displayTime = (minutos, segundos) => {
        if(minutos < '10') {
            setCronometro('0' + minutos + ':' + segundos)
        } else {
            setCronometro(minutos + ':' + segundos)
        }
    }
    
    const iniciaEPausaRelogio = () => {
        let minutos = cronometro.substring(0, 2)
        let segundos = cronometro.substring(3, 5)
        
        if (stop === true) {
            console.log(minutos)
            setStop(false)
            setContador(
                setInterval(() => {
                    if(minutos == '0'  && segundos == '00') {
                        audio.play()

                        if(statusTimeClock === true) {
                            statusTimeClock = false
                            minutos = counterBreak
                            segundos = '00'
                            setClockName('Break')
                        } else {
                            statusTimeClock = true
                            minutos = counterSession
                            segundos = '00'
                            setClockName('Session')
                        }
                    } else {
                        console.log(statusTimeClock)
                        if(segundos === '00') {
                            if(minutos !== '00') {
                                minutos = minutos - '1'
                                segundos = '59'
                            }
                        }
                        else if(segundos <= '10') {
                            let aux = segundos - '1'
                            segundos = '0' + aux
                        } else {
                            segundos = segundos - '1'
                        }
                    }
                    displayTime(minutos, segundos)
                }, 1000)
            )
        } else {
            setStop(true)
            clearInterval(contador)
            setCronometro(minutos + ':' + segundos)
        }
    }

    const zeraRelogio = () => {
        clearInterval(contador)
        setStop(true)
        setCronometro('25:00')
        setCounterBreak(5)
        setCounterSession(25)
        setClockName('Session')
        statusTimeClock = true
        audio.pause()
        audio.currentTime = 0
    }
    return (
        <div className="container">
            <h1>25 + 5 Clock</h1>
            <div id='controls'>

                <ControleDeTamanho id={'break-label'} content={'Break Length'} idBotao1={'break-decrement'} idBotao2={'break-increment'} idCounter={'break-length'} counter={counterBreak} setCounter={setCounterBreak}/>
                <ControleDeTamanho id={'session-label'} content={'Session Length'} idBotao1={'session-decrement'} idBotao2={'session-increment'} idCounter={'session-length'} counter={counterSession} setCounter={setCounterSession}/>
        
            </div>
            <div>
                <div className="container-clock">
                    <h4 id="timer-label">{clockName}</h4>
                    <div id="time-left">{cronometro}</div>
                </div>

                <div id="playAndReset">
                    <button id="start_stop" onClick={iniciaEPausaRelogio}><HiMiniPlayPause /></button>
                    <button id="reset" onClick={zeraRelogio}><FiRefreshCw /></button>
                </div>

            </div>
        </div>
    )
}