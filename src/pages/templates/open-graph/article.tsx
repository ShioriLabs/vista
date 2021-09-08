import React from 'react'
import { GetServerSideProps } from 'next'
import styled from 'styled-components'

import Layout from '../../../layout/OpenGraph'

const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
`

const Title = styled.h1`
  margin: 0px;
  font-family: Quicksand, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 64px;
  font-weight: bold;
`

const Subtitle = styled.p`
  margin: 0px;
  margin-top: 24px;
  font-family: Quicksand, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 32px;
  font-weight: 500;
`

const Logo = styled.img`
  height: 64px;
`

interface Props {
  title: string
  subtitle: string
}

const Article = ({ title, subtitle }: Props): React.ReactElement => {
  return (
    <Layout>
      <Content>
        <Title>{ title }</Title>
        <Subtitle>{ subtitle }</Subtitle>
      </Content>
      <Logo src="/img/shiori-labs-logo.svg" alt="Shiori Labs Logo" />
    </Layout>
  )
}

export default Article
export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      title: context.query.title || 'Sample Text',
      subtitle: context.query.subtitle || 'Sample Text'
    }
  }
}
