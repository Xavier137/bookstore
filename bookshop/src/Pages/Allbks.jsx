import React from 'react'
import Book1 from '../components/Books/Book1'
import Book2 from '../components/Books/Book2'
import Book3 from '../components/Books/Book3'
import Book5 from '../components/Books/Book5'
import Book11 from '../components/Books/Book11'

export default function Allbks() {
  return (
    <div container spacing={2} justifyContent='center' style={{display: {xs: 'block', sm: 'Inline-flex'}}}>
      <Book1/>
      <Book2/>
      <Book3/>
      <Book5/>
      <Book11/>
    </div>
  )
}
