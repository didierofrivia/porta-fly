import React from 'react'
import {useA11yRouteChange, useDocumentTitle} from '../components'
import {
  PageSection,
  TextContent,
  Title,
  Text,
  Card,
  CardBody
} from '@patternfly/react-core'
import chart from '../assets/dd-chart.png'

const Overview: React.FunctionComponent = ({children}) => {
  useA11yRouteChange()
  useDocumentTitle('Overview')
  return (
    <>
      <PageSection variant={'light'}>
        <TextContent>
          <Title size={'3xl'}>Overview</Title>
          <Text>
            <b>porta-fly</b> is a project for 3scale hackathon meant to
            assess the option of having a Patternfly React App with a BFF layer
          </Text>
        </TextContent>
      </PageSection>
      <PageSection>
        <Card>
          <CardBody>
            <TextContent>
              <img src={chart} />
            </TextContent>
          </CardBody>
        </Card>
      </PageSection>
    </>
  )
}

export default Overview
