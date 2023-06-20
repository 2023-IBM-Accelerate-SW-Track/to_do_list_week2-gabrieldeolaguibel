import React from 'react';
import { Grid, Card, ListItemButton, ListItemText, Checkbox } from '@material-ui/core';

const Todos = ({todos, deleteTodo}) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <Grid key={todo.id}>
          <Card style={{ marginTop: 10 }}>
            <ListItemButton component="a" href="#simple-list">
              <Checkbox
                color="primary"
                style={{ paddingLeft: 0 }}
                onClick={() => deleteTodo(todo.id)}
              />
              <ListItemText primary={todo.content} secondary={todo.date} />
            </ListItemButton>
          </Card>
        </Grid>
      )
    })
  ) : (
    <p>You have no todos left!</p>
  )
  
  return (
    <div>
      {todoList}
    </div>
  );
}

export default Todos;
