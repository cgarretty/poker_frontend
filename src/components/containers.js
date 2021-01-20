import { connect } from "react-redux";
import Chatbox from "./Chatbox";
import { addMessage } from "../store/actions";

const mapStateToProps = state => ({
  chat: state.chat
});

const mapDispatchToProps = dispatch => ({
  onAddMessage: (message) => dispatch(addMessage(message)),
});

export const Chatter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chatbox);
