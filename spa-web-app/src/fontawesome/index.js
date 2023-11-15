import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCaretDown, faBell } from '@fortawesome/free-solid-svg-icons'

library.add(
    faCaretDown,
    faBell
)

export { FontAwesomeIcon, library };