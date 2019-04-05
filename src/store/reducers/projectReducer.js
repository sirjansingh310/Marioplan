const initState = {
    projects: [
        {id: '1',title: 'React project',content: 'blah blah blah'},
        {id: '2',title: 'Java project',content: 'blah blah blah'},
        {id: '3',title: 'Vue project',content: 'blah blah blah'}
    ]
}

const projectReducer = (store = initState, action) => {
   switch(action.type){
       case 'CREATE_PROJECT':
       console.log('projected created successfully');
       return store;
       case 'CREATE_PROJECT_ERROR':
       console.log('error creating a project',action.projectError);
       return store;
       default:
       return store;
   }
}

export default projectReducer;