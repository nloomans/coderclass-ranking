import React from 'react'
import { render } from 'react-dom'
import LatestBadges from './latest-badges/LatestBadges.jsx'
import User from './user/User.jsx'

// dynamicly create the app root before the script tag
const appRoot = document.currentScript.parentNode.insertBefore(
                    document.createElement('div'),
                    document.currentScript)

// dynamicly add the font tag to the header
const link = document.createElement('link')
link.href = 'https://fonts.googleapis.com/css?family=Roboto+Mono:400,500'
link.rel = 'stylesheet'
document.head.appendChild(link)

const args = document.currentScript.dataset

switch (args.type) {
  case 'latest-badges':
    render(<LatestBadges issuerId={args.issuerId} />, appRoot)
    break
  case 'user':
    render(<User id={args.id} />, appRoot)
    break
  default:
    console.error(Error(`[credly widget] Unknown type ${args.type}`))
}
