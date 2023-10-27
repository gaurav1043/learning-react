1. Create a store (Single source of truth)
   by using function configureStore
   it will take reducers as key value pairs

2.Create a slice (which is basicaly Features)
to create a slice we will require its 1. Name 2. initialState 3. reducers

3.Export indivdual reducers as well as entire reducer slice

4. to send data to store use useDispatch()
   send reducer in it

5. Take values from store using useSelector()
