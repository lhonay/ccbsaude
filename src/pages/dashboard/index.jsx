import { useState, useEffect } from "react";

import Router from "next/router";
import Link from "next/link";

import { api } from "../../services";

const Dashboard = () => {
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true)
                const { data } = await api.get('users')
                setUsers(data)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }

        fetchUsers()
    }, [])

    return (
        <div className="content">
            { loading && <p>loading</p> }
            <div>
                {users.map(user => 
                    <p key={user.id}>{user.name}</p>
                )}
            </div>
        </div>
    )
}

export default Dashboard