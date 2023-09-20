import { useNavigate } from 'react-router-dom'
import './App.css'

function App1() {
  const navigate = useNavigate()
  const inputmessage = (e) => {
    e.preventDefault()
    navigate('/inputchat')
  }
  return (
    <div className="App">
      <div className="wrap">
        <div className="side-nav">
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
                {' '}
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
          <div className="col-md-10 mx-auto">
            <div className="chat-heading">
              <div className="chat-heading-p">
                <p>The standard Lorem Ipsum passage, used since the 1500s</p>
              </div>
              <div>
                <img
                  style={{ width: '45px', borderRadius: '50px' }}
                  src="img/photo-1633332755192-727a05c4013d.jpg"
                />
              </div>
            </div>
            <div className="chat-list-wrap">
              <div className="icon-c">
                <img src="img/typechat-logo-inner.svg" />
              </div>
              <div className="chat-p">
                <p>
                  So how did the classical Latin become so incoherent? According
                  to McClintock, a 15th century typesetter likely scrambled part
                  of Cicero's De Finibus in order to provide placeholder text to
                  mockup various fonts for a type specimen book. It's difficult
                  to find examples of lorem ipsum in use before Letraset made it
                  popular as a dummy text in the 1960s, although McClintock says
                  he remembers coming across the lorem ipsum passage in a book
                  of old metal type samples. So far he hasn't relocated where he
                  once saw the passage, but the popularity of Cicero in the 15th
                  century supports the theory that the filler text has been used
                  for centuries. And anyways, as Cecil Adams reasoned, “[Do you
                  really] think graphic arts supply houses were hiring classics
                  scholars in the 1960s?” Perhaps. But it seems reasonable to
                  imagine that there was a version in use far before the age of
                  Letraset.
                </p>
              </div>
              <div className="chat-ac">
                <div className="ic-wrap">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinejoin="round"
                        d="M15.5 4H18a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2.5"
                      />
                      <path
                        strokeLinejoin="round"
                        d="M8.621 3.515A2 2 0 0 1 10.561 2h2.877a2 2 0 0 1 1.94 1.515L16 6H8l.621-2.485Z"
                      />
                      <path d="M9 12h6m-6 4h6" />
                    </g>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="currentColor"
                      d="M1.36 9.495v7.157h3.03l.153.018c2.813.656 4.677 1.129 5.606 1.422c1.234.389 1.694.484 2.531.54c.626.043 1.337-.198 1.661-.528c.179-.182.313-.556.366-1.136a.681.681 0 0 1 .406-.563c.249-.108.456-.284.629-.54c.16-.234.264-.67.283-1.301a.682.682 0 0 1 .339-.57c.582-.337.87-.717.93-1.163c.066-.493-.094-1.048-.513-1.68a.683.683 0 0 1 .176-.936c.401-.282.621-.674.676-1.23c.088-.886-.477-1.541-1.756-1.672a9.42 9.42 0 0 0-3.394.283a.68.68 0 0 1-.786-.95c.5-1.058.778-1.931.843-2.607c.085-.897-.122-1.547-.606-2.083c-.367-.406-.954-.638-1.174-.59c-.29.062-.479.23-.725.818c-.145.348-.215.644-.335 1.335c-.115.656-.178.952-.309 1.34c-.395 1.176-1.364 2.395-2.665 3.236a11.877 11.877 0 0 1-2.937 1.37a.676.676 0 0 1-.2.03H1.36Zm-.042 8.52c-.323.009-.613-.063-.856-.233c-.31-.217-.456-.559-.459-.953l.003-7.323c-.034-.39.081-.748.353-1.014c.255-.25.588-.368.94-.36h2.185A10.505 10.505 0 0 0 5.99 6.95c1.048-.678 1.82-1.65 2.115-2.526c.101-.302.155-.552.257-1.14c.138-.789.224-1.156.422-1.628c.41-.982.948-1.462 1.69-1.623c.73-.158 1.793.263 2.465 1.007c.745.824 1.074 1.855.952 3.129c-.052.548-.204 1.161-.454 1.844a10.509 10.509 0 0 1 2.578-.056c2.007.205 3.134 1.512 2.97 3.164c-.072.712-.33 1.317-.769 1.792c.369.711.516 1.414.424 2.1c-.106.79-.546 1.448-1.278 1.959c-.057.693-.216 1.246-.498 1.66a2.87 2.87 0 0 1-.851.834c-.108.684-.335 1.219-.706 1.595c-.615.626-1.714.999-2.718.931c-.953-.064-1.517-.18-2.847-.6c-.877-.277-2.693-.737-5.43-1.377H1.317Zm1.701-8.831a.68.68 0 0 1 .68-.682a.68.68 0 0 1 .678.682v7.678a.68.68 0 0 1-.679.681a.68.68 0 0 1-.679-.681V9.184Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-10 mx-auto">
            <div className="chat-heading">
              <div className="chat-heading-p">
                <p>The standard Lorem Ipsum passage, used since the 1500s</p>
              </div>
              <div>
                <img
                  style={{ width: '45px', borderRadius: '50px' }}
                  src="img/photo-1633332755192-727a05c4013d.jpg"
                />
              </div>
            </div>
            <div className="chat-list-wrap">
              <div className="icon-c">
                <img src="img/typechat-logo-inner.svg" />
              </div>
              <div className="chat-p">
                <p>
                  So how did the classical Latin become so incoherent? According
                  to McClintock, a 15th century typesetter likely scrambled part
                  of Cicero's De Finibus in order to provide placeholder text to
                  mockup various fonts for a type specimen book. It's difficult
                  to find examples of lorem ipsum in use before Letraset made it
                  popular as a dummy text in the 1960s, although McClintock says
                  he remembers coming across the lorem ipsum passage in a book
                  of old metal type samples. So far he hasn't relocated where he
                  once saw the passage, but the popularity of Cicero in the 15th
                  century supports the theory that the filler text has been used
                  for centuries. And anyways, as Cecil Adams reasoned, “[Do you
                  really] think graphic arts supply houses were hiring classics
                  scholars in the 1960s?” Perhaps. But it seems reasonable to
                  imagine that there was a version in use far before the age of
                  Letraset.
                </p>
              </div>
              <div className="chat-ac">
                <div className="ic-wrap">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinejoin="round"
                        d="M15.5 4H18a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2.5"
                      />
                      <path
                        strokeLinejoin="round"
                        d="M8.621 3.515A2 2 0 0 1 10.561 2h2.877a2 2 0 0 1 1.94 1.515L16 6H8l.621-2.485Z"
                      />
                      <path d="M9 12h6m-6 4h6" />
                    </g>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="currentColor"
                      d="M1.36 9.495v7.157h3.03l.153.018c2.813.656 4.677 1.129 5.606 1.422c1.234.389 1.694.484 2.531.54c.626.043 1.337-.198 1.661-.528c.179-.182.313-.556.366-1.136a.681.681 0 0 1 .406-.563c.249-.108.456-.284.629-.54c.16-.234.264-.67.283-1.301a.682.682 0 0 1 .339-.57c.582-.337.87-.717.93-1.163c.066-.493-.094-1.048-.513-1.68a.683.683 0 0 1 .176-.936c.401-.282.621-.674.676-1.23c.088-.886-.477-1.541-1.756-1.672a9.42 9.42 0 0 0-3.394.283a.68.68 0 0 1-.786-.95c.5-1.058.778-1.931.843-2.607c.085-.897-.122-1.547-.606-2.083c-.367-.406-.954-.638-1.174-.59c-.29.062-.479.23-.725.818c-.145.348-.215.644-.335 1.335c-.115.656-.178.952-.309 1.34c-.395 1.176-1.364 2.395-2.665 3.236a11.877 11.877 0 0 1-2.937 1.37a.676.676 0 0 1-.2.03H1.36Zm-.042 8.52c-.323.009-.613-.063-.856-.233c-.31-.217-.456-.559-.459-.953l.003-7.323c-.034-.39.081-.748.353-1.014c.255-.25.588-.368.94-.36h2.185A10.505 10.505 0 0 0 5.99 6.95c1.048-.678 1.82-1.65 2.115-2.526c.101-.302.155-.552.257-1.14c.138-.789.224-1.156.422-1.628c.41-.982.948-1.462 1.69-1.623c.73-.158 1.793.263 2.465 1.007c.745.824 1.074 1.855.952 3.129c-.052.548-.204 1.161-.454 1.844a10.509 10.509 0 0 1 2.578-.056c2.007.205 3.134 1.512 2.97 3.164c-.072.712-.33 1.317-.769 1.792c.369.711.516 1.414.424 2.1c-.106.79-.546 1.448-1.278 1.959c-.057.693-.216 1.246-.498 1.66a2.87 2.87 0 0 1-.851.834c-.108.684-.335 1.219-.706 1.595c-.615.626-1.714.999-2.718.931c-.953-.064-1.517-.18-2.847-.6c-.877-.277-2.693-.737-5.43-1.377H1.317Zm1.701-8.831a.68.68 0 0 1 .68-.682a.68.68 0 0 1 .678.682v7.678a.68.68 0 0 1-.679.681a.68.68 0 0 1-.679-.681V9.184Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-10 mx-auto" style={{ marginTop: 'auto' }}>
            <div className="chat-text-area">
              <input type="text" placeholder="send a message" />
              <div className="chat-action">
                <button>
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
                  </svg>{' '}
                </button>
                <button>
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

export default App1
