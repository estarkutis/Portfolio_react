import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  
  faAngular,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faCss3,
  
} from '@fortawesome/free-brands-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm very ambitious front-end developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p>
            I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, a sports fanatic, drawing enthusiast, and tech-obsessed!!!
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5}/>
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3}/>
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact}/>
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare}/>
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt}/>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
