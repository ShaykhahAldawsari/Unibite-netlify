import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import { useAuthContext } from "../../contexts/authContext";

const Login = () => {
  const { login } = useAuth();
  const { addUser } = useAuthContext();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");

  const handleLogin = async () => {
    if (email === "" || password === "") {
      return alert("all details are required");
    }

    setLoading(true);

    const response = await login({
      email: email,
      password: password,
    });

    if (response.message === "success") {
      alert("Logged in sucessfully");
      addUser(response.user);
      return;
    }

    alert(response.message);

    setLoading(false);
  };

  return (
    <div className="body">
      <div className="receipt">
        <h3 style={{ marginBottom: "40px" }}>Login</h3>
        <div style={{ marginBottom: "10px" }}>
          {loading ? (
            <>Loading...</>
          ) : (
            <div>
              <p>
                Don't have an account?
                <span
                  onClick={() => {
                    navigate("/sign-up");
                  }}
                  style={{
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Sign up
                </span>
              </p>

              <form action="#">
                <h4 className="orders">
                  <pre>Enter your email address:</pre>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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

                <div style={{}}>
                  <div>
                    <input
                      onClick={handleLogin}
                      type="button"
                      className="btn btn-info"
                      value="Login"
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

export default Login;
