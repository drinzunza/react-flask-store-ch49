import "./Admin.css";

function Admin() {
    return (
        <div className="admin">
            <h1>Store administration</h1>

            <div className="parent">

                <div className="products">
                    <h4>Manage Products</h4>

                    <div>
                        <label className='form-label'>Title</label>
                        <input type="text" />
                    </div>

                    <div>
                        <label className='form-label'>Price</label>
                        <input type="text" />
                    </div>

                    <div>
                        <label className='form-label'>Image</label>
                        <input type="text" />
                    </div>

                    <div>
                        <label className='form-label'>Category</label>
                        <input type="text" />
                    </div>

                    <div>
                        <button className='btn btn-dark'>Save Product</button>
                    </div>

                </div>

                <div className="coupons">
                    <h4>Manage Coupons</h4>

                    <div>
                        <label className='form-label'>Code</label>
                        <input type="text" />
                    </div>

                    <div>
                        <label className='form-label'>Discount</label>
                        <input type="text" />
                    </div>

                    <div>
                        <button className='btn btn-dark'>Save Coupon</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Admin;



























