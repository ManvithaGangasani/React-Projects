import React, { useState } from "react";

function Factorial() {
    const [num, setNum] = useState("");
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const updateNumValue = (e) => {
        setNum(e.target.value);
        setError(null);
        setResult(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (num.trim() === "") {
            setError("Please enter a number.");
            return;
        }

        const n = Number(num);

        if (isNaN(n) || !Number.isInteger(n) || n < 0 || Object.is(n, -0)) {
            setError("Please enter a valid non-negative whole number.");
            return;
        }

        let fact = 1;
        for (let i = 2; i <= n; i++) {
            fact *= i;
        }

        setResult(fact);
        setError(null);
    }; 

    return (
        <div style={{ maxWidth: "400px", margin: "20px auto", textAlign: "center" }}>
            <h2>Factorial Calculator</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter a number"
                    value={num}
                    onChange={updateNumValue}
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
                    Factorial of {num} is: <strong>{result}</strong>
                </p>
            )}
        </div>
    );
}

export default Factorial;


