import React, {useState, useEffect} from 'react';
import {isWeekday} from '../utils/isWeekday';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import '../../../scss/booking/blocks/datepicker.scss';
import { formatSelectedTime } from '../utils/formatSelectedTime';

const StageTime = ({onTimeChoose}) => {
  const _now = new Date();

  const nowWithExtraHour = _now.setHours(_now.getHours() + 1, 0);
  const [selectedTime, setSelectedTime] = useState(nowWithExtraHour);

  useEffect(() => {
    onTimeChoose(formatSelectedTime(selectedTime));
  }, []);

  const onChange = (date) => {
    setSelectedTime(date);

    try {
      onTimeChoose(formatSelectedTime(date));
    } catch (err) {}
  }

  return (
    <div>
      <h2>Choose time:</h2>

      <DatePicker
        selected={selectedTime}
        onChange={(date) => onChange(date)}
        showTimeSelect
        placeholderText="Please, choose your time"
        dateFormat="dd.MM.yyyy HH:mm"
        timeFormat="HH:mm"
        timeIntervals={15}
        minDate={_now}
        minTime={_now.setHours(7, 59)}
        maxTime={_now.setHours(18, 59)}
        filterDate={isWeekday}
        className="datepicker"
        calendarClassName="datepicker__calendar"
      />
    </div>
  );
}

export default StageTime;