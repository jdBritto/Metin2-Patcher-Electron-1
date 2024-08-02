import { FunctionComponent } from 'react'

import { serverName } from '../config'

const { ipcRenderer } = window.require('electron')

const Titlebar: FunctionComponent = () => {
    const minimize = () => ipcRenderer.send('minimize')
    const quit = () => ipcRenderer.send('close')

    return (
        <header className='w-screen titlebar'>
            <div className='controls mb-4'>
                <p className='deloth title md:mt-20 sm:pl-60 focus:outline-none bounce-animation'>{serverName}</p>
                <button
                    type='button'
                    onClick={minimize}
                    id='minimize'
                    style={{
                        width: '25px',
                        height: '25px'
                    }}
                >
                    {}
                </button>
                <button
                    type='button'
                    onClick={quit}
                    id='close'
                    style={{
                        width: '35px',
                        height: '35px'
                    }}
                >
                    {}
                </button>
            </div>
        </header>
    )
}
export default Titlebar
