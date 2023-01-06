import React, { useState } from 'react';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';
import "../../App.css";

const LocalizedModal = () => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const hideModal = () => {
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        OK
      </Button>
      <Modal
        title="DialogBox"
        open={open}
        onOk={hideModal}
        onCancel={hideModal}
        okText="OK"
        cancelText="Cancel"
      >
        <p>Statement1 ...</p>
        <p>Statement2 ...</p>
        <p>Statement3 ...</p>
      </Modal>
    </>
  );
};
const confirm = () => {
  Modal.confirm({
    title: 'Confirm',
    icon: <ExclamationCircleOutlined />,
    content: 'Statments ...',
    okText: 'OK',
    cancelText: 'CANCEL',
  });
};
const Dialog = () => (
  <Space>
    <LocalizedModal />
    <Button onClick={confirm}>Confirm</Button>
  </Space>
);
export default Dialog;