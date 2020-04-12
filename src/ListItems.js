import React from "react";
import "./ListItems.css";
import TrashIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import FlipMove from "react-flip-move";

const ListItems = (props) => {
  const items = props.items;
  const listitems = items.map((item) => {
    return (
      <div className="list" key={item.key}>
        <p>
          <input
            type="text"
            id={item.key}
            value={item.text}
            onChange={(e) => {
              props.setUpdate(e.target.value, item.key);
            }}
          />
          <span>
            <IconButton onClick={() => props.deleteItems(item.key)}>
              <TrashIcon />
            </IconButton>
          </span>
        </p>
      </div>
    );
  });
  return (
    <div>
      <FlipMove duration={300} easing="ease-in-out">
        {listitems}
      </FlipMove>
    </div>
  );
};

export default ListItems;
