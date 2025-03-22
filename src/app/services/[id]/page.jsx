import { dbConnect } from '@/lib/dbConnect';
import { ObjectId } from 'bson';
import React from 'react';

const ServiceDetails = async ({ params }) => {
    const id = await params.id;
    console.log(id);
    const query = { _id: new ObjectId(id) }
    const data = await dbConnect('services').findOne(query)
    return (
        <div className='my-10'>
            <div>
                <div className="card bg-base-100 w-full shadow-sm">
                    <figure>
                        <img
                            src={data.img}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {data.title}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>{data.description}</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">${data.price}</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;