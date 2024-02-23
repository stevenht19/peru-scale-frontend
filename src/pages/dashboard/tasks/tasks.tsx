import { DatePicker } from 'antd';
import { TaskCard } from 'components/dashboard/tasks/task-card'
import { useAssignedRequests } from 'hooks/use-assigned-requests'
import { Outlet } from 'react-router-dom'
import { useState } from 'react';
// import dayjs from 'dayjs';
import  'dayjs/locale/es';
import dayjs, { Dayjs } from 'dayjs';
import { RangeValue } from 'rc-picker/lib/interface';


dayjs.locale('es');

export const MyTasks = () => {
  const { requests } = useAssignedRequests();
  const [dateRange, setDateRange] = useState<[dayjs.Dayjs, dayjs.Dayjs] | null>(null);

  // const handleDateRangeChange = (dates: [dayjs.Dayjs, dayjs.Dayjs] | null, dateStrings: [string, string]) => {
  //   setDateRange(dates);
  // };
  const handleDateRangeChange = (dates: RangeValue<Dayjs>) => {
    if (dates === null) {
      // Manejar el caso en que no se ha seleccionado un rango de fechas
      setDateRange(null);
    } else {
      const [start, end] = dates as [Dayjs, Dayjs];
      setDateRange([start, end]);
    }
  };
  
  

  const filteredRequests = requests.filter((req) => {
    if (!dateRange) {
      return true;
    }
    const requestDate = dayjs(req.fecha_registro);
    const isAfterStart = requestDate.isAfter(dateRange[0]) || requestDate.isSame(dateRange[0], 'day');
    const isBeforeEnd = requestDate.isBefore(dateRange[1]) || requestDate.isSame(dateRange[1], 'day');

    return isAfterStart && isBeforeEnd;
  });


  return (
    <section className='grid grid-cols-2'>
      <div className='p-7'>
        <div className='p-3'>
          <h2 className='text-2xl font-bold mb-3'>
            Mi Buzón
          </h2>
          <DatePicker.RangePicker
            placeholder={['Fecha inicio', 'Fecha Fin']}
            size='large'
            onChange={handleDateRangeChange}
          />
        </div>
        <div className='flex flex-col gap-2'>
          {filteredRequests?.map((req) => (
            <TaskCard key={req.id} {...req} />
          ))}
        </div>
      </div>
      <Outlet />

    </section>
  )
}




