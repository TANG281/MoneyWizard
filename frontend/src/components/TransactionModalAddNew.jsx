import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import DatePickerBox from './DatePickerBox';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from 'moment';


const TransactionModal = (props) => {

  const {
    isAddTransactionModalOpen,
    toggleAddNewModal,
    categories,
    accounts,
    transactionDate,
    pickTransactionDate
  } = props;

  // list of categories for the dropdown selection
  const categoryDropdown = categories.map((category) => {
    return (
      <option key={category.id}>{category.category_name}</option>
    );
  });

  // list of accounts for the dropdown selection
  const accountDropdown = accounts.map((account) => {
    return (
      <option key={account.id}>{account.account_name}</option>
    );
  });

  const handleClose = () => {
    toggleAddNewModal();
    pickTransactionDate(moment());
  };

  return (

    // Adjust styling for the modal. Move 130px to the right and center vertically
    <Modal style={{ marginLeft: "130px" }} show={isAddTransactionModalOpen} onHide={handleClose} size="md" centered >

      <Modal.Header className='d-flex justify-content-center'>
        <Modal.Title>ADD NEW</Modal.Title>
      </Modal.Header>

      <Modal.Body>

        {/* This modal has two tabs: Transaction and Transfer */}
        <Tabs defaultActiveKey="transaction" transition={false} className="mb-3" justify >

          {/* TRANSACTION TAB using grid layout */}
          <Tab eventKey="transaction" title="TRANSACTION">

            <Form>

              {/* 2 input fields in the same row for Category selection, Account selection */}
              <Row className='mb-3' >

                {/* Dropdown selection for Category */}
                <Form.Group xs={6} as={Col}>
                  <Form.Label >Category</Form.Label>
                  <Form.Select >
                    <option> </option>
                    {categoryDropdown}

                  </Form.Select>
                </Form.Group>

                {/* Dropdown selection for Account */}
                <Form.Group xs={6} as={Col}>
                  <Form.Label >Account</Form.Label>
                  <Form.Select >
                    <option> </option>
                    {accountDropdown}

                  </Form.Select>
                </Form.Group>

              </Row>

              {/* Input field for Amount */}
              <Row className="mb-3" >
                <Form.Group as={Col}>

                  <Form.Label >Amount</Form.Label>
                  <InputGroup>
                    <InputGroup.Text >$</InputGroup.Text>
                    <Form.Control />
                  </InputGroup>
                </Form.Group>
              </Row>

              {/* Input field for Date */}
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label >Date</Form.Label>
                  {/* Date picker box */}
                  <div>
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                      <DatePickerBox
                        transactionDate={transactionDate}
                        pickTransactionDate={pickTransactionDate}
                      />
                    </LocalizationProvider>
                  </div>
                </Form.Group>
              </Row>

              {/* Input field for Notes */}
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label >Notes</Form.Label>
                  <Form.Control as="textarea" />
                </Form.Group>
              </Row>

            </Form>

          </Tab>

          {/* TRANSFER TAB using grid layout */}
          <Tab eventKey="transfer" title="TRANSFER">

            <Row className="mb-3">

              <Form.Group xs={6} as={Col} >
                <Form.Label >From Account</Form.Label>
                <Form.Select >
                  <option> </option>
                  {accountDropdown}

                </Form.Select>
              </Form.Group>

              <Form.Group xs={6} as={Col} >
                <Form.Label >To Account</Form.Label>
                <Form.Select >
                  <option> </option>
                  {accountDropdown}

                </Form.Select>
              </Form.Group>

            </Row>

            {/* Input field for Amount */}
            <Row className="mb-3">
              <Form.Group as={Col}>

                <Form.Label >Amount</Form.Label>
                <InputGroup>
                  <InputGroup.Text >$</InputGroup.Text>
                  <Form.Control />
                </InputGroup>
              </Form.Group>
            </Row>

            {/* Input field for Date */}
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label >Date</Form.Label>
                {/* Date picker box */}
                <div>
                  <LocalizationProvider dateAdapter={AdapterMoment}>
                    <DatePickerBox
                      transactionDate={transactionDate}
                      pickTransactionDate={pickTransactionDate}
                    />
                  </LocalizationProvider>
                </div>
              </Form.Group>
            </Row>

            {/* Input field for Notes */}
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label >Notes</Form.Label>
                <Form.Control as="textarea" />
              </Form.Group>
            </Row>

          </Tab>

        </Tabs>
      </Modal.Body>

      <Modal.Footer className='d-flex justify-content-center'>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="success" onClick={toggleAddNewModal}>
          Save
        </Button>
      </Modal.Footer>

    </Modal>
  );

};

export default TransactionModal;