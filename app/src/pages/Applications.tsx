import React, {useState} from 'react'
import {useDocumentTitle} from '../components'
import {
  PageSection,
  PageSectionVariants,
  TextContent,
  Text,
  TextVariants,
} from '@patternfly/react-core'
import { Table, TableHeader, TableBody } from '@patternfly/react-table'


const Applications: React.FunctionComponent = () => {
  useDocumentTitle('Applications')
  const [columns, setColumns] = useState([
    'Name',
    'State',
    'Account',
    'Plan',
    'Payment status',
    'Created at',
    'Traffic on'
  ])
  const [rows, setRows] = useState([
    {
      cells: [
        'App 01',
        'live',
        'Developer',
        'Basic',
        'Paid',
        'November 25, 2019',
        'November 25, 2019'
      ]
    },
    {
      cells: [
        'App 02',
        'live',
        'Developer',
        'Basic',
        'Paid',
        'October 25, 2019',
        'October 25, 2019'
      ]
    },
  ])

  return (
    <>
      <PageSection variant={PageSectionVariants.light}>
        <TextContent>
          <Text component="h1">Applications</Text>
        </TextContent>
        <TextContent>
          <Text component={TextVariants.p}>
            This is the applications screen.
          </Text>
        </TextContent>
      </PageSection>

      <PageSection>
        <Table cells={columns} rows={rows}>
          <TableHeader />
          <TableBody />
        </Table>
      </PageSection>
    </>
  )
}

export default Applications
