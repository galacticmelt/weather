import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';
import Main from './components/main/main';
import Modal from './components/modal/modal';
import { MODAL_PURPOSE } from './shared/constants';
import './App.css';

function App() {
  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <>
            <Route
              path="*"
              element={<Main />}
              errorElement={<Modal title="Error!" />}
            />
            <Route
              path="about"
              element={
                <Modal
                  title={MODAL_PURPOSE.ABOUT.title}
                  message={MODAL_PURPOSE.ABOUT.message}
                />
              }
            />
          </>
        )
      )}
    />
  );
}

export default App;
