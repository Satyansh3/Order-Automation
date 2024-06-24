import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from "react";
import Login from "./components/Auth/clientLogin.jsx";
import OTPVerification from "./components/Auth/OTPVerification.jsx";
import JobList from "./components/Jobs/JobList.jsx";
import JobDetail from "./components/Jobs/JobDetail.jsx";
import CreateJob from "./components/Jobs/CreateJob.jsx";
import UserList from './components/Admin/UserList.jsx';
import UserDetail from './components/Admin/UserDetail.jsx';
import Home from "./components/Auth/Home.jsx";
import AdminLogin from "./components/Auth/adminLogin.jsx";
import JobSubmissionConfirmation from "./components/Jobs/JobSubmissionConfirmation.jsx";
import ClientDashboard from "./components/Dashboard/clientDashboard.jsx";
// import otherJobDetail from "./components/Dashboard/otherJobDetail.jsx"
// import DownloadFolder from "./components/Dashboard/downloadFolder.jsx"
import AdminDashboard from "./components/Dashboard/adminDashboard.jsx";
import OAuthButton from "./components/Auth/OAuthButton.jsx";
import OAuthCallback from "./components/Auth/oAuthCallback.jsx";
// import insideAdminDashboard from "./components/Dashboard/insideAdminDashboard.jsx"

const App = () => {
    return(
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/client-login" element={<Login />}/>
                    <Route path="/admin-login" element={<AdminLogin/>} />
                    <Route path="/oAuth" element={<OAuthButton />} />
                    <Route path="/callback" element={<OAuthCallback />}/>
                    <Route path="/otp-verification" element={<OTPVerification/>} />
                    <Route path={`/admin/jobs/:username`} element={<JobDetail userType="admin"/>}/>
                    <Route path="/job-submission-confirmation" element={<JobSubmissionConfirmation/>} />
                    <Route path="/client-dashboard" element={<ClientDashboard/>} />
                    <Route path="/jobs/*" element={<JobDetail userType="client" />} />
                    <Route path="/jobs/create-job" element={<CreateJob/>}/>
                    <Route path="/admin/users" exact element= {<UserList />}/>
                    <Route path="/admin/users/:id" element={<UserDetail />} />
                    <Route path="/admin-dashboard" element={<AdminDashboard/>} />
                </Routes>
            </div>
        </Router>
    )
};

export default App;