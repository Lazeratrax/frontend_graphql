import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { Redirect, Route, Router, Switch, Link } from 'react-router-dom'
import { NAV } from './nav'
import history from './utils/history'
import NotFound from './views/404'
import { client } from './graphql'
import Login from './auth/Login'
import Logout from './auth/Logout'
import Registration from './auth/Registration'
import { AuthContext } from './auth/AuthContext'
import AuthRoute, { useCurrentUser } from './auth/AuthRoute'
import { Layout, Menu } from 'antd'
import {
  IdcardOutlined as IconIdCard,
  FileTextOutlined as IconFile,
  LogoutOutlined as IconLogout
} from '@ant-design/icons'
import PostsPage from './views/posts/Posts'
import PostPage from './views/post/Post'
import ProfilePage from './views/profile/Profile'

const AppSidebar: React.FC = () => {
  const user = useCurrentUser()
  return (
    <Layout.Sider collapsible>
      <Menu theme="dark" mode="inline">
        <Menu.Item key={NAV.Posts}>
          <IconFile/>
          <span>Главная</span>
          <Link to={NAV.Posts}/>
        </Menu.Item>
        <Menu.Item key={NAV.Profile}>
          <IconIdCard/>
          <span>Профиль</span>
          <Link to={NAV.Profile}/>
        </Menu.Item>
        {user && <Menu.Item key={NAV.Logout}>
          <IconLogout/>
          <span>Выйти</span>
          <Link to={NAV.Logout}/>
        </Menu.Item>}
      </Menu>
    </Layout.Sider>
  )
}

const AppLayout = () => (
  <Layout style={{ minHeight: '100vh', backgroundColor: '#FFF' }}>
    <AppSidebar/>
    <Layout.Content>
      <Switch>
        <Route exact path={NAV.App}>
          <Redirect to={NAV.Posts}/>
        </Route>
        <Route path={NAV.Posts} component={PostsPage}/>
        <Route path={NAV.Post} component={PostPage}/>
        <Route path={NAV.Profile} component={ProfilePage}/>
      </Switch>
    </Layout.Content>
  </Layout>
)

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <Router history={history}>
      <AuthContext>
          <Switch>
            <Route exact path="/">
              <Redirect to={NAV.Posts}/>
            </Route>
            <AuthRoute path={NAV.App} component={AppLayout}/>
            <Route path={NAV.Login} component={Login}/>
            <Route path={NAV.Logout} component={Logout}/>
            <Route path={NAV.Registration} component={Registration}/>
            <Route component={NotFound}/>
          </Switch>
      </AuthContext>
    </Router>
  </ApolloProvider>
)

export default App
