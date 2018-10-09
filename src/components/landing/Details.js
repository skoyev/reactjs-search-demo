import React from 'react';

const Details = () => {
    return (
        <footer>
            <h2 className="display-4 text-center py-5 my-4">Project Features:</h2>

            <nav className="nav justify-content-center nav-pills flex-column flex-md-row">
                <a className="nav-link active" href="#departments" data-toggle="tab">Departments</a>                
            </nav>

            <div className="tab-content py-5">
                <div className="tab-pane active" id="departments">
                    <h3>Department Records. Department fields: 'Title'</h3>
                    <ul>
                        <li>Fetch All Existing Department Records</li>
                        <li>Search Department Record By Title(Filtering Records)</li>
                        <li>Create New Department Record By Clicking On 'New' Button</li>
                        <li>Modify Existing Department Record By Choosing First - The Department Record/Row And Then Clicking On 'Edit' Button</li>
                        <li>Delete Department Record By Choosing Row With Department Record And Clickig On The 'Delete' Button.</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Details;
