import React, { useState } from "react";

function Interest() {
    const [p, setP] = useState("");
    const [t, setT] = useState("");
    const [r, setR] = useState("");
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const updateInputValue = (e) => {
        const { name, value } = e.target;

        if (name === "p") setP(value);
        else if (name === "t") setT(value);
        else if (name === "r") setR(value);

        setError(null);
        setResult(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const principal = parseFloat(p);
        const time = parseFloat(t);
        const rate = parseFloat(r);

        if (
            isNaN(principal) || isNaN(time) || isNaN(rate) ||
            Object.is(principal, -0) || Object.is(time, -0) || Object.is(rate, -0) ||
            principal === 0 || time === 0 || rate === 0
        ) {
            setError("Please enter valid numbers.");
            return;
        }

        const interest = (principal * time * rate) / 100;
        setResult(interest.toFixed(2));
    };

    return (
        <div style={{ maxWidth: "400px", margin: "20px auto", textAlign: "center" }}>
            <h2>Simple Interest Calculator</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="p"
                    placeholder="Enter principal amount"
                    value={p}
                    onChange={updateInputValue}
                    style={{ padding: "8px", width: "80%", marginBottom: "10px" }}
                />
                <br />

                <input
                    type="text"
                    name="t"
                    placeholder="Enter time period"
                    value={t}
                    onChange={updateInputValue}
                    style={{ padding: "8px", width: "80%", marginBottom: "10px" }}
                />
                <br />

                <input
                    type="text"
                    name="r"
                    placeholder="Enter rate of interest"
                    value={r}
                    onChange={updateInputValue}
                    style={{ padding: "8px", width: "80%", marginBottom: "10px" }}
                />
                <br />

                <input
                    type="submit"
                    value="Calculate"
                    style={{ padding: "8px 16px", cursor: "pointer" }}
                />
            </form>

            {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
            {result && (
                <p style={{ marginTop: "10px" }}>
                    Simple Interest is: <strong>{result}</strong>
                </p>
            )}
        </div>
    );
}

export default Interest;


