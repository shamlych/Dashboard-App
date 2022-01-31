import React from 'react';
import "./Payments.css";
import { DataGrid } from '@mui/x-data-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmazonPay, faApplePay, faPaypal, faCcMastercard } from '@fortawesome/free-brands-svg-icons';

function Payments() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'Status', headerName: 'Status', width: 130 }, 
    { field: 'Amount', headerName: 'Amount', width: 130 },
    {
      field: 'Date',
      headerName: 'Date',
      width: 130,
    },
    {
      field: 'Description',
      headerName: 'Description',
      description: 'This column has a value getter and is not sortable.',
      width: 400,
    },
    {
        field: 'Details',
        headerName: '',
        width: 90,
        renderCell: () => {
            return (
              <button
                className="button-details"
              >
                Details
              </button>
            );
        }
    },
  ];
  
  const rows = [
    { id: 1, Status: 'Processed', Amount: '$122.2', Date: '01 Apr 2019', Description: 'Payment via Mastercard' },
    { id: 2, Status: 'Cancelled', Amount: '$31.2', Date: '01 Jan 2019', Description: 'Payment via Paypaal' },
    { id: 3, Status: 'Onhold', Amount: '$49.23', Date: '01 Apr 2019', Description: 'Payment via AmazonPay' },
    { id: 4, Status: 'Processed', Amount: '$49.23', Date: '05 Sept 2019', Description: 'Payment via Mastecard'  },
    { id: 5, Status: 'Onhold', Amount: '$49.23', Date: '01 Apr 2019', Description: 'Payment via Paypaal' },
    { id: 6, Status: 'Cancelled', Amount: '$49.23', Date: '01 Feb 2019', Description: 'Payment via Paytm' },
    { id: 7, Status: 'Onhold', Amount: '$69.23', Date: '01 Apr 2019', Description: 'Payment via Paypaal'  },
  ];
  return (
  <div className="payment">
    <h3>Payments History</h3>
    <span>Make a Payment</span>
    <div className="AlignBrands">
        <FontAwesomeIcon className="paypaal" icon={faPaypal}/>
        <FontAwesomeIcon className="mastercard" icon={faCcMastercard}/>
        <FontAwesomeIcon className="amazonpay" icon={faAmazonPay}/>
        <FontAwesomeIcon className="applepay" icon={faApplePay}/>
    </div>
    <div style={{ height: 300, width: '100%' }}>
     <DataGrid
        rows={rows}
        columns={columns}
        pageSize={3}
        rowsPerPageOptions={[3]}
      />
      </div>
  </div>
  );
}

export default Payments;
