import React from 'react'
import { Link, Outlet,useNavigate } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";
const Dashboard = () => {
	const navigate = useNavigate();

    const handleLogout = () => {
        // Handle the logout logic here
        console.log('User logged out');
        navigate('/login'); // Redirect to login page after logout
    };
	
	return (

		<div className="container-fluid">
			<div className="row flex-nowrap">
				<div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
					<div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">

						<Link to="/dashboard/ADMIN" className="d-flex align-items-center pb-3 mb-md-1 me-md-auto text-white ">
							<span className="fs-5 fw-bolder d-done d-sm-inline">ADMIN</span>
						</Link>
						<ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">

							<li>
								<Link to="/dashboard/Home" className="nav-link px-0 align-middle text-white">
									<i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Home</span> </Link>
							</li>
							<li className="w-100">
								<Link to="/dashboard/Employee" className="nav-link px-0 align-middle text-white">
									<i className="fs-4 bi-person"></i> <span className="ms-1 d-none d-sm-inline">Employee</span></Link>
							</li>
							<li>
								<Link to="/dashboard/Filter" className="nav-link px-0 align-middle text-white">
									<i className="fs-4 bi-filter"></i> <span className="ms-1 d-none d-sm-inline">Filter</span>
								</Link>
							</li>

							<li className="w-100" onClick={handleLogout}>
                                <a className="nav-link px-0 align-middle text-white">
                                    <i className="fs-4 bi-power"></i> <span className="ms-1 d-none d-sm-inline">Logout</span>
                                </a>
                            </li>
						</ul>
					</div>
				</div>
				<div className="col p-0 m-0">
					<div className='p-2 d-flex justify-content-center shadow'>
						<h4>Employee Management System</h4>
					</div>
					<Outlet />
				</div>
			</div>
		</div>
	)
}

export default Dashboard
