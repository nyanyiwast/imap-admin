import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Root from './routes/root'
import ErrorPage from './pages/errors/Error'
import LoginPage from './pages/authentication/loginPage';
import CreateSchoolPage from './pages/schools/createSchoolPage'
import { Toaster } from 'sonner'
import CreateProvincePage from './pages/provinces/createProvincePage'
import CreateCurrencyPage from './pages/currency/createCurrencyPage'
import CreateUsersPage from './pages/users/createUsersPage'
import CreateSchoolAdminPage from './pages/schools/createSchoolAdminPage'
import CreateSchoolDeanPage from './pages/schools/createSchoolDeanPage'
import CreateSchoolTermPage from './pages/schools/createSchoolTermPage'
import CreateLocalCurrencyPage from './pages/currency/createLocalCurrencyPage'
import FormOneLimitsPage from './pages/limits/formOneLimitsPage'
import FormFiveLimitsPage from './pages/limits/FormFiveLimitsPage'
import FormFiveCategoryPage from './pages/formFiveCategory/createFormFiveCategoryPage'
import CreateUniversityUsersPage from './pages/universities/createUniversityUsersPage'
import CreateUniversityDeanPage from './pages/universities/createUniversityDeanPage'
import CreateUniversityDepartmentPage from './pages/universities/createUniversityDepartmentPage'
import CreateUniversityFacultyPage from './pages/universities/createUniversityFacultyPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/create-school",
        element: <CreateSchoolPage />
      },
      {
        path: "/create-province",
        element: <CreateProvincePage />
      },
      {
        path: "/create-currency",
        element: <CreateCurrencyPage />
      },
      {
        path: "/create-users",
        element: <CreateUsersPage />
      },
      {
        path: "/create-school-admins",
        element: <CreateSchoolAdminPage />
      },
      {
        path: "/create-school-deans",
        element: <CreateSchoolDeanPage />
      },
      {
        path: "/create-school-term",
        element: <CreateSchoolTermPage />
      },
      {
        path: "/create-currency-local",
        element: <CreateLocalCurrencyPage/>
      },
      {
        path: "/create-form-one-limit",
        element: <FormOneLimitsPage />
      },
      {
        path: "/create-form-five-limit",
        element: <FormFiveLimitsPage />
      },
      {
        path: "/create-category",
        element: <FormFiveCategoryPage />
      },
      {
        path: "/create-uni-users",
        element: <CreateUniversityUsersPage />
      },
      {
        path: "/create-uni-dean",
        element: <CreateUniversityDeanPage />
      },
      {
        path: "/create-uni-dept",
        element: <CreateUniversityDepartmentPage />
      },
      {
        path: "/create-uni-faculty",
        element: <CreateUniversityFacultyPage />
      },
    ]
  },
  {
    path: "/auth",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
    index: true
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Toaster position="bottom-center"/>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
