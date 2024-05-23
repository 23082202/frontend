import React, { useEffect } from "react";
import Layout from "./Layout";
import Welcome from "../components/Welcome";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);

  return (
    <Layout>
      <Welcome />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '200px' }}>
        <div style={{ margin: '10px 0', textAlign: 'center' }}>
          <button 
            style={{ 
              backgroundColor: 'orange', 
              border: 'none', 
              borderRadius: '25px', 
              padding: '15px 30px', 
              color: 'white', 
              cursor: 'pointer',
              fontSize: '20px',
              width: '200px',
              transition: 'background-color 0.3s'
            }}
            onClick={() => alert('Absensi Masuk')}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#e69500'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'orange'}
          >
            Absensi Masuk
          </button>
        </div>
        <div style={{ margin: '10px 0', textAlign: 'center' }}>
          <button 
            style={{ 
              backgroundColor: 'orange', 
              border: 'none', 
              borderRadius: '25px', 
              padding: '15px 30px', 
              color: 'white', 
              cursor: 'pointer',
              fontSize: '20px',
              width: '200px',
              transition: 'background-color 0.3s'
            }}
            onClick={() => alert('Absensi Keluar')}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#e69500'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'orange'}
          >
            Absensi Keluar
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
