import { useNavigate } from 'react-router-dom'
// import './App.css'
import './style.css';
import React, { useRef, useState, useEffect } from 'react'
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition'

function Dashboard() {
  const inputRef = useRef(null)
  const navigate = useNavigate()
  const [fileList, setFileList] = useState([])
  const [statename, setName] = useState({
    input_message: '',
  })

  useEffect(() => {
    attemptPlay()
  }, [])
  const inputmessage = (e) => {
    e.preventDefault()
    navigate('/inputchat')
  }
  const inputmessagechange = (e) => {
    const value = e.target.value
    const name = e.target.name
    setName({ ...statename, [name]: value })
  }
  const commands = [
    {
      command: 'open *',
      callback: (website) => {
        window.open('http://' + website.split(' ').join(''))
      },
    },
    {
      command: 'change background colour to *',
      callback: (color) => {
        document.body.style.background = color
      },
    },
    {
      command: 'reset',
      callback: () => {
        handleReset()
      },
    },
    ,
    {
      command: 'reset background colour',
      callback: () => {
        document.body.style.background = `rgba(0, 0, 0, 0.8)`
      },
    },
  ]
  const { transcript, resetTranscript } = useSpeechRecognition({ commands })
  const [isListening, setIsListening] = useState(false)
  const microphoneRef = useRef(null)
  const videoEl = useRef(null)
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return (
      <div className="mircophone-container">
        Browser is not Support Speech Recognition.
      </div>
    )
  }
  const sendmessage = (event) => {
    event.preventDefault()
    if (statename.input_message === '' && transcript !== '') {
      console.log(transcript)
    } else {
      console.log(statename)
    }
  }
  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error('Error attempting to play', error)
      })
  }

  const handleListing = () => {
    setIsListening(true)
    microphoneRef.current.classList.add('listening')
    SpeechRecognition.startListening({
      continuous: true,
    })
  }
  const stopHandle = () => {
    setIsListening(false)
    microphoneRef.current.classList.remove('listening')
    SpeechRecognition.stopListening()
  }
  const handleReset = () => {
    stopHandle()
    resetTranscript()
  }
  const Removeitem = (item) => {
    const updatedList = [...fileList]
    updatedList.splice(fileList.indexOf(item), 1)
    setFileList(updatedList)
  }
  const handleClick = () => {
    inputRef.current.click()
  }
  const handleFileChange = (event) => {
    const fileObj = event.target.files && event.target.files[0]
    if (fileObj) {
      const updatedList = [...fileList, fileObj]
      setFileList(updatedList)
      console.log(updatedList)
    }
    if (!fileObj) {
      return
    }

    event.target.value = null
  }
  const formatSizeUnits = (bytes) => {
    if (bytes >= 1073741824) {
      bytes = (bytes / 1073741824).toFixed(2) + ' GB'
    } else if (bytes >= 1048576) {
      bytes = (bytes / 1048576).toFixed(2) + ' MB'
    } else if (bytes >= 1024) {
      bytes = (bytes / 1024).toFixed(2) + ' KB'
    } else if (bytes > 1) {
      bytes = bytes + ' bytes'
    } else if (bytes === 1) {
      bytes = bytes + ' byte'
    } else {
      bytes = '0 bytes'
    }
    return bytes
  }
  return (
    <div className="App">
      <div className="wrap">
        <div className="side-nav">
          <div style={{
          maxHeight:"200px",
          marginBottom:"20px"
        }}>
        <img className='logo-dashboard' src="img/logo.svg" width="100%" />
        </div>
          <div className="w-100 mb-1 d-flex" style={{ gap: '0.5rem' }}>
            <button className="new-chat ">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth={2}
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1={12} y1={5} x2={12} y2={19} />
                <line x1={5} y1={12} x2={19} y2={12} />
              </svg>
              New chat
            </button>
            <button className="sidebar-trigger">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth={2}
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
                <line x1={9} y1={3} x2={9} y2={21} />
              </svg>
            </button>
          </div>
          <div className="recent-chats">
            <h4 className="date-chat">June</h4>
            <div className="chat-li">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={15}
                height={15}
                viewBox="0 0 15 15"
              >
                <path
                  fill="currentColor"
                  d="m11.5 13.5l.157-.475l-.218-.072l-.197.119l.258.428Zm2-2l-.421-.27l-.129.202l.076.226l.474-.158Zm1 2.99l-.157.476a.5.5 0 0 0 .631-.634l-.474.159Zm-3.258-1.418c-.956.575-2.485.919-3.742.919v1c1.385 0 3.106-.37 4.258-1.063l-.516-.856ZM7.5 13.99c-3.59 0-6.5-2.909-6.5-6.496H0a7.498 7.498 0 0 0 7.5 7.496v-1ZM1 7.495A6.498 6.498 0 0 1 7.5 1V0A7.498 7.498 0 0 0 0 7.495h1ZM7.5 1C11.09 1 14 3.908 14 7.495h1A7.498 7.498 0 0 0 7.5 0v1ZM14 7.495c0 1.331-.296 2.758-.921 3.735l.842.54C14.686 10.575 15 8.937 15 7.495h-1Zm-2.657 6.48l3 .99l.314-.949l-3-.99l-.314.949Zm3.631.357l-1-2.99l-.948.316l1 2.991l.948-.317Z"
                />
              </svg>
              <div className="chat-li-txt ">
                <a
                  href="#"
                  onClick={inputmessage}
                  style={{ textDecoration: 'none', color: '#9A9899' }}
                >
                  What is react?
                </a>
              </div>
            </div>
            <div className="chat-li">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={15}
                height={15}
                viewBox="0 0 15 15"
              >
                <path
                  fill="currentColor"
                  d="m11.5 13.5l.157-.475l-.218-.072l-.197.119l.258.428Zm2-2l-.421-.27l-.129.202l.076.226l.474-.158Zm1 2.99l-.157.476a.5.5 0 0 0 .631-.634l-.474.159Zm-3.258-1.418c-.956.575-2.485.919-3.742.919v1c1.385 0 3.106-.37 4.258-1.063l-.516-.856ZM7.5 13.99c-3.59 0-6.5-2.909-6.5-6.496H0a7.498 7.498 0 0 0 7.5 7.496v-1ZM1 7.495A6.498 6.498 0 0 1 7.5 1V0A7.498 7.498 0 0 0 0 7.495h1ZM7.5 1C11.09 1 14 3.908 14 7.495h1A7.498 7.498 0 0 0 7.5 0v1ZM14 7.495c0 1.331-.296 2.758-.921 3.735l.842.54C14.686 10.575 15 8.937 15 7.495h-1Zm-2.657 6.48l3 .99l.314-.949l-3-.99l-.314.949Zm3.631.357l-1-2.99l-.948.316l1 2.991l.948-.317Z"
                />
              </svg>
              <div className="chat-li-txt ">
                <a
                  href="#"
                  onClick={inputmessage}
                  style={{ textDecoration: 'none', color: '#9A9899' }}
                >
                  Why react is faster?
                </a>
              </div>
            </div>
            <div className="chat-li">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={15}
                height={15}
                viewBox="0 0 15 15"
              >
                <path
                  fill="currentColor"
                  d="m11.5 13.5l.157-.475l-.218-.072l-.197.119l.258.428Zm2-2l-.421-.27l-.129.202l.076.226l.474-.158Zm1 2.99l-.157.476a.5.5 0 0 0 .631-.634l-.474.159Zm-3.258-1.418c-.956.575-2.485.919-3.742.919v1c1.385 0 3.106-.37 4.258-1.063l-.516-.856ZM7.5 13.99c-3.59 0-6.5-2.909-6.5-6.496H0a7.498 7.498 0 0 0 7.5 7.496v-1ZM1 7.495A6.498 6.498 0 0 1 7.5 1V0A7.498 7.498 0 0 0 0 7.495h1ZM7.5 1C11.09 1 14 3.908 14 7.495h1A7.498 7.498 0 0 0 7.5 0v1ZM14 7.495c0 1.331-.296 2.758-.921 3.735l.842.54C14.686 10.575 15 8.937 15 7.495h-1Zm-2.657 6.48l3 .99l.314-.949l-3-.99l-.314.949Zm3.631.357l-1-2.99l-.948.316l1 2.991l.948-.317Z"
                />
              </svg>
              <div className="chat-li-txt ">
                <a
                  href="#"
                  onClick={inputmessage}
                  style={{ textDecoration: 'none', color: '#9A9899' }}
                >
                  Diffecrence between active dom and virtual dom?
                </a>
              </div>
            </div>
            <div className="chat-li">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={15}
                height={15}
                viewBox="0 0 15 15"
              >
                <path
                  fill="currentColor"
                  d="m11.5 13.5l.157-.475l-.218-.072l-.197.119l.258.428Zm2-2l-.421-.27l-.129.202l.076.226l.474-.158Zm1 2.99l-.157.476a.5.5 0 0 0 .631-.634l-.474.159Zm-3.258-1.418c-.956.575-2.485.919-3.742.919v1c1.385 0 3.106-.37 4.258-1.063l-.516-.856ZM7.5 13.99c-3.59 0-6.5-2.909-6.5-6.496H0a7.498 7.498 0 0 0 7.5 7.496v-1ZM1 7.495A6.498 6.498 0 0 1 7.5 1V0A7.498 7.498 0 0 0 0 7.495h1ZM7.5 1C11.09 1 14 3.908 14 7.495h1A7.498 7.498 0 0 0 7.5 0v1ZM14 7.495c0 1.331-.296 2.758-.921 3.735l.842.54C14.686 10.575 15 8.937 15 7.495h-1Zm-2.657 6.48l3 .99l.314-.949l-3-.99l-.314.949Zm3.631.357l-1-2.99l-.948.316l1 2.991l.948-.317Z"
                />
              </svg>
              <div className="chat-li-txt ">
                {' '}
                <a
                  href="#"
                  onClick={inputmessage}
                  style={{ textDecoration: 'none', color: '#9A9899' }}
                >
                  Why react is used?
                </a>
              </div>
            </div>
            <div className="chat-li">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={15}
                height={15}
                viewBox="0 0 15 15"
              >
                <path
                  fill="currentColor"
                  d="m11.5 13.5l.157-.475l-.218-.072l-.197.119l.258.428Zm2-2l-.421-.27l-.129.202l.076.226l.474-.158Zm1 2.99l-.157.476a.5.5 0 0 0 .631-.634l-.474.159Zm-3.258-1.418c-.956.575-2.485.919-3.742.919v1c1.385 0 3.106-.37 4.258-1.063l-.516-.856ZM7.5 13.99c-3.59 0-6.5-2.909-6.5-6.496H0a7.498 7.498 0 0 0 7.5 7.496v-1ZM1 7.495A6.498 6.498 0 0 1 7.5 1V0A7.498 7.498 0 0 0 0 7.495h1ZM7.5 1C11.09 1 14 3.908 14 7.495h1A7.498 7.498 0 0 0 7.5 0v1ZM14 7.495c0 1.331-.296 2.758-.921 3.735l.842.54C14.686 10.575 15 8.937 15 7.495h-1Zm-2.657 6.48l3 .99l.314-.949l-3-.99l-.314.949Zm3.631.357l-1-2.99l-.948.316l1 2.991l.948-.317Z"
                />
              </svg>
              <div className="chat-li-txt ">
                {' '}
                <a
                  href="#"
                  onClick={inputmessage}
                  style={{ textDecoration: 'none', color: '#9A9899' }}
                >
                  What is redux?
                </a>
              </div>
            </div>
            <h4 className="date-chat">May</h4>
            <div className="chat-li">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={15}
                height={15}
                viewBox="0 0 15 15"
              >
                <path
                  fill="currentColor"
                  d="m11.5 13.5l.157-.475l-.218-.072l-.197.119l.258.428Zm2-2l-.421-.27l-.129.202l.076.226l.474-.158Zm1 2.99l-.157.476a.5.5 0 0 0 .631-.634l-.474.159Zm-3.258-1.418c-.956.575-2.485.919-3.742.919v1c1.385 0 3.106-.37 4.258-1.063l-.516-.856ZM7.5 13.99c-3.59 0-6.5-2.909-6.5-6.496H0a7.498 7.498 0 0 0 7.5 7.496v-1ZM1 7.495A6.498 6.498 0 0 1 7.5 1V0A7.498 7.498 0 0 0 0 7.495h1ZM7.5 1C11.09 1 14 3.908 14 7.495h1A7.498 7.498 0 0 0 7.5 0v1ZM14 7.495c0 1.331-.296 2.758-.921 3.735l.842.54C14.686 10.575 15 8.937 15 7.495h-1Zm-2.657 6.48l3 .99l.314-.949l-3-.99l-.314.949Zm3.631.357l-1-2.99l-.948.316l1 2.991l.948-.317Z"
                />
              </svg>
              <div className="chat-li-txt ">
                {' '}
                <a
                  href="#"
                  onClick={inputmessage}
                  style={{ textDecoration: 'none', color: '#9A9899' }}
                >
                  Why redux is using for API integration?
                </a>
              </div>
            </div>
            <div className="chat-li">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={15}
                height={15}
                viewBox="0 0 15 15"
              >
                <path
                  fill="currentColor"
                  d="m11.5 13.5l.157-.475l-.218-.072l-.197.119l.258.428Zm2-2l-.421-.27l-.129.202l.076.226l.474-.158Zm1 2.99l-.157.476a.5.5 0 0 0 .631-.634l-.474.159Zm-3.258-1.418c-.956.575-2.485.919-3.742.919v1c1.385 0 3.106-.37 4.258-1.063l-.516-.856ZM7.5 13.99c-3.59 0-6.5-2.909-6.5-6.496H0a7.498 7.498 0 0 0 7.5 7.496v-1ZM1 7.495A6.498 6.498 0 0 1 7.5 1V0A7.498 7.498 0 0 0 0 7.495h1ZM7.5 1C11.09 1 14 3.908 14 7.495h1A7.498 7.498 0 0 0 7.5 0v1ZM14 7.495c0 1.331-.296 2.758-.921 3.735l.842.54C14.686 10.575 15 8.937 15 7.495h-1Zm-2.657 6.48l3 .99l.314-.949l-3-.99l-.314.949Zm3.631.357l-1-2.99l-.948.316l1 2.991l.948-.317Z"
                />
              </svg>
              <div className="chat-li-txt ">
                {' '}
                <a
                  href="#"
                  onClick={inputmessage}
                  style={{ textDecoration: 'none', color: '#9A9899' }}
                >
                  What is store,reducer and action?
                </a>
              </div>
            </div>
            <div className="chat-li">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={15}
                height={15}
                viewBox="0 0 15 15"
              >
                <path
                  fill="currentColor"
                  d="m11.5 13.5l.157-.475l-.218-.072l-.197.119l.258.428Zm2-2l-.421-.27l-.129.202l.076.226l.474-.158Zm1 2.99l-.157.476a.5.5 0 0 0 .631-.634l-.474.159Zm-3.258-1.418c-.956.575-2.485.919-3.742.919v1c1.385 0 3.106-.37 4.258-1.063l-.516-.856ZM7.5 13.99c-3.59 0-6.5-2.909-6.5-6.496H0a7.498 7.498 0 0 0 7.5 7.496v-1ZM1 7.495A6.498 6.498 0 0 1 7.5 1V0A7.498 7.498 0 0 0 0 7.495h1ZM7.5 1C11.09 1 14 3.908 14 7.495h1A7.498 7.498 0 0 0 7.5 0v1ZM14 7.495c0 1.331-.296 2.758-.921 3.735l.842.54C14.686 10.575 15 8.937 15 7.495h-1Zm-2.657 6.48l3 .99l.314-.949l-3-.99l-.314.949Zm3.631.357l-1-2.99l-.948.316l1 2.991l.948-.317Z"
                />
              </svg>
              <div className="chat-li-txt ">
                {' '}
                <a
                  href="#"
                  onClick={inputmessage}
                  style={{ textDecoration: 'none', color: '#9A9899' }}
                >
                  Is react is library or framework?
                </a>
              </div>
            </div>
            <div className="chat-li">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={15}
                height={15}
                viewBox="0 0 15 15"
              >
                <path
                  fill="currentColor"
                  d="m11.5 13.5l.157-.475l-.218-.072l-.197.119l.258.428Zm2-2l-.421-.27l-.129.202l.076.226l.474-.158Zm1 2.99l-.157.476a.5.5 0 0 0 .631-.634l-.474.159Zm-3.258-1.418c-.956.575-2.485.919-3.742.919v1c1.385 0 3.106-.37 4.258-1.063l-.516-.856ZM7.5 13.99c-3.59 0-6.5-2.909-6.5-6.496H0a7.498 7.498 0 0 0 7.5 7.496v-1ZM1 7.495A6.498 6.498 0 0 1 7.5 1V0A7.498 7.498 0 0 0 0 7.495h1ZM7.5 1C11.09 1 14 3.908 14 7.495h1A7.498 7.498 0 0 0 7.5 0v1ZM14 7.495c0 1.331-.296 2.758-.921 3.735l.842.54C14.686 10.575 15 8.937 15 7.495h-1Zm-2.657 6.48l3 .99l.314-.949l-3-.99l-.314.949Zm3.631.357l-1-2.99l-.948.316l1 2.991l.948-.317Z"
                />
              </svg>
              <div className="chat-li-txt ">
                <a
                  href="#"
                  onClick={inputmessage}
                  style={{ textDecoration: 'none', color: '#9A9899' }}
                >
                  React is a framework. or not?
                </a>
              </div>
            </div>
            <div className="chat-li">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={15}
                height={15}
                viewBox="0 0 15 15"
              >
                <path
                  fill="currentColor"
                  d="m11.5 13.5l.157-.475l-.218-.072l-.197.119l.258.428Zm2-2l-.421-.27l-.129.202l.076.226l.474-.158Zm1 2.99l-.157.476a.5.5 0 0 0 .631-.634l-.474.159Zm-3.258-1.418c-.956.575-2.485.919-3.742.919v1c1.385 0 3.106-.37 4.258-1.063l-.516-.856ZM7.5 13.99c-3.59 0-6.5-2.909-6.5-6.496H0a7.498 7.498 0 0 0 7.5 7.496v-1ZM1 7.495A6.498 6.498 0 0 1 7.5 1V0A7.498 7.498 0 0 0 0 7.495h1ZM7.5 1C11.09 1 14 3.908 14 7.495h1A7.498 7.498 0 0 0 7.5 0v1ZM14 7.495c0 1.331-.296 2.758-.921 3.735l.842.54C14.686 10.575 15 8.937 15 7.495h-1Zm-2.657 6.48l3 .99l.314-.949l-3-.99l-.314.949Zm3.631.357l-1-2.99l-.948.316l1 2.991l.948-.317Z"
                />
              </svg>
              <div className="chat-li-txt ">
                <a
                  href="#"
                  onClick={inputmessage}
                  style={{ textDecoration: 'none', color: '#9A9899' }}
                >
                  What is state?
                </a>
              </div>
            </div>
          </div>
          <div className="user-info">
            <img
              src="img/photo-1633332755192-727a05c4013d.jpg"
              alt=""
              width="40px"
            />
            <div className="user-txt">Bharath V K</div>
          </div>
        </div>
        <div className="chat-sec">
          <div className="row m-0">
            <div className="col-md-2 mx-auto mt-5 mb-5">
              {/* <img src="img/logo.svg" width="100%" /> */}
              <video
                style={{ maxWidth: '100%', width: '800px', margin: '0 auto' }}
                playsInline
                loop
                muted
                controls
                alt="All the devices"
                src="/video/sample_video.mp4"
                ref={videoEl}
              />
              
              {/* <video width="320" height="240" controls autoplay="autoplay">
                <source src="img/ai_avatar_template_vid.mp4" type="video/mp4" />
              </video> */}
            </div>
          </div>
          <div className="col-md-10 mx-auto">
            <div className="row">
              <div className="col-md-4">
                <div className="three-bx">
                  <svg
                    style={{ marginTop: 40, marginBottom: 20 }}
                    xmlns="http://www.w3.org/2000/svg"
                    width={40}
                    height={40}
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M0 262q0 43 24.5 81T90 405q-2 7-4.5 18t-7 34.5t-3.5 39T85 512q30 0 60.5-16t48.5-32t19-16q55 0 107-21q-6-2-22.5-12T277 405h-64q-18 0-38 20q-28 25-53 36l6-77l-17-15q-68-44-68-107q0-16 6-36q-4-6-5.5-18.5T42 185v-23l1-13Q0 195 0 262zM299 0q-89 0-151.5 52T85 177q0 72 62 118t152 46q1 0 20.5 21.5t51.5 43t62 21.5q7 0 8.5-11t-1.5-26.5t-7-31.5t-7-27l-4-11q41-25 65.5-62.5T512 177q0-73-62.5-125T299 0zm102 284l-28 17l11 32q2 5 5 17t6 19q-22-15-52-45q-23-25-42-25q-70 0-120.5-32.5T130 177q-1-56 48.5-95T299 43t120.5 39t49.5 95q0 63-68 107z"
                    />
                  </svg>
                  <h4>Example</h4>
                  <p>write step by step for research and development</p>
                  <p>Explain how Bigbang Theory in 100 word</p>
                  <p>Can you explain the concept of supply and demand</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="three-bx">
                  <svg
                    style={{ marginTop: 40, marginBottom: 20 }}
                    xmlns="http://www.w3.org/2000/svg"
                    width={40}
                    height={40}
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M0 262q0 43 24.5 81T90 405q-2 7-4.5 18t-7 34.5t-3.5 39T85 512q30 0 60.5-16t48.5-32t19-16q55 0 107-21q-6-2-22.5-12T277 405h-64q-18 0-38 20q-28 25-53 36l6-77l-17-15q-68-44-68-107q0-16 6-36q-4-6-5.5-18.5T42 185v-23l1-13Q0 195 0 262zM299 0q-89 0-151.5 52T85 177q0 72 62 118t152 46q1 0 20.5 21.5t51.5 43t62 21.5q7 0 8.5-11t-1.5-26.5t-7-31.5t-7-27l-4-11q41-25 65.5-62.5T512 177q0-73-62.5-125T299 0zm102 284l-28 17l11 32q2 5 5 17t6 19q-22-15-52-45q-23-25-42-25q-70 0-120.5-32.5T130 177q-1-56 48.5-95T299 43t120.5 39t49.5 95q0 63-68 107z"
                    />
                  </svg>
                  <h4>Example</h4>
                  <p>write step by step for research and development</p>
                  <p>Explain how Bigbang Theory in 100 word</p>
                  <p>Can you explain the concept of supply and demand</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="three-bx">
                  <svg
                    style={{ marginTop: 40, marginBottom: 20 }}
                    xmlns="http://www.w3.org/2000/svg"
                    width={40}
                    height={40}
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M0 262q0 43 24.5 81T90 405q-2 7-4.5 18t-7 34.5t-3.5 39T85 512q30 0 60.5-16t48.5-32t19-16q55 0 107-21q-6-2-22.5-12T277 405h-64q-18 0-38 20q-28 25-53 36l6-77l-17-15q-68-44-68-107q0-16 6-36q-4-6-5.5-18.5T42 185v-23l1-13Q0 195 0 262zM299 0q-89 0-151.5 52T85 177q0 72 62 118t152 46q1 0 20.5 21.5t51.5 43t62 21.5q7 0 8.5-11t-1.5-26.5t-7-31.5t-7-27l-4-11q41-25 65.5-62.5T512 177q0-73-62.5-125T299 0zm102 284l-28 17l11 32q2 5 5 17t6 19q-22-15-52-45q-23-25-42-25q-70 0-120.5-32.5T130 177q-1-56 48.5-95T299 43t120.5 39t49.5 95q0 63-68 107z"
                    />
                  </svg>
                  <h4>Example</h4>
                  <p>write step by step for research and development</p>
                  <p>Explain how Bigbang Theory in 100 word</p>
                  <p>Can you explain the concept of supply and demand</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-10 mx-auto" style={{ marginTop: 'auto' }}>
            <br></br>

            {fileList.length > 0 ? (
              <div className="upload-files">
                {fileList.map((item, index) => (
                  <div key={index} className="ready-files">
                    <div className="ready-item-d">
                      <p className="item-name">
                        {item.name} &nbsp;&nbsp;{formatSizeUnits(item.size)}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a
                          href="# "
                          style={{ color: 'black', textDecoration: 'none' }}
                          className="remove-item"
                          onClick={() => {
                            Removeitem(item)
                          }}
                        >
                          X
                        </a>
                      </p>{' '}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <></>
            )}
            <div className="microphone-status">
              {isListening ? 'Listening.........' : ''}
            </div>
            <div className="chat-text-area">
              <textarea
                style={{ textAlign: 'left', padding: '5px', overflow: 'hidden', resize: 'none', border: '1px solid black', // Set border for all sides
                width:'100%', }}
                type="text"
                placeholder="send a message"
                value={
                  statename.input_message ? statename.input_message : transcript
                }
                name="input_message"
                onChange={inputmessagechange}
              />
              {/* <textarea
                style={{
                  textAlign: 'left',
                  padding: '5px',
                  width: '100%',
                  borderRadius: '6px',
                  whiteSpace: 'pre-wrap',
                  wordWrap: 'break-word ',
                  overflow: 'hidden',
                }}
                wrap="hard"
                type="text"
                placeholder="send a message"
                value={
                  statename.input_message ? statename.input_message : transcript
                }
                name="input_message"
                onChange={inputmessagechange}
              /> */}

              <div className="chat-action">
                <input
                  style={{ display: 'none' }}
                  ref={inputRef}
                  type="file"
                  onChange={handleFileChange}
                />
                {transcript && (
                  <button onClick={handleReset} style={{ fontSize: '20px' }}>
                    x
                  </button>
                )}
                <button onClick={handleClick}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 7.91V16a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V6a4 4 0 0 0-4-4v0a4 4 0 0 0-4 4v9.182a2 2 0 0 0 2 2v0a2 2 0 0 0 2-2V8"
                    />
                  </svg>
                </button>
                {isListening ? (
                  <button ref={microphoneRef} onClick={stopHandle}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="currentColor"
                      className="bi bi-mic"
                      viewBox="0 0 16 16"
                    >
                      {' '}
                      <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />{' '}
                      <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z" />{' '}
                    </svg>
                  </button>
                ) : (
                  <>
                    <button ref={microphoneRef} onClick={handleListing}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="currentColor"
                        className="bi bi-mic"
                        viewBox="0 0 16 16"
                      >
                        {' '}
                        <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />{' '}
                        <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z" />{' '}
                      </svg>
                    </button>
                  </>
                )}
                <button onClick={sendmessage}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="m5 12l-.604-5.437C4.223 5.007 5.825 3.864 7.24 4.535l11.944 5.658c1.525.722 1.525 2.892 0 3.614L7.24 19.465c-1.415.67-3.017-.472-2.844-2.028L5 12Zm0 0h7"
                    />
                  </svg>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
