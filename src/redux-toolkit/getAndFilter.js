import { createSlice } from '@reduxjs/toolkit'
import info from '../info.json';

const initialState = {
  jobs: [],
  jobsAux:[],
}

export const getAndFilter = createSlice({
    name: 'jobs',
    initialState,
    reducers:{
        getAllJobs: (state)=>{
            state.jobs = info.jobs
            state.jobsAux = info.jobs
        },
        filterJobs: (state)=>{
            state.jobs = state.jobs.filter( e => e.id === 1)
        }
    }
})

export const { getAllJobs, filterJobs } = getAndFilter.actions
export default getAndFilter.reducer