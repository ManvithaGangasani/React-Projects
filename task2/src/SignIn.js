import React from "react";

function SignIn() {
    return (<div>
        <h3 align="center">Signin Form</h3>
        <form action="https//www.example.com" method="post">
            <table align="center" border="1px" cellpadding="10px">
                <tr>
                    <td> <label for="id1">User ID:</label></td>
                    <td><input type="text" id="id1" name="name1" required /></td>
                </tr>
                <tr>
                    <td><label for="id2">Password:</label></td>
                    <td><input type="password" id="id2" name="password1" required /> </td>
                </tr>
                <tr>
                    <td colspan="2" align="center"><input type="submit" value="Signin" /></td>
                </tr>
            </table>
        </form>

    </div>)
}
export default SignIn;