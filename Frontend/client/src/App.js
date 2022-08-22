import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import NavBar from './components/NavBar/NavBar';
import Contactanos from './components/Footer/Footer Links/Contactanos';
import PrivacyPolicy from './components/Footer/Footer Links/PrivacyPolicy';
import Rewards from './components/Footer/Footer Links/Rewards';
import TermsAndConditions from './components/Footer/Footer Links/TermsAndConditions';
import Form from './components/Form/Form';
import Cart from './components/Cart/Cart';
import Admin from './components/VistaAdmin/PanelAdmin';
import WaiterView from './components/WaiterView/WaiterView';
import Ventas from './components/VistaAdmin/componentsAdmin/Ventas/Ventas';
import FormUser from './components/FormUser/FormUser';
import FormCategory from './components/VistaAdmin/componentsAdmin/Categorias/FormCategorias';
import { useState } from 'react';
import Editar from './components/VistaAdmin/componentsAdmin/Productos/editProductos';
import ClientReview from './components/Reviews/ClientReview';

//
//IMPORTS FIREBASE
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import firebaseApp from './Firebase/Credentials';
import EditTable from './components/Table/EditTable';
import TableCreated from './components/VistaAdmin/componentsAdmin/Tablas/TableCreated';

function App() {
  // el switch envuelve a las rutas y va de ruta en ruta
  const [user, setUser] = useState(null)
  const auth = getAuth(firebaseApp);
  const firestore = getFirestore(firebaseApp);

  async function getRol(uid) {

    const docuRef = doc(firestore, `users/${uid}`);
    const docuCifrada = await getDoc(docuRef);
    const infoFinal = docuCifrada.data();
    return infoFinal;
  }
//
  function setUserWithFirebaseAndRol(usuarioFirebase) {
    getRol(usuarioFirebase.uid).then((user) => {
      const userData = {
        uid: usuarioFirebase.uid,
        email: usuarioFirebase.email,
        rol: user.rol,
        name: user.name,
        lastname: user.lastname
      };
      setUser(userData);
    });
  }

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      //funcion final

      if (!user) {
        setUserWithFirebaseAndRol(usuarioFirebase);
      }
    } else {
      setUser(null);
    }
  });

  return (

      <Router>
        <div className="max-w-full h-auto flex flex-col bg-primary">
        {/* <div className="w-screen h-auto flex flex-col bg-primary xs:w-full"> */}
          <Routes>
            <Route path='/admin'  element={<Admin user={user}/>} />
            <Route path='/cart' element={<Cart user={user}/>} />
            <Route path='/waiter' element={<WaiterView user={user} />} />
            <Route exact path='/' element={<Home user={user} />} />
            <Route path='/menu' element={<Menu />} />
            {/* <Route path='/form' element={<Form />} /> */}
                       
            <Route path='/' element={<NavBar user={user}/>} />
            <Route path='/contact-us' element={<Contactanos />} />
            <Route path='/rewards' element={<Rewards />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
            <Route path='/welcome' element={<FormUser user={user}/>}/>
            <Route path='/table/:id' element={<EditTable />} />
            <Route path='/editar/:id' element={<Editar />} />
            <Route path='/reviews' element={<ClientReview />} />

          </Routes>


            
        </div>
      </Router>
    );
  }
  
  export default App;
  {/* <Route path='/ventas' element={<Ventas />} /> */}
  {/* <Route path='/category' element={<FormCategory/>}/> */}
  {/* <Route path='/editar/:id' element={<Editar />} /> */}
  {/* <Route path='/form' element={<Form />} /> */}