import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import Login from './components/login';
import Register from './components/register';
import Dashboard from './components/dashboard';
import Adverts from './components/Adverts';

export default{
   mode: 'history',
   linkActiveClass: 'active',
   routes:[
       {
         path: '*',
         component: NotFound
      },
      {
         path: '/',
         component: Home
      },
      {
         path: '/about',
         component: About
      },
       {
            path: '/login',
            component: Login,
            name: 'Login'
        },
      {
         path: '/register',
         component: Register
      },
      {
         path: '/adverts',
         component: Adverts
      },
      {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
      beforeEnter: (to, form, next) =>{
               axios.get('/api/authenticated').then(()=>{
                   next()
               }).catch(()=>{
                   return next({ name: 'Login'})
               })
           }
    }
          
    ]
}
