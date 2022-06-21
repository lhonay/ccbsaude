import { useState, useEffect } from "react";

import Router from "next/router";
import Link from "next/link";

import { AdminLayout } from '../../components'

import { api } from "../../services";

const Users = () => {
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])

    useEffect(() => {
    }, [])

    return (
        <AdminLayout>
            <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body py-2">
                            <h4 className="page-title">
                                <i className="fa fa-users title-icon mr-1"></i> Users
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}

export default Users