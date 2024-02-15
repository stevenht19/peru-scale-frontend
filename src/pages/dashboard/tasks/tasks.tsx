import { DatePicker } from 'antd'
import { TaskCard } from 'components/dashboard/tasks/task-card'
import { useAssignedRequests } from 'hooks/use-assigned-requests'
import { Outlet } from 'react-router-dom'

export const MyTasks = () => {
  const { requests } = useAssignedRequests()

  return (
    <section className='grid grid-cols-2'>
      <div className='p-7'>
        <div className='p-3'>
          <h2 className='text-2xl font-bold mb-3'>
            Mi Buzón
          </h2>
          <DatePicker.RangePicker placeholder={['Fecha inicio', 'Fecha Fin']} size='large' />
        </div>
        <div className='flex flex-col gap-2'>
          {requests.map((req) => (
            <TaskCard {...req} />
          ))}
        </div>
      </div>
      <Outlet />
    </section>
  )
}
