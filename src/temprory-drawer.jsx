import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import Edit from './icons/edit';
import DeleteCalendar from './icons/delete-calendar';
import Lift from './icons/lift';
import Person from './icons/person';
import Clock from './icons/clock';
import Participants from './icons/participants';
import Whatsapp from './icons/whatsapp';
import Trash from './icons/trash';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

const TemporaryDrawer = (props) => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [select_input, setSelectInput] = React.useState([]);
  const [praticipants, setParticipants] = React.useState([])

  const toggleDrawer = (anchor, open) =>
    (event) => {
      if (event.currentTarget !== event.target || (event.type === 'keydown' && ((event).key === 'Tab') || (event).key === 'Shift')) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };
  const details = props?.details?.details;

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const handleChange = (event) => {
    console.log(event)
    setSelectInput(event.target.value);
  };

  const addToList = () => {
    setParticipants((previous) => [...previous, {name: select_input, checked: false}]);
  }

  const deleteUser = (user) => {
    setParticipants((previous) => previous.filter((item) => item.name !== user.name));
  }

  const toggleCheck = (user) => {
    const updated = praticipants.reduce((acc, value) => {
      if(value?.name === user?.name) {
        value.checked = !value.checked;
      }
      return [...acc, value];
    }, []);

    setParticipants(updated);
  }
  
  React.useEffect(() => {
    setParticipants(details?.participants);
  }, []);

  const list = (anchor) => (
    <>
      <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 428 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
      >
        <List>
          <ListItem>
            <span className="drawer_header">
              <span className="drawer_inner_header">
                <Edit />
              </span>
              Edit
            </span>
            <span className="drawer_header" style={{ color: 'red' }}>
              <span className="drawer_inner_header">
                <DeleteCalendar />
              </span>
              Cancel Class
            </span>
          </ListItem>
          <ListItem>
            <span className='title_container'>
              <Lift class={'lift_icon'} />
              <h5 className="title">{props.details.title}</h5>
            </span>
          </ListItem>
          <Divider />
          <div className="basic_info">
            <Person class="description_icons" />
            <Clock class="description_icons" />
            <Participants class="description_icons" />
            <span class="description_icons">
              {details?.instructor?.name}
            </span>
            <span class="description_icons">
              {details?.startTime}
            </span>
            <span class="description_icons">
              {details?.participants?.length}/15
            </span>
            <span>
              {details?.instructor?.job}
            </span>
            <span>
              Start Time
            </span>
            <span>
              Participants
            </span>
          </div>
          <Divider />
          <div className="description">
            <h5>{details?.notes?.title}</h5>
            <span>
              {details?.notes?.text}
            </span>
          </div>
          <Divider />
          <div>
            <div className='select_container'>
              <span>
                Participants:
              </span>
              <Select
                className='select'
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                value={select_input}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
                sx={{
                  width: 200,
                  height: 50,
                }}
              >
                {details.potential?.map((name, id) => (
                  <MenuItem
                    value={name}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
              <Button onClick={() => addToList()}>+</Button>
            </div>
            <div>
              {
                praticipants?.map(((user, key) => {
                  return (
                    <span key={key} className="participates_container">
                      <span>
                        <img src="img/generic_avatar.png" alt="" width="20px" />
                      </span>
                      <span>
                        {user.name}
                      </span>
                      <span className={user.checked ? 'checked' : 'checkin'} onClick={() => toggleCheck(user) }> 
                        {user.checked ? 'checked' : 'check in'}
                      </span>
                      <span>
                        <Whatsapp />
                        <Trash callback={deleteUser} user={user} />
                      </span>
                    </span>
                  )
                }))
              }
            </div>
          </div>
        </List>
      </Box>
    </>
  );

  return (
    <div>
      {(['right']).map((anchor) => (
        <React.Fragment key={anchor}>
          <img src="img/Dashboard.png" alt="" className="main_image" onClick={toggleDrawer(anchor, true)} />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default TemporaryDrawer;