import React from 'react'
import Grid from '@material-ui/core/Grid'
import { getAllUsers } from '../../lib/users'
import UserCard from '../../components/card'

const Users = ({allUsers}) => {
  return (
    <Grid container spacing={5} justify="space-evenly">
      {
        console.log("allUsers"),
        console.log(allUsers),
        allUsers.map(({_id, heading, subheading, url}) => (
        <Grid item xs={6} lg={2} md={4} key={_id}>
          <UserCard {...{name: heading, subheading, _id, image: url}}/>
        </Grid>
      ))
      }
    </Grid>
  )
}

export const getStaticProps = async () => {
  const allUsers = await getAllUsers()
  return {
    props: {
      allUsers
    }
  }
}

export default Users