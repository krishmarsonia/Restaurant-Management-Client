import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { ThemeProvider } from "@emotion/react";
import InboxIcon from "@mui/icons-material/Inbox";
import { createTheme } from "@mui/material/styles";
import DraftsIcon from "@mui/icons-material/Drafts";
// import {makeStyles}  from "@mui/styles";

import ListItemButtons from "../listItemButton/listItemButton";
import SelectContext from "../../context/selectContext/selectContext";

import "./leftMenu.css";

const LeftMenu = () => {
  const context = React.useContext(SelectContext);
  //     const [selectedIndex, setSelectedIndex] = React.useState(1);
  console.log(context.selectedIndex);
  const theme = createTheme({
    palette: {
      primary: {
        main: "##030bff",
        background: "#66f70c",
      },
      background: {
        default: "#0c47f7",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        className="leftmenulistclass"
        sx={{ width: "100%", maxWidth: 360, bgcolor: "#9c9fff" }}
        color="primary"
        bgcolor="background"
      >
        <List
          component="nav"
          aria-label="main mailbox folders"
          className="leftmenulistclass"
        >
          <ListItemButtons
            classNames="leftmenulistclass"
            selectedVal={0}
            primaryName="Inbox"
            iconElements={<InboxIcon />}
          />
          <ListItemButtons
            classNames="leftmenulistclass"
            //leftmenulistclass -> color change on select
            selectedVal={1}
            primaryName="Default"
            iconElements={<DraftsIcon />}
          />
          
        </List>
        <Divider />
      </Box>
    </ThemeProvider>
  );
};

export default LeftMenu;
