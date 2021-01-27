import React from 'react'
import { findDOMNode } from 'react-dom'
import { connect } from 'react-redux'

import List from 'material-ui/lib/lists/list'
import ListItem from 'material-ui/lib/lists/list-item'
import Paper from 'material-ui/lib/paper'
import Divider from 'material-ui/lib/divider'

function mapStateToProps(state) {
    return {
        history: state.chat
    }
}

class Chat extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillUpdate() {
        let el = this.refs.history

        this.shouldScrollBottom = el.scrollTop + el.offsetHeight === el.scrollHeight
    }

    componentDidUpdate() {
        if (this.shouldScrollBottom) {
            let el = this.refs.history

            el.scrollTop = el.scrollHeight
        }
    }

  render() {
    console.log(this.props.history);
    return (
      <List subheader="Chat Log">
        <Paper zDepth={1}>
          <div ref="history" className="history">
            {this.props.history.map((message, i) =>
              <div key={i} className="message">
                <ListItem
                  // primaryText={message.from}
                  secondaryText={<p>{message}</p>}
                />
                <Divider inset={false} />
              </div>
            )}
          </div>
        </Paper>
      </List>
    )
  }
}

export default connect(mapStateToProps)(Chat)
