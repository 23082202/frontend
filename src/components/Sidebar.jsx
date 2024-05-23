import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoPerson, IoPricetag, IoHome, IoLogOut, IoEnter, IoExit, IoDocument } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div style={{ width: '250px', boxShadow: '2px 0 5px rgba(0,0,0,0.1)' }}>
      <aside style={{ padding: '10px' }}>
        <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>General</p>
        <ul style={{ listStyle: 'none', padding: '0' }}>
          <li style={{ marginBottom: '10px' }}>
            <NavLink to="/dashboard" style={{ textDecoration: 'none', color: '#333', display: 'flex', alignItems: 'center' }}>
              <IoHome style={{ marginRight: '8px' }} /> Dashboard
            </NavLink>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <NavLink to="/products" style={{ textDecoration: 'none', color: '#333', display: 'flex', alignItems: 'center' }}>
              <IoPricetag style={{ marginRight: '8px' }} /> Products
            </NavLink>
          </li>
        </ul>
        {user && user.role === "admin" && (
          <div>
            <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Admin</p>
            <ul style={{ listStyle: 'none', padding: '0' }}>
              <li style={{ marginBottom: '10px' }}>
                <NavLink to="/users" style={{ textDecoration: 'none', color: '#333', display: 'flex', alignItems: 'center' }}>
                  <IoPerson style={{ marginRight: '8px' }} /> Users
                </NavLink>
              </li>
            </ul>
          </div>
        )}
        <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Absensi</p>
        <ul style={{ listStyle: 'none', padding: '0' }}>
          <li style={{ marginBottom: '10px' }}>
            <NavLink to="/absensi-masuk" style={{ textDecoration: 'none', color: '#333', display: 'flex', alignItems: 'center' }}>
              <IoEnter style={{ marginRight: '8px' }} /> Absensi Masuk
            </NavLink>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <NavLink to="/absensi-keluar" style={{ textDecoration: 'none', color: '#333', display: 'flex', alignItems: 'center' }}>
              <IoExit style={{ marginRight: '8px' }} /> Absensi Keluar
            </NavLink>
          </li>
          <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Slip Gaji</p>
          <li style={{ marginBottom: '10px' }}>
            <NavLink to="/slip-gaji" style={{ textDecoration: 'none', color: '#333', display: 'flex', alignItems: 'center' }}>
              <IoDocument style={{ marginRight: '8px' }} /> Slip Gaji
            </NavLink>
          </li>
        </ul>
        <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Settings</p>
        <ul style={{ listStyle: 'none', padding: '0' }}>
          <li>
            <button onClick={logout} style={{ background: 'none', border: 'none', color: '#333', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
              <IoLogOut style={{ marginRight: '8px' }} /> Logout
            </button>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
