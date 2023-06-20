// todos.js
import React from "react";
import { Card, ListItem, ListItemText, Checkbox } from '@material-ui/core';

class Todos extends React.Component {

  render() {
    return this.props.todos.map((todo) => (
      <Card style={{ marginTop: 10 }} key={todo.id}>
        <ListItem component="a" href="#simple-list">
          <Checkbox
            style={{ paddingLeft: 0 }}
            color="primary"
            onClick={() => this.props.deleteTodo(todo.id)}
          />
          <ListItemText primary={todo.content} secondary={todo.date} />
        </ListItem>
      </Card>
    ));
  }
}

export default Todos;
