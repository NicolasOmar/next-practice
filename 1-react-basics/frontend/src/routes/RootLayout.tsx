import { FC } from 'react'
import MainHeader from '../components/MainHeader/MainHeader'
import { Outlet } from 'react-router-dom'

const RootLayout: FC = () => (
  <>
    <MainHeader />
    {/* Outlet component allows to render all children elements that will be mentioned in the routes configuration object, it can be implemented the times is needed (can use N levels of depth) */}
    <Outlet />
  </>
)

export default RootLayout
