import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
    faCaretDown,
    faBell,
    faArrowUpRightFromSquare,
    faEnvelope,
    faEnvelopeOpen
} from '@fortawesome/free-solid-svg-icons'

library.add(
    faCaretDown,
    faBell,
    faArrowUpRightFromSquare,
    faEnvelope,
    faEnvelopeOpen
)

export { FontAwesomeIcon, library };