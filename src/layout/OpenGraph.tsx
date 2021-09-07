import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 2400px;
  height: 1260px;
  background: #f55875;
  color: white;
  padding: 96px 72px;
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
