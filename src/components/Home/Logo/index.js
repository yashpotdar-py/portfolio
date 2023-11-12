import './index.scss'
import LogoTitle from '../../../assets/images/Y.png'
import { useRef } from 'react'
import { useEffect } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'

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
        duration: 10,
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
      <img className="solid-logo" ref={solidLogoRef} src={LogoTitle} alt="Y" />
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="562.000000pt"
        height="608.000000pt"
        viewBox="0 0 562.000000 608.000000"
      >
        <g
          className="svg-container"
          transform="translate(0.000000,608.000000) scale(0.100000,-0.100000)"
          fill="#000000"
          stroke="none"
        >
          <path
            ref={outlineLogoRef}
            d="M197 6012 c-15 -17 -17 -55 -17 -341 l0 -322 915 -1595 915 -1596 0 -1076 -1 -1077 560 -3 560 -2 237 87 c198 73 237 91 245 111 5 13 9 509 9 1160 l0 1137 992 1740 c553 970 992 1751 992 1765 l1 25 -743 3 c-700 2 -743 1 -749 -15 -4 -10 -264 -472 -578 -1028 -315 -555 -576 -1018 -581 -1027 -8 -14 -128 189 -591 1000 -320 559 -586 1029 -592 1045 l-11 27 -773 0 c-737 0 -775 -1 -790 -18z m2128 -1087 c461 -806 604 -1050 619 -1050 14 0 156 242 615 1052 l596 1053 698 0 697 0 -14 -22 c-8 -13 -453 -794 -990 -1737 l-977 -1715 1 -1128 0 -1128 -655 0 -655 0 0 1126 0 1125 -991 1725 c-544 949 -993 1732 -996 1740 -4 12 91 14 723 12 l728 -3 601 -1050z m-1101 -719 l975 -1698 -83 -144 -84 -145 -901 1572 -901 1571 0 286 c0 170 4 281 9 272 5 -8 448 -779 985 -1714z m911 -4036 l-75 -75 0 1036 0 1037 73 127 72 126 3 -1088 2 -1088 -75 -75z m1374 26 c-2 -2 -90 -36 -195 -75 l-192 -71 -518 0 -518 0 74 75 74 75 640 0 c352 0 637 -2 635 -4z"
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo
