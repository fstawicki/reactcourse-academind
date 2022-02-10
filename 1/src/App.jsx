import React, { useState } from "react";
import Modal from "./Modal";

function App() {

  const [modalVisible,setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  }

  const hideModal = (closed) => {
    setModalVisible(closed);
  }


  return (
    <div className="App">
      <button className="btn" onClick={showModal}>SHOW MODAL</button>
      <Modal setHideModal={hideModal} visible={modalVisible}>
        ModalModalModal
      </Modal>
    </div>
  );
}

export default App;
