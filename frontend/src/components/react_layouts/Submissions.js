import React from 'react';

function Submissions({tableData, deleteBtn}) {
    return (
        <>
            <div>
                <br/>
                <h2 className="text-center">Submissions currently present in Database</h2>
                <h6 className="text-center" style={{fontSize:"calc(8px + 0.9vw)"}}>(Kindly check your Inbox for recieved confirmation e-mails)</h6>
                <br/>
                <div className="table-wrapper text-center" style={{margin:"1.5vw", minHeight:"15em"}}>
                    <table className="table table-bordered table-hover table-sm table-responsive-sm">
                        <thead className="thead-dark" style={{height:"3.5em"}}>
                            <tr>
                                <th className="align-middle">S. No.</th>
                                <th className="align-middle">Name</th>
                                <th className="align-middle">Email</th>
                                <th className="align-middle">Gender</th>
                                <th className="align-middle">Feedback</th>
                                <th className="align-middle">D.O.B</th>
                                <th className="align-middle">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData?.map ((form, i) =>(
                                <tr key={form.id}>
                                    <td className="align-middle">{i+1}</td>
                                    <td className="align-middle">{form.name}</td>
                                    <td className="align-middle">{form.email}</td>
                                    <td className="align-middle">{form.gender}</td>
                                    <td className="align-middle">{form.feedback_text}</td>
                                    <td className="align-middle">{form.dob}</td>
                                    <td className="align-middle">
                                        <button onClick={deleteBtn.bind(this, form.id)} className="btn btn-danger btn-sm" href="#">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Submissions;