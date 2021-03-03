import React, { useRef } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import '../../../scss/booking/blocks/datepicker.scss';
import { formatSelectedTime } from '../../utils/formatSelectedTime';
import { isWeekday } from '../../booking/utils/isWeekday';

const SpecificDatePicker = () => {
  const datePickerRef = useRef(null);
  const urlParams = new URLSearchParams(window.location.search);
  const selectedDate = urlParams.get('date') ? new Date(urlParams.get('date')) : new Date();

  const onChange = (date) => {
    const dateFormatted = formatSelectedTime(date, 'Y-MM-dd');
    let path = window.location.href.split('?')[0];
    path += '?time=specific-date&date=' + dateFormatted;

    window.location.href = path;
  }

  const onBtnClick = () => {
    datePickerRef.current.setOpen(true);
  }

  return (
    <>
      <button onClick={onBtnClick} className="btn btn-outline-primary">
        Specific date
      </button>

      <DatePicker
        selected={selectedDate}
        ref={datePickerRef}
        onChange={(date) => onChange(date)}
        dateFormat="dd.MM.yyyy"
        filterDate={isWeekday}
        className="datepicker datepicker-admin"
        calendarClassName="datepicker__calendar datepicker-admin__calendar"
      />
    </>
  );
}

export default SpecificDatePicker;