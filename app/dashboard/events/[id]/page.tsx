import { getEventById } from '@/utils/events'
import { getCurrentUser } from '@/utils/users'
import { redirect } from 'next/navigation'
import React from 'react'

const EventPage = async ({ params } : { params: { id: string } }) => {
  const user = await getCurrentUser()
  const event = await getEventById(user.id, params.id)

  if(!event) redirect('/dashboard/events')

  return (
    <div>{event.name}</div>
  )
}

export default EventPage