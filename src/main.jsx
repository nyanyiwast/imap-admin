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
import HeadRoot from './routes/head';
import DeanRoot from './routes/dean';
import Dashboard from './pages/dashboard/Dashboard'
import CreateOLevelSubjectsPage from './pages/schools/createOLevelSubjectsPage'
import CreateALevelSubjectsPage from './pages/schools/createALevelSubjectsPage'
import CreateCategoryPage from './pages/schools/createCategoryPage'
import ListOLevelSubjectsPage from './pages/schools/listOLevelSubjects'
import ListALevelSubjectsPage from './pages/schools/listALevelSubjects'
import ListProvincesPage from './pages/schools/listProvinces'
import ListSchoolAdminsPage from './pages/schools/listSchoolAdmin'
import ListFormOneLimitsPage from './pages/schools/listFormOneLimits'
import ListSchoolPage from './pages/schools/listSchools'
import CreateCombinationPage from './pages/schools/createCombinationPage'
import ListCombinationsPage from './pages/schools/listCombinations'

const router = createBrowserRouter([

  // SYSTEM ADMIN PANEL
  {
    // path: "/dashboard",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/view-f1-limits",
        element: <ListFormOneLimitsPage />
      },
      {
        path: "/view-combo",
        element: <ListCombinationsPage />
      },
      {
        path: "/create-combination",
        element: <CreateCombinationPage />
      },
      {
        path: "/view-schools",
        element: <ListSchoolPage />
      },
      {
        path: "/view-provinces",
        element: <ListProvincesPage />
      },
      {
        path: "/view-school-admins",
        element: <ListSchoolAdminsPage />
      },
      {
        path: "/o-subjects",
        element: <CreateOLevelSubjectsPage />
      },
      {
        path: "/a-subjects",
        element: <CreateALevelSubjectsPage />
      },
      {
        path: "/a-category",
        element: <CreateCategoryPage />
      },
      {
        path: "/view-o-subjects",
        element: <ListOLevelSubjectsPage />
      },
      {
        path: "/view-a-subjects",
        element: <ListALevelSubjectsPage />
      },
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

  // HEADMASTER PANEL
  {
    // path: "/head",
    element: <HeadRoot />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/head",
        element: <CreateSchoolDeanPage />
      },
      {
        path: "/create-dean",
        element: <CreateSchoolDeanPage />
      },
      {
        path: "/create-form-one-limits",
        element: <FormOneLimitsPage />
      },
      {
        path: "/create-form-five-limits",
        element: <FormFiveLimitsPage />
      },
      {
        path: "/create-category",
        element: <FormFiveCategoryPage />
      },
    ]
  },

  // DEAN OR BURSAR PANEL
  {
    // path: "/dean",
    element: <DeanRoot />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dean",
        element: <FormOneLimitsPage />
      },
    ]
  },

  // PUBLIC PAGES
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
    index: true
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Toaster position="bottom-center" richColors/>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
