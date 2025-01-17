import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/**
 * React does not have a routing engine by itself, therefore you need a tool fot that feature
 * Here it comes react-router-dom, that needs a configuration to function
 */
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Posts from './routes/Posts.tsx'
import NewPost from './routes/NewPost/NewPost.tsx'
import RootLayout from './routes/RootLayout.tsx'

/**
 * Route configuration can have several levels giving what your app needs
 * In this case, the base path uses an layout component, and its base level aswell adds a component that uses a layout pattern
 * (each layout component needs to include a <Outlet /> component to render its children)
 * In this particular case, when you render the <Posts /> component, you can access the <NewPost /> component by adding the 'create-post' path
 */
const ROUTES = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Posts />,
        children: [{ path: 'create-post', element: <NewPost /> }]
      }
    ]
  }
]

// Here you create a routerconfiguration by including its array of paths and related element/component (JSX component)
const routerConfig = createBrowserRouter(ROUTES)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/**
     * Instead including the App component inside React's strict mode
     * (which only works on development mode, not once deployed)
     * In the RouterProvider, you include all the needed routes and its related components
     */}
    <RouterProvider router={routerConfig} />
  </StrictMode>
)
