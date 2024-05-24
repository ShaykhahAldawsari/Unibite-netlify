import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

const SignUp = () => {
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState("");

  const handleSignIn = async () => {
    if (
      fullName === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      return alert("All details are required");
    }

    if (password.length < 8) {
      return alert("Password must be at least 8 characters long");
    }

    if (password !== confirmPassword) {
      return alert("Password and confirmed password should match");
    }

    setLoading(true);
    const response = await signUp({
      fullName: fullName,
      email: email,
      password: password,
    });
    setLoading(false);
    if (response) {
      alert(response);
    }
    if (response == "success") {
      navigate("/login");
    }
  };

  return (
    <div className="body">
      <div className="receipt">
        <h3 style={{ marginBottom: "40px" }}>Create An Account</h3>
        <div style={{ marginBottom: "10px" }}>
          {loading ? (
            <>Loading...</>
          ) : (
            <div>
              <p>
                Already have an account?
                <span
                  onClick={() => navigate("/login")}
                  style={{
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Log In
                </span>
              </p>

              <form action="#">
                <h4 className="orders">
                  <pre>Enter your full name:</pre>
                  <input
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    type="text"
                    style={{
                      boxShadow: "1px 1px 6px 3px #f5f9fd",
                      borderColor: "rgb(198, 195, 195)",
                      borderRadius: "15px",
                      height: "33px",
                      width: "310px",
                    }}
                  />
                </h4>
                <h4 className="orders">
                  <pre>Enter your email address:</pre>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    style={{
                      boxShadow: "1px 1px 6px 3px #f5f9fd",
                      borderColor: "rgb(198, 195, 195)",
                      borderRadius: "15px",
                      height: "33px",
                      width: "310px",
                    }}
                  />
                </h4>

                <h4 className="orders">
                  <pre>Enter your password:</pre>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    style={{
                      borderColor: "rgb(198, 195, 195)",
                      borderRadius: "15px",
                      height: "33px",
                      width: "310px",
                    }}
                  />
                </h4>
                <h4 className="orders">
                  <pre>Confirm your password:</pre>
                  <input
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                    type="password"
                    style={{
                      borderColor: "rgb(198, 195, 195)",
                      borderRadius: "15px",
                      height: "33px",
                      width: "310px",
                    }}
                  />
                </h4>

                <div>
                  <div>
                    <input
                      onClick={handleSignIn}
                      type="button"
                      className="btn btn-info"
                      value="Sign Up"
                      style={{ marginLeft: "150px", marginTop: "5px" }}
                    />
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
