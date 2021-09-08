import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  height: 630px;
  background: #f55875;
  color: white;
  padding: 48px 32px;
  box-sizing: border-box;
  align-items: flex-start;
`

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props): React.ReactElement => {
  return (
    <Container>
      { children }
    </Container>
  )
}

export default Layout
