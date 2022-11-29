import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading/Loading';

const AllUser = () => {

    const { data: allUser = [], refetch, isLoading } = useQuery({
        queryKey: ['allUser'],
        queryFn: () => fetch("https://happy-trade-server.vercel.app/allUser")
            .then(res => res.json())
    })
    if (isLoading) {
        return <Loading></Loading>
    }

    //console.log(allUser);

    const handelMakeAdmin = (id) => {
        fetch(`https://happy-trade-server.vercel.app/allUsers/admin/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
            })
    }

    console.log(allUser);

    const handelDelete = (u) => {
        fetch(`https://happy-trade-server.vercel.app/allUsers/${u._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
                alert("Successfully deleted");
                //toast.success('Successfully toasted!')
            })
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    {allUser.map((user, id) => <tbody key={user._id}>

                        {user.role && <tr>
                            <th>{id + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.type}</td>
                            <td>{user.email}</td>
                            <td>{user?.role !== 'admin' && <button onClick={() => handelMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
                            <td>{user?.role !== 'admin' && <button onClick={() => handelDelete(user)} className='btn btn-xs btn-danger'>Delete</button>}</td>
                        </tr>}
                    </tbody>)
                    }
                </table>
            </div>
        </div>
    );
};

export default AllUser;