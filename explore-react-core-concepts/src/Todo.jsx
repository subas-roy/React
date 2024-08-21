// export default function Todo({task, isDone}) {
//   return (
//     <li>Task: {task}</li>
//   )
// }


// Conditional rendaring option 1
// export default function Todo({task, isDone}) {
//   if(isDone) {
//     return <li>Finished: {task}</li>
//   }
//   else {
//     return <li>Working on: {task}</li>
//   }
// }


// Conditional rendaring option 2
export default function Todo({task, isDone}) {
  if(isDone) {
    return <li>Finished: {task}</li>
  }
  return <li>Working on: {task}</li>
}