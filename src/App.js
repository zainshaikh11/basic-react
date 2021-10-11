import './App.css';
import { Home } from './pages/home'
import { Form } from './pages/form'
import { FormikForm } from './pages/Formik'
function App() {
  return (
    <>
      <Home name="zain" title="should update is false"/>
      <Home name="zain" value="1" title="should update is true"/>
      <Form />
      <FormikForm />
    </>
  );
}

export default App;
