import React from 'react'
import SalesChart from '../components/SalesChart '
import SalesChart2 from '../components/SalesChart2'

function DashBoard() {
    return (
        <div className='container-fluid'>
<h2 className='text-center bg-black text-white py-2'>Review and ranking analysis</h2>

            <div className='row border border-dark'>
                <div className='col-md-6 text-center border border-dark'>
                    <h2>Total Views: {25}</h2>
                </div>
                <div className='col-md-6 text-center border border-dark'>
                    <h2>Averange Ranking: {4.2}</h2>
                </div>
            </div>


            <div className='row pt-5'>

                <div className='col-md-6'>
                    <SalesChart />
                </div>
                <div className='col-md-6'>
                    <SalesChart2 />
                </div>
            </div>
        </div>
    )
}

export default DashBoard