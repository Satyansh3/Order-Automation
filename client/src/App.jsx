import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/Auth/clientLogin.jsx";
import OTPVerification from "./components/Auth/OTPVerification.jsx";
import JobDetail from "./components/Jobs/JobDetail.jsx";
import CreateJob from "./components/Jobs/CreateJob.jsx";
import Home from "./components/Auth/Home.jsx";
import AdminLogin from "./components/Auth/adminLogin.jsx";
import JobSubmissionConfirmation from "./components/Jobs/JobSubmissionConfirmation.jsx";
import ClientDashboard from "./components/Dashboard/clientDashboard.jsx";
import AdminDashboard from "./components/Dashboard/adminDashboard.jsx";
import OAuthButton from "./components/Auth/OAuthButton.jsx";
import OAuthCallback from "./components/Auth/oAuthCallback.jsx";

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
                    <Route path="/admin/jobs/*" element={<JobDetail userType="admin"/>}/>
                    <Route path="/job-submission-confirmation" element={<JobSubmissionConfirmation/>} />
                    <Route path="/client-dashboard" element={<ClientDashboard/>} />
                    <Route path="/jobs/*" element={<JobDetail userType="client" />} />
                    <Route path="/jobs/create" element={<CreateJob/>}/>
                    <Route path="/admin-dashboard" element={<AdminDashboard/>} />
                </Routes>
            </div>
        </Router>
    )
};

export default App;