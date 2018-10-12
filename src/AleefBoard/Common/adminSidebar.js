import React from 'react';
import AleefBoard from './aleefBoard';
import { NavLink } from 'react-router-dom';

 export default class AdminSidebar extends React.Component {
    render() {
        return (
            <div>
                <AleefBoard/>
                <aside>
                    <div id="sidebar" className="nav-collapse">
                        <div className="leftside-navigation">
                            <ul className="sidebar-menu" id="nav-accordion">
                                <li className="nav-profile logo-nav"></li>
                                <li>
                                    <NavLink to={'/admindashboard'}>
                                        <img src="src/public/image/dashboard.png" />
                                        <span className="m_left">Dashboard</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/admintransaction'}>
                                        <img src="src/public/image/transaction.png" />
                                        <span className="m_left">My Transaction</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/managekyc'}>
                                        <img src="src/public/image/transaction.png" />
                                        <span className="m_left">Manage KYC</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/userList'}>
                                        <img src="src/public/image/userlist.png" />
                                        <span className="m_left">User List</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/userPurchaseList'}>
                                        <img src="src/public/image/userpurchase.png" />
                                        <span className="m_left">User Purchase List</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </aside>
            </div>
        )
    }
}