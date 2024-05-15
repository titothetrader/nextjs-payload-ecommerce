'use client'

import { Footer } from '../../../payload/payload-types'
import { fetchFooter } from '../../_api/fetchGlobals'
import FooterComponent from './FooterComponent'

// import { ThemeSelector } from '../../_providers/Theme/ThemeSelector'
import classes from './index.module.scss'

export async function Footer() {
  let footer: Footer | null = null

  try {
    footer = await fetchFooter()
  } catch (error) {
    console.error(error)
  }

  const navItems = footer?.navItems || []

  return (
    <>
      <FooterComponent footer={footer} />
    </>
  )
}
