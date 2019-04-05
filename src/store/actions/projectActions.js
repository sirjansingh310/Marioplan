export const createProject = (project) => {
    return (dispatch,getState,{getFirebase,getFirestore}) => {
        // async call to database. We previously handeled this using 
        // componentWillMount method inside root app component, then dispatch a method 
        // from root to update the initstore (check poketimes project)

        // now we can write the async call to db here, thunk pauses the dispatch
        // and resumes it once the async call is completed.
         const firestore = getFirestore();
         const profile = getState().firebase.profile
         const authorId = getState().firebase.auth.uid
         firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
         })
         .then(() => {
            dispatch({type: 'CREATE_PROJECT',project: project})
         })
         .catch((err) => {
            dispatch({type: 'CREATE_PROJECT_ERROR',projectError: err})
         })
    }
}