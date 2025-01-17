import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/**
 * React does not have a routing engine by itself, therefore you need a tool fot that feature
 * Here it comes react-router-dom, that needs a configuration to function
 */
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Posts, { postsLoader } from './routes/Posts.tsx'
import NewPost, { actionNewPost } from './routes/NewPost/NewPost.tsx'
import RootLayout from './routes/RootLayout.tsx'
import PostDetails, {
  postDetailsLoader
} from './routes/PostDetails/PostDetails.tsx'

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
        /**
         * A way to load the needed data instead using a useEffect hook and API calls is using a loader function
         * that will be called before loading the entire component
         * Wheyn the loader function is called, it will return the data needed to be used in the component
         */
        loader: postsLoader,
        children: [
          {
            path: '/create-post',
            element: <NewPost />,
            /**
             * The same logic can be used to send data from a form to an API avoiding usage of hooks by using the action logic
             */
            action: actionNewPost as any
          },
          {
            path: '/:id',
            element: <PostDetails />,
            action: postDetailsLoader
          }
        ]
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
