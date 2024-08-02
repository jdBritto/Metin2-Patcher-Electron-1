import { FunctionComponent, useContext } from 'react'
import { getI18n, useTranslation } from 'react-i18next'

import '../css/flag-icon.css'
import { Context } from '../reducer/Store'
import { discordUrl, enableDiscordButton } from '../config'

const { ipcRenderer } = window.require('electron')

const Buttons: FunctionComponent = () => {
    // @ts-ignore
    const { state } = useContext(Context)
    const { t } = useTranslation()

    const launchConfig = () => ipcRenderer.send('launchConfig')
    const launchClient = () => ipcRenderer.send('launchClient')
    const launchDiscord = () => ipcRenderer.send('launchUrl', { url: discordUrl })
    const changeLanguage = (lang: string) => {
        getI18n().changeLanguage(lang)
        ipcRenderer.send('languageChange', {
            language: lang
        })
    }
    // const startImagePath = '/resources/start.png'
    // const startHoverImagePath = '/resources/start_hover.png'
    // const configImagePath = '/resources/config.png'
    // const configHoverImagePath = '/resources/config_hover.png'
    // const discordImagePath = '/resources/discord.png'
    // const discordHoverImagePath = '/resources/discord_hover.png'
    // const [isHovered1, setIsHovered1] = useState(false)
    // const [isHovered2, setIsHovered2] = useState(false)
    // const [isHovered3, setIsHovered3] = useState(false)

    // const handleMouseEnter1 = () => {
    //     setIsHovered1(true)
    // }

    // const handleMouseLeave1 = () => {
    //     setIsHovered1(false)
    // }

    // const handleMouseEnter2 = () => {
    //     setIsHovered2(true)
    // }

    // const handleMouseLeave2 = () => {
    //     setIsHovered2(false)
    // }

    // const handleMouseEnter3 = () => {
    //     setIsHovered3(true)
    // }

    // const handleMouseLeave3 = () => {
    //     setIsHovered3(false)
    // }
    return (
        <div className='relative flex items-center mb-2'>
            <div className='absolute bottom-20 left-80'>
                <span
                    aria-hidden='true'
                    className='flags flag-icon flag-icon-gb mr-3 text-white px-4 py-2 rounded mb-1 ease-linear transition-all duration-150'
                    style={{ width: '32px', height: '32px' }}
                    onClick={() => changeLanguage('en')}
                />
                <span
                    aria-hidden='true'
                    className='flags flag-icon flag-icon-es mr-3 text-white px-4 py-2 rounded mb-1 ease-linear transition-all duration-150'
                    style={{ width: '32px', height: '32px' }}
                    onClick={() => changeLanguage('es')}
                />
            </div>
            <div className='absolute bottom-40 -right-6 flex flex-col gap-4'>
                {
                    enableDiscordButton && (
                        <button
                            className='boton-discord focus:outline-none transition-all duration-150 mr-1 text-white'
                            type='button'
                            onClick={launchDiscord}
                            style={{
                                width: '57px',
                                height: '66px',
                            }}
                        >
                            {t('discord')}
                        </button>
                    )
                }
                <button
                    className='boton-config focus:outline-none transition-all duration-150 mr-1 text-white'
                    type='button'
                    onClick={launchConfig}
                    disabled={state.completed !== 100}
                    style={{
                        width: '66px',
                        height: '66px',
                    }}
                >
                    {t('settings')}
                </button>
            </div>
            <div className='absolute right-20 bottom-20 md:mx-auto'>
                <button
                    className='boton-start focus:outline-none transition-all duration-150 mr-1'
                    type='button'
                    style={{
                        width: '150px',
                        height: '45px',
                    }}
                    onClick={launchClient}
                    disabled={state.completed !== 100}
                >
                    {t('play')}
                </button>
            </div>
        </div>
    )
}
export default Buttons
