import React from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

dayjs.extend(utc);
dayjs.extend(timezone);

const sriLankaDate = dayjs().tz("Asia/Colombo");

export default function DateCalendarViews() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          defaultValue={sriLankaDate}
          views={['year', 'month', 'day']}
        />
    </LocalizationProvider>
  );
}
