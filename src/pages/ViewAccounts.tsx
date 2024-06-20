import '../styles//pages/ViewAccounts.css';

const ViewAccounts = () => {
  const accounts = [
    { name: 'Supermarket', category: 'Necessity', amount: 100, date: '06/01/2024' },
    { name: 'Internet', category: 'House Bills', amount: 50, date: '06/02/2024' },
  ];

  return (
    <div className="ViewAccounts p-3">
      <h1>Recent Accounts</h1>
      <div className="table-responsive-sm">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((account, index) => (
              <tr key={index}>
                <td>{account.name}</td>
                <td>{account.category}</td>
                <td>{account.amount}</td>
                <td>{account.date}</td>
                <td>
                  <div className='d-flex justify-content-center'>
                    <button className="btn btn-warning btn-sm mx-1">Edit</button>
                    <button className="btn btn-danger btn-sm mx-1">Remove</button>
                  </div>


                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default ViewAccounts;
