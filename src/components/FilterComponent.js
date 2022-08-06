import { useState } from "react";

import { Button, Card, Checkbox, Divider, Drawer } from "@mui/material";
import { AiOutlineSearch, AiTwotoneFilter } from "react-icons/ai";
import { FaFilter } from "react-icons/fa";
import { ImLocation } from "react-icons/im";

export function MobileFilterComponent({ onSubmit }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <form className='mobile_form' onSubmit={onSubmit}>
        <Card className='filter_mobile'>
          <div>
            <input
              type='text'
              autoComplete='off'
              required
              className='filter_titleinput'
              name='filter_title'
              placeholder='Filter by title, companies, expertise…'
            />
          </div>
          <div className='search_mobile'>
            <div className='icon_mobile'>
              {" "}
              <AiTwotoneFilter className='' onClick={() => setOpen(!open)} />
            </div>
            <button className='search_mobileicon' type='submit'>
              <AiOutlineSearch className='' />
            </button>
          </div>
        </Card>

        <Drawer
          className='drawer_mobile'
          anchor='top'
          open={open}
          onClose={() => {
            setOpen(false);
          }}>
          <div className='filter__mobileicon'>
            <ImLocation className='filter_icon' />
            <input
              type='text'
              autoComplete='off'
              className='filter_titleinput'
              name='filter_location'
              placeholder='Filter by location'
            />
          </div>
          <Divider
            className='divider'
            orientation='horizontal'
            light
            flexItem
          />
          <div className='checkbox_mobile'>
            <input
              type='checkbox'
              name='checkbox'
              className='filter_mobile_checkbox'
            />
            <h6 className=''>Full Time Only</h6>
          </div>
          <Button type='submit' className='search_mobile'>
            Search
          </Button>
        </Drawer>
      </form>
    </>
  );
}

export function DesktopFilterComponent({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <Card className='filter_section'>
        <div className='filter_wrapper'>
          <AiOutlineSearch className='filter_icon' />
          <input
            type='text'
            autoComplete='off'
            required
            className='filter_titleinput'
            name='filter_title'
            placeholder='Filter by title, companies, expertise…'
          />
          <Divider className='divider' orientation='vertical' light flexItem />
        </div>
        <div className='filter_wrapper'>
          <ImLocation className='filter_icon' />
          <input
            type='text'
            autoComplete='off'
            className='filter_titleinput'
            name='filter_location'
            placeholder='Filter by location'
          />
          <Divider className='divider' orientation='vertical' light flexItem />
        </div>
        <div className='filter_checkbox'>
          <input
            type='checkbox'
            name='filter_checkbox'
            className='filter_desktop_checkbox'
          />
          <h6 className='title_checkbox'>Full Time Only</h6>

          <button type='submit' className='search_btn'>
            Search
          </button>
        </div>
      </Card>
    </form>
  );
}
