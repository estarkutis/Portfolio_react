import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoS from '../../../assets/images/logo-s.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript,  Developer"
      />

      <svg
        width="559pt"
        height="897pt"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(0 457) scale(.1 -.1)"
          fill="none"
        >
          <path
            ref={outlineLogoRef}
            d="M551.5,731.9H130.6V503.3h380.7v-67h13v-98.1H130.6V164.4h397.9v-67h13V-0.7H14.8v67h-13V897h536.7v-67h13
            V731.9z M507.3,499.3H130.6v-63h376.7V499.3z M534.5,802.9V826H18.8V70.3h505.7v23.1H126.6v67h-13v248.8h393.7v23.1H126.6v67h-13
            V802.9H534.5z M520.3,342.2v90.1h-9v-27.1H117.6V164.4h9v177.8H520.3z M524.5,160.4H130.6v-63h393.9V160.4z M18.8,3.3h518.7v90.1h-9
            V66.3H18.8V3.3z M534.5,893H5.8V70.3h9V830h519.7V893z M547.5,826h-9v-27.1H117.6V503.3h9V735.9h420.9V826z"
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo