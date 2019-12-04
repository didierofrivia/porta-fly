import React from 'react'
import {useA11yRouteChange, useDocumentTitle} from '../components'
import {
  PageSection,
  TextContent,
  Title,
  Text
} from '@patternfly/react-core'

const Overview: React.FunctionComponent = ({children}) => {
  useA11yRouteChange()
  useDocumentTitle('Overview')
  return (
    <>
      <PageSection variant={'dark'} style={{textAlign: 'center'}}>
        OHAI
      </PageSection>
      <PageSection>
        <TextContent>
          <Title size={'3xl'}>Overview</Title>
          <Text>
            <b>porta-fly</b> is a project for 3scale hackathon meant to
            assess the option of having a Patternfly React App with a BFF layer
          </Text>
        </TextContent>
      </PageSection>
    </>
  )
}

export default Overview
