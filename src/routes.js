
import ShowBlogs from './components/ShowBlogs.vue'
import AddBlog from './components/AddBlog.vue'
import SingleBlog from './components/SingleBlog.vue'
import EditBlog from './components/EditBlog'
import About from './components/About'
export default[
    { path: '/', 
      component: ShowBlogs
    },
    { path: '/add',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AddBlog
    },
    {path:'/blog/:id',component:SingleBlog},
    {path:'/edit/:id',component:EditBlog},
    {path:'/about',component:About}

  ]

