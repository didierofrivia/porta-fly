import 'react-app-polyfill/ie11'
import '@patternfly/react-core/dist/styles/base.css'
import {Brand} from '@patternfly/react-core'
import React from 'react'
import {Redirect, useHistory} from 'react-router-dom'
import {AppLayout, SwitchWith404, LazyRoute} from './components'
import './App.css'
import logo from './logo.svg'

const Logo = <Brand src={logo} alt={'patternfly logo'}/>
const navItems = [
  {
    title: 'Overview',
    to: '/',
    exact: true,
  },
  {
    title: 'Analytics',
    to: '/analytics',
    items: [
      {to: '/analytics/usage', title: 'Usage'},
    ],
  },
  {
    title: 'Applications',
    to: '/applications',
    items: [
      {to: '/applications', title: 'Listing'},
      {to: '/applications/plans', title: 'Application Plans'}
    ],
  },
  {
    title: 'Integration',
    to: '/integration',
    items: [
      {to: '/integration/configuration', title: 'Configuration'}
    ]
  }
]

const getOverviewPage = () => import('./pages/Overview')
const getApplicationsPage = () => import('./pages/Applications')

const App = () => {
  const history = useHistory()
  const logoProps = React.useMemo(
    () => ({
      onClick: () => history.push('/'),
    }),
    [history]
  )
  return (
    <AppLayout
      logo={Logo}
      logoProps={logoProps}
      navVariant={'vertical'}
      navItems={navItems}
      navGroupsStyle={'expandable'}
    >
      <SwitchWith404>
        <LazyRoute path="/" exact={true} getComponent={getOverviewPage} />
        <LazyRoute path="/applications" exact={true} getComponent={getApplicationsPage} />
        <Redirect
          path={'/overview'}
          to={'/'}
          exact={true}
        />
      </SwitchWith404>
    </AppLayout>
  )
}

export default App
