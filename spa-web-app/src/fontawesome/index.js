import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
    faFacebook,
    faInstagram
} from '@fortawesome/free-brands-svg-icons'

import {
    faCaretDown,
    faBell,
    faArrowUpRightFromSquare,
    faEnvelope,
    faEnvelopeOpen,
    faLocationDot,
    faPhone,
    faNetworkWired,
    faDrawPolygon,
    faVectorSquare,
    faCubes,
    faRadiation,
    faTableCells,
} from '@fortawesome/free-solid-svg-icons'


library.add(
    faCaretDown,
    faBell,
    faArrowUpRightFromSquare,
    faEnvelope,
    faEnvelopeOpen,
    faFacebook,
    faInstagram,
    faLocationDot,
    faPhone,
    faNetworkWired,
    faDrawPolygon,
    faVectorSquare,
    faCubes,
    faRadiation,
    faTableCells,
    faBell
)

export { FontAwesomeIcon, library };