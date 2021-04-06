import React, { Fragment } from 'react'
import Link from 'next/link'
import Grid from '@material-ui/core/Grid'
import styles from '../styles/Home.module.css'
import { Button, Typography } from '@material-ui/core'
import { getStaticProps } from './users'

export default function Home() {
  return (
    <Fragment>
      <Grid container alignItems={'center'}>
 
        <Grid container spacing={6} item xs={6} sm={6} direction={'column'} alignItems={'center'}>
        
          <Grid item>
            <Button color="primary" variant="contained">
              <Link href="/users">
                <a>Show All Users List</a>
                
              </Link>
            </Button>
            {/* <Button color="primary" variant="outlined">
              <Link href="/posts">
                <a>Start Exploring</a>
              </Link>
            </Button> */}
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  )
}

// export function async getStaticProps(){

// }
