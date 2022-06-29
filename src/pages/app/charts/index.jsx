import { AdminLayout, Header } from '@/components'

import LineChart from './Line'
import PieChart from './Pie'
import AreaChart from './Area'

const Graphics = () => {

    return (
        <AdminLayout>
            <Header icon='chart-line' title='Charts' />
             <div className="row">
                <div className="col-md-12" style={{ backgroundColor: 'white', marginLeft: 15, marginRight: 10 }}>
                    <div className="col-md-12" style={{ marginBottom: 100 }}>
                        <LineChart />
                    </div>
                    <div className="col-md-12" style={{ marginBottom: 100 }}>
                        <AreaChart />
                    </div>
                    <div className="col-md-12" style={{ marginBottom: 10 }}>
                        <PieChart />
                    </div>
                </div>

            </div>
        </AdminLayout>
    )
}

export default Graphics