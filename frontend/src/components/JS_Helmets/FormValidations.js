import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

export class FormValidations extends Component {
    render() {
        return (
            <>
                <Helmet>

                    {/* Date Validation for 18+ */} 
                    <script>

                        var today = new Date();
                        var dd = String(today.getDate()).padStart(2, '0');

                        var mm = String(today.getMonth() + 1).padStart(2, '0');
                        var yyyy = today.getFullYear();

                        yyyy= (parseInt(yyyy)-18).toString();
                        today = yyyy  + '-' + mm + "-" + dd;
                        document.getElementById('dob').max=today;

                    </script>

                </Helmet>
            </>
        )
    }
}

export default FormValidations
