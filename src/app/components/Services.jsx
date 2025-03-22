import { dbConnect } from "@/lib/dbConnect";

const Services = async () => {
    const data = await dbConnect('services').find().toArray();

    return (
        <div className="my-10">
            <h2>All services here</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    data.map(item => <div key={item._id} className="card bg-base-100 w-full shadow-sm">
                        <figure>
                            <img
                                src={item.img}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{item.title}</h2>
                            <p>{item.description.slice(0, 150)}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Services;