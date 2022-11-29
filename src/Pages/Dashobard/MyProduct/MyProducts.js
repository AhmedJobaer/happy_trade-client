import { useQuery } from '@tanstack/react-query';
import toast, { Toaster } from 'react-hot-toast';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const MyProducts = () => {

    const { user } = useContext(AuthContext);
    //console.log(user.email)

    const { data: myProducts = [], refetch, isLoading } = useQuery({
        queryKey: ['myProducts'],
        queryFn: () => fetch(`https://happy-trade-server.vercel.app/myProducts/${user.email}`)
            .then(res => res.json())
    })


    if (isLoading) {
        return <Loading></Loading>
    }

    const handelDelete = (myProducts) => {
        fetch(`https://happy-trade-server.vercel.app/myProducts/${myProducts._id}`, {
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


    //console.log(myProducts);
    return (
        <div>
            <h2>My product</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Img</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    {
                        myProducts.map((user, id) => <tbody key={user._id}>

                            <tr>
                                <th>{id + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.sellPrice}</td>
                                <td><div className="avatar">
                                    <div className="w-24 rounded">
                                        <img src={user.img} alt='' />
                                    </div>
                                </div></td>
                                <td><div>
                                    <button className="btn btn-sm btn-success mb-1">Advertise</button> <br></br>
                                    <button className="btn btn-sm btn-error" onClick={() => handelDelete(user)} >Delete</button></div></td>
                            </tr>
                        </tbody>)
                    }
                </table>
            </div>
        </div>
    );
};

export default MyProducts;