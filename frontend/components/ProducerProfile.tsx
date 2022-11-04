export default function ProducerProfile() {
    return (
        <div className="bg-white">
            <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                <div className="container">
                        <div className="main-body">

                            <nav aria-label="breadcrumb" className="main-breadcrumb">
                                <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item"><a href="javascript:void(0)">Account</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Producer Profile</li>
                                </ol>
                            </nav>

                            <div className="row gutters-sm">
                                <div className="col-md-4 mb-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="d-flex flex-column align-items-center text-center">
                                                <img src="/temp_producer_img.png" alt="Producer Photo" className="rounded-b-full"></img>
                                                <div className="mt-3">
                                                    <h4>Sophie</h4>
                                                    <p className="text-muted font-size-sm">Hi, I am selling organic vegetables!</p>
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-sm-4 text-left">
                                                                <h6 className="mb-0">Full Name</h6>
                                                            </div>
                                                            <div className="col-sm-8 text-secondary text-right">
                                                                Yu-Ru, Hsiao
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-sm-4 text-left">
                                                                <h6 className="mb-0">Email</h6>
                                                            </div>
                                                            <div className="col-sm-8 text-secondary text-right">
                                                                yr@gmail.com
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-sm-4 text-left">
                                                                <h6 className="mb-0">Phone</h6>
                                                            </div>

                                                            <div className="col-sm-8 text-secondary text-right">
                                                                (49) 123-456
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-sm-4 text-left">
                                                                <h6 className="mb-0">Address</h6>
                                                            </div>

                                                            <div className="col-sm-8 text-secondary text-right">
                                                                Ulmenweg 55, Mannheim, Germany
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-sm-4 text-left">
                                                                <h6 className="mb-0">Bank Account</h6>
                                                            </div>

                                                            <div className="col-sm-8 text-secondary text-right">
                                                                LLXX XXXX XXXX XXXX 6666
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button className="btn btn-outline-primary float-right">Edit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card mt-3">
                                        <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0">Total Sales this month</h6>
                                            <span className="text-secondary">€ 9,743</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0">Total Volume sold this month</h6>
                                            <span className="text-secondary">1349</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0">Average Purchase Value</h6>
                                            <span className="text-secondary">€ 9.45</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0">New Customers</h6>
                                            <span className="text-secondary">13</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0">Ratings</h6>
                                            <span className="text-secondary">4.7 /5 (257 Reviews)</span>
                                        </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-md-8">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="text-gray-900 text-xl font-medium mb-1">Orders List</h5>
                                        </div>

                                        <div className="card-body">
                                            <table className="table table-striped">
                                                <thead>
                                                    <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Progress</th>
                                                    <th scope="col">Order_ID</th>
                                                    <th scope="col">User_ID</th>
                                                    <th scope="col">User_Name</th>
                                                    <th scope="col">Products Sold</th>
                                                    <th scope="col">Total Price(EUR)</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                    <th scope="row">1</th>
                                                        <td>Pending</td>
                                                        <td>1000</td>
                                                        <td>0301</td>
                                                        <td>Mark</td>
                                                        <td>Carrot, Apples, Grapes</td>
                                                        <td>10.1</td>
                                                    </tr>

                                                    <tr>
                                                    <th scope="row">2</th>
                                                        <td>Shipping</td>
                                                        <td>0978</td>
                                                        <td>1200</td>
                                                        <td>Jacob</td>
                                                        <td>Rice, Banana, Kiwis</td>
                                                        <td>12.8</td>
                                                    </tr>
                                                    <tr>
                                                    <th scope="row">3</th>
                                                        <td>Completed</td>
                                                        <td>0497</td>
                                                        <td>0783</td>
                                                        <td>Grace</td>
                                                        <td>Spinach, lettuce, broccoli</td>
                                                        <td>9.4</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        <div className="card-footer text-muted text-right">
                                            <a href="#!">View All Orders</a>
                                        </div>
                                    </div>

                                    <div className="card mt-3">
                                        <div className="card-header">
                                            <h5 className="text-gray-900 text-xl font-medium mb-1">Products List</h5>
                                        </div>

                                        <div className="card-body flex justify-center mb-1 mt-1">
                                            <div className="rounded-lg shadow-lg bg-white max-w-sm px-1">
                                                <a href="#!">
                                                    <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt=""/>
                                                </a>
                                                <div className="p-6">
                                                    <h5 className="text-gray-900 text-xl font-medium mb-2">Product 1</h5>
                                                    <h6 className="mb-0">Product Description: </h6>
                                                    <h6 className="mb-2">Price: </h6>
                                                    <button className="btn btn-outline-primary float-right mb-2">Edit</button>
                                                </div>
                                            </div>

                                            <div className="rounded-lg shadow-lg bg-white max-w-sm px-1">
                                                <a href="#!">
                                                    <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt=""/>
                                                </a>
                                                <div className="p-6">
                                                    <h5 className="text-gray-900 text-xl font-medium mb-2">Product 2</h5>
                                                    <h6 className="mb-0">Product Description: </h6>
                                                    <h6 className="mb-2">Price: </h6>
                                                    <button className="btn btn-outline-primary float-right mb-2">Edit</button>
                                                </div>
                                            </div>

                                            <div className="rounded-lg shadow-lg bg-white max-w-sm px-1">
                                                <a href="#!">
                                                    <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt=""/>
                                                </a>
                                                <div className="p-6">
                                                    <h5 className="text-gray-900 text-xl font-medium mb-2">Product 3</h5>
                                                    <h6 className="mb-0">Product Description: </h6>
                                                    <h6 className="mb-2">Price: </h6>
                                                    <button className="btn btn-outline-primary float-right mb-2">Edit</button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card-footer text-muted text-right">
                                            <a href="#!">View All Products</a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}
