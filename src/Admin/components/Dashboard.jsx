import { Grid } from '@mui/material'
import React from 'react'
import Achivement from './Achivement'
import MonthlyOverview from './MonthlyOverview'
import OrdersTable from '../View/OrderTableView'
import ProductTable from '../View/ProductTableView'

const AdminDashboard = () => {
  return (
    <div className='p-10 '>
        <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
                <div
                className='shadow=lg shadow-gray-600' 
                >
                <Achivement/>
                </div>
            </Grid>
            <Grid item xs={12} md={8}>
                <div className='shadow=lg shadow-gray-600' >
                <MonthlyOverview/>
                </div>
            </Grid>
            <Grid item xs= {12} md={6}>
                <div
                className='shadow=lg shadow-gray-600' 
                >
                <OrdersTable/>
                </div>
            </Grid>

            <Grid item xs= {12} md={6}>
                <div
                className='shadow=lg shadow-gray-600' 
                >
                <ProductTable/>
                </div>
            </Grid>

        </Grid>
    </div>
  )
}

export default AdminDashboard