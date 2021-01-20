import React from "react";
import {Container, Paper, TextField} from '@material-ui/core';
import '../stylesheets/Chatbox.css';

const Message = ({message={}}) => {
  return (
    <Paper className="Message" elevation={3}>
      <p>{message.message}</p>
    </Paper>
  )
}
const MessageLog = ({messages=[]}) =>
  <div className="Message-log">
    {
      messages.map((message, i) =>
        <Message key={i} message={message}/>
      )
    }
  </div>

const MessageBox = ({onAddMessage=f=>f}) => {
  let _message;

  const onSubmit = e => {
      e.preventDefault();
      onAddMessage(_message.value);
      document.getElementById("message-box").reset();
  }

  return (
    <form id="message-box" noValidate autoComplete="off" onSubmit={onSubmit}>
      <TextField
        className="Message-box"
        inputRef={input => _message = input}
        label="Say Something"
        variant="outlined"
        defaultValue=""
      />
    </form>
  )
}

const Chatbox = ({ chat={}, onAddMessage=f=>f }) =>
  <Container className="Chat">
    <MessageLog messages={chat.messages}/>
    <MessageBox onAddMessage={onAddMessage}/>
  </Container>

export default Chatbox;
