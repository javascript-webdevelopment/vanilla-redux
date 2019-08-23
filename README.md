# Redux

Redux is a tool that was created by Dan Abromav that we can use to help manage the `state` for our application. It introduces something known as `global` state and will allow any component that `subscribes` to the `store` to access it.

## React Dataflow

In React, data flows unidirectionally. This means that we can only pass data from a parent to a child component. This can become a hassle and pretty complex when we start dealing with vary large scaled applications.

Redux will introduce a `source of truth` and allow us to store our state in a single place that any of our components can `subcribe` to, to gain access to the stateful values directly instead of having to pass that data from component to component until it reaches it's destination.

![Redux VS No Redux](images/reduxflow.png)

Please keep in mind that Redux can quickly add some complexity. So it's best to use it sparingly and only when needed.