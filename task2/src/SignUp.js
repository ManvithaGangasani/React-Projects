import React from "react";

function SignUp() {
    return (<div>
        <h3 align="center">Signup Form</h3>
        <form action="https://example.com/submit" method="post">
            <table align="center" border="1px" cellpadding="10px">
                <tr>
                    <td><label for="id1">User ID:</label></td>
                    <td><input type="text" id="id1" name="name1" required /></td>
                </tr>
                <tr>
                    <td><label for="id2">Password:</label></td>
                    <td><input type="password" id="id2" name="name2" required /></td>
                </tr>
                <tr>
                    <td><label for="address">Address:</label></td>
                    <td><textarea id="address" rows="3" cols="20" required></textarea></td>
                </tr>
                <tr>
                    <td><label for="phone">Phone:</label></td>
                    <td><input type="tel" id="phone" name="phone" required /></td>
                </tr>
                <tr>
                    <td><label for="orderDate">Date of Order:</label></td>
                    <td><input type="date" id="orderDate" name="orderDate" required /></td>
                </tr>
                <tr>

                    <td align="center" colspan="2"><input type="submit" value="Signup" required /></td>

                </tr>
            </table>
        </form>


    </div>)
}
export default SignUp;