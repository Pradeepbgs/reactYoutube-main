import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Body from './components/Body'
import Head from './components/Head'
import store from './redux/Store'
import { Provider } from 'react-redux'
import MainCont from './components/MainCont'
import WatchPage from './components/WatchPage'


const router = createBrowserRouter([{
      path:'/',
      element:<Body/>,
      children:[
          {
            path:'/',
            element:<MainCont/>
          },
          {
            path:'watch',
            element:<WatchPage/>
          }
      ]
}])

function App() {

  return (
    <Provider store={store}>
      <Head/>
     <RouterProvider router={router} />
    </Provider>
  )
}

export default App
