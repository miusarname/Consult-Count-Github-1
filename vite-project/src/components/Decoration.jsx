import React from 'react'
import {Navbar} from './UI/Navbar'
import {Hero} from './UI/Hero'
import {Preview} from './UI/preview'
import {Exp} from './UI/exp'
import {Danger} from './UI/Danger'

export function Decoration() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Preview/>
    <Exp/>
    <Danger/>
    </>
  )
}
