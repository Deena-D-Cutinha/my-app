import React from "react";
import ReactModal from "react-modal";
import ClipLoader from "react-spinners/ClipLoader";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "0px",
  },
};

export default class TestLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modelLoading: props.isLoading,
    };
  }

  render() {
    return (
      <div>
        <ReactModal
          isOpen={this.state.modelLoading}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <ClipLoader
            css={"App-fadeloader"}
            sizeUnit={"px"}
            size={50}
            color={"#123abc"}
            loading={true}
          />
        </ReactModal>
      </div>
    );
  }
}
ReactModal.setAppElement("#root");
