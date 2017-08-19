import React, { Component } from 'react'
import routes from './routes'
import { Section, Container } from 'components/layout'
import { CustomLink } from 'components/custom'

const Application = ({ children }) =>
  <div>
    <div className="tabs is-light is-centered is-large">
      <ul>
        {routes.map(v => <CustomLink {...v} key={v.name} />)}
      </ul>
    </div>
    <Section className="app">
      <Container>
        {children}
      </Container>
    </Section>
  </div>

export default Application
