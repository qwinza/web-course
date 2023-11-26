import { create } from 'zustand'
import zukeeper from 'zukeeper'

const useCourseStore = create(
  zukeeper(set => ({
    // for Profile
    users: {},
    fetchGetProfile: async () => {
      const response = await fetch('https://course-serv-api-service.onrender.com/api/v1/profile', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      set({ users: await response.json() })
    },

    logoutUser: () => set({ user: {} })
  }))
)

export default useCourseStore
